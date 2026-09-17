/* ==========================================================================
 *  RAJ DELIGHT — Premium Mobile QR Menu
 *  script.js
 *  Vanilla JavaScript only. No frameworks, no build step.
 *  ========================================================================== */

/* --------------------------------------------------------------------------
 *  1. MENU DATA
 *  Every item has: name, price (number | null), image, tags[], description
 *  price === null  ->  "Price on request"
 *
 *  NOTE: This data is the source of truth. Do not rename items, change
 *  prices, reorder, add or remove entries, or alter image filenames.
 *  -------------------------------------------------------------------------- */
const menuData = [

    /* ---------------- KITTY MENU ---------------- */
    {
        category: "Kitty Menu",
        note: "Prepared specially on order",
        items: [
            { name: "Chole Bhature",        price: 120, image: "images/chole-bhature.jpg",        tags: [], description: "" },
            { name: "Mangore",              price: 210, image: "images/mangore.jpg",              tags: [], description: "" },
            { name: "Mix Pakoda",           price: 210, image: "images/mix-pakoda.jpg",           tags: [], description: "" },
            { name: "Aloo Pakoda",          price: 119, image: "images/aloo-pakoda.jpg",          tags: [], description: "" },
            { name: "Pyaz Pakoda",          price: 119, image: "images/pyaz-pakoda.jpg",          tags: [], description: "" },
            { name: "Paneer Pakoda",        price: 229, image: "images/paneer-pakoda.jpg",        tags: [], description: "" },
            { name: "Fried Idli",           price: 199, image: "images/fried-idli.jpg",           tags: [], description: "" },
            { name: "Sweet Corn",           price: 199, image: "images/sweet-corn.jpg",           tags: [], description: "" },
            { name: "Mong Daal Chila",      price: 139, image: "images/mong-daal-chila.jpg",      tags: [], description: "" },
            { name: "Veg Poha",             price: 149, image: "images/veg-poha.jpg",             tags: [], description: "" },
            { name: "Aloo Tikki",           price:  50, image: "images/aloo-tikki.jpg",           tags: [], description: "" }
        ]
    },

/* ---------------- ITALIAN PASTA ---------------- */
{
    category: "Italian Pasta",
    note: "",
    items: [
        { name: "Red Sauce Pasta",      price: 220, image: "images/red-sauce-pasta.jpg",      tags: [], description: "" },
        { name: "White Sauce Pasta",    price: 240, image: "images/white-sauce-pasta.jpg",    tags: [], description: "" },
        { name: "Mix Sauce Pasta",      price: 269, image: "images/mix-sauce-pasta.jpg",      tags: [], description: "" }
    ]
},

/* ---------------- FRIES ---------------- */
{
    category: "Fries",
    note: "",
    items: [
        { name: "French Fries",                   price: 120, image: "images/french-fries.jpg",                  tags: [], description: "" },
        { name: "Peri Peri French Fries",         price: 140, image: "images/peri-peri-french-fries.jpg",        tags: [], description: "" },
        { name: "Cheese French Fries",            price: 159, image: "images/cheese-french-fries.jpg",           tags: [], description: "" },
        { name: "New York Style French Fries",    price: 179, image: "images/new-york-style-french-fries.jpg",   tags: ["Raj Delight Special"], description: "" }
    ]
},

/* ---------------- SANDWICH ---------------- */
{
    category: "Sandwich",
    note: "",
    items: [
        { name: "Veg Grilled Sandwich",                   price: 149, image: "images/veg-grilled-sandwich.jpg",                   tags: [], description: "" },
        { name: "Veg Cheese Grilled Sandwich",            price: 160, image: "images/veg-cheese-grilled-sandwich.jpg",            tags: [], description: "" },
        { name: "Paneer Grilled Sandwich",                price: 199, image: "images/paneer-grilled-sandwich.jpg",                tags: [], description: "" },
        { name: "Tandoori Paneer Grilled Sandwich",       price: 210, image: "images/tandoori-paneer-grilled-sandwich.jpg",       tags: [], description: "" },
        { name: "Double Decker Grilled Sandwich",         price: 219, image: "images/double-decker-grilled-sandwich.jpg",         tags: [], description: "" },
        { name: "Double Decker Cheese Grilled Sandwich",  price: 239, image: "images/double-decker-cheese-grilled-sandwich.jpg",  tags: [], description: "" }
    ]
},

/* ---------------- SPECIAL THALI'S ---------------- */
{
    category: "Special Thali's",
    note: "1:00 PM to 7:00 PM",
    items: [
        { name: "Rajasthani Thali",            price: 599, image: "images/rajasthani-thali.jpg",           tags: ["Special"], description: "" },
        { name: "Raj Delight Delux Thali",     price: 349, image: "images/raj-delight-delux-thali.jpg",    tags: [], description: "" },
        { name: "Bajra Roti",                  price:  19, image: "images/bajra-roti.jpg",                 tags: [], description: "" },
        { name: "Makka Roti",                  price:  19, image: "images/makka-roti.jpg",                 tags: [], description: "" }
    ]
},

/* ---------------- SMOKEY GRILLS ---------------- */
{
    category: "Smokey Grills",
    note: "",
    items: [
        { name: "Tandoori Sizzler",   price: 425, image: "images/tandoori-sizzler.jpg",   tags: [], description: "" },
        { name: "Chinesse Sizzler",   price: 399, image: "images/chinesse-sizzler.jpg",   tags: [], description: "" }
    ]
},

/* ---------------- CONTINENTAL / PIZZAS ---------------- */
{
    category: "Continental / Pizzas",
    note: "",
    items: [
        { name: "Classic Margherita Pizza",          price: 269, image: "images/classic-margherita-pizza.jpg",          tags: [], description: "" },
        { name: "Farm House Pizza",                  price: 279, image: "images/farm-house-pizza.jpg",                  tags: [], description: "" },
        { name: "Corn & Cheese Pizza",               price: 259, image: "images/corn-cheese-pizza.jpg",                 tags: [], description: "" },
        { name: "Neapolitan Pizza",                  price: 279, image: "images/neapolitan-pizza.jpg",                  tags: [], description: "" },
        { name: "Paneer Tikka Pizza",                price: 299, image: "images/paneer-tikka-pizza.jpg",                tags: [], description: "" },
        { name: "Double Cheese Margherita Pizza",    price: 299, image: "images/double-cheese-margherita-pizza.jpg",    tags: [], description: "" },
        { name: "Mushroom Mania",                    price: 319, image: "images/mushroom-mania.jpg",                    tags: [], description: "" }
    ]
},

/* ---------------- GARLIC BREADS ---------------- */
{
    category: "Garlic Breads",
    note: "",
    items: [
        { name: "Cheese Garlic Bread",   price: 179, image: "images/cheese-garlic-bread.jpg",   tags: [], description: "" },
        { name: "Stuff Garlic Bread",    price: 199, image: "images/stuff-garlic-bread.jpg",    tags: [], description: "" }
    ]
},

/* ---------------- DELICIOUS BURGER ---------------- */
{
    category: "Delicious Burger",
    note: "",
    items: [
        { name: "Classic Veg Burger",         price:  79, image: "images/classic-veg-burger.jpg",          tags: [], description: "" },
        { name: "Cheese Burger",              price: 110, image: "images/cheese-burger.jpg",                tags: [], description: "" },
        { name: "Paneer Burger",              price: 109, image: "images/paneer-burger.jpg",                tags: [], description: "" },
        { name: "Cheese Paneer Burger",       price: 129, image: "images/cheese-paneer-burger.jpg",         tags: [], description: "" },
        { name: "Jalapeno Burger",            price: 119, image: "images/jalapeno-burger.jpg",              tags: [], description: "" },
        { name: "Cheese Jalapeno Burger",     price: 139, image: "images/cheese-jalapeno-burger.jpg",       tags: [], description: "" }
    ]
},

/* ---------------- PAPAD ---------------- */
{
    category: "Papad",
    note: "",
    items: [
        { name: "Masala Papad",   price: 60, image: "images/masala-papad.jpg",   tags: [], description: "" },
        { name: "Plain Papad",    price: 35, image: "images/plain-papad.jpg",    tags: [], description: "" },
        { name: "Fry Papad",      price: 55, image: "images/fry-papad.jpg",      tags: [], description: "" }
    ]
},

/* ---------------- CHINESE APPETIZERS ---------------- */
{
    category: "Chinese Appetizers",
    note: "",
    items: [
        { name: "Chilli Paneer Dry",              price: 289, image: "images/chilli-paneer-dry.jpg",              tags: [], description: "" },
        { name: "Chilli Baby Corn",               price: 259, image: "images/chilli-baby-corn.jpg",               tags: [], description: "" },
        { name: "Paneer'65",                      price: 260, image: "images/paneer-65.jpg",                      tags: [], description: "" },
        { name: "Crispy Corn Salt & Pepper",      price: 210, image: "images/crispy-corn-salt-pepper.jpg",        tags: [], description: "" },
        { name: "American Corn",                  price: 249, image: "images/american-corn.jpg",                  tags: [], description: "" },
        { name: "Chilli Mushroom",                price: 299, image: "images/chilli-mushroom.jpg",                tags: [], description: "" },
        { name: "Chilli Soya Chaap",              price: 249, image: "images/chilli-soya-chaap.jpg",              tags: [], description: "" },
        { name: "Spring Roll",                    price: 179, image: "images/spring-roll.jpg",                    tags: [], description: "" },
        { name: "Honey Chilli Potato",            price: 189, image: "images/honey-chilli-potato.jpg",            tags: [], description: "" },
        { name: "Chilli Potato",                  price: 179, image: "images/chilli-potato.jpg",                  tags: [], description: "" },
        { name: "Paneer-in-Hot Garlic",           price: 279, image: "images/paneer-in-hot-garlic.jpg",           tags: ["Raj Delight Special"], description: "" },
        { name: "Veg Manchurian Dry",             price: 249, image: "images/veg-manchurian-dry.jpg",             tags: [], description: "" },
        { name: "Paneer Manchurian Dry",          price: 259, image: "images/paneer-manchurian-dry.jpg",          tags: [], description: "" },
        { name: "Crispy Baby Corn",               price: 229, image: "images/crispy-baby-corn.jpg",               tags: [], description: "" },
        { name: "Paneer Green Garlic",            price: 269, image: "images/paneer-green-garlic.jpg",            tags: [], description: "" },
        { name: "Crispy Veggies (Salt & Pepper)", price: 210, image: "images/crispy-veggies-salt-pepper.jpg",     tags: [], description: "" }
    ]
},

/* ---------------- DUMPLINGS / MOMOS ---------------- */
{
    category: "Dumplings / Momos",
    note: "",
    items: [
        { name: "Steem Veg Momos",                  price: 119, image: "images/steem-veg-momos.jpg",                  tags: [], description: "" },
        { name: "Steem Paneer Momos",               price: 149, image: "images/steem-paneer-momos.jpg",               tags: [], description: "" },
        { name: "Veg Kurkure Momos",                price: 169, image: "images/veg-kurkure-momos.jpg",                tags: [], description: "" },
        { name: "Paneer Kurkure Momos",             price: 189, image: "images/paneer-kurkure-momos.jpg",             tags: [], description: "" },
        { name: "Pan Fried Chilli Garlic Momos",    price: 199, image: "images/pan-fried-chilli-garlic-momos.jpg",    tags: [], description: "" },
        { name: "Tandoori Veg Momos",               price: 189, image: "images/tandoori-veg-momos.jpg",               tags: [], description: "" },
        { name: "Tandoori Paneer Momos",            price: 209, image: "images/tandoori-paneer-momos.jpg",            tags: [], description: "" }
    ]
},

/* ---------------- SAUCY DELIGHTS ---------------- */
{
    category: "Saucy Delights",
    note: "",
    items: [
        { name: "Manchurian Gravy",        price: 249, image: "images/manchurian-gravy.jpg",        tags: [], description: "" },
        { name: "Chilli Paneer Gravy",     price: 259, image: "images/chilli-paneer-gravy.jpg",     tags: [], description: "" },
        { name: "Veg Hot Garlic Gravy",    price: 269, image: "images/veg-hot-garlic-gravy.jpg",    tags: [], description: "" },
        { name: "Chilli Mushroom Gravy",   price: 299, image: "images/chilli-mushroom-gravy.jpg",   tags: [], description: "" }
    ]
},

/* ---------------- CHINESE CUISINE ---------------- */
{
    category: "Chinese Cuisine",
    note: "",
    items: [
        { name: "Veg Fried Rice",               price: 249, image: "images/veg-fried-rice.jpg",               tags: [], description: "" },
        { name: "Schezwan Fried Rice",          price: 279, image: "images/schezwan-fried-rice.jpg",          tags: [], description: "" },
        { name: "Chilli Garlic Fried Rice",     price: 269, image: "images/chilli-garlic-fried-rice.jpg",     tags: [], description: "" },
        { name: "Veg Noodles",                  price: 199, image: "images/veg-noodles.jpg",                  tags: [], description: "" },
        { name: "Hakka Noodles",                price: 239, image: "images/hakka-noodles.jpg",                tags: [], description: "" },
        { name: "Singapori Noodles",            price: 239, image: "images/singapori-noodles.jpg",            tags: [], description: "" },
        { name: "Chilli Garlic Noodles",        price: 229, image: "images/chilli-garlic-noodles.jpg",        tags: [], description: "" },
        { name: "Schezwan Noodles",             price: 229, image: "images/schezwan-noodles.jpg",             tags: [], description: "" },
        { name: "Paneer Noodles",               price: 239, image: "images/paneer-noodles.jpg",               tags: [], description: "" }
    ]
},

/* ---------------- SALADS ---------------- */
{
    category: "Salads",
    note: "",
    items: [
        { name: "Garden green Salad",   price: 99, image: "images/garden-green-salad.jpg",   tags: [], description: "" },
        { name: "Cucumber Salad",       price: 69, image: "images/cucumber-salad.jpg",       tags: [], description: "" },
        { name: "Onion Salad",          price: 69, image: "images/onion-salad.jpg",          tags: [], description: "" },
        { name: "Kimchi Salad",         price: 99, image: "images/kimchi-salad.jpg",         tags: [], description: "" }
    ]
},

/* ---------------- INDIAN BREADS ---------------- */
{
    category: "Indian Breads",
    note: "",
    items: [
        { name: "Plain Roti",         price:  20, image: "images/plain-roti.jpg",          tags: [], description: "" },
        { name: "Butter Roti",        price:  30, image: "images/butter-roti.jpg",         tags: [], description: "" },
        { name: "Laccha Paratha",     price:  60, image: "images/laccha-paratha.jpg",      tags: [], description: "" },
        { name: "Tava Roti Plain",    price:  15, image: "images/tava-roti-plain.jpg",     tags: [], description: "" },
        { name: "Tava Roti Butter",   price:  20, image: "images/tava-roti-butter.jpg",    tags: [], description: "" },
        { name: "Plain Naan",         price:  50, image: "images/plain-naan.jpg",          tags: [], description: "" },
        { name: "Butter Naan",        price:  60, image: "images/butter-naan.jpg",         tags: [], description: "" },
        { name: "Cheese Naan",        price:  80, image: "images/cheese-naan.jpg",         tags: [], description: "" },
        { name: "Garlic Naan",        price:  60, image: "images/garlic-naan.jpg",         tags: [], description: "" },
        { name: "Kashmiri Naan",      price:  99, image: "images/kashmiri-naan.jpg",       tags: [], description: "" },
        { name: "Missi Roti",         price:  49, image: "images/missi-roti.jpg",          tags: [], description: "" },
        { name: "Onion Missi Roti",   price:  69, image: "images/onion-missi-roti.jpg",    tags: [], description: "" },
        { name: "Stuffed Naan",       price:  70, image: "images/stuffed-naan.jpg",        tags: [], description: "" },
        { name: "Rumali Roti",        price:  15, image: "images/rumali-roti.jpg",         tags: [], description: "" },
        { name: "Bread Basket",       price: 349, image: "images/bread-basket.jpg",        tags: ["Raj Delight Special"], description: "" }
    ]
},

/* ---------------- PARATHA'S ---------------- */
{
    category: "Paratha's",
    note: "",
    items: [
        { name: "Paneer Paratha",        price: 99, image: "images/paneer-paratha.jpg",         tags: [], description: "" },
        { name: "Aloo Paratha",          price: 89, image: "images/aloo-paratha.jpg",           tags: [], description: "" },
        { name: "Onion Paratha",         price: 89, image: "images/onion-paratha.jpg",          tags: [], description: "" },
        { name: "Mix Veg Paratha",       price: 99, image: "images/mix-veg-paratha.jpg",        tags: [], description: "" },
        { name: "Green Chilli Paratha",  price: 75, image: "images/green-chilli-paratha.jpg",   tags: [], description: "" },
        { name: "Gobhi Paratha",         price: 89, image: "images/gobhi-paratha.jpg",          tags: [], description: "" }
    ]
},

/* ---------------- DAL DELIGHT ---------------- */
{
    category: "Dal Delight",
    note: "",
    items: [
        { name: "Dal Makhani",             price: 280, image: "images/dal-makhani.jpg",              tags: ["Special"], description: "" },
        { name: "Dal Handi (Amritsari)",   price: 259, image: "images/dal-handi-amritsari.jpg",      tags: [], description: "" },
        { name: "Yellow Dal Tadka",        price: 219, image: "images/yellow-dal-tadka.jpg",        tags: [], description: "" },
        { name: "Dal Fry",                 price: 229, image: "images/dal-fry.jpg",                 tags: [], description: "" },
        { name: "Dal Panchrangi",          price: 259, image: "images/dal-panchrangi.jpg",          tags: [], description: "" }
    ]
},

/* ---------------- RICE ---------------- */
{
    category: "Rice",
    note: "",
    items: [
        { name: "Steam Rice",      price: 120, image: "images/steam-rice.jpg",      tags: [], description: "" },
        { name: "Jeera Rice",      price: 149, image: "images/jeera-rice.jpg",      tags: [], description: "" },
        { name: "Veg Pulao",       price: 199, image: "images/veg-pulao.jpg",       tags: [], description: "" },
        { name: "Matar Pulao",     price: 189, image: "images/matar-pulao.jpg",     tags: [], description: "" },
        { name: "Kashmiri Pulao",  price: 219, image: "images/kashmiri-pulao.jpg",  tags: ["Special"], description: "" }
    ]
},

/* ---------------- BIRYANI ---------------- */
{
    category: "Biryani",
    note: "",
    items: [
        { name: "Veg Biryani",             price: 289, image: "images/veg-biryani.jpg",              tags: [], description: "" },
        { name: "Paneer Tikka Biryani",    price: 319, image: "images/paneer-tikka-biryani.jpg",     tags: [], description: "" },
        { name: "Veg Hyderabadi Biryani",  price: 310, image: "images/veg-hyderabadi-biryani.jpg",   tags: ["Special"], description: "" }
    ]
},

/* ---------------- RAITAS ---------------- */
{
    category: "Raitas",
    note: "",
    items: [
        { name: "Boondi Raita",       price: 139, image: "images/boondi-raita.jpg",       tags: [], description: "" },
        { name: "Mix Veg Raita",      price: 149, image: "images/mix-veg-raita.jpg",      tags: [], description: "" },
        { name: "Pineapple Raita",    price: 159, image: "images/pineapple-raita.jpg",    tags: [], description: "" },
        { name: "Fruit Raita",        price: 169, image: "images/fruit-raita.jpg",        tags: [], description: "" },
        { name: "Plain Curd",         price:  69, image: "images/plain-curd.jpg",         tags: [], description: "" }
    ]
},

/* ---------------- INDIAN MAIN COURSE ---------------- */
{
    category: "Indian Main Course",
    note: "",
    items: [
        { name: "Paneer Lababdar",              price: 299, image: "images/paneer-lababdar.jpg",              tags: ["Special"], description: "" },
        { name: "Kadhai Paneer",                price: 329, image: "images/kadhai-paneer.jpg",                tags: [], description: "" },
        { name: "Paneer Makhani",               price: 289, image: "images/paneer-makhani.jpg",               tags: [], description: "" },
        { name: "Paneer Do Pyaza",              price: 299, image: "images/paneer-do-pyaza.jpg",              tags: [], description: "" },
        { name: "Panner Butter Masala",         price: 329, image: "images/panner-butter-masala.jpg",         tags: [], description: "" },
        { name: "Paneer Tikka Masala",          price: 349, image: "images/paneer-tikka-masala.jpg",          tags: [], description: "" },
        { name: "Handi Paneer",                 price: 299, image: "images/handi-paneer.jpg",                 tags: [], description: "" },
        { name: "Paneer Rogan Josh",            price: 319, image: "images/paneer-rogan-josh.jpg",            tags: ["Flavoured By Raj"], description: "" },
        { name: "Palak Paneer",                 price: 289, image: "images/palak-paneer.jpg",                 tags: [], description: "" },
        { name: "Paneer Changezi",              price: 349, image: "images/paneer-changezi.jpg",              tags: ["Flavoured By Raj"], description: "" },
        { name: "Shahi Paneer",                 price: 299, image: "images/shahi-paneer.jpg",                 tags: [], description: "" },
        { name: "Paneer Kali Mirch",            price: 299, image: "images/paneer-kali-mirch.jpg",            tags: [], description: "" },
        { name: "Navratan Korma",               price: 299, image: "images/navratan-korma.jpg",               tags: [], description: "" },
        { name: "Lucknowi Kofta",               price: 299, image: "images/lucknowi-kofta.jpg",               tags: [], description: "" },
        { name: "Malai Kofta",                  price: 299, image: "images/malai-kofta.jpg",                  tags: [], description: "" },
        { name: "Mutter Paneer",                price: 299, image: "images/mutter-paneer.jpg",                tags: [], description: "" },
        { name: "Mushroom Masala Mutter",       price: 299, image: "images/mushroom-masala-mutter.jpg",       tags: [], description: "" },
        { name: "Mushroom Do Pyaza",            price: 310, image: "images/mushroom-do-pyaza.jpg",            tags: [], description: "" },
        { name: "Mushroom Masala",              price: 299, image: "images/mushroom-masala.jpg",              tags: [], description: "" },
        { name: "Corn Palak",                   price: 299, image: "images/corn-palak.jpg",                   tags: [], description: "" },
        { name: "Mix Veg",                      price: 220, image: "images/mix-veg.jpg",                      tags: [], description: "" },
        { name: "Nizami Handi (Hyderabadi)",    price: 329, image: "images/nizami-handi-hyderabadi.jpg",      tags: [], description: "" },
        { name: "Jeera Aloo",                   price: 150, image: "images/jeera-aloo.jpg",                   tags: [], description: "" },
        { name: "Gobhi Adraki",                 price: 199, image: "images/gobhi-adraki.jpg",                 tags: [], description: "" },
        { name: "Pindi Chana Masala",           price: 220, image: "images/pindi-chana-masala.jpg",           tags: [], description: "" },
        { name: "Methi Mutter Malai",           price: 240, image: "images/methi-mutter-malai.jpg",           tags: [], description: "" },
        { name: "Kadhai Mushroom",              price: 279, image: "images/kadhai-mushroom.jpg",              tags: [], description: "" },
        { name: "Jalfrezi",                     price: 199, image: "images/jalfrezi.jpg",                     tags: [], description: "" },
        { name: "Punjabi Aloo",                 price: 199, image: "images/punjabi-aloo.jpg",                 tags: [], description: "" },
        { name: "Kadhai Soya Chaap",            price: 279, image: "images/kadhai-soya-chaap.jpg",            tags: [], description: "" },
        { name: "Soya Chaap Tikka Masala",      price: 299, image: "images/soya-chaap-tikka-masala.jpg",      tags: [], description: "" }
    ]
},

/* ---------------- WARM & COZY ---------------- */
{
    category: "Warm & Cozy",
    note: "",
    items: [
        { name: "Tea (HOT)",          price: 40, image: "images/tea-hot.jpg",          tags: [], description: "" },
        { name: "Masala Tea (HOT)",   price: 50, image: "images/masala-tea-hot.jpg",   tags: [], description: "" },
        { name: "Coffee (HOT)",       price: 60, image: "images/coffee-hot.jpg",       tags: [], description: "" },
        { name: "Green Tea",          price: 50, image: "images/green-tea.jpg",        tags: [], description: "" },
        { name: "Lemon Tea",          price: 50, image: "images/lemon-tea.jpg",        tags: [], description: "" },
        { name: "Black Tea",          price: 40, image: "images/black-tea.jpg",        tags: [], description: "" },
        { name: "Black Coffee",       price: 50, image: "images/black-coffee.jpg",     tags: [], description: "" }
    ]
},

/* ---------------- SHAKE IT UP! ---------------- */
{
    category: "Shake It Up!",
    note: "",
    items: [
        { name: "Cold Coffee",                    price: 149, image: "images/cold-coffee.jpg",                    tags: [], description: "" },
        { name: "Cold Coffee (With ice cream)",   price: 169, image: "images/cold-coffee-with-ice-cream.jpg",    tags: [], description: "" },
        { name: "Strawberry Shake",               price: 189, image: "images/strawberry-shake.jpg",               tags: [], description: "" },
        { name: "Butter Scotch Shake",            price: 189, image: "images/butter-scotch-shake.jpg",            tags: [], description: "" },
        { name: "Chocolate Shake",                price: 189, image: "images/chocolate-shake.jpg",                tags: [], description: "" },
        { name: "Vanilla Shake",                  price: 179, image: "images/vanilla-shake.jpg",                  tags: [], description: "" },
        { name: "Black Current Shake",            price: 179, image: "images/black-current-shake.jpg",            tags: [], description: "" },
        { name: "Banana Shake",                   price: 159, image: "images/banana-shake.jpg",                   tags: [], description: "" },
        { name: "Belgian Chocolate Shake",        price: 199, image: "images/belgian-chocolate-shake.jpg",        tags: [], description: "" },
        { name: "Oreo Shake",                     price: 179, image: "images/oreo-shake.jpg",                     tags: [], description: "" },
        { name: "Kit Kat Shake",                  price: 179, image: "images/kit-kat-shake.jpg",                  tags: [], description: "" },
        { name: "Mango Shake",                    price: 119, image: "images/mango-shake.jpg",                    tags: [], description: "" },
        { name: "Choco Cookies Shake",            price: 189, image: "images/choco-cookies-shake.jpg",            tags: [], description: "" },
        { name: "Choco Nutella Shake",            price: 179, image: "images/choco-nutella-shake.jpg",            tags: [], description: "" },
        { name: "Choco Brownie Shake",            price: 189, image: "images/choco-brownie-shake.jpg",            tags: [], description: "" },
        { name: "Choco Muffin Shake",             price: 189, image: "images/choco-muffin-shake.jpg",             tags: [], description: "" },
        { name: "Choco Fudge Shake",              price: 199, image: "images/choco-fudge-shake.jpg",              tags: [], description: "" },
        { name: "Choco Hazelnut Shake",           price: 189, image: "images/choco-hazelnut-shake.jpg",           tags: [], description: "" }
    ]
},

/* ---------------- FIZZY MOCKTAILS ---------------- */
{
    category: "Fizzy Mocktails",
    note: "",
    items: [
        { name: "Blue Lagoon",                          price: 149, image: "images/blue-lagoon.jpg",           tags: [], description: "" },
        { name: "Virgin Mojito",                        price: 149, image: "images/virgin-mojito.jpg",         tags: [], description: "" },
        { name: "Orange Mojito",                        price: 149, image: "images/orange-mojito.jpg",         tags: [], description: "" },
        { name: "Mint Mojito",                          price: 139, image: "images/mint-mojito.jpg",           tags: [], description: "" },
        { name: "Fresh Lime Soda (Sweet/Salt/Mix)",     price:  99, image: "images/fresh-lime-soda.jpg",      tags: [], description: "" },
        { name: "Ice Tea",                              price:  69, image: "images/ice-tea.jpg",               tags: [], description: "" },
        { name: "Fruit Punch",                          price: 159, image: "images/fruit-punch.jpg",           tags: [], description: "" },
        { name: "Aam Panna",                            price: 159, image: "images/aam-panna.jpg",             tags: [], description: "" },
        { name: "Mango Cooler",                         price: 139, image: "images/mango-cooler.jpg",          tags: [], description: "" }
    ]
},

/* ---------------- SOULFUL SOUPS ---------------- */
{
    category: "Soulful Soups",
    note: "",
    items: [
        { name: "Manchow Soup",               price: 119, image: "images/manchow-soup.jpg",               tags: [], description: "" },
        { name: "Hot & Sour Soup",            price: 119, image: "images/hot-sour-soup.jpg",              tags: [], description: "" },
        { name: "Sweet Corn Soup",            price: 119, image: "images/sweet-corn-soup.jpg",            tags: [], description: "" },
        { name: "Lemon Coriander Soup",       price: 129, image: "images/lemon-coriander-soup.jpg",       tags: [], description: "" },
        { name: "Cream Of Tomato Soup",       price: 149, image: "images/cream-of-tomato-soup.jpg",       tags: [], description: "" },
        { name: "Cream Of Mushroom Soup",     price:  99, image: "images/cream-of-mushroom-soup.jpg",     tags: [], description: "" },
        { name: "Veg Clear Soup",             price: 139, image: "images/veg-clear-soup.jpg",             tags: [], description: "" },
        { name: "Thupka Soup",                price: null, image: "images/thupka-soup.jpg",               tags: [], description: "" }
    ]
},

/* ---------------- LASSI ---------------- */
{
    category: "Lassi",
    note: "",
    items: [
        { name: "Butter Milk (Masala Chhas)",   price: 89, image: "images/butter-milk-masala-chhas.jpg",   tags: [], description: "" },
        { name: "Punjabi Lassi (Sweet)",        price: 99, image: "images/punjabi-lassi-sweet.jpg",         tags: [], description: "" }
    ]
},

/* ---------------- TANDOORI STATION ---------------- */
{
    category: "Tandoori Station",
    note: "",
    items: [
        { name: "Tandoori Paneer Tikka",            price: 289, image: "images/tandoori-paneer-tikka.jpg",              tags: [], description: "" },
        { name: "Tandoori Paneer Malai Tikka",      price: 319, image: "images/tandoori-paneer-malai-tikka.jpg",        tags: [], description: "" },
        { name: "Tandoori Achari Paneer Tikka",     price: 289, image: "images/tandoori-achari-paneer-tikka.jpg",       tags: [], description: "" },
        { name: "Tandoori Pudina Paneer Tikka",     price: 299, image: "images/tandoori-pudina-paneer-tikka.jpg",       tags: [], description: "" },
        { name: "Tandoori Pudina Soya Chaap",       price: 289, image: "images/tandoori-pudina-soya-chaap.jpg",         tags: [], description: "" },
        { name: "Tandoori Masala Chaap",            price: 269, image: "images/tandoori-masala-chaap.jpg",              tags: [], description: "" },
        { name: "Tandoori Stuffed Aloo",            price: 289, image: "images/tandoori-stuffed-aloo.jpg",              tags: [], description: "" },
        { name: "Afghani Soya Chaap",               price: 289, image: "images/afghani-soya-chaap.jpg",                 tags: [], description: "" },
        { name: "Tandoori Soya Chaap",              price: 329, image: "images/tandoori-soya-chaap.jpg",                tags: [], description: "" },
        { name: "Tandoori Malai Chaap",             price: 259, image: "images/tandoori-malai-chaap.jpg",               tags: [], description: "" },
        { name: "Tandoori Achari Chaap",            price: 319, image: "images/tandoori-achari-chaap.jpg",              tags: [], description: "" },
        { name: "Tandoori Mushroom Tikka",          price: 359, image: "images/tandoori-mushroom-tikka.jpg",            tags: [], description: "" },
        { name: "Tandoori Stuffed Mushroom Tikka",  price: 299, image: "images/tandoori-stuffed-mushroom-tikka.jpg",    tags: [], description: "" },
        { name: "Tandoori Broccoli",                price: 259, image: "images/tandoori-broccoli.jpg",                  tags: [], description: "" },
        { name: "Tandoori Veg Seekh Kabab",         price: 269, image: "images/tandoori-veg-seekh-kabab.jpg",           tags: [], description: "" },
        { name: "Dahi Ke Kabab",                    price: 199, image: "images/dahi-ke-kabab.jpg",                      tags: [], description: "" },
        { name: "Hara Bhara Kabab",                 price: 279, image: "images/hara-bhara-kabab.jpg",                   tags: [], description: "" },
        { name: "Tandoori Pineapple Tikka",         price: 319, image: "images/tandoori-pineapple-tikka.jpg",           tags: [], description: "" },
        { name: "Dahi Ke Shole",                    price: 149, image: "images/dahi-ke-shole.jpg",                      tags: [], description: "" },
        { name: "Chilli Paneer Roll",               price: 159, image: "images/chilli-paneer-roll.jpg",                 tags: [], description: "" },
        { name: "Paneer Tikka Roll",                price: 169, image: "images/paneer-tikka-roll.jpg",                  tags: [], description: "" },
        { name: "Malai Paneer Tikka Roll",          price: 149, image: "images/malai-paneer-tikka-roll.jpg",            tags: [], description: "" },
        { name: "Tandoori Chaap Roll",              price: null, image: "images/tandoori-chaap-roll.jpg",               tags: [], description: "" }
    ]
}

];

