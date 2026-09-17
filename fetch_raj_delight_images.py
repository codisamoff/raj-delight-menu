from menu_data import MENU, Dish
import os
import re
import io
import json
import time
import zipfile
import requests

from dataclasses import dataclass
from typing import List, Optional
from PIL import Image, ImageOps


# ============================================================
# CONFIGURATION
# ============================================================

OUTPUT_DIR = "/home/sam/Documents/raj delights/images"

ZIP_NAME = os.path.join(
    OUTPUT_DIR,
    "raj-delight-remaining-images.zip"
)

SOURCES_FILENAME = "IMAGE-SOURCES.txt"
FAILED_FILENAME = "FAILED-IMAGES.txt"

TARGET_SIZE = (1200, 900)
JPEG_QUALITY = 82

MAX_RETRIES = 4
RETRY_BACKOFF_BASE = 2.0
REQUEST_TIMEOUT = 25

# Number of results examined from each source
COMMONS_RESULTS = 20
OPENVERSE_RESULTS = 20

# Minimum score required before accepting an image
MIN_MATCH_SCORE = 45

# Wikimedia Commons API
COMMONS_API_URL = "https://commons.wikimedia.org/w/api.php"

# Openverse API
OPENVERSE_API_URL = "https://api.openverse.org/v1/images/"

USER_AGENT = (
    "RajDelightMenuImageFetcher/1.0 "
    "(educational/restaurant-menu project)"
)


# ============================================================
# LICENSES WE WANT
# ============================================================

ALLOWED_LICENSES = {
    "cc0",
    "pdm",
    "by",
    "by-sa",
    "public domain",
    "public-domain",
    "cc by",
    "cc by-sa",
    "cc0 1.0",
}

BLOCKED_LICENSE_WORDS = {
    "nc",
    "noncommercial",
    "non-commercial",
    "nd",
    "no derivatives",
    "noderivatives",
}


# ============================================================
# STOPWORDS
# ============================================================

STOPWORDS = {
    "the",
    "a",
    "an",
    "and",
    "or",
    "with",
    "of",
    "in",
    "on",
    "for",
    "to",
    "from",

    # Generic food words
    "food",
    "dish",
    "dishs",
    "plate",
    "bowl",
    "meal",
    "recipe",
    "cuisine",
    "restaurant",
    "indian",

    # Generic appearance words
    "fresh",
    "delicious",
    "tasty",
    "hot",
    "cold",
    "served",
    "serving",

    # Generic photography words
    "photo",
    "photograph",
    "image",
    "picture",
    "closeup",
    "close",
    "view",
}


# ============================================================
# HELPERS
# ============================================================

def normalize_text(text: str) -> List[str]:
    if not text:
        return []

    text = text.lower()

    # Normalize common spellings
    replacements = {
        "65": "65",
        "&": "and",
        "-": " ",
        "_": " ",
        "/": " ",
    }

    for old, new in replacements.items():
        text = text.replace(old, new)

    text = re.sub(r"[^a-z0-9\s]", " ", text)

    tokens = text.split()

    return [
        token
        for token in tokens
        if len(token) >= 2 and token not in STOPWORDS
    ]


def extract_core_keywords(dish) -> set:
    """
    Core keywords come ONLY from the actual dish name.

    This is important because generic fallback words such as
    'plate', 'bowl', 'Indian', etc. should not cause wrong images
    to be accepted.
    """

    return set(normalize_text(dish.name))


def extract_support_keywords(dish) -> set:
    """
    Optional additional search keywords.
    """

    if getattr(dish, "extra_query", None):
        return set(normalize_text(dish.extra_query))

    return set()


def clean_query(text: str) -> str:
    text = text or ""

    text = text.replace("65", "65")
    text = text.replace("&", "and")
    text = text.replace("-", " ")

    return re.sub(r"\s+", " ", text).strip()


