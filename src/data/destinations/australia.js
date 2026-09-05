import { buildCity } from "../builder";

const sydney = buildCity({
  key: "sydney",
  name: "Sydney, Australia",
  currency: "A$",
  mealRange: [32, 54],
  stayRates: [180, 218, 283],
  doCost: 108,
  shopRange: [180, 630],
  cuisineStyle: "Modern Australian",
  places: [
    { id: "sydney_e0", category: "Eat", name: "The Boathouse", kind: "Cafe", desc: "breezy waterfront cafe for seafood platters and bircher", rating: "4.5", reviews: "3,400" },
    { id: "sydney_e1", category: "Eat", name: "Spice Alley", kind: "Hawker", desc: "open-air laneway of pan-Asian hawker stalls", rating: "4.3", reviews: "2,100" },
    { category: "Eat", name: "Quay Restaurant", kind: "Fine Dining", desc: "award-winning restaurant by Peter Gilmore offering spectacular harbor views and the famous Snow Egg dessert", rating: "4.7", reviews: "1,500" },
    { category: "Eat", name: "Bourke Street Bakery", kind: "Bakery", desc: "cozy neighborhood bakery famous for sourdough, pork and fennel sausage rolls, and ginger tarts", rating: "4.6", reviews: "2,800" },
    { category: "Eat", name: "Mamak", kind: "Malaysian", desc: "always-busy Chinatown joint serving up flaky roti canai, satay skewers, and spicy curries", rating: "4.4", reviews: "3,900" },
    
    { id: "sydney_s0", category: "Stay", name: "Harbour Rocks Hotel", kind: "Hotel", desc: "heritage rooms in The Rocks, minutes from Circular Quay", rating: "4.6", reviews: "1,900" },
    { id: "sydney_s1", category: "Stay", name: "Sydney Central Inn", kind: "Hotel", desc: "handy budget rooms near Central Station", rating: "4.1", reviews: "1,250" },
    { category: "Stay", name: "The Langham Sydney", kind: "Hotel", desc: "ultra-luxury 5-star hotel in Millers Point featuring elegant rooms, a day spa, and a starry indoor pool", rating: "4.8", reviews: "940" },
    { category: "Stay", name: "Wake Up! Sydney Central", kind: "Hostel", desc: "award-winning social hostel opposite Central Station with daily activities and an on-site bar", rating: "4.4", reviews: "2,800" },
    { category: "Stay", name: "Little National Hotel Sydney", kind: "Hotel", desc: "smart luxury hotel above Wynyard Station featuring compact rooms with super-king beds and a rooftop bar", rating: "4.6", reviews: "1,150" },
    
    { id: "sydney_d0", category: "Do", name: "Sydney Opera House", kind: "Landmark", desc: "Jorn Utzon's sail-roofed icon on Bennelong Point", rating: "4.8", reviews: "150,000", ticket: true, ticketUrl: "https://www.sydneyoperahouse.com/visit/tours" },
    { id: "sydney_d1", category: "Do", name: "Sydney Harbour Bridge", kind: "Landmark", desc: "The Coathanger, free to stroll across for harbour views", rating: "4.7", reviews: "95,000" },
    { category: "Do", name: "Bondi to Coogee Coastal Walk", kind: "Coastal Walk", desc: "stunning 6km cliffside path connecting Sydney's famous beaches with rock pools and ocean views", rating: "4.9", reviews: "24,000" },
    { category: "Do", name: "Royal Botanic Garden", kind: "Gardens", desc: "historic harbourside oasis wrapping around Farm Cove, offering views of the Opera House and bridge", rating: "4.8", reviews: "38,000" },
    { category: "Do", name: "Taronga Zoo", kind: "Zoo", desc: "harbourside wildlife park featuring native animals, a short scenic ferry ride from Circular Quay", rating: "4.6", reviews: "18,000", ticket: true },
    
    { id: "sydney_p0", category: "Shop", name: "Queen Victoria Building", kind: "Shopping Arcade", desc: "grand Victorian arcade of boutiques under stained glass", rating: "4.6", reviews: "12,000" },
    { id: "sydney_p1", category: "Shop", name: "Paddington Markets", kind: "Market", desc: "Saturday market for local designers, art and crafts", rating: "4.3", reviews: "1,400" },
    { category: "Shop", name: "Carriageworks Farmers Market", kind: "Food Market", desc: "Saturday morning fresh food market in a heritage railway building, featuring local NSW producers", rating: "4.6", reviews: "2,200" },
    { category: "Shop", name: "The Rocks Markets", kind: "Artisan Market", desc: "weekend market along cobblestone lanes selling handmade jewelry, original art, and street food", rating: "4.4", reviews: "4,500" },
    { category: "Shop", name: "Westfield Sydney", kind: "Mall", desc: "massive central shopping mall in Pitt Street Mall hosting global retail brands and a gourmet food court", rating: "4.5", reviews: "8,900" },
  ]
});