/* --------------------------------------------------------------------------
 *  2. FLATTEN MENU (for search + specials)
 *  -------------------------------------------------------------------------- */
const allItems = [];

menuData.forEach(function (cat) {
    cat.items.forEach(function (item) {
        allItems.push({
            name: item.name,
            price: item.price,
            image: item.image,
            tags: item.tags || [],
            description: item.description || "",
            category: cat.category,
            categoryNote: cat.note || ""
        });
    });
});

/* --------------------------------------------------------------------------
 *  3. SPECIALS
 *  Only items carrying one of these exact tags are treated as specials.
 *  These three strings are the source of truth — do not change them.
 *  -------------------------------------------------------------------------- */
const SPECIAL_TAGS = ["Special", "Raj Delight Special", "Flavoured By Raj"];

function isSpecialItem(item) {
    if (!item.tags || !item.tags.length) return false;
    for (let i = 0; i < item.tags.length; i++) {
        if (SPECIAL_TAGS.indexOf(item.tags[i]) !== -1) return true;
    }
    return false;
}

const specialItems = allItems.filter(isSpecialItem);

/* --------------------------------------------------------------------------
 *  4. DOM REFERENCES
 *  -------------------------------------------------------------------------- */
const topbar          = document.getElementById("topbar");
const navToggle       = document.getElementById("navToggle");
const navSheet        = document.getElementById("navSheet");
const navBackdrop     = document.getElementById("navBackdrop");
const heroVideo       = document.getElementById("heroVideo");
const specialsRail    = document.getElementById("specialsRail");
const categoryChips   = document.getElementById("categoryChips");
const searchInput     = document.getElementById("searchInput");
const searchClear     = document.getElementById("searchClear");
const menuToolbar     = document.getElementById("menuToolbar");
const menuStatus      = document.getElementById("menuStatus");
const menuResults     = document.getElementById("menuResults");
const emptyState      = document.getElementById("emptyState");
const resetFilters    = document.getElementById("resetFilters");
const resetFiltersTop = document.getElementById("resetFiltersTop");
const toTop           = document.getElementById("toTop");

