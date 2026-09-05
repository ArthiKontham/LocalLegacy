import { buildCity } from "../builder";

const tokyo = buildCity({
  key: "tokyo",
  name: "Tokyo, Japan",
  currency: "¥",
  mealRange: [1500, 3500],
  stayRates: [12000, 16000, 22000],
  doCost: 3500,
  shopRange: [5000, 20000],
  cuisineStyle: "Japanese",
  places: [
    { id: "tokyo_e0", category: "Eat", name: "Ichiran Shibuya", kind: "Ramen", desc: "solo-booth tonkotsu ramen, tuned to your exact taste", rating: "4.5", reviews: "8,900" },
    { id: "tokyo_e1", category: "Eat", name: "Sushi no Midori", kind: "Sushi", desc: "long queues for generous, great-value sushi sets", rating: "4.6", reviews: "4,300" },
    { category: "Eat", name: "Harajuku Gyozaro", kind: "Gyoza", desc: "simple, cheap, and legendary gyoza spot serving pan-fried or steamed dumplings", rating: "4.4", reviews: "2,500" },
    { category: "Eat", name: "Omoide Yokocho", kind: "Yakitori", desc: "narrow 'Memory Lane' alleyway packed with tiny stalls grilling chicken skewers over charcoal", rating: "4.5", reviews: "3,800" },
    { category: "Eat", name: "Rokurinsha", kind: "Tsukemen", desc: "famous noodle shop in Tokyo Station serving thick dipping ramen in rich seafood-pork broth", rating: "4.5", reviews: "2,900" },
    
    { id: "tokyo_s0", category: "Stay", name: "Shinjuku Granbell", kind: "Hotel", desc: "stylish, compact rooms in the heart of Shinjuku", rating: "4.4", reviews: "3,200" },
    { id: "tokyo_s1", category: "Stay", name: "Asakusa View Hotel", kind: "Hotel", desc: "comfortable rooms with Skytree views near Senso-ji", rating: "4.3", reviews: "2,750" },
    { category: "Stay", name: "The Capitol Hotel Tokyu", kind: "Hotel", desc: "luxurious 5-star hotel in Akasaka combining traditional shoji screens with sleek contemporary style", rating: "4.8", reviews: "1,100" },
    { category: "Stay", name: "Book and Bed Tokyo Shinjuku", kind: "Capsule Hotel", desc: "trendy hostel where you sleep behind bookshelves packed with local and English reading options", rating: "4.1", reviews: "750" },
    { category: "Stay", name: "Park Hyatt Tokyo", kind: "Hotel", desc: "iconic luxury hotel in Nishi-Shinjuku with floor-to-ceiling city views, famous from the movie 'Lost in Translation'", rating: "4.7", reviews: "1,850" },
    
    { id: "tokyo_d0", category: "Do", name: "Senso-ji Temple", kind: "Temple", desc: "Tokyo's oldest temple, reached through the lantern-hung Nakamise street", rating: "4.7", reviews: "160,000" },
    { id: "tokyo_d1", category: "Do", name: "Tokyo Skytree", kind: "Landmark", desc: "at 634 metres, one of the world's tallest towers, with sweeping views", rating: "4.6", reviews: "90,000", ticket: true, ticketUrl: "https://www.tokyo-skytree.jp/en/ticket/" },
    { category: "Do", name: "Shibuya Crossing", kind: "Landmark", desc: "the world's busiest pedestrian scramble crossing, surrounded by giant video screens and neon lights", rating: "4.7", reviews: "42,000" },
    { category: "Do", name: "Meiji Jingu Shrine", kind: "Shrine", desc: "serene Shinto shrine dedicated to Emperor Meiji, nestled inside a dense forest of 100,000 trees in Harajuku", rating: "4.7", reviews: "38,000" },
    { category: "Do", name: "teamLab Borderless", kind: "Museum", desc: "world-renowned interactive digital art museum featuring light trails, mirror rooms, and projection forests", rating: "4.8", reviews: "21,000", ticket: true },
    
    { id: "tokyo_p0", category: "Shop", name: "Shibuya", kind: "Shopping District", desc: "neon crossing, fashion towers and endless side-street shops", rating: "4.6", reviews: "45,000" },
    { id: "tokyo_p1", category: "Shop", name: "Ginza", kind: "Shopping District", desc: "Tokyo's elegant district of flagship stores and department halls", rating: "4.5", reviews: "20,000" },
    { category: "Shop", name: "Takeshita Street", kind: "Shopping Street", desc: "colorful pedestrian shopping alley in Harajuku, the center of Japan's kawaii youth culture and crazy crepes", rating: "4.4", reviews: "18,000" },
    { category: "Shop", name: "Akihabara Electric Town", kind: "Shopping District", desc: "famed shopping area packed with electronics superstores, retro gaming shops, anime figures, and maid cafes", rating: "4.5", reviews: "12,000" },
    { category: "Shop", name: "Nakamise Shopping Street", kind: "Historic Arcade", desc: "ancient approach to Senso-ji Temple lined with dozens of small stalls selling traditional snacks, fans, and keychains", rating: "4.5", reviews: "15,000" },
  ]
});

