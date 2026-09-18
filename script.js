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
            { name: "Chole Bhature",        price: 120, image: "https://i.pinimg.com/736x/f2/25/e7/f225e7c05f20ab2e72688ee7231fd935.jpg",        tags: [], description: "" },
            { name: "Mangore",              price: 210, image: "images/mangore.jpg",              tags: [], description: "" },
            { name: "Mix Pakoda",           price: 210, image: "https://i.pinimg.com/736x/b1/b0/37/b1b037bb1131982277365eda2f63ba85.jpg",           tags: [], description: "" },
            { name: "Aloo Pakoda",          price: 119, image: "https://i.pinimg.com/736x/d7/5a/48/d75a48f280a92a276c57c6d85d6d2b9c.jpg",          tags: [], description: "" },
            { name: "Pyaz Pakoda",          price: 119, image: "https://i.pinimg.com/736x/e1/08/23/e1082384c96f434db219319456923fa1.jpg",          tags: [], description: "" },
            { name: "Paneer Pakoda",        price: 229, image: "https://i.pinimg.com/736x/f0/a9/29/f0a92981ad81b045200586a5a5f87ad3.jpg",        tags: [], description: "" },
            { name: "Fried Idli",           price: 199, image: "https://i.pinimg.com/736x/43/cb/df/43cbdf8168c1c364151fa705b2113d10.jpg",           tags: [], description: "" },
            { name: "Sweet Corn",           price: 199, image: "https://i.pinimg.com/736x/0b/c0/15/0bc01588abc208931c5e7832bc680f3c.jpg",           tags: [], description: "" },
            { name: "Mong Daal Chila",      price: 139, image: "https://i.pinimg.com/736x/58/04/fe/5804fe1ce154a17783dfdca5c046da28.jpg",      tags: [], description: "" },
            { name: "Veg Poha",             price: 149, image: "https://i.pinimg.com/736x/af/60/2f/af602f4c1c6cb6c1e82d56debae24b9a.jpg",             tags: [], description: "" },
            { name: "Aloo Tikki",           price:  50, image: "https://i.pinimg.com/736x/46/65/6f/46656f5b1edcd4920dfad64a8e5e0656.jpg",           tags: [], description: "" }
        ]
    },

/* ---------------- ITALIAN PASTA ---------------- */
{
    category: "Italian Pasta",
    note: "",
    items: [
        { name: "Red Sauce Pasta",      price: 220, image: "https://i.pinimg.com/736x/14/de/16/14de167494267101264a4ddf8932f156.jpg",      tags: [], description: "" },
        { name: "White Sauce Pasta",    price: 240, image: "https://i.pinimg.com/736x/99/6e/8e/996e8e6a0f6e99d2e0b18911c3db5e8c.jpg",    tags: [], description: "" },
        { name: "Mix Sauce Pasta",      price: 269, image: "https://i.pinimg.com/736x/52/08/af/5208afb747aff7c81cf445ececc4afbb.jpg",      tags: [], description: "" }
    ]
},

/* ---------------- FRIES ---------------- */
{
    category: "Fries",
    note: "",
    items: [
        { name: "French Fries",                   price: 120, image: "https://i.pinimg.com/736x/23/9a/cc/239accb1ea2e0d12e41a376a9adfd94b.jpg",                  tags: [], description: "" },
        { name: "Peri Peri French Fries",         price: 140, image: "https://i.pinimg.com/736x/c3/79/02/c379026d221f0e44b19c69b5eb07f5df.jpg",        tags: [], description: "" },
        { name: "Cheese French Fries",            price: 159, image: "https://i.pinimg.com/736x/44/9b/a6/449ba6cbea430b2604e3e80687ad6810.jpg",           tags: [], description: "" },
        { name: "New York Style French Fries",    price: 179, image: "https://i.pinimg.com/736x/9f/6e/8b/9f6e8bd1b8eb629713d9c693102ae8df.jpg",   tags: ["Raj Delight Special"], description: "" }
    ]
},

/* ---------------- SANDWICH ---------------- */
{
    category: "Sandwich",
    note: "",
    items: [
        { name: "Veg Grilled Sandwich",                   price: 149, image: "https://i.pinimg.com/236x/b8/e0/09/b8e0093ababd3c415809b80eb217b3a1.jpg",                   tags: [], description: "" },
        { name: "Veg Cheese Grilled Sandwich",            price: 160, image: "https://i.pinimg.com/736x/a7/9f/18/a79f187976327073a19b0dc2c3ff6270.jpg",            tags: [], description: "" },
        { name: "Paneer Grilled Sandwich",                price: 199, image: "https://i.pinimg.com/736x/7b/ea/06/7bea068aade92477e339ee3bdae706b3.jpg",                tags: [], description: "" },
        { name: "Tandoori Paneer Grilled Sandwich",       price: 210, image: "https://i.pinimg.com/736x/ef/12/99/ef1299d5f6fd471a513d672d0228d24d.jpg",       tags: [], description: "" },
        { name: "Double Decker Grilled Sandwich",         price: 219, image: "https://i.pinimg.com/736x/2e/09/6b/2e096bdf003139765f08bd91f230d300.jpg",         tags: [], description: "" },
        { name: "Double Decker Cheese Grilled Sandwich",  price: 239, image: "https://i.pinimg.com/736x/3c/77/4e/3c774e22186d33d9846d13d4d88699d1.jpg",  tags: [], description: "" }
    ]
},

/* ---------------- SPECIAL THALI'S ---------------- */
{
    category: "Special Thali's",
    note: "1:00 PM to 7:00 PM",
    items: [
        { name: "Rajasthani Thali",            price: 599, image: "https://i.pinimg.com/736x/1e/a3/10/1ea310a264a55c1cd640b5008062f52d.jpg",           tags: ["Special"], description: "" },
        { name: "Raj Delight Delux Thali",     price: 349, image: "https://i.pinimg.com/736x/7f/6f/15/7f6f154a900793bfd919d33839f5197c.jpg",    tags: [], description: "" },
        { name: "Bajra Roti",                  price:  19, image: "https://i.pinimg.com/736x/d6/5b/c4/d65bc4b5d44bae71190c2ff180b075fd.jpg",                 tags: [], description: "" },
        { name: "Makka Roti",                  price:  19, image: "https://i.pinimg.com/736x/a6/eb/90/a6eb90e95406502031078e31d8f4798c.jpg",                 tags: [], description: "" }
    ]
},

/* ---------------- SMOKEY GRILLS ---------------- */
{
    category: "Smokey Grills",
    note: "",
    items: [
        { name: "Tandoori Sizzler",   price: 425, image: "https://i.pinimg.com/736x/25/4c/9f/254c9f7469d51d93eedbe4adb35d10c5.jpg",   tags: [], description: "" },
        { name: "Chinesse Sizzler",   price: 399, image: "https://i.pinimg.com/736x/64/cf/13/64cf13cea78bfa9a3fd7c689417ecdeb.jpg",   tags: [], description: "" }
    ]
},

/* ---------------- CONTINENTAL / PIZZAS ---------------- */
{
    category: "Continental / Pizzas",
    note: "",
    items: [
        { name: "Classic Margherita Pizza",          price: 269, image: "https://i.pinimg.com/236x/98/8a/38/988a38e2a1ef68149b513b8580bd91e7.jpg",          tags: [], description: "" },
        { name: "Farm House Pizza",                  price: 279, image: "https://i.pinimg.com/736x/9a/db/dc/9adbdcb94cbf280069038151801e6eae.jpg",                  tags: [], description: "" },
        { name: "Corn & Cheese Pizza",               price: 259, image: "https://i.pinimg.com/736x/5d/b4/54/5db4547775d28ead6960fba7ec40cae9.jpg",                 tags: [], description: "" },
        { name: "Neapolitan Pizza",                  price: 279, image: "https://i.pinimg.com/736x/40/18/8b/40188b72cd034f9a032a84504457bb5b.jpg",                  tags: [], description: "" },
        { name: "Paneer Tikka Pizza",                price: 299, image: "https://i.pinimg.com/736x/7c/7c/3b/7c7c3b479de337b85eed0ed1f408bd0d.jpg",                tags: [], description: "" },
        { name: "Double Cheese Margherita Pizza",    price: 299, image: "https://i.pinimg.com/736x/40/76/f6/4076f6c8f1d2d84baff5bedd70dcc421.jpg",    tags: [], description: "" },
        { name: "Mushroom Mania",                    price: 319, image: "https://i.pinimg.com/736x/43/d1/aa/43d1aa54dbf2cdb8085701f9996f0de7.jpg",                    tags: [], description: "" }
    ]
},

/* ---------------- GARLIC BREADS ---------------- */
{
    category: "Garlic Breads",
    note: "",
    items: [
        { name: "Cheese Garlic Bread",   price: 179, image: "https://i.pinimg.com/736x/5b/18/9a/5b189ae3d5b1fdeb7dc0fcf96d3ae5bf.jpg",   tags: [], description: "" },
        { name: "Stuff Garlic Bread",    price: 199, image: "https://i.pinimg.com/736x/31/43/46/314346bf2c8b89191e82a07f26d199e5.jpg",    tags: [], description: "" }
    ]
},