/* --------------------------------------------------------------------------
 *  5. STATE
 *  -------------------------------------------------------------------------- */
let activeCategory = "all";
let searchQuery    = "";

/* Cached metrics — measured on init / resize / font-load so that the
 *  scroll handler never performs a forced layout read. */
let topbarHeight     = 54;
let toolbarOffsetTop = Infinity; // natural (non-stuck) document Y of the toolbar

/* --------------------------------------------------------------------------
 *  6. HELPERS
 *  -------------------------------------------------------------------------- */

function prefersReducedMotion() {
    return !!(window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

/** Escape text for safe HTML insertion. */
function esc(str) {
    return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Format price for display. null / undefined -> "Price on request". */
function formatPrice(price) {
    if (price === null || price === undefined) {
        return '<span class="item__price item__price--ask">Price on request</span>';
    }
    return '<span class="item__price">\u20B9' + price + "</span>";
}

/** Short tag label. */
function tagLabel(tag) {
    if (tag === "Raj Delight Special") return "Raj Delight Special";
    if (tag === "Flavoured By Raj")    return "Flavoured By Raj";
    if (tag === "Special")             return "Special";
    return tag;
}

function tagClass(tag) {
    if (tag === "Raj Delight Special") return "tag tag--special";
    if (tag === "Flavoured By Raj")    return "tag tag--raj";
    return "tag tag--special";
}

/** Thumbnail markup for a regular menu item. */
function itemThumbHTML(image, name) {
    return (
        '<div class="item__thumb">' +
        '<div class="thumb__ph" aria-hidden="true">' +
        '<span class="thumb__mark">RD</span>' +
        '<span class="thumb__note">Image coming soon</span>' +
        "</div>" +
        '<img class="thumb__img" src="' + esc(image) + '" alt="' + esc(name) + '" ' +
        'loading="lazy" decoding="async" />' +
        "</div>"
    );
}

/** Thumbnail markup for a specials card. */
function specThumbHTML(image, name) {
    return (
        '<div class="spec-card__thumb">' +
        '<div class="thumb__ph" aria-hidden="true">' +
        '<span class="thumb__mark">RD</span>' +
        '<span class="thumb__note">Image coming soon</span>' +
        "</div>" +
        '<img class="thumb__img" src="' + esc(image) + '" alt="' + esc(name) + '" ' +
        'loading="lazy" decoding="async" />' +
        "</div>"
    );
}

/**
 * Attach load / error handlers to all newly created thumbs.
 * The placeholder sits underneath, so a missing file simply leaves
 * "Image coming soon" visible — nothing breaks.
 */
function bindThumbImages(scope) {
    if (!scope) return;
    const imgs = scope.querySelectorAll(".thumb__img");
    imgs.forEach(function (img) {
        if (img.dataset.bound === "1") return;
        img.dataset.bound = "1";

        img.addEventListener("load", function () {
            img.classList.add("is-loaded");
        });

        img.addEventListener("error", function () {
            img.classList.add("is-broken");
            img.removeAttribute("src");
        });

        // Cached images may already be complete before listeners attach
        if (img.complete) {
            if (img.naturalWidth > 0) img.classList.add("is-loaded");
            else img.classList.add("is-broken");
        }
    });
}

/**
 * Walk the offsetParent chain to get an element's natural document Y.
 * Unlike getBoundingClientRect(), this is unaffected by sticky positioning,
 * so it can be called safely at any scroll offset.
 */
function getAbsoluteOffsetTop(el) {
    let top = 0;
    let node = el;
    while (node) {
        top += node.offsetTop || 0;
        node = node.offsetParent;
    }
    return top;
}

/** Cache the fixed topbar height (includes the top safe-area inset). */
function measureTopbar() {
    topbarHeight = (topbar && topbar.offsetHeight) || 54;
}

/**
 * Cache the sticky menu-toolbar's natural document Y so the scroll handler
 * can decide whether it is "stuck" without any per-frame layout reads.
 */
function measureToolbar() {
    if (!menuToolbar) return;
    toolbarOffsetTop = getAbsoluteOffsetTop(menuToolbar);
}

/* --------------------------------------------------------------------------
 *  6b. SCROLL-REVEAL SYSTEM
 *  One shared IntersectionObserver. Elements get a one-time "reveal"
 *  transition with a per-element --rd stagger delay.
 *  Each element is unobserved as soon as it has been revealed.
 *  -------------------------------------------------------------------------- */
const revealObserver = ("IntersectionObserver" in window)
? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
    });
}, { threshold: 0.06, rootMargin: "0px 0px -6% 0px" })
: null;