const kyoto = buildCity({
  key: "kyoto",
  name: "Kyoto, Japan",
  currency: "¥",
  mealRange: [1800, 4000],
  stayRates: [10000, 15000, 22000],
  doCost: 3000,
  shopRange: [4000, 15000],
  cuisineStyle: "Traditional Kaiseki & Zen",
  places: [
    { category: "Eat", name: "Nishiki Market Food Tour", kind: "Food Stalls", desc: "strolling market stalls tasting matcha soft serve, octopus skewers, egg omelets, and grilled dango", rating: "4.6", reviews: "12,000" },
    { category: "Eat", name: "Gyoza Hohei Gion", kind: "Gyoza", desc: "celebrated small eatery in Gion serving bite-sized, thin-skinned gyoza filled with ginger or pork", rating: "4.5", reviews: "1,200" },
    { category: "Eat", name: "Ramen Sen-no-Kaze", kind: "Ramen", desc: "incredibly popular ramen shop serving creamy pork bone broth topped with thick flame-grilled chashu pork", rating: "4.6", reviews: "2,800" },
    { category: "Eat", name: "Shigetsu", kind: "Zen Vegetarian", desc: "located inside Tenryu-ji Temple, serving beautiful multi-course Buddhist vegetarian meals (Shojin Ryori) overlooking gardens", rating: "4.7", reviews: "850" },
    { category: "Eat", name: "Gion Tanto", kind: "Okonomiyaki", desc: "cozy, tatami-matted restaurant beside the Shirakawa canal serving hot okonomiyaki pancakes and yakisoba noodles", rating: "4.4", reviews: "1,400" },
    
    { category: "Stay", name: "Gion Hanamikoji Ryokan", kind: "Ryokan", desc: "traditional Japanese inn with tatami rooms, futon beds, hot baths, and seasonal multi-course meals", rating: "4.8", reviews: "620" },
    { category: "Stay", name: "Piece Hostel Kyoto", kind: "Hostel", desc: "award-winning designer hostel near Kyoto Station, featuring modern minimalist lounge areas and custom bunk beds", rating: "4.6", reviews: "1,950" },
    { category: "Stay", name: "The Ritz-Carlton Kyoto", kind: "Hotel", desc: "5-star luxury resort situated along the Kamogawa River, blending historic wooden design with premium amenities", rating: "4.9", reviews: "890" },
    { category: "Stay", name: "Kyoto Granbell Hotel", kind: "Hotel", desc: "stylish hotel in Gion blending modern architecture with traditional elements, featuring a public hot bath", rating: "4.6", reviews: "1,150" },
    { category: "Stay", name: "Len Kyoto Kawaramachi", kind: "Hostel", desc: "hip hostel and cafe-bar along the river with wooden interiors, hosting regular local music events", rating: "4.5", reviews: "940" },
    
    { category: "Do", name: "Fushimi Inari Shrine", kind: "Shrine", desc: "breathtaking shrine famous for its mountain path lined with over 10,000 vermilion Torii gates", rating: "4.9", reviews: "98,000" },
    { category: "Do", name: "Kinkaku-ji (Golden Pavilion)", kind: "Temple", desc: "stunning Zen temple covered in brilliant gold leaf, reflecting over a mirror pond in northern Kyoto", rating: "4.8", reviews: "45,000", ticket: true },
    { category: "Do", name: "Arashiyama Bamboo Grove", kind: "Nature Walk", desc: "scenic forest pathway winding through towering stalks of bright green bamboo, offering a peaceful rustling sound", rating: "4.7", reviews: "38,000" },
    { category: "Do", name: "Kiyomizu-dera Temple", kind: "Temple", desc: "historic Buddhist temple built on a hillside cliff without nails, featuring a massive wooden balcony overlooking Kyoto", rating: "4.8", reviews: "42,000", ticket: true },
    { category: "Do", name: "Gion Historic District", kind: "Cultural Area", desc: "Kyoto's famous geisha quarter, filled with preserved wooden machiya teahouses, lanterns, and stone-paved streets", rating: "4.6", reviews: "19,000" },
    
    { category: "Shop", name: "Nishiki Market", kind: "Historic Market", desc: "narrow five-block covered shopping street known as the Kitchen of Kyoto, packed with over 100 food stalls", rating: "4.5", reviews: "24,000" },
    { category: "Shop", name: "Shijo-dori", kind: "Shopping Street", desc: "central commercial street lined with traditional craft shops, modern department stores, and sweet shops", rating: "4.4", reviews: "8,900" },
    { category: "Shop", name: "Arashiyama Craft Shops", kind: "Artisan Shops", desc: "boutiques near the bamboo forest selling hand-crafted bamboo kitchenware, traditional paper umbrellas, and bags", rating: "4.5", reviews: "1,200" },
    { category: "Shop", name: "Kyoto Ceramic Center", kind: "Artisan Shop", desc: "gallery and shop showcasing handcrafted Kiyomizu-yaki porcelain tableware, vases, and teacups made by local artists", rating: "4.6", reviews: "320" },
    { category: "Shop", name: "Yojiya Gion", kind: "Cosmetics", desc: "historic brand famous for its natural face oil-blotting papers (aburatorigami) and traditional geisha cosmetics", rating: "4.5", reviews: "940" },
  ]
});