/* ---------------- DELICIOUS BURGER ---------------- */
{
    category: "Delicious Burger",
    note: "",
    items: [
        { name: "Classic Veg Burger",         price:  79, image: "https://i.pinimg.com/736x/f4/46/c8/f446c8a394e81ce7602eeeedb433ae1e.jpg",          tags: [], description: "" },
        { name: "Cheese Burger",              price: 110, image: "https://i.pinimg.com/736x/14/92/6b/14926bca635a8c867e5ce0cc92b5997d.jpg",                tags: [], description: "" },
        { name: "Paneer Burger",              price: 109, image: "https://i.pinimg.com/736x/5f/d2/0c/5fd20c4fd10c90ce17e761a28259955e.jpg",                tags: [], description: "" },
        { name: "Cheese Paneer Burger",       price: 129, image: "https://i.pinimg.com/736x/51/3b/c6/513bc636462f1593d6aa182a779e2b2e.jpg",         tags: [], description: "" },
        { name: "Jalapeno Burger",            price: 119, image: "https://i.pinimg.com/736x/d7/19/3d/d7193de67448e2d342c89259adb36c36.jpg",              tags: [], description: "" },
        { name: "Cheese Jalapeno Burger",     price: 139, image: "https://i.pinimg.com/736x/85/e4/7c/85e47c49a6fa6f8dc605570617cc9671.jpg",       tags: [], description: "" }
    ]
},

/* ---------------- PAPAD ---------------- */
{
    category: "Papad",
    note: "",
    items: [
        { name: "Masala Papad",   price: 60, image: "https://i.pinimg.com/736x/39/74/26/397426a54626cf8a720342200ffa0192.jpg",   tags: [], description: "" },
        { name: "Plain Papad",    price: 35, image: "https://i.pinimg.com/736x/f5/da/26/f5da2640faafbe35b7b19eadc7fda05f.jpg",    tags: [], description: "" },
        { name: "Fry Papad",      price: 55, image: "https://i.pinimg.com/736x/9c/52/28/9c5228e6d5251a7d11093d801c5f7691.jpg",      tags: [], description: "" }
    ]
},

/* ---------------- CHINESE APPETIZERS ---------------- */
{
    category: "Chinese Appetizers",
    note: "",
    items: [
        { name: "Chilli Paneer Dry",              price: 289, image: "https://i.pinimg.com/736x/55/fc/e6/55fce6a2164968b3d19ab07060a79eb2.jpg",              tags: [], description: "" },
        { name: "Chilli Baby Corn",               price: 259, image: "https://i.pinimg.com/736x/06/fb/8a/06fb8a9a8afd28173ccb63f2cc119165.jpg",               tags: [], description: "" },
        { name: "Paneer'65",                      price: 260, image: "https://i.pinimg.com/736x/3e/8a/7c/3e8a7cf89e33a1a5691d9775861a8c51.jpg",                      tags: [], description: "" },
        { name: "Crispy Corn Salt & Pepper",      price: 210, image: "https://i.pinimg.com/736x/5d/7b/a0/5d7ba05bbe0f69bb8f928933495c6445.jpg",        tags: [], description: "" },
        { name: "American Corn",                  price: 249, image: "https://i.pinimg.com/736x/d0/54/d3/d054d3ffd14b62e75c376c7a870e36d6.jpg",                  tags: [], description: "" },
        { name: "Chilli Mushroom",                price: 299, image: "https://i.pinimg.com/736x/3b/91/c6/3b91c697ade8ac2e5386779f38cbc57d.jpg",                tags: [], description: "" },
        { name: "Chilli Soya Chaap",              price: 249, image: "https://i.pinimg.com/736x/50/c3/e7/50c3e7fd1f011d5c0d59b583ece86f32.jpg",              tags: [], description: "" },
        { name: "Spring Roll",                    price: 179, image: "https://i.pinimg.com/736x/38/7b/45/387b4507d97519ea14ad360af95740d3.jpg",                    tags: [], description: "" },
        { name: "Honey Chilli Potato",            price: 189, image: "https://i.pinimg.com/236x/14/16/c6/1416c6a5885fb92063b0ab3949bc95ca.jpg",            tags: [], description: "" },
        { name: "Chilli Potato",                  price: 179, image: "https://i.pinimg.com/736x/d3/2c/ba/d32cba1792c0c39986d4fc50f84e0ff2.jpg",                  tags: [], description: "" },
        { name: "Paneer-in-Hot Garlic",           price: 279, image: "https://i.pinimg.com/736x/b7/04/7c/b7047c2b75cfd6cd679c378171fa09d8.jpg",           tags: ["Raj Delight Special"], description: "" },
        { name: "Veg Manchurian Dry",             price: 249, image: "https://i.pinimg.com/736x/d2/26/09/d22609efc42984ac31068cafc8f9427b.jpg",             tags: [], description: "" },
        { name: "Paneer Manchurian Dry",          price: 259, image: "https://i.pinimg.com/736x/00/73/fc/0073fc82051bbed5d8cb93668b47f50b.jpg",          tags: [], description: "" },
        { name: "Crispy Baby Corn",               price: 229, image: "https://i.pinimg.com/736x/74/d8/c3/74d8c3549a8cba35a9ee2f534b1703d6.jpg",               tags: [], description: "" },
        { name: "Paneer Green Garlic",            price: 269, image: "https://i.pinimg.com/736x/f4/19/7d/f4197d965fb8ad561812b2e504321fdb.jpg",            tags: [], description: "" },
        { name: "Crispy Veggies (Salt & Pepper)", price: 210, image: "https://i.pinimg.com/736x/bd/bc/f9/bdbcf9629b9a1410b466d73e3c24186f.jpg",     tags: [], description: "" }
    ]
},

/* ---------------- DUMPLINGS / MOMOS ---------------- */
{
    category: "Dumplings / Momos",
    note: "",
    items: [
        { name: "Steem Veg Momos",                  price: 119, image: "https://i.pinimg.com/736x/d7/cc/77/d7cc778fa9aa5df245b22052f943889b.jpg",                  tags: [], description: "" },
        { name: "Steem Paneer Momos",               price: 149, image: "https://i.pinimg.com/736x/25/31/d2/2531d20404b47de4c76ef3d126349714.jpg",               tags: [], description: "" },
        { name: "Veg Kurkure Momos",                price: 169, image: "https://i.pinimg.com/736x/de/40/73/de407313b6300004594b4222eb5edab0.jpg",                tags: [], description: "" },
        { name: "Paneer Kurkure Momos",             price: 189, image: "https://i.pinimg.com/736x/b5/45/ec/b545ecd940127014ad53ce9b3a9f3c47.jpg",             tags: [], description: "" },
        { name: "Pan Fried Chilli Garlic Momos",    price: 199, image: "https://i.pinimg.com/736x/06/e6/bf/06e6bf5149ea115412d64de8b62f8300.jpg",    tags: [], description: "" },
        { name: "Tandoori Veg Momos",               price: 189, image: "https://i.pinimg.com/736x/62/85/a7/6285a7b22d09ee52e020fcb6a3df3b53.jpg",               tags: [], description: "" },
        { name: "Tandoori Paneer Momos",            price: 209, image: "https://i.pinimg.com/736x/b8/03/16/b803166e819559ee998a0950d8939fe9.jpg",            tags: [], description: "" }
    ]
},

/* ---------------- SAUCY DELIGHTS ---------------- */
{
    category: "Saucy Delights",
    note: "",
    items: [
        { name: "Manchurian Gravy",        price: 249, image: "https://i.pinimg.com/736x/7c/de/8c/7cde8c4a7e8534e134037cdec71bfb8f.jpg",        tags: [], description: "" },
        { name: "Chilli Paneer Gravy",     price: 259, image: "https://i.pinimg.com/736x/18/82/95/18829555b3abb2b8a2aec92c829474c2.jpg",     tags: [], description: "" },
        { name: "Veg Hot Garlic Gravy",    price: 269, image: "https://i.pinimg.com/736x/0f/27/aa/0f27aa6ceab458a6c1724858b04abad4.jpg",    tags: [], description: "" },
        { name: "Chilli Mushroom Gravy",   price: 299, image: "https://i.pinimg.com/736x/73/db/83/73db83a9165b4d72919183796e809b70.jpg",   tags: [], description: "" }
    ]
},

