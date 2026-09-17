from pathlib import Path
import re
import time
import zipfile
import requests
from PIL import Image
from io import BytesIO

from menu_data import MENU, Dish

OUTPUT_DIR = Path("/home/sam/Documents/raj delights/images")
FAILED_FILE = OUTPUT_DIR / "FAILED-IMAGES.txt"
SOURCES_FILE = OUTPUT_DIR / "IMAGE-SOURCES.txt"
ZIP_FILE = OUTPUT_DIR / "raj-delight-retry-images.zip"

API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = "RajDelightMenuImageFetcher/2.0"

# Images known to be wrong/suspicious from the first pass.
SUSPICIOUS = {
    "bread-basket.jpg",
    "mix-veg-paratha.jpg",
    "green-chilli-paratha.jpg",
    "matar-pulao.jpg",
    "corn-palak.jpg",
    "mushroom-masala.jpg",
    "jalfrezi.jpg",
    "punjabi-aloo.jpg",
    "masala-tea-hot.jpg",
    "vanilla-shake.jpg",
    "belgian-chocolate-shake.jpg",
    "oreo-shake.jpg",
    "blue-lagoon.jpg",
    "orange-mojito.jpg",
    "fruit-punch.jpg",
    "mango-cooler.jpg",
    "manchow-soup.jpg",
    "lemon-coriander-soup.jpg",
    "cream-of-mushroom-soup.jpg",
    "afghani-soya-chaap.jpg",
    "tandoori-soya-chaap.jpg",
    "tandoori-masala-chaap.jpg",
    "tandoori-stuffed-aloo.jpg",
    "tandoori-pudina-paneer-tikka.jpg",
    "chilli-paneer-roll.jpg",
    "paneer-tikka-roll.jpg",
}

# Exact/strong alternative search terms.
ALIASES = {
    "Bread Basket": ["bread basket restaurant", "Indian bread basket"],
    "Mix Veg Paratha": ["mixed vegetable paratha", "mix vegetable paratha"],
    "Green Chilli Paratha": ["green chilli paratha", "chilli paratha Indian"],
    "Matar Pulao": ["matar pulao", "peas pulao"],
    "Corn Palak": ["corn palak", "sweet corn spinach curry"],
    "Mushroom Masala": ["mushroom masala Indian curry"],
    "Jalfrezi": ["vegetable jalfrezi", "veg jalfrezi"],
    "Punjabi Aloo": ["Punjabi aloo", "Punjabi potato curry"],
    "Masala Tea (HOT)": ["masala chai", "Indian masala tea"],
    "Vanilla Shake": ["vanilla milkshake", "vanilla shake glass"],
    "Belgian Chocolate Shake": [
        "Belgian chocolate milkshake",
        "Belgian chocolate shake",
        "chocolate milkshake"
    ],
    "Oreo Shake": ["Oreo milkshake", "Oreo shake"],
    "Blue Lagoon": ["blue lagoon mocktail", "blue lagoon drink"],
    "Orange Mojito": ["orange mojito drink", "orange mint mocktail"],
    "Fruit Punch": ["fruit punch drink", "fruit punch mocktail"],
    "Mango Cooler": ["mango cooler drink", "mango mocktail"],
    "Manchow Soup": ["vegetable manchow soup", "veg manchow soup"],
    "Lemon Coriander Soup": ["lemon coriander soup"],
    "Cream Of Mushroom Soup": ["cream of mushroom soup"],
    "Afghani Soya Chaap": ["afghani soya chaap", "afghani chaap"],
    "Tandoori Soya Chaap": ["tandoori soya chaap"],
    "Tandoori Masala Chaap": ["tandoori masala soya chaap", "masala chaap"],
    "Tandoori Stuffed Aloo": ["tandoori stuffed potato", "stuffed tandoori aloo"],
    "Tandoori Pudina Paneer Tikka": [
        "pudina paneer tikka",
        "mint paneer tikka"
    ],
    "Chilli Paneer Roll": ["chilli paneer roll", "paneer chilli roll"],
    "Paneer Tikka Roll": ["paneer tikka roll"],
}