const osaka = buildCity({
  key: "osaka",
  name: "Osaka, Japan",
  currency: "¥",
  mealRange: [1200, 3000],
  stayRates: [9000, 13000, 18000],
  doCost: 2800,
  shopRange: [3500, 12000],
  cuisineStyle: "Osakan Street Food & Dotonbori",
  places: [
    { category: "Eat", name: "Mizuno", kind: "Okonomiyaki", desc: "legendary Dotonbori okonomiyaki spot serving cabbage pancakes loaded with seafood and pork since 1945", rating: "4.6", reviews: "2,400" },
    { category: "Eat", name: "Kushikatsu Daruma Shinsekai", kind: "Kushikatsu", desc: "historic stand serving crisp, deep-fried meat and vegetable skewers with a strict no double dipping rule", rating: "4.4", reviews: "3,100" },
    { category: "Eat", name: "Takoyaki Wanaka Namba", kind: "Takoyaki", desc: "award-winning food stall grilling molten-hot octopus batter balls topped with sweet sauce, mayo, and bonito flakes", rating: "4.5", reviews: "4,500" },
    { category: "Eat", name: "Kani Doraku Dotonbori", kind: "Seafood", desc: "iconic restaurant marked by a giant moving mechanical crab on its storefront, serving multi-course crab meals", rating: "4.3", reviews: "2,100" },
    { category: "Eat", name: "Endo Sushi", kind: "Sushi", desc: "historic 100-year-old sushi spot at the fish market serving warm vinegar rice sushi sets on wooden platters", rating: "4.6", reviews: "1,500" },
    
    { category: "Stay", name: "Swissotel Nankai Osaka", kind: "Hotel", desc: "luxurious 5-star hotel towers situated directly above Namba Station, offering great skyline views", rating: "4.7", reviews: "1,850" },
    { category: "Stay", name: "Ark Hostel & Cafe Cafe", kind: "Hostel", desc: "stylish designer hostel featuring custom wooden beds, a cozy rooftop deck, and a cool downstairs cafe-bar", rating: "4.4", reviews: "890" },
    { category: "Stay", name: "Hotel Nikko Osaka", kind: "Hotel", desc: "mid-range hotel directly connected to Shinsaibashi station, offering rooms looking down at Midosuji Avenue", rating: "4.5", reviews: "2,300" },
    { category: "Stay", name: "Cross Hotel Osaka", kind: "Hotel", desc: "modern design boutique hotel with sleek rooms, located a minutes walk from the Dotonbori canal", rating: "4.6", reviews: "1,200" },
    { category: "Stay", name: "Capsule Hotel Astil Dotonbori", kind: "Capsule Hotel", desc: "premium capsule hostel with pod rooms featuring charging docks, TV screens, and free amenities", rating: "4.3", reviews: "950" },
    
    { category: "Do", name: "Osaka Castle & Park", kind: "Castle", desc: "magnificent 16th-century fortress surrounded by stone walls, a double moat, and thousands of cherry blossom trees", rating: "4.7", reviews: "38,000", ticket: true },
    { category: "Do", name: "Dotonbori Canal Walk", kind: "Attraction", desc: "bustling canal walk famous for the neon Glico Running Man sign, mechanical restaurant signs, and street food stalls", rating: "4.7", reviews: "42,000" },
    { category: "Do", name: "Universal Studios Japan", kind: "Theme Park", desc: "massive theme park featuring Super Nintendo World, The Wizarding World of Harry Potter, and roller coasters", rating: "4.7", reviews: "75,000", ticket: true },
    { category: "Do", name: "Shinsekai Neighborhood", kind: "Cultural Area", desc: "retro district created in 1912 resembling Paris and New York, crowned by the Tsutenkaku steel tower", rating: "4.4", reviews: "15,000" },
    { category: "Do", name: "Osaka Aquarium Kaiyukan", kind: "Aquarium", desc: "one of the world's largest aquariums, showcasing marine life from the Pacific Rim in massive deep-water tanks", rating: "4.8", reviews: "28,000", ticket: true },
    
    { category: "Shop", name: "Shinsaibashi-suji Arcade", kind: "Shopping Arcade", desc: "historic 600-meter-long covered shopping arcade packed with fashion retail, cosmetics, and shoe stores", rating: "4.4", reviews: "24,000" },
    { category: "Shop", name: "Amerikamura (Amemura)", kind: "Shopping District", desc: "center of Osaka's youth street culture, filled with vintage clothes shops, record stores, and takoyaki stalls", rating: "4.3", reviews: "8,900" },
    { category: "Shop", name: "Sennichimae Doguyasuji", kind: "Shopping Street", desc: "niche shopping arcade known as Kitchenware Street, selling chef knives, lacquerware, and wax food models", rating: "4.6", reviews: "3,200" },
    { category: "Shop", name: "Kuromon Ichiba Market", kind: "Food Market", desc: "traditional covered market hall known as Osaka's Gastronome, famous for grilled wagyu beef, giant oysters, and sea urchin", rating: "4.4", reviews: "15,000" },
    { category: "Shop", name: "Namba Parks", kind: "Mall", desc: "striking modern architectural shopping mall built with an 8-story sloping rooftop botanical garden park", rating: "4.5", reviews: "12,000" },
  ]
});