/* ---------------- CHINESE CUISINE ---------------- */
{
    category: "Chinese Cuisine",
    note: "",
    items: [
        { name: "Veg Fried Rice",               price: 249, image: "https://i.pinimg.com/736x/32/a0/24/32a024e8d45ee78ebed2cf26e018e831.jpg",               tags: [], description: "" },
        { name: "Schezwan Fried Rice",          price: 279, image: "https://i.pinimg.com/736x/f1/e4/1a/f1e41a889bf6899e729ca20bb34a0bbc.jpg",          tags: [], description: "" },
        { name: "Chilli Garlic Fried Rice",     price: 269, image: "https://i.pinimg.com/736x/c8/60/58/c86058b5b4cc6af79221a0538d19fa83.jpg",     tags: [], description: "" },
        { name: "Veg Noodles",                  price: 199, image: "https://i.pinimg.com/736x/da/8d/a5/da8da53e821aafe412d02df529e33be0.jpg",                  tags: [], description: "" },
        { name: "Hakka Noodles",                price: 239, image: "https://i.pinimg.com/736x/7c/d7/42/7cd742064b4915f3511ad7973e75d6a5.jpg",                tags: [], description: "" },
        { name: "Singapori Noodles",            price: 239, image: "https://i.pinimg.com/736x/4e/f1/e4/4ef1e4feed1fa4f3ea350a13c60d9dd0.jpg",            tags: [], description: "" },
        { name: "Chilli Garlic Noodles",        price: 229, image: "https://i.pinimg.com/736x/75/92/f5/7592f529505c44e6b4f2df40204f0c2d.jpg",        tags: [], description: "" },
        { name: "Schezwan Noodles",             price: 229, image: "https://i.pinimg.com/736x/43/a2/de/43a2de4d5260a4213317e6f4869f1dac.jpg",             tags: [], description: "" },
        { name: "Paneer Noodles",               price: 239, image: "https://i.pinimg.com/736x/90/83/8d/90838d066bd12b2b0f11053f1262a514.jpg",               tags: [], description: "" }
    ]
},

/* ---------------- SALADS ---------------- */
{
    category: "Salads",
    note: "",
    items: [
        { name: "Garden green Salad",   price: 99, image: "https://i.pinimg.com/736x/af/0c/d8/af0cd8296b7538581beca458c372b3a3.jpg",   tags: [], description: "" },
        { name: "Cucumber Salad",       price: 69, image: "https://i.pinimg.com/736x/89/de/4f/89de4fcbe1f2ad8239f98d122c6ae278.jpg",       tags: [], description: "" },
        { name: "Onion Salad",          price: 69, image: "https://i.pinimg.com/736x/a2/c4/a6/a2c4a61040c534e82fca25feed54e418.jpg",          tags: [], description: "" },
        { name: "Kimchi Salad",         price: 99, image: "https://i.pinimg.com/736x/b0/bc/37/b0bc37a9253ef570072f3e1c5a980cab.jpg",         tags: [], description: "" }
    ]
},

/* ---------------- INDIAN BREADS ---------------- */
{
    category: "Indian Breads",
    note: "",
    items: [
        { name: "Plain Roti",         price:  20, image: "https://i.pinimg.com/736x/b5/a1/50/b5a150df0d5414e464c44b32042c8cd0.jpg",          tags: [], description: "" },
        { name: "Butter Roti",        price:  30, image: "https://i.pinimg.com/736x/a3/55/c6/a355c61ebdc53799f5b6ca7da5b6a9b2.jpg",         tags: [], description: "" },
        { name: "Laccha Paratha",     price:  60, image: "https://i.pinimg.com/736x/51/0b/05/510b05d77442118674682532c1ddb0f7.jpg",      tags: [], description: "" },
        { name: "Tava Roti Plain",    price:  15, image: "https://i.pinimg.com/736x/f5/62/17/f56217fb453e6e624bb2a44a81b23a3d.jpg",     tags: [], description: "" },
        { name: "Tava Roti Butter",   price:  20, image: "https://i.pinimg.com/736x/78/5d/57/785d570dda1bd0e7f19d79f49d6c39a4.jpg",    tags: [], description: "" },
        { name: "Plain Naan",         price:  50, image: "https://i.pinimg.com/736x/47/87/b4/4787b416f67dc013c444b9ca3d89b71c.jpg",          tags: [], description: "" },
        { name: "Butter Naan",        price:  60, image: "https://i.pinimg.com/736x/d3/7e/55/d37e555974bc9dfb7773edcae71a74d8.jpg",         tags: [], description: "" },
        { name: "Cheese Naan",        price:  80, image: "https://i.pinimg.com/736x/ae/03/48/ae034879801d1c56dda5202945559923.jpg",         tags: [], description: "" },
        { name: "Garlic Naan",        price:  60, image: "https://i.pinimg.com/736x/60/5e/2f/605e2f25881aa1f07bf7adf3e58cd70c.jpg",         tags: [], description: "" },
        { name: "Kashmiri Naan",      price:  99, image: "https://i.pinimg.com/736x/ed/0e/f4/ed0ef4760654a6ddaff89badf74d9beb.jpg",       tags: [], description: "" },
        { name: "Missi Roti",         price:  49, image: "https://i.pinimg.com/736x/5e/2f/3e/5e2f3e38e58ed3004fcd959995148500.jpg",          tags: [], description: "" },
        { name: "Onion Missi Roti",   price:  69, image: "https://i.pinimg.com/736x/2d/e2/6a/2de26a4491df5946ad75c5825877e7c8.jpg",    tags: [], description: "" },
        { name: "Stuffed Naan",       price:  70, image: "https://i.pinimg.com/736x/af/f8/b1/aff8b117ff2dab120cfc7acfcfbd668b.jpg",        tags: [], description: "" },
        { name: "Rumali Roti",        price:  15, image: "https://i.pinimg.com/736x/48/e6/6c/48e66c1329cf8bd7b074b720fe1c6ee9.jpg",         tags: [], description: "" },
        { name: "Bread Basket",       price: 349, image: "https://i.pinimg.com/736x/52/8b/24/528b2405068640f5b7841ddb4eea49b0.jpg",        tags: ["Raj Delight Special"], description: "" }
    ]
},

/* ---------------- PARATHA'S ---------------- */
{
    category: "Paratha's",
    note: "",
    items: [
        { name: "Paneer Paratha",        price: 99, image: "https://i.pinimg.com/736x/fd/ff/9c/fdff9c83387eab48499b154c97e2d2a6.jpg",         tags: [], description: "" },
        { name: "Aloo Paratha",          price: 89, image: "https://i.pinimg.com/736x/c5/e9/33/c5e93336b90be0ad759095c8df55df82.jpg",           tags: [], description: "" },
        { name: "Onion Paratha",         price: 89, image: "https://i.pinimg.com/736x/7a/85/85/7a85851d1a5bc048dcb86196002c090a.jpg",          tags: [], description: "" },
        { name: "Mix Veg Paratha",       price: 99, image: "https://i.pinimg.com/474x/73/c1/91/73c191178659ae8601f6ccc755ac9f90.jpg",        tags: [], description: "" },
        { name: "Green Chilli Paratha",  price: 75, image: "https://i.pinimg.com/736x/16/f4/14/16f4142d8b9a8a0a33e1345a582164de.jpg",   tags: [], description: "" },
        { name: "Gobhi Paratha",         price: 89, image: "https://i.pinimg.com/736x/54/4b/ae/544baee11755e8ce2df89a111f8902fd.jpg",          tags: [], description: "" }
    ]
},

/* ---------------- DAL DELIGHT ---------------- */
{
    category: "Dal Delight",
    note: "",
    items: [
        { name: "Dal Makhani",             price: 280, image: "https://i.pinimg.com/736x/06/a6/43/06a64350f7a136334e662732e11e7434.jpg",              tags: ["Special"], description: "" },
        { name: "Dal Handi (Amritsari)",   price: 259, image: "https://i.pinimg.com/736x/d6/53/51/d6535182f8d313f8bd7fbda768dc71ab.jpg",      tags: [], description: "" },
        { name: "Yellow Dal Tadka",        price: 219, image: "https://i.pinimg.com/736x/3e/f4/73/3ef473f8e09ef12ab94749b2e2f3a7bd.jpg",        tags: [], description: "" },
        { name: "Dal Fry",                 price: 229, image: "https://i.pinimg.com/736x/78/07/49/780749ed00ce42f45c5384938632aefa.jpg",                 tags: [], description: "" },
        { name: "Dal Panchrangi",          price: 259, image: "https://i.pinimg.com/736x/ca/62/95/ca62955156006db6b9dc5a255b6c7c7c.jpg",          tags: [], description: "" }
    ]
},

/* ---------------- RICE ---------------- */
{
    category: "Rice",
    note: "",
    items: [
        { name: "Steam Rice",      price: 120, image: "https://i.pinimg.com/736x/a0/2e/6e/a02e6e00b31b3e5384b5ba41adc1ca46.jpg",      tags: [], description: "" },
        { name: "Jeera Rice",      price: 149, image: "https://i.pinimg.com/736x/43/f4/3e/43f43e81b5bd816b5d112973c98c07ed.jpg",      tags: [], description: "" },
        { name: "Veg Pulao",       price: 199, image: "https://i.pinimg.com/736x/87/bd/05/87bd05be2dcf75b6c8574783d2ebd55c.jpg",       tags: [], description: "" },
        { name: "Matar Pulao",     price: 189, image: "https://i.pinimg.com/736x/4b/76/43/4b764343d7b07db1330b52d3b75060a7.jpg",     tags: [], description: "" },
        { name: "Kashmiri Pulao",  price: 219, image: "https://i.pinimg.com/236x/01/09/db/0109dbfa3a9177f063481cfaff49074f.jpg",  tags: ["Special"], description: "" }
    ]
},