STOPWORDS = {
    "the", "and", "with", "of", "in", "on", "a", "an",
    "hot", "cold", "food", "dish", "style", "indian"
}

# Terms which indicate a non-vegetarian result.
NONVEG = {
    "chicken", "mutton", "lamb", "beef", "pork", "fish",
    "prawn", "prawns", "shrimp", "seafood", "meat"
}


def normalize(text):
    text = str(text or "").lower()
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def tokens(text):
    return {
        x for x in normalize(text).split()
        if x not in STOPWORDS and len(x) > 2
    }


def safe_text(value):
    if isinstance(value, dict):
        return " ".join(safe_text(v) for v in value.values())
    if isinstance(value, list):
        return " ".join(safe_text(v) for v in value)
    return str(value or "")


def dish_is_veg(dish):
    return True


def candidate_score(dish_name, title, description, categories):
    name_tokens = tokens(dish_name)

    title_text = normalize(title)
    full_text = normalize(
        f"{title} {description} {categories}"
    )

    # Strong protection against chicken/meat results.
    if any(word in full_text.split() for word in NONVEG):
        return -100

    score = 0

    title_tokens = tokens(title)
    full_tokens = tokens(full_text)

    # Every important dish word must have a chance to match.
    matched = name_tokens & full_tokens

    if not name_tokens:
        return 0

    ratio = len(matched) / len(name_tokens)

    # Main score.
    score += ratio * 70

    # Exact phrase in title is highly valuable.
    phrase = normalize(dish_name)
    if phrase and phrase in title_text:
        score += 25

    # Exact important words in title.
    title_matches = name_tokens & title_tokens
    score += min(20, len(title_matches) * 5)

    return score


def search_commons(query):
    params = {
        "action": "query",
        "format": "json",
        "generator": "search",
        "gsrsearch": query,
        "gsrnamespace": 6,
        "gsrlimit": 20,
        "prop": "imageinfo",
        "iiprop": "url|mime|size|extmetadata",
        "iiurlwidth": 1400,
    }

    try:
        r = requests.get(
            API,
            params=params,
            headers={"User-Agent": USER_AGENT},
            timeout=30,
        )

        if r.status_code == 429:
            print("      Commons rate limited; waiting 10 seconds...")
            time.sleep(10)
            return []

        r.raise_for_status()
        data = r.json()

    except Exception as e:
        print(f"      Commons error: {e}")
        return []

    pages = data.get("query", {}).get("pages", {})
    results = []

    for page in pages.values():
        info = (page.get("imageinfo") or [{}])[0]
        meta = info.get("extmetadata") or {}

        title = page.get("title", "")
        description = safe_text(
            meta.get("ImageDescription", {}).get("value", "")
            if isinstance(meta.get("ImageDescription"), dict)
            else meta.get("ImageDescription", "")
        )

        categories = safe_text(
            meta.get("Categories", {}).get("value", "")
            if isinstance(meta.get("Categories"), dict)
            else meta.get("Categories", "")
        )

        license_name = safe_text(
            meta.get("LicenseShortName", {}).get("value", "")
            if isinstance(meta.get("LicenseShortName"), dict)
            else meta.get("LicenseShortName", "")
        )

        url = info.get("thumburl") or info.get("url")
        mime = info.get("mime", "")

        if not url or not mime.startswith("image/"):
            continue

        allowed_license = any(
            x in license_name.lower()
            for x in [
                "cc0",
                "public domain",
                "cc by",
                "cc-by",
            ]
        )

        if not allowed_license:
            continue

        results.append({
            "title": title,
            "description": description,
            "categories": categories,
            "license": license_name,
            "url": url,
        })

    return results


def choose_best(dish, candidates):
    ranked = []

    for c in candidates:
        score = candidate_score(
            dish.name,
            c["title"],
            c["description"],
            c["categories"],
        )

        if score >= 75:
            ranked.append((score, c))

    ranked.sort(key=lambda x: x[0], reverse=True)

    if not ranked:
        return None

    return ranked[0]


