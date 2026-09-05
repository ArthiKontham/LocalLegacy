import { buildCity } from "../builder";

const seoul = buildCity({
  key: "seoul",
  name: "Seoul, South Korea",
  currency: "₩",
  mealRange: [15000, 30000],
  stayRates: [110000, 160000, 220000],
  doCost: 85000,
  shopRange: [100000, 450000],
  cuisineStyle: "Korean",
  places: [
    { category: "Eat", name: "Tosokchon Samgyetang", kind: "Traditional", desc: "famous restaurant near Gyeongbokgung palace serving the best ginseng chicken soup (samgyetang)", rating: "4.5", reviews: "6,800" },
    { category: "Eat", name: "Gwangjang Market", kind: "Food Stalls", desc: "historic covered market famous for mung bean pancakes (bindaetteok), hand-cut noodles, and raw beef", rating: "4.6", reviews: "12,000" },
    { category: "Eat", name: "Myeongdong Kyoja", kind: "Noodle Shop", desc: "Michelin-recommended local institution famous for rich, knife-cut noodle soup (kalguksu) and garlic kimchi", rating: "4.5", reviews: "8,900" },
    { category: "Eat", name: "Maple Tree House", kind: "Korean BBQ", desc: "stylish Korean BBQ restaurant serving premium quality aged beef and pork grilled at your table", rating: "4.5", reviews: "2,400" },
    { category: "Eat", name: "Cafe Onion Anguk", kind: "Cafe", desc: "stunning modern bakery set inside a beautifully restored traditional Korean wooden Hanok house", rating: "4.6", reviews: "3,100" },
    
    { category: "Stay", name: "Lotte Hotel Seoul", kind: "Hotel", desc: "prestigious 5-star luxury hotel in Myeongdong featuring upscale rooms, a spa, and multiple fine dining options", rating: "4.7", reviews: "2,900" },
    { category: "Stay", name: "Insadong Hostel", kind: "Hostel", desc: "friendly budget guest house set in a quiet alley of the historic Insadong neighborhood", rating: "4.2", reviews: "750" },
    { category: "Stay", name: "RYSE Hotel Hongdae", kind: "Hotel", desc: "trendy design boutique hotel in creative Hongdae, featuring custom art rooms and a rooftop cocktail lounge", rating: "4.6", reviews: "1,200" },
    { category: "Stay", name: "Signiel Seoul", kind: "Hotel", desc: "ultra-luxury hotel occupying floors 76 to 101 of the Lotte World Tower, the tallest building in Korea", rating: "4.8", reviews: "1,100" },
    { category: "Stay", name: "Darakhyu Capsule Hotel", kind: "Capsule Hotel", desc: "smart capsule hotel located inside Incheon Airport, perfect for quick layovers or early morning flights", rating: "4.4", reviews: "890" },
    
    { category: "Do", name: "Gyeongbokgung Palace", kind: "Palace", desc: "Seoul's primary royal palace of the Joseon dynasty, famous for the royal guard changing ceremonies", rating: "4.8", reviews: "42,000", ticket: true },
    { category: "Do", name: "N Seoul Tower", kind: "Landmark", desc: "observatory tower perched on top of Namsan mountain, offering 360-degree views over Seoul's cityscape", rating: "4.6", reviews: "38,000", ticket: true },
    { category: "Do", name: "Bukchon Hanok Village", kind: "Cultural Area", desc: "preserved historic neighborhood of hundreds of traditional Korean tiled-roof houses dating back to Joseon", rating: "4.6", reviews: "24,000" },
    { category: "Do", name: "Dongdaemun Design Plaza (DDP)", kind: "Landmark", desc: "Zaha Hadid's futuristic, curvaceous silver architectural icon, hosting fashion shows, design stores, and parks", rating: "4.7", reviews: "18,000" },
    { category: "Do", name: "Myeongdong Shopping Cathedral", kind: "Attraction", desc: "famous shopping district bustling with cosmetics shops, clothing retailers, and delicious street food vendors", rating: "4.5", reviews: "32,000" },
    
    { category: "Shop", name: "Myeongdong Street Market", kind: "Shopping Street", desc: "bustling market alleys packed with cosmetics stores, K-fashion retailers, and dozens of street food carts", rating: "4.5", reviews: "18,000" },
    { category: "Shop", name: "Insadong Antique Alley", kind: "Shopping District", desc: "main street filled with traditional tea houses, art galleries, calligraphy stores, and pottery workshops", rating: "4.6", reviews: "8,900" },
    { category: "Shop", name: "Starfield COEX Mall", kind: "Mall", desc: "giant underground shopping mall famous for its towering multi-story public Starfield Library", rating: "4.6", reviews: "15,000" },
    { category: "Shop", name: "Namdaemun Market", kind: "Historic Market", desc: "Korea's oldest and largest traditional market, selling everything from cheap clothing to kitchenware and snacks", rating: "4.4", reviews: "24,000" },
    { category: "Shop", name: "Hongdae Shopping District", kind: "Shopping District", desc: "vibrant youth fashion district filled with quirky accessory shops, vintage clothing boutiques, and indie labels", rating: "4.5", reviews: "12,000" },
  ]
});