def build_queries(dish) -> List[str]:
    """
    Generate progressively broader searches.

    Exact dish name comes first.
    """

    name = clean_query(dish.name)

    queries = []

    # Exact dish
    queries.append(name)

    # Dish + food
    queries.append(f"{name} food")

    # Extra query if available
    if getattr(dish, "extra_query", None):
        queries.append(
            f"{name} {clean_query(dish.extra_query)}"
        )

    # Remove duplicates while preserving order
    result = []

    for q in queries:
        q = q.strip()

        if q and q.lower() not in {
            x.lower() for x in result
        }:
            result.append(q)

    return result


# ============================================================
# REQUEST WITH RETRIES
# ============================================================

def request_with_retries(
    url: str,
    params=None,
    headers=None
):
    for attempt in range(1, MAX_RETRIES + 1):

        try:
            response = requests.get(
                url,
                params=params,
                headers=headers,
                timeout=REQUEST_TIMEOUT,
            )

            if response.status_code == 200:
                return response

            if response.status_code in (429, 500, 502, 503, 504):

                wait_time = RETRY_BACKOFF_BASE ** (attempt - 1)

                print(
                    f"      HTTP {response.status_code}; "
                    f"retrying in {wait_time:.1f}s..."
                )

                time.sleep(wait_time)
                continue

            print(
                f"      HTTP error: {response.status_code}"
            )

            return None

        except requests.RequestException as exc:

            if attempt == MAX_RETRIES:
                print(
                    f"      Request failed: {exc}"
                )
                return None

            wait_time = RETRY_BACKOFF_BASE ** (attempt - 1)

            print(
                f"      Network error; "
                f"retrying in {wait_time:.1f}s..."
            )

            time.sleep(wait_time)

    return None


# ============================================================
# LICENSE CHECK
# ============================================================

def license_is_allowed(license_name: str) -> bool:

    if not license_name:
        return False

    license_text = license_name.lower().strip()

    # Explicitly reject restrictive licenses
    for blocked in BLOCKED_LICENSE_WORDS:
        if blocked in license_text:
            return False

    # Accept common open licenses
    for allowed in ALLOWED_LICENSES:
        if allowed in license_text:
            return True

    return False


# ============================================================
# IMAGE MATCH SCORING
# ============================================================

def score_candidate(
    title: str,
    description: str,
    tags: str,
    dish
) -> float:

    core_keywords = extract_core_keywords(dish)
    support_keywords = extract_support_keywords(dish)

    def safe_text(value):
        if isinstance(value, dict):
            return " ".join(
                str(v)
                for v in value.values()
                if v is not None
            )
        if isinstance(value, list):
            return " ".join(
                safe_text(v)
                for v in value
            )
        return str(value or "")

    searchable_text = " ".join([
        safe_text(title),
        safe_text(description),
        safe_text(tags),
    ])

    candidate_tokens = set(
        normalize_text(searchable_text)
    )

    if not core_keywords:
        return 0

    # Core dish words are much more important
    core_matches = core_keywords.intersection(
        candidate_tokens
    )

    support_matches = support_keywords.intersection(
        candidate_tokens
    )

    core_ratio = (
        len(core_matches) / len(core_keywords)
        if core_keywords
        else 0
    )

    support_ratio = (
        len(support_matches) / len(support_keywords)
        if support_keywords
        else 0
    )

    score = 0

    # Core dish matching
    score += core_ratio * 70

    # Support matching
    score += support_ratio * 15

    # Exact phrase bonus
    dish_phrase = " ".join(
        normalize_text(dish.name)
    )

    searchable_normalized = " ".join(
        normalize_text(searchable_text)
    )

    if dish_phrase and dish_phrase in searchable_normalized:
        score += 15

    return round(min(score, 100), 1)


# ============================================================
# WIKIMEDIA COMMONS SEARCH
# ============================================================