/**
 * Prepare an element for reveal.
 * instant = true skips the animation (used for search re-renders).
 */
function prepReveal(el, delay, instant) {
    if (!el) return;
    el.style.setProperty("--rd", (delay || 0) + "ms");
    if (instant || prefersReducedMotion() || !revealObserver) {
        el.classList.add("is-visible");
        return;
    }
    el.classList.add("reveal");
    revealObserver.observe(el);
}

/** Static [data-reveal] sections. */
function initStaticReveals() {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
        prepReveal(el, 0, false);
    });
}

/* --------------------------------------------------------------------------
 *  7. RENDER — SPECIALS
 *  -------------------------------------------------------------------------- */
function renderSpecials() {
    if (!specialsRail) return;

    let html = "";

    specialItems.forEach(function (item) {
        const priceHTML = (item.price === null || item.price === undefined)
        ? "Price on request"
        : "\u20B9" + item.price;

        html +=
        '<article class="spec-card" role="listitem">' +
        specThumbHTML(item.image, item.name) +
        '<div class="spec-card__body">' +
        '<h3 class="spec-card__name">' + esc(item.name) + "</h3>" +
        '<p class="spec-card__cat">' + esc(item.category) + "</p>" +
        '<p class="spec-card__price">' + priceHTML + "</p>" +
        "</div>" +
        "</article>";
    });

    specialsRail.innerHTML = html;
    bindThumbImages(specialsRail);

    // Staggered entrance for the rail cards
    const cards = specialsRail.querySelectorAll(".spec-card");
    cards.forEach(function (card, i) {
        prepReveal(card, Math.min(i, 6) * 70, false);
    });
}