/* ---------------- BIRYANI ---------------- */
{
    category: "Biryani",
    note: "",
    items: [
        { name: "Veg Biryani",             price: 289, image: "https://i.pinimg.com/736x/62/a2/ec/62a2ec14234b1ca73e423d93c3bd7776.jpg",              tags: [], description: "" },
        { name: "Paneer Tikka Biryani",    price: 319, image: "https://i.pinimg.com/736x/ce/7e/09/ce7e09275ab387656a09f452f8c1d677.jpg",     tags: [], description: "" },
        { name: "Veg Hyderabadi Biryani",  price: 310, image: "https://i.pinimg.com/736x/7e/87/9b/7e879b09c34f69b6827741bf15e4016d.jpg",   tags: ["Special"], description: "" }
    ]
},

/* ---------------- RAITAS ---------------- */
{
    category: "Raitas",
    note: "",
    items: [
        { name: "Boondi Raita",       price: 139, image: "https://i.pinimg.com/736x/47/44/2c/47442cd9889d3aaff733463d7b010377.jpg",       tags: [], description: "" },
        { name: "Mix Veg Raita",      price: 149, image: "https://i.pinimg.com/736x/0f/5d/8e/0f5d8ea48aef0b4c122fa520d5cc9f7c.jpg",      tags: [], description: "" },
        { name: "Pineapple Raita",    price: 159, image: "https://i.pinimg.com/736x/1e/d6/91/1ed6914c977436c3c308f7fc55cb6104.jpg",    tags: [], description: "" },
        { name: "Fruit Raita",        price: 169, image: "https://i.pinimg.com/736x/8a/71/9c/8a719c7feb7a92cfc651dad4c3009c57.jpg",        tags: [], description: "" },
        { name: "Plain Curd",         price:  69, image: "https://i.pinimg.com/736x/83/94/b8/8394b863006717ed9c5da9dedcfd9ee7.jpg",         tags: [], description: "" }
    ]
},

/* ---------------- INDIAN MAIN COURSE ---------------- */
{
    category: "Indian Main Course",
    note: "",
    items: [
        { name: "Paneer Lababdar",              price: 299, image: "https://i.pinimg.com/736x/d8/7e/20/d87e2032ebb71f6983bc2dac809cc4ff.jpg",              tags: ["Special"], description: "" },
        { name: "Kadhai Paneer",                price: 329, image: "https://i.pinimg.com/736x/bf/3b/22/bf3b22653efb4bcf54d76ffec4df1fd5.jpg",                tags: [], description: "" },
        { name: "Paneer Makhani",               price: 289, image: "https://i.pinimg.com/736x/da/f3/98/daf3988311896ed002a1d75f3702870c.jpg",               tags: [], description: "" },
        { name: "Paneer Do Pyaza",              price: 299, image: "https://i.pinimg.com/736x/ac/35/73/ac3573b18441f66607d0d484d2fc078d.jpg",              tags: [], description: "" },
        { name: "Panner Butter Masala",         price: 329, image: "https://i.pinimg.com/736x/75/25/c2/7525c28b815e93b8f4ad4a3bb889090e.jpg",         tags: [], description: "" },
        { name: "Paneer Tikka Masala",          price: 349, image: "https://i.pinimg.com/736x/99/cc/f0/99ccf08d87447800ab143d92d6a7acfe.jpg",          tags: [], description: "" },
        { name: "Handi Paneer",                 price: 299, image: "https://i.pinimg.com/736x/b5/64/31/b56431ce8b78fe08dadc92b69dac5077.jpg",                 tags: [], description: "" },
        { name: "Paneer Rogan Josh",            price: 319, image: "https://i.pinimg.com/736x/d7/93/94/d793941cfb025b784aba5d0b7080e000.jpg",            tags: ["Flavoured By Raj"], description: "" },
        { name: "Palak Paneer",                 price: 289, image: "https://i.pinimg.com/736x/0d/b0/a8/0db0a881f8fa0f6d37fe6ec50532ac09.jpg",                 tags: [], description: "" },
        { name: "Paneer Changezi",              price: 349, image: "https://i.pinimg.com/736x/ca/8a/be/ca8abe944f446b4ef5a273fdaa4ad17e.jpg",              tags: ["Flavoured By Raj"], description: "" },
        { name: "Shahi Paneer",                 price: 299, image: "https://i.pinimg.com/736x/43/ba/fd/43bafd93efeeef83456db22b41e7c631.jpg",                 tags: [], description: "" },
        { name: "Paneer Kali Mirch",            price: 299, image: "https://i.pinimg.com/736x/4b/b9/f4/4bb9f49af636c97d8ede7f3e2fc1e3da.jpg",            tags: [], description: "" },
        { name: "Navratan Korma",               price: 299, image: "https://i.pinimg.com/736x/03/54/a0/0354a0d4a597f84b3513d06e5eddf107.jpg",               tags: [], description: "" },
        { name: "Lucknowi Kofta",               price: 299, image: "https://i.pinimg.com/236x/8d/8e/ef/8d8eefee0647ec2c2e23311dd7c3f300.jpg",               tags: [], description: "" },
        { name: "Malai Kofta",                  price: 299, image: "https://i.pinimg.com/736x/13/61/e9/1361e98c4feee1783fd9d8c264d330e6.jpg",                  tags: [], description: "" },
        { name: "Mutter Paneer",                price: 299, image: "https://i.pinimg.com/736x/93/3a/64/933a64318b1c7ef5d5deb5f4c324f7fc.jpg",                tags: [], description: "" },
        { name: "Mushroom Masala Mutter",       price: 299, image: "https://i.pinimg.com/236x/6b/98/2a/6b982a4b803b33b46235b0d2edb44f1c.jpg",       tags: [], description: "" },
        { name: "Mushroom Do Pyaza",            price: 310, image: "https://i.pinimg.com/736x/01/00/a9/0100a925db653c1a50e80c75c7d890b3.jpg",            tags: [], description: "" },
        { name: "Mushroom Masala",              price: 299, image: "https://i.pinimg.com/736x/43/d1/aa/43d1aa54dbf2cdb8085701f9996f0de7.jpg",              tags: [], description: "" },
        { name: "Corn Palak",                   price: 299, image: "https://i.pinimg.com/736x/79/cb/e6/79cbe65221afeeca21a4fb604d282fc8.jpg",                   tags: [], description: "" },
        { name: "Mix Veg",                      price: 220, image: "https://i.pinimg.com/736x/97/a1/af/97a1af3ec2dd1a417fde2eda405e703e.jpg",                      tags: [], description: "" },
        { name: "Nizami Handi (Hyderabadi)",    price: 329, image: "https://i.pinimg.com/736x/a1/eb/10/a1eb1054104d47a94e80f78a22b4f612.jpg",      tags: [], description: "" },
        { name: "Jeera Aloo",                   price: 150, image: "https://i.pinimg.com/736x/bb/86/92/bb86924b387add5dc2fd86b448f5c6c2.jpg",                   tags: [], description: "" },
        { name: "Gobhi Adraki",                 price: 199, image: "https://i.pinimg.com/736x/54/de/f9/54def946558ed76f8424fe74d396c45b.jpg",                 tags: [], description: "" },
        { name: "Pindi Chana Masala",           price: 220, image: "https://i.pinimg.com/736x/b7/23/6b/b7236be9aff6d607b8d436a2ea202264.jpg",           tags: [], description: "" },
        { name: "Methi Mutter Malai",           price: 240, image: "https://i.pinimg.com/736x/61/39/ff/6139ff0e880bb086f9c50380717bab51.jpg",           tags: [], description: "" },
        { name: "Kadhai Mushroom",              price: 279, image: "https://i.pinimg.com/736x/b3/a4/8a/b3a48ae7dc673d3e446e5a3155520860.jpg",              tags: [], description: "" },
        { name: "Jalfrezi",                     price: 199, image: "https://i.pinimg.com/736x/c4/3c/99/c43c99d1eb5b86f015f62f2f23e03c5a.jpg",                     tags: [], description: "" },
        { name: "Punjabi Aloo",                 price: 199, image: "https://i.pinimg.com/736x/b6/54/17/b65417b932f207ff11c47d033a989e6e.jpg",                 tags: [], description: "" },
        { name: "Kadhai Soya Chaap",            price: 279, image: "https://i.pinimg.com/736x/40/53/48/405348550c1b8f1f9965cf54493cf745.jpg",            tags: [], description: "" },
        { name: "Soya Chaap Tikka Masala",      price: 299, image: "https://i.pinimg.com/736x/0e/07/80/0e0780ff59f46ec1adb3237302beebd8.jpg",      tags: [], description: "" }
    ]
},