const busan = buildCity({
  key: "busan",
  name: "Busan, South Korea",
  currency: "₩",
  mealRange: [12000, 25000],
  stayRates: [90000, 130000, 180000],
  doCost: 75000,
  shopRange: [80000, 350000],
  cuisineStyle: "Busan Seafood & Gukbap",
  places: [
    { category: "Eat", name: "Jagalchi Fish Market Stalls", kind: "Seafood Market", desc: "Korea's largest seafood market, where you choose fresh fish downstairs and eat it raw or grilled upstairs", rating: "4.5", reviews: "15,000" },
    { category: "Eat", name: "Ssangdunggi Dwaeji Gukbap", kind: "Pork Soup", desc: "legendary local restaurant serving Busan's famous hot pork broth soup with rice and chives", rating: "4.6", reviews: "3,200" },
    { category: "Eat", name: "Samjin Amook", kind: "Fishcake Shop", desc: "historic bakery-style shop in Yeongdo selling delicious, hot fried fishcakes with various toppings since 1953", rating: "4.5", reviews: "2,400" },
    { category: "Eat", name: "Halmae Gaya Milmyeon", kind: "Noodle Shop", desc: "famous local joint serving refreshing cold wheat noodles (milmyeon) in a spicy ice-cold beef broth", rating: "4.4", reviews: "1,500" },
    { category: "Eat", name: "Haeundae Pojangmacha Town", kind: "Seafood Tents", desc: "seaside alley of orange food tents serving fresh live seafood, lobster, and soju in Haeundae", rating: "4.3", reviews: "850" },
    
    { category: "Stay", name: "Park Hyatt Busan", kind: "Hotel", desc: "luxurious 5-star hotel in Marine City featuring floor-to-ceiling windows overlooking the Gwangan Bridge and yacht marina", rating: "4.8", reviews: "1,500" },
    { category: "Stay", name: "Kimchee Haeundae Guesthouse", kind: "Hostel", desc: "lively social hostel located just a short walk from Haeundae Beach, featuring a shared lounge and pub crawls", rating: "4.1", reviews: "940" },
    { category: "Stay", name: "Lotte Hotel Busan", kind: "Hotel", desc: "upscale hotel in Seomyeon featuring modern rooms, a casino, indoor pool, and great central subway access", rating: "4.6", reviews: "2,100" },
    { category: "Stay", name: "Ananti at Busan Cove", kind: "Hotel", desc: "stunning seaside resort in Gijang featuring cliffside infinity pools, a private library, and hot spring spa", rating: "4.7", reviews: "1,200" },
    { category: "Stay", name: "K-Guesthouse Premium Nampo", kind: "Hostel", desc: "modern, clean guesthouse near Nampo-dong shopping street, featuring rooms with sea or city harbor views", rating: "4.4", reviews: "750" },
    
    { category: "Do", name: "Gamcheon Culture Village", kind: "Cultural Village", desc: "hilly neighborhood of brightly painted houses, street murals, and staircases, nicknamed 'Santorini of the East'", rating: "4.6", reviews: "22,000" },
    { category: "Do", name: "Haeundae Beach & Sky Capsule", kind: "Beach", desc: "Korea's most famous beach, featuring scenic colorful mini sky capsules riding on an elevated rail line along the coast", rating: "4.7", reviews: "34,000" },
    { category: "Do", name: "Haedong Yonggungsa Temple", kind: "Temple", desc: "unique and beautiful 14th-century Buddhist temple built directly on rocky cliffs overlooking the ocean", rating: "4.7", reviews: "18,000" },
    { category: "Do", name: "Gwangan Bridge (Diamond Bridge)", kind: "Landmark", desc: "massive double-decker suspension bridge spanning the ocean, famous for its colorful LED light shows at night", rating: "4.8", reviews: "19,000" },
    { category: "Do", name: "Taejongdae Resort Park", kind: "Park", desc: "natural park on Yeongdo island featuring forested walking paths, dramatic ocean cliffs, and a lighthouse", rating: "4.6", reviews: "8,900" },
    
    { category: "Shop", name: "Shinsegae Centum City", kind: "Department Store", desc: "certified by Guinness World Records as the world's largest department store, featuring an ice rink and spa", rating: "4.6", reviews: "15,000" },
    { category: "Shop", name: "Nampo-dong Street", kind: "Shopping Street", desc: "bustling retail area in central Busan packed with fashion brand shops, cosmetic stores, and accessories", rating: "4.4", reviews: "12,000" },
    { category: "Shop", name: "Gukje Market", kind: "Historic Market", desc: "traditional market established during the Korean War, selling vintage clothes, tools, and imported goods", rating: "4.3", reviews: "8,900" },
    { category: "Shop", name: "BIFF Square", kind: "Shopping Street", desc: "pedestrian square celebrating the Busan International Film Festival, lined with cinema complexes and street food", rating: "4.4", reviews: "6,200" },
    { category: "Shop", name: "Jagalchi Dried Fish Market", kind: "Food Market", desc: "historic alleyways near the port filled with wholesalers selling dried anchovies, kelp, and salted fish", rating: "4.4", reviews: "2,100" },
  ]
});