/* --------------------------------------------------------------------------
 *  8. RENDER — CATEGORY CHIPS
 *  Uses aria-pressed toggle buttons inside a role="group" container.
 *  -------------------------------------------------------------------------- */
function renderChips() {
    if (!categoryChips) return;

    let html = "";

    // "All" chip first
    html +=
    '<button type="button" class="chip' +
    (activeCategory === "all" ? " is-active" : "") +
    '" data-category="all" aria-pressed="' +
    (activeCategory === "all") + '">All</button>';

    menuData.forEach(function (cat) {
        const isActive = activeCategory === cat.category;
        html +=
        '<button type="button" class="chip' +
        (isActive ? " is-active" : "") +
        '" data-category="' + esc(cat.category) + '" aria-pressed="' +
        isActive + '">' + esc(cat.category) + "</button>";
    });

    categoryChips.innerHTML = html;
}

/* --------------------------------------------------------------------------
 *  9. FILTERING
 *  -------------------------------------------------------------------------- */
function matchesSearch(item, q) {
    if (!q) return true;
    const haystack = (
        item.name + " " +
        item.category + " " +
        item.description + " " +
        item.tags.join(" ")
    ).toLowerCase();
    return haystack.indexOf(q) !== -1;
}

function getVisibleGroups() {
    const q = searchQuery.trim().toLowerCase();

    return menuData
    .filter(function (cat) {
        return activeCategory === "all" || cat.category === activeCategory;
    })
    .map(function (cat) {
        const items = cat.items.filter(function (item) {
            return matchesSearch(
                {
                    name: item.name,
                    category: cat.category,
                    description: item.description || "",
                    tags: item.tags || []
                },
                q
            );
        });
        return { category: cat.category, note: cat.note || "", items: items };
    })
    .filter(function (g) { return g.items.length > 0; });
}