/* ---------------- WARM & COZY ---------------- */
{
    category: "Warm & Cozy",
    note: "",
    items: [
        { name: "Tea (HOT)",          price: 40, image: "https://i.pinimg.com/736x/34/50/cf/3450cf3a858fdd656aaf413f3a58c506.jpg",          tags: [], description: "" },
        { name: "Masala Tea (HOT)",   price: 50, image: "https://i.pinimg.com/736x/cc/f2/55/ccf255d24f79ab7b5d455ee9f3244e0f.jpg",   tags: [], description: "" },
        { name: "Coffee (HOT)",       price: 60, image: "https://i.pinimg.com/736x/0c/42/b4/0c42b4194866dbf38483df30d41753be.jpg",       tags: [], description: "" },
        { name: "Green Tea",          price: 50, image: "https://i.pinimg.com/736x/d3/85/ce/d385ce2cabe96a724807459a4190ea42.jpg",        tags: [], description: "" },
        { name: "Lemon Tea",          price: 50, image: "https://i.pinimg.com/736x/ed/24/26/ed24261ab0c118d8dbe9af52c9780e27.jpg",        tags: [], description: "" },
        { name: "Black Tea",          price: 40, image: "https://i.pinimg.com/736x/4b/05/d0/4b05d0772acb205c8481bb1db1fb7408.jpg",        tags: [], description: "" },
        { name: "Black Coffee",       price: 50, image: "https://i.pinimg.com/736x/6a/e4/82/6ae482a0690b8ca89fd3acd554a36d66.jpg",     tags: [], description: "" }
    ]
},

/* ---------------- SHAKE IT UP! ---------------- */
{
    category: "Shake It Up!",
    note: "",
    items: [
        { name: "Cold Coffee",                    price: 149, image: "https://i.pinimg.com/736x/9e/46/f4/9e46f4bc720b215f3ff5da32b66af98a.jpg",                    tags: [], description: "" },
        { name: "Cold Coffee (With ice cream)",   price: 169, image: "https://i.pinimg.com/736x/6c/7f/73/6c7f73eb50562436718e00d35730050f.jpg",    tags: [], description: "" },
        { name: "Strawberry Shake",               price: 189, image: "https://i.pinimg.com/736x/94/2b/03/942b0316b3cb91cc5c5f2ec0c47a53cb.jpg",               tags: [], description: "" },
        { name: "Butter Scotch Shake",            price: 189, image: "https://i.pinimg.com/736x/78/c9/2f/78c92f24b00837ca43dda82157acf7b1.jpg",            tags: [], description: "" },
        { name: "Chocolate Shake",                price: 189, image: "https://i.pinimg.com/736x/cf/3c/ab/cf3cabcce53eddc7d01027cd864b539a.jpg",                tags: [], description: "" },
        { name: "Vanilla Shake",                  price: 179, image: "https://i.pinimg.com/736x/41/03/2f/41032f4ec0d39b2f3299dff67ab7fd71.jpg",                  tags: [], description: "" },
        { name: "Black Current Shake",            price: 179, image: "https://i.pinimg.com/736x/ac/3f/84/ac3f84553aefd0d4c4ec5590d029e457.jpg",            tags: [], description: "" },
        { name: "Banana Shake",                   price: 159, image: "https://i.pinimg.com/736x/83/3c/68/833c6843b0d34392582cc328927a0432.jpg",                   tags: [], description: "" },
        { name: "Belgian Chocolate Shake",        price: 199, image: "https://i.pinimg.com/736x/fb/89/08/fb89082c84139b166486a25d9cabecb0.jpg",        tags: [], description: "" },
        { name: "Oreo Shake",                     price: 179, image: "https://i.pinimg.com/236x/6b/a2/f7/6ba2f7cc0121f8958e92187c76d75a52.jpg",                     tags: [], description: "" },
        { name: "Kit Kat Shake",                  price: 179, image: "https://i.pinimg.com/736x/2e/bc/a6/2ebca612e2c2795fa855fc86506d3a1c.jpg",                  tags: [], description: "" },
        { name: "Mango Shake",                    price: 119, image: "https://i.pinimg.com/736x/c9/92/be/c992bea9331913883218dfbe5ac06159.jpg",                    tags: [], description: "" },
        { name: "Choco Cookies Shake",            price: 189, image: "https://i.pinimg.com/736x/91/eb/3a/91eb3acd1c63c455603111fa839b7732.jpg",            tags: [], description: "" },
        { name: "Choco Nutella Shake",            price: 179, image: "https://i.pinimg.com/736x/7d/ba/e8/7dbae8ec2de0e457701ca7a8ffd39096.jpg",            tags: [], description: "" },
        { name: "Choco Brownie Shake",            price: 189, image: "https://i.pinimg.com/736x/87/17/4a/87174a7f303abed8af3f85a138dc4176.jpg",            tags: [], description: "" },
        { name: "Choco Muffin Shake",             price: 189, image: "https://i.pinimg.com/736x/d1/4c/70/d14c7063774870a300821c03979ed5a9.jpg",             tags: [], description: "" },
        { name: "Choco Fudge Shake",              price: 199, image: "https://i.pinimg.com/736x/44/44/65/4444655e1bedf65d87b57605d3ebf85b.jpg",              tags: [], description: "" },
        { name: "Choco Hazelnut Shake",           price: 189, image: "https://i.pinimg.com/736x/bc/62/c6/bc62c6698a6ca350d5ca9beefbd89f2c.jpg",           tags: [], description: "" }
    ]
},

/* ---------------- FIZZY MOCKTAILS ---------------- */
{
    category: "Fizzy Mocktails",
    note: "",
    items: [
        { name: "Blue Lagoon",                          price: 149, image: "https://i.pinimg.com/736x/b6/a5/16/b6a51678cec52d7fc060cbcf21361565.jpg",           tags: [], description: "" },
        { name: "Virgin Mojito",                        price: 149, image: "https://i.pinimg.com/1200x/1d/21/fc/1d21fc4644a21741f48f280d35913b1e.jpg",         tags: [], description: "" },
        { name: "Orange Mojito",                        price: 149, image: "https://i.pinimg.com/1200x/fa/50/ef/fa50ef040ae79423b74a414b6d30ec48.jpg",         tags: [], description: "" },
        { name: "Mint Mojito",                          price: 139, image: "https://i.pinimg.com/736x/59/8c/79/598c79a33eeef552fdce9815bf10f22d.jpg",           tags: [], description: "" },
        { name: "Fresh Lime Soda (Sweet/Salt/Mix)",     price:  99, image: "https://i.pinimg.com/736x/b1/8f/17/b18f179f1f1b47277ae60272d255b2fe.jpg",      tags: [], description: "" },
        { name: "Ice Tea",                              price:  69, image: "https://i.pinimg.com/736x/49/65/1a/49651a4a7845f358ef93110502440fa2.jpg",               tags: [], description: "" },
        { name: "Fruit Punch",                          price: 159, image: "https://i.pinimg.com/1200x/9f/34/e6/9f34e640572472342c935707602a7771.jpg",           tags: [], description: "" },
        { name: "Aam Panna",                            price: 159, image: "https://i.pinimg.com/736x/9f/10/0f/9f100f0b783ec69536422618250ab255.jpg",             tags: [], description: "" },
        { name: "Mango Cooler",                         price: 139, image: "https://i.pinimg.com/736x/59/12/9f/59129fe9d86d86eeb334063ddbf9b1a8.jpg",          tags: [], description: "" }
    ]
},

/* ---------------- SOULFUL SOUPS ---------------- */
{
    category: "Soulful Soups",
    note: "",
    items: [
        { name: "Manchow Soup",               price: 119, image: "https://i.pinimg.com/1200x/90/4c/3c/904c3c2638098f8f3a3565d0226db5c2.jpg",               tags: [], description: "" },
        { name: "Hot & Sour Soup",            price: 119, image: "https://i.pinimg.com/1200x/ac/7f/77/ac7f77edf59fc3ea12f8de7c67bcc5dd.jpg",              tags: [], description: "" },
        { name: "Sweet Corn Soup",            price: 119, image: "https://i.pinimg.com/1200x/af/b2/b0/afb2b0b5fcc0fa61f0fd51a5ad11c741.jpg",            tags: [], description: "" },
        { name: "Lemon Coriander Soup",       price: 129, image: "https://i.pinimg.com/1200x/80/53/a7/8053a7e27aab8406738ef90572d83b2a.jpg",       tags: [], description: "" },
        { name: "Cream Of Tomato Soup",       price: 149, image: "https://i.pinimg.com/736x/b5/f2/33/b5f2331731e263681fd36392bcfc39e6.jpg",       tags: [], description: "" },
        { name: "Cream Of Mushroom Soup",     price:  99, image: "https://i.pinimg.com/736x/fc/3d/d8/fc3dd8e101ee74115f0377a58e88ff6b.jpg",     tags: [], description: "" },
        { name: "Veg Clear Soup",             price: 139, image: "https://i.pinimg.com/1200x/ef/0c/80/ef0c80d0038fde9a1c151ba3871f0e9f.jpg",             tags: [], description: "" },
        { name: "Thupka Soup",                price: null, image: "https://i.pinimg.com/1200x/71/0d/91/710d912b8045a9d13cf5702deb7c22d4.jpg",               tags: [], description: "" }
    ]
},