def search_wikimedia(query: str, dish) -> Optional[dict]:

    params = {
        "action": "query",
        "format": "json",
        "generator": "search",
        "gsrsearch": query,
        "gsrnamespace": 6,
        "gsrlimit": COMMONS_RESULTS,

        "prop": "imageinfo",

        "iiprop": (
            "url|size|mime|extmetadata"
        ),

        "iiurlwidth": TARGET_SIZE[0],

        "iiextmetadatamultilang": "false",
    }

    headers = {
        "User-Agent": USER_AGENT
    }

    response = request_with_retries(
        COMMONS_API_URL,
        params=params,
        headers=headers
    )

    if response is None:
        return None

    try:
        data = response.json()
    except json.JSONDecodeError:
        return None

    pages = (
        data
        .get("query", {})
        .get("pages", {})
    )

    candidates = []

    for page in pages.values():

        image_info_list = page.get(
            "imageinfo",
            []
        )

        if not image_info_list:
            continue

        info = image_info_list[0]

        mime = info.get("mime", "")

        if not mime.startswith("image/"):
            continue

        width = info.get("width", 0) or 0
        height = info.get("height", 0) or 0

        if width < 600 or height < 400:
            continue

        metadata = info.get(
            "extmetadata",
            {}
        )

        def meta_value(key):
            value = metadata.get(key, {})

            if isinstance(value, dict):
                return value.get("value", "") or ""

            return str(value)

        license_name = meta_value(
            "LicenseShortName"
        )

        license_url = meta_value(
            "LicenseUrl"
        )

        artist = meta_value(
            "Artist"
        )

        credit = meta_value(
            "Credit"
        )

        description = meta_value(
            "ImageDescription"
        )

        if not license_is_allowed(
            license_name
        ):
            continue

        title = page.get(
            "title",
            ""
        )

        score = score_candidate(
            title,
            description,
            credit,
            dish
        )

        if score < MIN_MATCH_SCORE:
            continue

        thumbnail_url = info.get(
            "thumburl"
        )

        original_url = info.get(
            "url"
        )

        if not thumbnail_url:
            thumbnail_url = original_url

        if not thumbnail_url:
            continue

        candidates.append({
            "score": score,
            "title": title,
            "image_url": thumbnail_url,
            "original_url": original_url,
            "description_url": info.get(
                "descriptionurl",
                ""
            ),
            "license": license_name,
            "license_url": license_url,
            "artist": artist,
            "credit": credit,
            "width": width,
            "height": height,
            "source": "Wikimedia Commons",
        })

    if not candidates:
        return None

    candidates.sort(
        key=lambda item: item["score"],
        reverse=True
    )

    return candidates[0]


# ============================================================
# OPENVERSE SEARCH
# ============================================================

def search_openverse(query: str, dish) -> Optional[dict]:

    params = {
        "q": query,
        "page_size": OPENVERSE_RESULTS,

        # Avoid potentially problematic licenses
        "license": "cc0,pdm,by,by-sa",

        "mature": "false",
    }

    headers = {
        "User-Agent": USER_AGENT
    }

    response = request_with_retries(
        OPENVERSE_API_URL,
        params=params,
        headers=headers
    )

    if response is None:
        return None

    try:
        data = response.json()
    except json.JSONDecodeError:
        return None

    results = data.get(
        "results",
        []
    )

    candidates = []

    for item in results:

        if item.get("mature"):
            continue

        license_name = (
            item.get("license", "")
            or ""
        )

        if not license_is_allowed(
            license_name
        ):
            continue

        title = item.get(
            "title",
            ""
        )

        description = item.get(
            "description",
            ""
        )

        tags = item.get(
            "tags",
            []
        )

        if isinstance(tags, list):

            tag_text = " ".join(
                str(tag.get("name", ""))
                if isinstance(tag, dict)
                else str(tag)
                for tag in tags
            )

        else:
            tag_text = str(tags)

        score = score_candidate(
            title,
            description,
            tag_text,
            dish
        )

        if score < MIN_MATCH_SCORE:
            continue

        image_url = (
            item.get("url")
            or item.get("thumbnail")
        )

        if not image_url:
            continue

        candidates.append({
            "score": score,
            "title": title,
            "image_url": image_url,
            "original_url": image_url,
            "description_url": item.get(
                "foreign_landing_url",
                ""
            ),
            "license": license_name,
            "license_url": item.get(
                "license_url",
                ""
            ),
            "artist": item.get(
                "creator",
                ""
            ),
            "credit": item.get(
                "attribution",
                ""
            ),
            "width": item.get(
                "width",
                0
            ),
            "height": item.get(
                "height",
                0
            ),
            "source": (
                "Openverse / "
                + str(item.get("source", ""))
            ),
        })

    if not candidates:
        return None

    candidates.sort(
        key=lambda item: item["score"],
        reverse=True
    )

    return candidates[0]