def download(url):
    try:
        r = requests.get(
            url,
            headers={"User-Agent": USER_AGENT},
            timeout=40,
        )
        r.raise_for_status()

        content_type = r.headers.get("content-type", "").lower()

        if "image" not in content_type:
            return None

        return r.content

    except Exception as e:
        print(f"      Download error: {e}")
        return None


def save_image(data, path):
    try:
        img = Image.open(BytesIO(data)).convert("RGB")

        # Maintain good menu quality while avoiding huge files.
        img.thumbnail((1400, 1050), Image.Resampling.LANCZOS)

        img.save(
            path,
            "JPEG",
            quality=86,
            optimize=True,
        )

        return True

    except Exception as e:
        print(f"      Image processing error: {e}")
        return False


def queries_for(dish):
    queries = [dish.name]

    if dish.name in ALIASES:
        queries.extend(ALIASES[dish.name])

    # Generic but still dish-focused fallback.
    queries.append(f"{dish.name} Indian food")

    # Remove duplicates while preserving order.
    return list(dict.fromkeys(queries))


def load_failed_names():
    names = set()

    if not FAILED_FILE.exists():
        return names

    for line in FAILED_FILE.read_text(
        encoding="utf-8",
        errors="ignore"
    ).splitlines():

        m = re.match(r"\s*-\s*(.+?)\s*$", line)

        if m:
            names.add(m.group(1).strip())

    return names


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    failed_names = load_failed_names()

    targets = []

    for dish in MENU:
        if (
            dish.filename in SUSPICIOUS
            or dish.name in failed_names
            or not (OUTPUT_DIR / dish.filename).exists()
        ):
            targets.append(dish)

    print("=" * 70)
    print("RAJ DELIGHT — SMART SECOND PASS")
    print("=" * 70)
    print()
    print(f"Images to replace/retry: {len(targets)}")
    print(f"Output: {OUTPUT_DIR}")
    print()

    successful = 0
    failed = 0
    source_lines = []

    for index, dish in enumerate(targets, 1):
        output = OUTPUT_DIR / dish.filename

        print(f"[{index}/{len(targets)}] {dish.name}")

        selected = None

        for query in queries_for(dish):
            print(f"      Search: {query}")

            candidates = search_commons(query)

            if not candidates:
                time.sleep(2)
                continue

            best = choose_best(dish, candidates)

            if best:
                selected = best
                score, candidate = best

                print(f"      Match: {score:.1f}/100")
                print(f"      Selected: {candidate['title']}")
                print(f"      License: {candidate['license']}")

                data = download(candidate["url"])

                if data and save_image(data, output):
                    successful += 1

                    source_lines.append(
                        f"{dish.name} | {dish.filename} | "
                        f"{candidate['title']} | "
                        f"{candidate['license']} | "
                        f"{candidate['url']}\n"
                    )

                    print(f"      ✓ Replaced: {dish.filename}")
                    break

            time.sleep(2)

        else:
            failed += 1
            print("      ✗ No strong matching image found.")

        print()
        time.sleep(3)

    with SOURCES_FILE.open(
        "a",
        encoding="utf-8"
    ) as f:
        f.writelines(source_lines)

    print("=" * 70)
    print("SECOND PASS COMPLETE")
    print("=" * 70)
    print(f"Successfully replaced/fetched: {successful}")
    print(f"Still failed: {failed}")
    print()

    # Create a fresh ZIP containing all current JPG images.
    with zipfile.ZipFile(
        ZIP_FILE,
        "w",
        compression=zipfile.ZIP_DEFLATED
    ) as z:
        for image in sorted(OUTPUT_DIR.glob("*.jpg")):
            z.write(image, image.name)

    print(f"ZIP: {ZIP_FILE}")
    print("=" * 70)


if __name__ == "__main__":
    main()