const sapporo = buildCity({
  key: "sapporo",
  name: "Sapporo, Japan",
  currency: "¥",
  mealRange: [1200, 3500],
  stayRates: [7000, 11000, 16000],
  doCost: 2000,
  shopRange: [3000, 15000],
  cuisineStyle: "Hokkaido style",
  places: [
    { category: "Eat", name: "Ramen Shingen", kind: "Ramen Bar", desc: "wildly popular local ramen shop famous for its rich, velvety Koku-miso (miso ramen) broth", rating: "4.6", reviews: "2,400" },
    { category: "Stay", name: "Jozankei Daiichi Hotel Suizan-tei", kind: "Ryokan", desc: "traditional ryokan set in the scenic Jozankei hot springs valley with private outdoor onsen", rating: "4.8", reviews: "520" },
    { category: "Do", name: "Sapporo Beer Museum", kind: "Museum", desc: "historic red-brick museum showcasing the history of beer brewing in Japan, featuring tastings", rating: "4.5", reviews: "12,000" },
    { category: "Shop", name: "Nijo Market", kind: "Food Market", desc: "century-old public market selling fresh Hokkaido king crab, sea urchin, salmon roe, and melons", rating: "4.4", reviews: "8,900" }
  ]
});


const hiroshima = buildCity({
  "key": "hiroshima",
  "name": "Hiroshima, Japan",
  "currency": "¥",
  "mealRange": [
    1200,
    3500
  ],
  "stayRates": [
    8000,
    12000,
    17000
  ],
  "doCost": 3000,
  "shopRange": [
    2000,
    7000
  ],
  "cuisineStyle": "Hiroshima",
  "places": []
});

const fukuoka = buildCity({
  "key": "fukuoka",
  "name": "Fukuoka, Japan",
  "currency": "¥",
  "mealRange": [
    1000,
    3000
  ],
  "stayRates": [
    7000,
    11000,
    16000
  ],
  "doCost": 2500,
  "shopRange": [
    2000,
    6000
  ],
  "cuisineStyle": "Hakata",
  "places": []
});

export const JAPAN = {
  tokyo,
  kyoto,
  osaka,
  sapporo,
  hiroshima,
  fukuoka
};