# ============================================================
# DOWNLOAD IMAGE
# ============================================================

def download_image_bytes(url: str) -> Optional[bytes]:

    headers = {
        "User-Agent": USER_AGENT
    }

    response = request_with_retries(
        url,
        headers=headers
    )

    if response is None:
        return None

    content_type = (
        response.headers
        .get("Content-Type", "")
        .lower()
    )

    if (
        "image" not in content_type
        and not url.lower().endswith(
            (".jpg", ".jpeg", ".png", ".webp")
        )
    ):
        print(
            f"      Not an image response: "
            f"{content_type}"
        )
        return None

    return response.content


# ============================================================
# PROCESS + SAVE IMAGE
# ============================================================

def process_and_save_image(
    image_bytes: bytes,
    output_path: str
) -> bool:

    try:

        image = Image.open(
            io.BytesIO(image_bytes)
        )

        # Convert everything to RGB
        if image.mode not in (
            "RGB",
            "L"
        ):
            image = image.convert("RGB")

        elif image.mode == "L":
            image = image.convert("RGB")

        # Crop to a consistent restaurant-menu ratio
        image = ImageOps.fit(
            image,
            TARGET_SIZE,
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5)
        )

        os.makedirs(
            os.path.dirname(output_path),
            exist_ok=True
        )

        image.save(
            output_path,
            "JPEG",
            quality=JPEG_QUALITY,
            optimize=True
        )

        return True

    except Exception as exc:

        print(
            f"      Image processing failed: {exc}"
        )

        return False


# ============================================================
# SEARCH ONE DISH
# ============================================================

def find_image_for_dish(dish):

    queries = build_queries(dish)

    # --------------------------------------------------------
    # 1. Wikimedia Commons
    # --------------------------------------------------------

    for query in queries:

        print(
            f"      Commons search: {query}"
        )

        result = search_wikimedia(
            query,
            dish
        )

        if result:

            print(
                f"      ✓ Commons match: "
                f"{result['score']}/100"
            )

            return result

        time.sleep(0.5)

    # --------------------------------------------------------
    # 2. Openverse fallback
    # --------------------------------------------------------

    for query in queries:

        print(
            f"      Openverse search: {query}"
        )

        result = search_openverse(
            query,
            dish
        )

        if result:

            print(
                f"      ✓ Openverse match: "
                f"{result['score']}/100"
            )

            return result

        time.sleep(0.5)

    return None


# ============================================================
# MAIN
# ============================================================