/* --------------------------------------------------------------------------
 *  10. RENDER — MENU
 *  -------------------------------------------------------------------------- */
function renderMenu() {
    if (!menuResults) return;

    const groups = getVisibleGroups();
    const totalItems = groups.reduce(function (sum, g) {
        return sum + g.items.length;
    }, 0);

    // While searching, re-renders should not replay entrance animations
    const instant = searchQuery.trim().length > 0;

    // Status line
    if (menuStatus) {
        if (searchQuery || activeCategory !== "all") {
            const parts = [];
            if (searchQuery) parts.push('\u201C' + esc(searchQuery) + '\u201D');
            if (activeCategory !== "all") parts.push(esc(activeCategory));
            menuStatus.textContent =
            totalItems + (totalItems === 1 ? " dish" : " dishes") +
            " \u00B7 " + parts.join(" \u00B7 ");
            if (resetFiltersTop) resetFiltersTop.hidden = false;
        } else {
            menuStatus.textContent =
            allItems.length + " dishes \u00B7 " + menuData.length + " categories";
            if (resetFiltersTop) resetFiltersTop.hidden = true;
        }
    }

    // Empty state
    if (totalItems === 0) {
        menuResults.innerHTML = "";
        if (emptyState) emptyState.hidden = false;
        return;
    }
    if (emptyState) emptyState.hidden = true;

    // Build groups
    let html = "";
    groups.forEach(function (group) {
        html += '<section class="cat-group" data-category="' + esc(group.category) + '">';
        html += '<header class="cat-group__head">';
        html += '<h3 class="cat-group__title">' + esc(group.category) + "</h3>";
        if (group.note) {
            html += '<p class="cat-group__note">' + esc(group.note) + "</p>";
        }
        html += "</header>";
        html += '<div class="cat-group__items">';

        group.items.forEach(function (item) {
            const tagsHTML = (item.tags || []).map(function (t) {
                return '<span class="' + tagClass(t) + '">' + esc(tagLabel(t)) + "</span>";
            }).join("");

            html +=
            '<article class="item">' +
            itemThumbHTML(item.image, item.name) +
            '<div class="item__body">' +
            '<div class="item__head">' +
            '<h4 class="item__name">' + esc(item.name) + "</h4>" +
            /* Raj Delight is a 100% vegetarian kitchen, so every item
             *              carries the vegetarian indicator. */
            '<span class="veg-dot" role="img" aria-label="Vegetarian"></span>' +
            "</div>" +
            (tagsHTML ? '<div class="item__tags">' + tagsHTML + "</div>" : "") +
            (item.description ? '<p class="item__desc">' + esc(item.description) + "</p>" : "") +
            formatPrice(item.price) +
                "</div>" +
                "</article>";
        });

        html += "</div></section>";
    });

    menuResults.innerHTML = html;
    bindThumbImages(menuResults);

    // Reveal groups + rows (lightweight, short stagger)
    menuResults.querySelectorAll(".cat-group").forEach(function (groupEl, gi) {
        prepReveal(groupEl, Math.min(gi, 3) * 60, instant);
        groupEl.querySelectorAll(".item").forEach(function (itemEl, ii) {
            prepReveal(itemEl, Math.min(ii, 5) * 30, instant);
        });
    });
}