const melbourne = buildCity({
  key: "melbourne",
  name: "Melbourne, Australia",
  currency: "A$",
  mealRange: [30, 50],
  stayRates: [160, 200, 260],
  doCost: 95,
  shopRange: [150, 600],
  cuisineStyle: "Modern Australian & Cafe",
  places: [
    { category: "Eat", name: "Chin Chin", kind: "Modern Asian", desc: "buzzy, high-energy laneway hotspot serving bold, spicy Southeast Asian sharing plates", rating: "4.6", reviews: "9,800" },
    { category: "Eat", name: "Lune Croissanterie", kind: "Bakery", desc: "aerospace-designed laboratory baking croissants called the best in the world by the NYT", rating: "4.7", reviews: "4,500" },
    { category: "Eat", name: "Pellegrini's Espresso Bar", kind: "Cafe", desc: "historic 1954 Italian coffee house serving classic pasta bowls and Melbourne's first espresso", rating: "4.5", reviews: "3,200" },
    { category: "Eat", name: "Cumulus Inc.", kind: "Restaurant", desc: "chic all-day eating house in Flinders Lane serving seasonal plates and a famous roast lamb shoulder", rating: "4.6", reviews: "2,400" },
    { category: "Eat", name: "Queen Victoria Market Food Hall", kind: "Food Hall", desc: "lively food market hub with specialty cheese shops, deli meats, hot jam donuts, and street food stalls", rating: "4.4", reviews: "12,000" },
    
    { category: "Stay", name: "Adelphi Hotel", kind: "Hotel", desc: "whimsical dessert-themed boutique design hotel in Flinders Lane with a famous glass-bottom rooftop pool", rating: "4.5", reviews: "890" },
    { category: "Stay", name: "Space Hotel", kind: "Hostel", desc: "modern hybrid hostel in the city center featuring a rooftop hot tub, gym, cinema, and private/shared rooms", rating: "4.2", reviews: "1,850" },
    { category: "Stay", name: "Grand Hyatt Melbourne", kind: "Hotel", desc: "prestigious 5-star luxury hotel on Collins Street featuring upscale rooms, a fitness center, and dining", rating: "4.7", reviews: "2,900" },
    { category: "Stay", name: "The Prince Hotel St Kilda", kind: "Hotel", desc: "historic boutique hotel in St Kilda with cool minimalist interiors, steps from the beach and restaurants", rating: "4.4", reviews: "920" },
    { category: "Stay", name: "QT Melbourne", kind: "Hotel", desc: "quirky, high-design luxury hotel with industrial-chic rooms, local art installations, and a popular rooftop bar", rating: "4.6", reviews: "1,400" },
    
    { category: "Do", name: "Federation Square & Laneways", kind: "Cultural Area", desc: "arts hub bordering Melbourne's famous labyrinth of graffiti-covered laneways like Hosier Lane", rating: "4.6", reviews: "22,000" },
    { category: "Do", name: "National Gallery of Victoria", kind: "Museum", desc: "Australia's oldest and most visited art museum, hosting an impressive collection of international and local art", rating: "4.8", reviews: "28,000" },
    { category: "Do", name: "Royal Botanic Gardens Melbourne", kind: "Gardens", desc: "lush 94-acre botanic park bordering the Yarra River, home to thousands of native and exotic plant species", rating: "4.8", reviews: "19,000" },
    { category: "Do", name: "St Kilda Beach & Pier", kind: "Beach", desc: "coastal suburb beach featuring a scenic pier where a wild colony of little penguins nested", rating: "4.4", reviews: "15,000" },
    { category: "Do", name: "Yarra Valley Wine Tour", kind: "Guided Tour", desc: "day trip from Melbourne visiting world-class cool-climate vineyards, gin distilleries, and chocolate shops", rating: "4.7", reviews: "4,200", ticket: true },
    
    { category: "Shop", name: "Queen Victoria Market", kind: "Historic Market", desc: "historic open-air market covering two city blocks, selling fresh food, clothing, crafts, and souvenirs", rating: "4.5", reviews: "45,000" },
    { category: "Shop", name: "Fitzroy Boutiques", kind: "Artisan Lanes", desc: "bohemian shops and vintage boutiques along Gertrude and Brunswick streets in creative Fitzroy", rating: "4.5", reviews: "3,100" },
    { category: "Shop", name: "Melbourne Central", kind: "Mall", desc: "modern retail shopping center built around a historic coopering shot tower under a massive glass cone dome", rating: "4.5", reviews: "18,000" },
    { category: "Shop", name: "The Block Arcade", kind: "Historic Arcade", desc: "beautifully restored 1892 heritage shopping arcade with mosaic tiled floors and glass ceilings", rating: "4.6", reviews: "7,800" },
    { category: "Shop", name: "Rose St. Artists' Market", kind: "Artisan Market", desc: "weekend market in Fitzroy showcasing handmade jewelry, prints, pottery, and fashion from local makers", rating: "4.5", reviews: "650" },
  ]
});