/* ---------------- LASSI ---------------- */
{
    category: "Lassi",
    note: "",
    items: [
        { name: "Butter Milk (Masala Chhas)",   price: 89, image: "https://i.pinimg.com/736x/ed/4f/17/ed4f170934a6903610456c6c263911d8.jpg",   tags: [], description: "" },
        { name: "Punjabi Lassi (Sweet)",        price: 99, image: "https://i.pinimg.com/1200x/5b/47/c9/5b47c93f1ca8e76d53f720ae1472950c.jpg",         tags: [], description: "" }
    ]
},

/* ---------------- TANDOORI STATION ---------------- */
{
    category: "Tandoori Station",
    note: "",
    items: [
        { name: "Tandoori Paneer Tikka",            price: 289, image: "https://i.pinimg.com/736x/5f/d4/32/5fd4328d6e3d5ad1b01b2c5d132d27e7.jpg",              tags: [], description: "" },
        { name: "Tandoori Paneer Malai Tikka",      price: 319, image: "https://i.pinimg.com/1200x/c6/33/a9/c633a9e1ffbdd97e534593417307873d.jpg",        tags: [], description: "" },
        { name: "Tandoori Achari Paneer Tikka",     price: 289, image: "https://i.pinimg.com/736x/83/62/74/836274bef3d126a2ac05f3d388dc5f62.jpg",       tags: [], description: "" },
        { name: "Tandoori Pudina Paneer Tikka",     price: 299, image: "https://i.pinimg.com/736x/98/2b/3d/982b3df521f429902ee446e9fa6af456.jpg",       tags: [], description: "" },
        { name: "Tandoori Pudina Soya Chaap",       price: 289, image: "https://i.pinimg.com/1200x/25/4c/9f/254c9f7469d51d93eedbe4adb35d10c5.jpg",         tags: [], description: "" },
        { name: "Tandoori Masala Chaap",            price: 269, image: "https://i.pinimg.com/1200x/31/66/14/316614cc5467fcaa36efaecfea3445d0.jpg",              tags: [], description: "" },
        { name: "Tandoori Stuffed Aloo",            price: 289, image: "https://i.pinimg.com/736x/1b/90/93/1b909385b05d12a05080401d2494e679.jpg",              tags: [], description: "" },
        { name: "Afghani Soya Chaap",               price: 289, image: "https://i.pinimg.com/1200x/99/1d/90/991d901a658f71a6709052c884bf546e.jpg",                 tags: [], description: "" },
        { name: "Tandoori Soya Chaap",              price: 329, image: "https://i.pinimg.com/236x/10/c4/cd/10c4cd2486ffc0d94c6193bee06a42d4.jpg",                tags: [], description: "" },
        { name: "Tandoori Malai Chaap",             price: 259, image: "https://i.pinimg.com/736x/ef/70/ea/ef70eaad0b356cede4fe37609ff5c952.jpg",               tags: [], description: "" },
        { name: "Tandoori Achari Chaap",            price: 319, image: "https://i.pinimg.com/736x/da/63/94/da6394bf8688e6dd3ff3b3bda2164dfd.jpg",              tags: [], description: "" },
        { name: "Tandoori Mushroom Tikka",          price: 359, image: "https://i.pinimg.com/736x/6a/91/f0/6a91f0eb1759f4dd461f11cc45a61d04.jpg",            tags: [], description: "" },
        { name: "Tandoori Stuffed Mushroom Tikka",  price: 299, image: "https://i.pinimg.com/1200x/1a/e9/fe/1ae9febf611e9f4671905efefe344914.jpg",    tags: [], description: "" },
        { name: "Tandoori Broccoli",                price: 259, image: "https://i.pinimg.com/1200x/84/fe/30/84fe30d3bd718466cc005af695bcb55a.jpg",                  tags: [], description: "" },
        { name: "Tandoori Veg Seekh Kabab",         price: 269, image: "https://i.pinimg.com/1200x/03/2b/97/032b97a1d9bbe747101379d8b0d915a6.jpg",           tags: [], description: "" },
        { name: "Dahi Ke Kabab",                    price: 199, image: "https://i.pinimg.com/1200x/0d/ee/4e/0dee4e11dbf6f24a56962d36d82f17f7.jpg",                      tags: [], description: "" },
        { name: "Hara Bhara Kabab",                 price: 279, image: "https://i.pinimg.com/1200x/5f/6c/7b/5f6c7ba91f647101396bae423b7d380f.jpg",                   tags: [], description: "" },
        { name: "Tandoori Pineapple Tikka",         price: 319, image: "https://i.pinimg.com/1200x/44/e4/9f/44e49fbd94423a726d08434c3591527f.jpg",           tags: [], description: "" },
        { name: "Dahi Ke Shole",                    price: 149, image: "https://i.pinimg.com/736x/40/f8/ed/40f8eddb005d9b4b9cdac66a72a4b4d4.jpg",                      tags: [], description: "" },
        { name: "Chilli Paneer Roll",               price: 159, image: "https://i.pinimg.com/1200x/c3/98/cd/c398cddac00553e07942e0a617a38737.jpg",                 tags: [], description: "" },
        { name: "Paneer Tikka Roll",                price: 169, image: "https://i.pinimg.com/736x/4f/18/6a/4f186a2a2144fbab5da57a2fd3e0be9f.jpg",                  tags: [], description: "" },
        { name: "Malai Paneer Tikka Roll",          price: 149, image: "https://i.pinimg.com/736x/76/4c/cc/764ccc27f2a22bca70cc97db4f4a02ff.jpg",            tags: [], description: "" },
        { name: "Tandoori Chaap Roll",              price: null, image: "https://i.pinimg.com/736x/28/ef/83/28ef83cbb585dead561ceb9f68631c6e.jpg",               tags: [], description: "" }
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

/* Dish modal references */
const dishModal         = document.getElementById("dishModal");
const dishModalBackdrop = document.getElementById("dishModalBackdrop");
const dishModalClose    = document.getElementById("dishModalClose");
const dishModalImg      = document.getElementById("dishModalImg");
const dishModalName     = document.getElementById("dishModalName");
const dishModalPrice    = document.getElementById("dishModalPrice");
const dishModalTagline  = document.getElementById("dishModalTagline");

/* --------------------------------------------------------------------------
 *  5. STATE
 *  -------------------------------------------------------------------------- */
let activeCategory = "all";
let searchQuery    = "";

let topbarHeight     = 54;
let toolbarOffsetTop = Infinity;

/* Remember which element had focus before opening the modal so we can
 * return focus to it when the modal closes. */
let modalReturnFocus = null;

/* --------------------------------------------------------------------------
 *  6. HELPERS
 *  -------------------------------------------------------------------------- */

function prefersReducedMotion() {
    return !!(window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

function esc(str) {
    return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPrice(price) {
    if (price === null || price === undefined) {
        return '<span class="item__price item__price--ask">Price on request</span>';
    }
    return '<span class="item__price">\u20B9' + price + "</span>";
}

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

/* --------------------------------------------------------------------------
 *  6a. TAGLINES  (short, varied, dish- or category-aware)
 *  -------------------------------------------------------------------------- */
function getTagline(item) {
    const n = (item.name || "").toLowerCase();
    const c = (item.category || "").toLowerCase();

    /* --- Named dish heuristics (most specific first) --- */
    if (n.indexOf("honey chilli") !== -1)   return "\uD83C\uDF6F Sweet-spicy, totally addictive!";
    if (n.indexOf("chilli paneer") !== -1)  return "\uD83C\uDF36\uFE0F Spicy, tangy, paneer love!";
    if (n.indexOf("paneer'65") !== -1)      return "\uD83C\uDF36\uFE0F Crispy, spicy, full-on South!";
    if (n.indexOf("paneer tikka") !== -1)   return "\uD83E\uDDC0 Smoky paneer, tandoor magic!";
    if (n.indexOf("paneer lababdar") !== -1) return "\uD83E\uDDC0 Rich creamy paneer, royal treat!";
    if (n.indexOf("kadhai paneer") !== -1)  return "\uD83C\uDF36\uFE0F Spicy kadhai, full-on desi!";
    if (n.indexOf("shahi paneer") !== -1)   return "\uD83D\uDC51 Royal creamy, shahi taste!";
    if (n.indexOf("palak paneer") !== -1)   return "\uD83C\uDF3F Healthy, creamy, comfort bite!";
    if (n.indexOf("paneer makhani") !== -1) return "\uD83E\uDDC8 Buttery, creamy paneer dream!";
    if (n.indexOf("paneer") !== -1)         return "\uD83E\uDDC0 Paneer lovers ke liye perfect!";
    if (n.indexOf("cheese") !== -1)         return "\uD83E\uDDC0 Cheese lovers ke liye perfect!";
    if (n.indexOf("chole") !== -1 || n.indexOf("chana") !== -1) return "\uD83C\uDF5B Desi combo, full satisfaction!";
    if (n.indexOf("momos") !== -1)          return "\uD83E\uDD5F Steamy, spicy, soul-comforting!";
    if (n.indexOf("mushroom") !== -1)       return "\uD83C\uDF44 Earthy flavours, rich bite!";
    if (n.indexOf("corn") !== -1)           return "\uD83C\uDF3D Sweet, crispy and tasty!";
    if (n.indexOf("manchurian") !== -1)     return "\uD83E\uDD62 Saucy, spicy, Indo-Chinese love!";
    if (n.indexOf("noodles") !== -1)        return "\uD83C\uDF5C Slurp-worthy, wok-tossed!";
    if (n.indexOf("fried rice") !== -1 || n.indexOf("pulao") !== -1) return "\uD83C\uDF5A Flavourful rice, perfect bite!";
    if (n.indexOf("spring roll") !== -1)    return "\uD83E\uDD5F Crispy outside, tasty inside!";
    if (n.indexOf("mango") !== -1)          return "\uD83E\uDD6D Mango magic in every bite!";
    if (n.indexOf("chocolate") !== -1 || n.indexOf("choco") !== -1) return "\uD83C\uDF6B Chocolatey heaven, full indulgence!";
    if (n.indexOf("oreo") !== -1)           return "\uD83C\uDF6A Creamy Oreo, sweet crunch!";
    if (n.indexOf("kit kat") !== -1)        return "\uD83C\uDF6B Crispy Kit Kat, choco blast!";
    if (n.indexOf("brownie") !== -1)        return "\uD83C\uDF6B Fudgy brownie shake, pure bliss!";
    if (n.indexOf("mojito") !== -1)         return "\uD83C\uDF43 Fresh, fizzy, cool!";
    if (n.indexOf("coffee") !== -1)         return "\u2615 Strong, smooth, perfect sip!";
    if (n.indexOf("tea") !== -1)            return "\uD83C\uDF75 Garam chai, dil ko sukoon!";
    if (n.indexOf("lassi") !== -1)          return "\uD83E\uDD5B Desi thandak, pure mazaa!";
    if (n.indexOf("pizza") !== -1)          return "\uD83C\uDF55 Cheesy, saucy aur loaded!";
    if (n.indexOf("burger") !== -1)         return "\uD83C\uDF54 Juicy bite, full-on satisfaction!";
    if (n.indexOf("pasta") !== -1)          return "\uD83C\uDF5D Creamy, saucy, Italian vibe!";
    if (n.indexOf("fries") !== -1)          return "\uD83C\uDF5F Crispy, golden, addictive!";
    if (n.indexOf("sizzler") !== -1)        return "\uD83D\uDD25 Sizzling hot, full drama!";
    if (n.indexOf("tandoori") !== -1)       return "\uD83D\uDD25 Smoky tandoor, royal flavour!";
    if (n.indexOf("dal") !== -1)            return "\uD83C\uDF5B Slow-cooked, rich, comforting!";
    if (n.indexOf("thali") !== -1)          return "\uD83C\uDF7D\uFE0F Ek thali, poora feast!";
    if (n.indexOf("naan") !== -1 || n.indexOf("roti") !== -1 || n.indexOf("paratha") !== -1)
        return "\uD83E\uDD6F Tandoor fresh, makhan loaded!";

    /* --- Category fallbacks --- */
    if (c.indexOf("shake") !== -1)      return "\uD83E\uDD64 Thick, creamy aur refreshing!";
    if (c.indexOf("mocktail") !== -1)   return "\uD83C\uDF79 Chill vibe, sip by sip!";
    if (c.indexOf("soup") !== -1)       return "\uD83C\uDF72 Garam garam, dil ko sukoon!";
    if (c.indexOf("lassi") !== -1)      return "\uD83E\uDD5B Desi thandak, pure mazaa!";
    if (c.indexOf("warm") !== -1)       return "\u2615 Ek sip, poora sukoon!";
    if (c.indexOf("raita") !== -1)      return "\uD83E\uDD63 Cooling side, full flavour!";
    if (c.indexOf("salad") !== -1)      return "\uD83E\uDD57 Fresh, crunchy aur healthy!";
    if (c.indexOf("papad") !== -1)      return "\uD83D\uDD25 Crispy starter, perfect bite!";
    if (c.indexOf("biryani") !== -1)    return "\uD83C\uDF5A Aromatic layers, royal taste!";
    if (c.indexOf("rice") !== -1)       return "\uD83C\uDF5A Perfect partner for every curry!";
    if (c.indexOf("bread") !== -1)      return "\uD83E\uDD6F Tandoor fresh, makhan loaded!";
    if (c.indexOf("paratha") !== -1)    return "\uD83E\uDD6F Crispy outside, soft inside!";
    if (c.indexOf("pizza") !== -1)      return "\uD83C\uDF55 Cheesy, saucy aur loaded!";
    if (c.indexOf("pasta") !== -1)      return "\uD83C\uDF5D Creamy, saucy, Italian vibe!";
    if (c.indexOf("sandwich") !== -1)   return "\uD83E\uDD6A Grilled to perfection!";
    if (c.indexOf("fries") !== -1)      return "\uD83C\uDF5F Crispy, golden and addictive!";
    if (c.indexOf("burger") !== -1)     return "\uD83C\uDF54 Juicy bite, full-on satisfaction!";
    if (c.indexOf("dumpling") !== -1 || c.indexOf("momos") !== -1)
        return "\uD83E\uDD5F Steamy bites, full of flavour!";
    if (c.indexOf("tandoori") !== -1)   return "\uD83D\uDD25 Smoky tandoor, royal flavours!";
    if (c.indexOf("dal") !== -1)        return "\uD83C\uDF5B Slow-cooked, rich, comforting!";
    if (c.indexOf("thali") !== -1)      return "\uD83C\uDF7D\uFE0F Ek thali, poora feast!";
    if (c.indexOf("sizzler") !== -1)    return "\uD83D\uDD25 Sizzling hot, full drama!";
    if (c.indexOf("grill") !== -1)      return "\uD83D\uDD25 Smoky, spicy, totally lit!";
    if (c.indexOf("chinese") !== -1)    return "\uD83E\uDD62 Indo-Chinese, full-on flavour!";
    if (c.indexOf("saucy") !== -1)      return "\uD83E\uDD62 Saucy, spicy, addictive!";
    if (c.indexOf("main course") !== -1) return "\uD83C\uDF5B Rich, creamy, full of taste!";
    if (c.indexOf("kitty") !== -1)      return "\u2728 Perfect bite, choti bhookh ke liye!";

    return "\u2728 Ek baar khaoge, ruk nahi paoge!";
}

/* --------------------------------------------------------------------------
 *  6b. THUMB MARKUP
 *  -------------------------------------------------------------------------- */
function itemThumbHTML(image, name) {
    return (
        '<div class="item__thumb" role="button" tabindex="0" ' +
        'aria-label="View ' + esc(name) + ' details">' +
        '<div class="thumb__ph" aria-hidden="true">' +
        '<span class="thumb__mark">RD</span>' +
        '<span class="thumb__note">Image coming soon</span>' +
        "</div>" +
        '<img class="thumb__img" src="' + esc(image) + '" alt="' + esc(name) + '" ' +
        'loading="lazy" decoding="async" />' +
        "</div>"
    );
}

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

        if (img.complete) {
            if (img.naturalWidth > 0) img.classList.add("is-loaded");
            else img.classList.add("is-broken");
        }
    });
}

function getAbsoluteOffsetTop(el) {
    let top = 0;
    let node = el;
    while (node) {
        top += node.offsetTop || 0;
        node = node.offsetParent;
    }
    return top;
}

function measureTopbar() {
    topbarHeight = (topbar && topbar.offsetHeight) || 54;
}

function measureToolbar() {
    if (!menuToolbar) return;
    toolbarOffsetTop = getAbsoluteOffsetTop(menuToolbar);
}

/* --------------------------------------------------------------------------
 *  6c. SCROLL-REVEAL SYSTEM
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
        '<article class="spec-card" role="listitem" ' +
        'data-dish-name="' + esc(item.name) + '" ' +
        'data-dish-category="' + esc(item.category) + '">' +
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

    const cards = specialsRail.querySelectorAll(".spec-card");
    cards.forEach(function (card, i) {
        prepReveal(card, Math.min(i, 6) * 70, false);
    });
}

/* --------------------------------------------------------------------------
 *  8. RENDER — CATEGORY CHIPS
 *  -------------------------------------------------------------------------- */
function renderChips() {
    if (!categoryChips) return;

    let html = "";

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

    const instant = searchQuery.trim().length > 0;

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

    if (totalItems === 0) {
        menuResults.innerHTML = "";
        if (emptyState) emptyState.hidden = false;
        return;
    }
    if (emptyState) emptyState.hidden = true;

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
            '<article class="item" ' +
            'data-dish-name="' + esc(item.name) + '" ' +
            'data-dish-category="' + esc(group.category) + '">' +
            itemThumbHTML(item.image, item.name) +
            '<div class="item__body">' +
            '<div class="item__head">' +
            '<h4 class="item__name" role="button" tabindex="0" ' +
            'aria-label="View ' + esc(item.name) + ' details">' +
            esc(item.name) + "</h4>" +
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

    categoryChips.querySelectorAll(".chip").forEach(function (c) {
        const isActive = c.dataset.category === cat;
        c.classList.toggle("is-active", isActive);
        c.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    renderMenu();

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

    window.requestAnimationFrame(function () {
        const first = navSheet.querySelector('a[href], button:not([disabled])');
        if (first) {
            try { first.focus({ preventScroll: true }); }
            catch (err) { first.focus(); }
        }
    });
}

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
 *  15. DISH DETAIL MODAL
 *  -------------------------------------------------------------------------- */
function findItemByNameCategory(name, category) {
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].name === name && allItems[i].category === category) {
            return allItems[i];
        }
    }
    return null;
}

function openDishModal(item) {
    if (!dishModal || !item) return;

    /* Remember focus so we can restore it on close. */
    modalReturnFocus = document.activeElement;

    /* Reset previous image state */
    dishModalImg.classList.remove("is-loaded");
    dishModalImg.removeAttribute("src");
    dishModalImg.alt = item.name;

    /* Populate text fields — price is read directly from the existing
     * menu data object, exactly as it is stored (₹ number or null). */
    dishModalName.textContent = item.name;

    if (item.price === null || item.price === undefined) {
        dishModalPrice.textContent = "Price on request";
        dishModalPrice.classList.add("dish-modal__price--ask");
    } else {
        dishModalPrice.textContent = "\u20B9" + item.price;
        dishModalPrice.classList.remove("dish-modal__price--ask");
    }

    dishModalTagline.textContent = getTagline(item);

    /* Attach image handlers once per open */
    const onLoad  = function () { dishModalImg.classList.add("is-loaded"); };
    const onError = function () { dishModalImg.classList.remove("is-loaded"); };
    dishModalImg.addEventListener("load", onLoad, { once: true });
    dishModalImg.addEventListener("error", onError, { once: true });

    /* Trigger the image load */
    dishModalImg.src = item.image;

    /* If the image is cached and already complete */
    if (dishModalImg.complete && dishModalImg.naturalWidth > 0) {
        dishModalImg.classList.add("is-loaded");
    }

    /* Open the modal */
    dishModal.classList.add("is-open");
    dishModal.setAttribute("aria-hidden", "false");
    lockScroll();

    /* Focus the close button so Escape / Tab work immediately. */
    window.requestAnimationFrame(function () {
        if (dishModalClose) {
            try { dishModalClose.focus({ preventScroll: true }); }
            catch (err) { dishModalClose.focus(); }
        }
    });
}

function closeDishModal() {
    if (!dishModal) return;
    if (!dishModal.classList.contains("is-open")) return;

    dishModal.classList.remove("is-open");
    dishModal.setAttribute("aria-hidden", "true");

    /* Clear modal content so the next open starts clean. */
    dishModalImg.removeAttribute("src");
    dishModalImg.alt = "";
    dishModalPrice.textContent = "";
    dishModalPrice.classList.remove("dish-modal__price--ask");

    unlockScroll();

    /* Return focus to the previously focused element (the dish thumb/name). */
    if (modalReturnFocus && typeof modalReturnFocus.focus === "function") {
        try { modalReturnFocus.focus({ preventScroll: true }); }
        catch (err) { /* ignore */ }
    }
    modalReturnFocus = null;
}

/* Click delegation for dish thumbs and names */
function onDishActivate(e) {
    const target = e.target.closest(
        ".item__thumb, .item__name, .spec-card__thumb, .spec-card__name"
    );
    if (!target) return;

    const container = target.closest(".item, .spec-card");
    if (!container) return;

    const name = container.dataset.dishName;
    const category = container.dataset.dishCategory;
    if (!name || !category) return;

    const item = findItemByNameCategory(name, category);
    if (item) openDishModal(item);
}

/* Keyboard support (Enter / Space) for clickable dish thumbs and names */
function onDishKeydown(e) {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;

    const target = e.target.closest(
        ".item__thumb, .item__name, .spec-card__thumb, .spec-card__name"
    );
    if (!target) return;

    e.preventDefault();
    onDishActivate({ target: target });
}

/* Trap focus inside the modal so Tab doesn't escape to the page behind */
function onDishModalKeydown(e) {
    if (e.key !== "Tab") return;
    if (!dishModal.classList.contains("is-open")) return;

    const focusables = dishModal.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );
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
 *  16. STICKY / SCROLL BEHAVIOUR
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
    if (topbar) topbar.classList.toggle("is-solid", lastScrollY > 40);

    if (menuToolbar) {
        const stuck = (lastScrollY + topbarHeight + 1) >= toolbarOffsetTop;
        menuToolbar.classList.toggle("is-stuck", stuck);
    }

    if (toTop) toTop.classList.toggle("is-visible", lastScrollY > 700);

    ticking = false;
}