/* --------------------------------------------------------------------------
 *  11. SEARCH
 *  -------------------------------------------------------------------------- */
let searchTimer = null;

function onSearchInput() {
    const value = searchInput.value;
    if (searchClear) searchClear.hidden = value.length === 0;

    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
        searchQuery = value.trim();
        renderMenu();
    }, 110);
}

function clearSearch() {
    searchInput.value = "";
    searchQuery = "";
    if (searchClear) searchClear.hidden = true;
    renderMenu();
}

/* --------------------------------------------------------------------------
 *  12. CATEGORY CHIP HANDLING (event delegation)
 *  -------------------------------------------------------------------------- */
function onChipClick(e) {
    const chip = e.target.closest(".chip");
    if (!chip) return;

    const cat = chip.dataset.category;
    if (!cat) return;

    activeCategory = cat;

    // Update active state without a full chip re-render
    categoryChips.querySelectorAll(".chip").forEach(function (c) {
        const isActive = c.dataset.category === cat;
        c.classList.toggle("is-active", isActive);
        c.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    renderMenu();

    // Bring the selected chip into view
    chip.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
                        block: "nearest",
                        inline: "center"
    });
}

/* --------------------------------------------------------------------------
 *  13. RESET FILTERS
 *  -------------------------------------------------------------------------- */
function resetAllFilters() {
    activeCategory = "all";
    searchQuery = "";
    searchInput.value = "";
    if (searchClear) searchClear.hidden = true;
    renderChips();
    renderMenu();
}

/* --------------------------------------------------------------------------
 *  14. NAV SHEET + BACKDROP + SCROLL LOCK + FOCUS
 *  The scroll lock is applied to both <html> and <body> so that iOS Safari
 *  (which ignores overflow:hidden on <body> alone) reliably prevents
 *  background scrolling while the sheet is open.
 *  -------------------------------------------------------------------------- */
function lockScroll() {
    document.documentElement.classList.add("is-locked");
    document.body.classList.add("is-locked");
}

function unlockScroll() {
    document.documentElement.classList.remove("is-locked");
    document.body.classList.remove("is-locked");
}

function openNav() {
    navSheet.classList.add("is-open");
    navSheet.setAttribute("aria-hidden", "false");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation");
    if (navBackdrop) navBackdrop.classList.add("is-open");
    lockScroll();

    // Move focus into the sheet once it has become visible. Using rAF
    // (rather than a timeout) keeps this off the click handler's stack
    // and after the visibility transition has flipped.
    window.requestAnimationFrame(function () {
        const first = navSheet.querySelector('a[href], button:not([disabled])');
        if (first) {
            try { first.focus({ preventScroll: true }); }
            catch (err) { first.focus(); }
        }
    });
}

/**
 * Close the navigation sheet.
 *   restoreFocus (default true) — return focus to the hamburger toggle.
 *   Pass { restoreFocus: false } when the close was triggered by an
 *   in-page link, so the anchor handler's focus-to-target wins.
 */
function closeNav(options) {
    const restoreFocus = !options || options.restoreFocus !== false;
    const wasOpen = navSheet.classList.contains("is-open");

    navSheet.classList.remove("is-open");
    navSheet.setAttribute("aria-hidden", "true");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    if (navBackdrop) navBackdrop.classList.remove("is-open");
    unlockScroll();

    if (wasOpen && restoreFocus) {
        try { navToggle.focus({ preventScroll: true }); }
        catch (err) { navToggle.focus(); }
    }
}