const brisbane = buildCity({
  key: "brisbane",
  name: "Brisbane, Australia",
  currency: "A$",
  mealRange: [28, 48],
  stayRates: [150, 185, 240],
  doCost: 88,
  shopRange: [120, 450],
  cuisineStyle: "Queensland Contemporary",
  places: [
    { category: "Eat", name: "Julius Pizzeria", kind: "Pizzeria", desc: "South Brisbane hotspot famous for wood-fired pizzas, delicious pasta, and a bustling, energetic dining room", rating: "4.6", reviews: "2,300" },
    { category: "Eat", name: "Gauge", kind: "Restaurant", desc: "award-winning restaurant in South Brisbane serving creative, boundary-pushing plates featuring local produce", rating: "4.5", reviews: "620" },
    { category: "Eat", name: "Agnes", kind: "Restaurant", desc: "acclaimed restaurant cooking entirely over wood fire, set in a moody converted brick warehouse in Fortitude Valley", rating: "4.7", reviews: "950" },
    { category: "Eat", name: "Gerard's Bistro", kind: "Middle Eastern", desc: "award-winning restaurant in Fortitude Valley serving modern Middle Eastern sharing plates in a concrete-chic setting", rating: "4.5", reviews: "870" },
    { category: "Eat", name: "Eat Street Northshore", kind: "Food Market", desc: "massive container-food park on the Brisbane River offering live music and food stalls from around the world", rating: "4.6", reviews: "18,000" },
    
    { category: "Stay", name: "The Calile Hotel", kind: "Hotel", desc: "world-famous 5-star design resort in Fortitude Valley with pastel concrete finishes, cabanas, and a pool", rating: "4.8", reviews: "1,500" },
    { category: "Stay", name: "Brisbane City YHA", kind: "Hostel", desc: "award-winning backpacker hostel with a rooftop swimming pool, bar, and views over the Brisbane River", rating: "4.3", reviews: "1,600" },
    { category: "Stay", name: "W Brisbane", kind: "Hotel", desc: "playful 5-star luxury hotel in the CBD featuring eclectic modern design, an indoor pool, and river views", rating: "4.6", reviews: "1,100" },
    { category: "Stay", name: "Emporium Hotel South Bank", kind: "Hotel", desc: "luxurious boutique hotel with custom-designed suites, rooftop infinity pool, and views over South Bank Parklands", rating: "4.7", reviews: "1,200" },
    { category: "Stay", name: "Crystalbrook Vincent", kind: "Hotel", desc: "eco-friendly hotel carved under the Story Bridge, celebrating Australian artist Vincent Fantauzzo's portraits", rating: "4.6", reviews: "750" },
    
    { category: "Do", name: "South Bank Parklands", kind: "Park", desc: "riverside parklands featuring walking paths, tropical gardens, Ferris wheel, and Australia's only inner-city artificial beach", rating: "4.7", reviews: "24,000" },
    { category: "Do", name: "Lone Pine Koala Sanctuary", kind: "Sanctuary", desc: "world's first and largest koala sanctuary where you can feed kangaroos, see platypus, and cuddle koalas", rating: "4.7", reviews: "15,000", ticket: true },
    { category: "Do", name: "Mount Coot-tha Lookout", kind: "Lookout", desc: "hilltop viewpoint offering panoramic views over Brisbane's skyline and Moreton Bay, with walking trails", rating: "4.6", reviews: "18,000" },
    { category: "Do", name: "Brisbane Riverwalk", kind: "Pathway", desc: "scenic floating pathway extending over the Brisbane River from New Farm to the city center, great for cycling", rating: "4.7", reviews: "4,500" },
    { category: "Do", name: "Gallery of Modern Art (GOMA)", kind: "Museum", desc: "Australia's largest gallery of modern and contemporary art, located in the architectural Cultural Centre precinct", rating: "4.8", reviews: "9,800" },
    
    { category: "Shop", name: "Collective Markets", kind: "Craft Market", desc: "weekend market in South Bank selling unique crafts, local fashion, handmade soaps, and gifts", rating: "4.3", reviews: "1,200" },
    { category: "Shop", name: "Queen Street Mall", kind: "Shopping Street", desc: "pedestrian shopping precinct in the heart of Brisbane CBD, home to over 700 retail stores and arcades", rating: "4.4", reviews: "22,000" },
    { category: "Shop", name: "James Street", kind: "Shopping District", desc: "leafy shopping precinct in Fortitude Valley packed with high-end Australian fashion designers and boutiques", rating: "4.6", reviews: "2,400" },
    { category: "Shop", name: "West End Markets", kind: "Farmers Market", desc: "vibrant Saturday market in Davies Park under giant fig trees selling fresh farm produce, hot food, and fashion", rating: "4.5", reviews: "3,200" },
    { category: "Shop", name: "Boundary Street", kind: "Artisan Lane", desc: "quirky street in West End home to vintage shops, record stores, indie bookstores, and organic food grocers", rating: "4.4", reviews: "1,500" }
  ]
});