function remeasure() {
    measureTopbar();
    measureToolbar();
    updateScrollUI();
}

/* --------------------------------------------------------------------------
 *  17. SMOOTH ANCHOR SCROLL
 *  -------------------------------------------------------------------------- */
function onAnchorClick(e) {
    if (!e.target || typeof e.target.closest !== "function") return;

    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

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

    if (navSheet.classList.contains("is-open")) {
        closeNav({ restoreFocus: false });
    }

    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    setTimeout(function () {
        try { target.focus({ preventScroll: true }); }
        catch (err) { target.focus(); }
    }, prefersReducedMotion() ? 0 : 420);
}

/* --------------------------------------------------------------------------
 *  18. HERO VIDEO
 *  -------------------------------------------------------------------------- */
function attemptHeroPlay() {
    if (!heroVideo) return;
    if (!heroVideo.paused) return;
    const p = heroVideo.play();
    if (p && typeof p.catch === "function") p.catch(function () {});
}

function attemptHeroPause() {
    if (!heroVideo) return;
    if (heroVideo.paused) return;
    heroVideo.pause();
}

function initHeroVideo() {
    if (!heroVideo) return;

    heroVideo.muted = true;
    heroVideo.defaultMuted = true;

    const reduce = prefersReducedMotion();
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slowNetwork = !!(conn && (
        conn.saveData === true ||
        /(^|-)2g$/.test(conn.effectiveType || "")
    ));

    if (reduce || slowNetwork) {
        heroVideo.removeAttribute("autoplay");
        heroVideo.preload = "none";
        try { heroVideo.pause(); } catch (err) { /* ignore */ }
        return;
    }

    attemptHeroPlay();

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
 *  19. INIT
 *  -------------------------------------------------------------------------- */
function init() {
    renderSpecials();
    renderChips();
    renderMenu();
    initHeroVideo();
    initStaticReveals();

    window.requestAnimationFrame(function () {
        document.body.classList.add("is-booted");
    });

    remeasure();

    navToggle.addEventListener("click", toggleNav);
    if (navBackdrop) navBackdrop.addEventListener("click", closeNav);

    if (categoryChips) categoryChips.addEventListener("click", onChipClick);

    searchInput.addEventListener("input", onSearchInput);
    if (searchClear) searchClear.addEventListener("click", clearSearch);

    if (resetFilters) resetFilters.addEventListener("click", resetAllFilters);
    if (resetFiltersTop) resetFiltersTop.addEventListener("click", resetAllFilters);

    document.addEventListener("click", onAnchorClick);

    /* Dish modal openers (event delegation — menuResults/specialsRail are
     *      static containers, only their innerHTML changes). */
    if (menuResults) {
        menuResults.addEventListener("click", onDishActivate);
        menuResults.addEventListener("keydown", onDishKeydown);
    }
    if (specialsRail) {
        specialsRail.addEventListener("click", onDishActivate);
        specialsRail.addEventListener("keydown", onDishKeydown);
    }

    /* Dish modal closers */
    if (dishModalClose)  dishModalClose.addEventListener("click", closeDishModal);
    if (dishModalBackdrop) {
        dishModalBackdrop.addEventListener("click", closeDishModal);
    }
    if (dishModal) {
        dishModal.addEventListener("keydown", onDishModalKeydown);
    }

    /* Global Escape handler — closes modal first, then nav, then search */
    document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;

        if (dishModal && dishModal.classList.contains("is-open")) {
            closeDishModal();
            return;
        }

        if (searchInput && document.activeElement === searchInput && searchInput.value) {
            clearSearch();
            return;
        }

        if (navSheet.classList.contains("is-open")) {
            closeNav();
        }
    });

    navSheet.addEventListener("keydown", onNavSheetKeydown);

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollUI();

    window.addEventListener("resize", remeasure);
    window.addEventListener("orientationchange", function () {
        setTimeout(remeasure, 150);
    });

    if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === "function") {
        document.fonts.ready.then(remeasure).catch(function () {});
    }

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