function toggleNav() {
    if (navSheet.classList.contains("is-open")) closeNav();
    else openNav();
}

/**
 * Minimal focus trap for the open navigation sheet.
 * Attached to the nav sheet itself, so it only fires while focus is
 * inside the sheet. Cycles between the first and last focusable items
 * on Tab / Shift+Tab. Not a full trap; a full trap would be overkill
 * for a 5-item menu.
 */
function onNavSheetKeydown(e) {
    if (e.key !== "Tab") return;
    if (!navSheet.classList.contains("is-open")) return;

    const focusables = navSheet.querySelectorAll('a[href], button:not([disabled])');
    if (!focusables.length) return;

    const first = focusables[0];
    const last  = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
    }
}

/* --------------------------------------------------------------------------
 *  15. STICKY / SCROLL BEHAVIOUR
 *  Reads are batched inside a single rAF callback. Both topbar height and
 *  toolbar offset are cached, so no layout is forced during scroll.
 *  -------------------------------------------------------------------------- */
let lastScrollY = 0;
let ticking = false;

function onScroll() {
    lastScrollY = window.scrollY || window.pageYOffset || 0;

    if (!ticking) {
        window.requestAnimationFrame(updateScrollUI);
        ticking = true;
    }
}

function updateScrollUI() {
    // Solid topbar after leaving the top of the hero
    if (topbar) topbar.classList.toggle("is-solid", lastScrollY > 40);

    // Toolbar shadow when it becomes stuck under the topbar. Uses cached
    // measurements — no per-frame layout reads.
    if (menuToolbar) {
        const stuck = (lastScrollY + topbarHeight + 1) >= toolbarOffsetTop;
        menuToolbar.classList.toggle("is-stuck", stuck);
    }

    // Back-to-top visibility
    if (toTop) toTop.classList.toggle("is-visible", lastScrollY > 700);

    ticking = false;
}

/** Re-measure both cached metrics and refresh the UI state. */
function remeasure() {
    measureTopbar();
    measureToolbar();
    updateScrollUI();
}

/* --------------------------------------------------------------------------
 *  16. SMOOTH ANCHOR SCROLL (accounts for sticky header + toolbar)
 *  Uses getElementById (safer than querySelector for arbitrary hrefs).
 *  Only same-page anchors are intercepted; external links with their own
 *  target / rel are left to the browser.
 *  -------------------------------------------------------------------------- */
function onAnchorClick(e) {
    // Defensive: e.target may not be an Element in edge cases
    if (!e.target || typeof e.target.closest !== "function") return;

    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    // Strip the leading "#" and use getElementById for a stricter,
    // injection-resistant lookup than querySelector.
    const idName = href.charAt(0) === "#" ? href.slice(1) : href;
    if (!idName) return;

    const target = document.getElementById(idName);
    if (!target) return;

    e.preventDefault();

    const toolbarH = (idName === "menu" && menuToolbar) ? menuToolbar.offsetHeight : 0;
    const offset = topbarHeight + toolbarH + 8;

    const top = target.getBoundingClientRect().top + (window.pageYOffset || window.scrollY || 0) - offset;

    window.scrollTo({
        top: top,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
    });

    // Close the nav sheet without stealing the focus that will be moved
    // to the target section below.
    if (navSheet.classList.contains("is-open")) {
        closeNav({ restoreFocus: false });
    }

    // Move focus for keyboard / screen-reader users.
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    setTimeout(function () {
        try { target.focus({ preventScroll: true }); }
        catch (err) { target.focus(); }
    }, prefersReducedMotion() ? 0 : 420);
}

/* --------------------------------------------------------------------------
 *  17. HERO VIDEO — resilient, bandwidth-aware autoplay
 *  Local file only. Attempts are guarded so the IntersectionObserver can
 *  fire as often as it likes without spamming the media API.
 *  -------------------------------------------------------------------------- */
function attemptHeroPlay() {
    if (!heroVideo) return;
    if (!heroVideo.paused) return; // already playing — nothing to do
    const p = heroVideo.play();
    if (p && typeof p.catch === "function") p.catch(function () {});
}

function attemptHeroPause() {
    if (!heroVideo) return;
    if (heroVideo.paused) return;  // already paused — nothing to do
    heroVideo.pause();
}

function initHeroVideo() {
    if (!heroVideo) return;

    // The HTML `muted` attribute alone is unreliable across browsers.
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;

    const reduce = prefersReducedMotion();
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slowNetwork = !!(conn && (
        conn.saveData === true ||
        /(^|-)2g$/.test(conn.effectiveType || "")
    ));

    // Respect reduced motion and data-saver users: keep the poster, skip video.
    if (reduce || slowNetwork) {
        heroVideo.removeAttribute("autoplay");
        heroVideo.preload = "none";
        try { heroVideo.pause(); } catch (err) { /* ignore */ }
        return;
    }

    // Initial nudge — some mobile browsers need an explicit play() call.
    attemptHeroPlay();

    // Pause when off-screen to save bandwidth and battery;
    // resume when it becomes visible again.
    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) attemptHeroPlay();
                else attemptHeroPause();
            });
        }, { threshold: 0.15 });
        io.observe(heroVideo);
    }
}

/* --------------------------------------------------------------------------
 *  18. INIT
 *  -------------------------------------------------------------------------- */
function init() {
    renderSpecials();
    renderChips();
    renderMenu();
    initHeroVideo();
    initStaticReveals();

    // Trigger hero entrance animation on the next frame
    window.requestAnimationFrame(function () {
        document.body.classList.add("is-booted");
    });

    // Measure sticky offsets AFTER the DOM is populated.
    remeasure();

    // Nav
    navToggle.addEventListener("click", toggleNav);
    if (navBackdrop) navBackdrop.addEventListener("click", closeNav);

    // Category chips
    if (categoryChips) categoryChips.addEventListener("click", onChipClick);

    // Search
    searchInput.addEventListener("input", onSearchInput);
    if (searchClear) searchClear.addEventListener("click", clearSearch);

    // Reset
    if (resetFilters) resetFilters.addEventListener("click", resetAllFilters);
    if (resetFiltersTop) resetFiltersTop.addEventListener("click", resetAllFilters);

    // In-page anchors (also closes the nav sheet)
    document.addEventListener("click", onAnchorClick);

    // Keyboard: Escape clears a focused search field, or closes the nav.
    document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;

        if (searchInput && document.activeElement === searchInput && searchInput.value) {
            clearSearch();
            return;
        }

        if (navSheet.classList.contains("is-open")) {
            closeNav();
        }
    });

    // Focus trap while the sheet is open (listener scoped to the sheet)
    navSheet.addEventListener("keydown", onNavSheetKeydown);

    // Scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollUI();

    // Re-measure on layout changes
    window.addEventListener("resize", remeasure);
    window.addEventListener("orientationchange", function () {
        setTimeout(remeasure, 150);
    });

    // Webfont loading can shift the sections above the toolbar, so
    // re-measure once fonts are ready (guarded for older engines).
    if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === "function") {
        document.fonts.ready.then(remeasure).catch(function () {});
    }

    // Back to top
    if (toTop) {
        toTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion() ? "auto" : "smooth"
            });
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