const perth = buildCity({
  key: "perth",
  name: "Perth, Australia",
  currency: "A$",
  mealRange: [28, 48],
  stayRates: [140, 180, 230],
  doCost: 85,
  shopRange: [120, 450],
  cuisineStyle: "Western Australian",
  places: [
    { category: "Eat", name: "Little Creatures Brewery", kind: "Tavern", desc: "famous waterfront brewery in Fremantle serving wood-fired pizzas, frites, and pale ales", rating: "4.6", reviews: "5,400" },
    { category: "Stay", name: "Como The Treasury", kind: "Hotel", desc: "luxurious 5-star hotel in beautifully restored 19th-century state buildings in Perth's center", rating: "4.9", reviews: "620" },
    { category: "Do", name: "Kings Park Botanic Garden", kind: "Park", desc: "massive 1,000-acre park offering panoramic views of the Swan River and Perth skyline", rating: "4.9", reviews: "32,000" },
    { category: "Shop", name: "Fremantle Markets", kind: "Local Market", desc: "historic 1897 market hall packed with fresh local produce, artisan crafts, and street food", rating: "4.6", reviews: "12,000" }
  ]
});


const adelaide = buildCity({
  "key": "adelaide",
  "name": "Adelaide, Australia",
  "currency": "$",
  "mealRange": [
    30,
    60
  ],
  "stayRates": [
    130,
    180,
    240
  ],
  "doCost": 90,
  "shopRange": [
    120,
    400
  ],
  "cuisineStyle": "Modern Australian",
  "places": []
});

const hobart = buildCity({
  "key": "hobart",
  "name": "Hobart, Australia",
  "currency": "$",
  "mealRange": [
    35,
    65
  ],
  "stayRates": [
    140,
    190,
    260
  ],
  "doCost": 95,
  "shopRange": [
    130,
    450
  ],
  "cuisineStyle": "Modern Australian",
  "places": []
});

export const AUSTRALIA = {
  sydney,
  melbourne,
  brisbane,
  perth,
  adelaide,
  hobart
};