def main():

    os.makedirs(
        OUTPUT_DIR,
        exist_ok=True
    )

    sources_path = os.path.join(
        OUTPUT_DIR,
        SOURCES_FILENAME
    )

    failed_path = os.path.join(
        OUTPUT_DIR,
        FAILED_FILENAME
    )

    successful = []
    failed = []

    print()
    print("=" * 70)
    print("RAJ DELIGHT — OPEN IMAGE FETCHER")
    print("=" * 70)
    print()
    print(
        "Sources: Wikimedia Commons → Openverse"
    )
    print(
        f"Output: {OUTPUT_DIR}"
    )
    print()

    # --------------------------------------------------------
    # PROCESS MENU
    # --------------------------------------------------------

    for index, dish in enumerate(
        MENU,
        start=1
    ):

        output_path = os.path.join(
            OUTPUT_DIR,
            dish.filename
        )

        print()
        print(
            f"[{index}/{len(MENU)}] "
            f"{dish.name}"
        )

        # Don't download again if image already exists
        if os.path.exists(output_path):

            print(
                "      Already exists — skipping."
            )

            successful.append({
                "dish": dish.name,
                "filename": dish.filename,
                "status": "already existed",
            })

            continue

        result = find_image_for_dish(
            dish
        )

        if not result:

            print(
                "      ✗ No acceptable matching "
                "open image found."
            )

            failed.append(
                f"{dish.name} -> "
                f"{dish.filename}"
            )

            continue

        print(
            f"      Selected: "
            f"{result['title']}"
        )

        print(
            f"      License: "
            f"{result['license']}"
        )

        image_bytes = download_image_bytes(
            result["image_url"]
        )

        if not image_bytes:

            print(
                "      ✗ Could not download image."
            )

            failed.append(
                f"{dish.name} -> "
                f"{dish.filename}"
            )

            continue

        saved = process_and_save_image(
            image_bytes,
            output_path
        )

        if not saved:

            failed.append(
                f"{dish.name} -> "
                f"{dish.filename}"
            )

            continue

        print(
            f"      ✓ Saved: "
            f"{dish.filename}"
        )

        successful.append({
            "dish": dish.name,
            "filename": dish.filename,
            "source": result["source"],
            "title": result["title"],
            "creator": result["artist"],
            "license": result["license"],
            "license_url": result["license_url"],
            "source_url": result[
                "description_url"
            ],
            "score": result["score"],
        })

        time.sleep(0.5)

    # ========================================================
    # WRITE SOURCE / ATTRIBUTION FILE
    # ========================================================

    with open(
        sources_path,
        "w",
        encoding="utf-8"
    ) as f:

        f.write(
            "RAJ DELIGHT — IMAGE SOURCES\n"
        )

        f.write(
            "=" * 70 + "\n\n"
        )

        f.write(
            "Images were collected from "
            "open-license image sources.\n"
        )

        f.write(
            "Check the individual license/source "
            "before commercial publication.\n\n"
        )

        for item in successful:

            f.write(
                f"Dish: {item['dish']}\n"
            )

            f.write(
                f"Filename: {item['filename']}\n"
            )

            if "source" in item:

                f.write(
                    f"Source: {item['source']}\n"
                )

                f.write(
                    f"Image title: "
                    f"{item.get('title', '')}\n"
                )

                f.write(
                    f"Creator: "
                    f"{item.get('creator', '')}\n"
                )

                f.write(
                    f"License: "
                    f"{item.get('license', '')}\n"
                )

                f.write(
                    f"License URL: "
                    f"{item.get('license_url', '')}\n"
                )

                f.write(
                    f"Source URL: "
                    f"{item.get('source_url', '')}\n"
                )

                f.write(
                    f"Match score: "
                    f"{item.get('score', '')}/100\n"
                )

            f.write("\n")
            f.write("-" * 70)
            f.write("\n\n")

    # ========================================================
    # WRITE FAILED FILE
    # ========================================================

    with open(
        failed_path,
        "w",
        encoding="utf-8"
    ) as f:

        f.write(
            "RAJ DELIGHT — FAILED IMAGES\n"
        )

        f.write(
            "=" * 70 + "\n\n"
        )

        if failed:

            for item in failed:
                f.write(item + "\n")

        else:

            f.write(
                "No images failed.\n"
            )

    # ========================================================
    # CREATE ZIP
    # ========================================================

    print()
    print(
        "Creating ZIP..."
    )

    with zipfile.ZipFile(
        ZIP_NAME,
        "w",
        compression=zipfile.ZIP_DEFLATED
    ) as zip_file:

        for filename in os.listdir(
            OUTPUT_DIR
        ):

            filepath = os.path.join(
                OUTPUT_DIR,
                filename
            )

            if not os.path.isfile(
                filepath
            ):
                continue

            # Don't put the ZIP inside itself
            if os.path.abspath(
                filepath
            ) == os.path.abspath(
                ZIP_NAME
            ):
                continue

            zip_file.write(
                filepath,
                arcname=filename
            )

    # ========================================================
    # SUMMARY
    # ========================================================

    print()
    print("=" * 70)
    print("COMPLETE")
    print("=" * 70)

    print(
        f"Successful/already present: "
        f"{len(successful)}"
    )

    print(
        f"Failed: {len(failed)}"
    )

    print()
    print(
        f"Images folder:\n{OUTPUT_DIR}"
    )

    print()
    print(
        f"Sources file:\n{sources_path}"
    )

    print()
    print(
        f"Failed file:\n{failed_path}"
    )

    print()
    print(
        f"ZIP file:\n{ZIP_NAME}"
    )

    print()


if __name__ == "__main__":
    main()