const jeju = buildCity({
  key: "jeju",
  name: "Jeju, South Korea",
  currency: "₩",
  mealRange: [10000, 30000],
  stayRates: [60000, 100000, 180000],
  doCost: 15000,
  shopRange: [15000, 70000],
  cuisineStyle: "Jeju local",
  places: [
    { category: "Eat", name: "Donsadon", kind: "Korean BBQ", desc: "wildly popular restaurant famous for thick cuts of authentic charcoal-grilled Jeju Black Pork", rating: "4.6", reviews: "2,400" },
    { category: "Stay", name: "The Shilla Jeju", kind: "Hotel", desc: "prestigious 5-star luxury resort set in Jungmun featuring heated outdoor pools and sea view cabanas", rating: "4.8", reviews: "1,200" },
    { category: "Do", name: "Seongsan Ilchulbong (Sunrise Peak)", kind: "Landmark", desc: "extinct volcanic cone rising from the ocean, offering panoramic sunrise views from its crater peak", rating: "4.9", reviews: "18,000", ticket: true },
    { category: "Shop", name: "Dongmun Traditional Market", kind: "Local Market", desc: "historic market in Jeju City famous for Hallabong oranges, tangerine chocolates, and street food", rating: "4.5", reviews: "9,800" }
  ]
});


const incheon = buildCity({
  "key": "incheon",
  "name": "Incheon, South Korea",
  "currency": "₩",
  "mealRange": [
    12000,
    35000
  ],
  "stayRates": [
    70000,
    110000,
    160000
  ],
  "doCost": 25000,
  "shopRange": [
    20000,
    80000
  ],
  "cuisineStyle": "Korean",
  "places": []
});

const daegu = buildCity({
  "key": "daegu",
  "name": "Daegu, South Korea",
  "currency": "₩",
  "mealRange": [
    10000,
    30000
  ],
  "stayRates": [
    60000,
    100000,
    140000
  ],
  "doCost": 20000,
  "shopRange": [
    15000,
    70000
  ],
  "cuisineStyle": "Korean",
  "places": []
});

export const SOUTH_KOREA = {
  seoul,
  busan,
  jeju,
  incheon,
  daegu
};
