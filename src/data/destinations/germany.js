import { buildCity } from "../builder";

const berlin = buildCity({
  key: "berlin",
  name: "Berlin, Germany",
  currency: "€",
  mealRange: [22, 38],
  stayRates: [110, 145, 188],
  doCost: 72,
  shopRange: [120, 420],
  cuisineStyle: "German & International",
  places: [
    { id: "berlin_e0", category: "Eat", name: "Mustafa's Gemüse Kebap", kind: "Kebap", pic: "mustafa-s-gemuse-kebap", desc: "legendary street kiosk in Kreuzberg serving chicken and roasted vegetable durums", rating: "4.5", reviews: "18,000" },
    { id: "berlin_e1", category: "Eat", name: "Zur letzten Instanz", kind: "Tavern", pic: "zur-letzten-instanz", desc: "historic 1621 tavern serving classic hearty German dishes, once dined in by Napoleon", rating: "4.4", reviews: "2,100" },
    { category: "Eat", name: "Curry 36", kind: "Fast Food", desc: "highly popular local stand in Kreuzberg serving authentic Berlin currywurst and fries", rating: "4.5", reviews: "8,900" },
    { category: "Eat", name: "Monsieur Vuong", kind: "Vietnamese", desc: "hip, colorful local favorite serving fresh aromatic bowls of pho and spring rolls in Mitte", rating: "4.5", reviews: "4,200" },
    { category: "Eat", name: "Hofbräu Wirtshaus Berlin", kind: "Bavarian Hall", desc: "massive, lively beer hall bringing Munich-style pork knuckles, giant pretzels, and liters of beer to Berlin", rating: "4.3", reviews: "12,000" },
    
    { id: "berlin_s0", category: "Stay", name: "Hotel Hackescher Markt", kind: "Hotel", pic: "hotel-hackescher-markt", desc: "charming townhouse rooms in a quiet courtyard in central Berlin", rating: "4.6", reviews: "1,200" },
    { id: "berlin_s1", category: "Stay", name: "Michelberger Hotel", kind: "Hotel", pic: "michelberger-hotel", desc: "hip industrial-chic design rooms close to the East Side Gallery", rating: "4.5", reviews: "2,400" },
    { category: "Stay", name: "The Circus Hostel", kind: "Hostel", desc: "award-winning boutique hostel at Rosenthaler Platz featuring an in-house microbrewery and social events", rating: "4.5", reviews: "3,800" },
    { category: "Stay", name: "Soho House Berlin", kind: "Hotel", desc: "exclusive hotel set in a historic Bauhaus-style building featuring a rooftop pool and chic rooms", rating: "4.7", reviews: "640" },
    { category: "Stay", name: "25hours Hotel Bikini Berlin", kind: "Hotel", desc: "playful design hotel overlooking the Berlin Zoo and Tiergarten park, featuring hammock lounges", rating: "4.6", reviews: "1,950" },
    
    { id: "berlin_d0", category: "Do", name: "Brandenburg Gate", kind: "Landmark", pic: "brandenburg-gate", desc: "Berlin's iconic 18th-century neoclassical triumphal monument, a symbol of unity", rating: "4.8", reviews: "150,000" },
    { id: "berlin_d1", category: "Do", name: "Museum Island", kind: "Museum complex", pic: "museum-island", desc: "UNESCO-listed island housing five world-class museums including the Pergamon", rating: "4.7", reviews: "90,000", ticket: true },
    { category: "Do", name: "Reichstag Building", kind: "Landmark", desc: "historic parliament building featuring a modern glass dome with 360-degree views of the city", rating: "4.7", reviews: "62,000" },
    { category: "Do", name: "East Side Gallery", kind: "Memorial", desc: "historic 1.3km section of the Berlin Wall covered in iconic political and artistic murals", rating: "4.6", reviews: "45,000" },
    { category: "Do", name: "Checkpoint Charlie", kind: "Monument", desc: "the famous Cold War crossing point between East and West Berlin, marked by a historic guard shack", rating: "4.1", reviews: "22,000" },
    
    { id: "berlin_p0", category: "Shop", name: "Kurfürstendamm", kind: "Shopping boulevard", pic: "kurfurstendamm", desc: "Berlin's elegant central shopping avenue filled with retail stores and cafes", rating: "4.5", reviews: "18,000" },
    { id: "berlin_p1", category: "Shop", name: "Flohmarkt Mauerpark", kind: "Market", pic: "flohmarkt-mauerpark", desc: "lively Sunday flea market famous for vintage clothes, food stalls, and outdoor karaoke", rating: "4.4", reviews: "12,000" },
    { category: "Shop", name: "KaDeWe", kind: "Department Store", desc: "historic luxury department store, the largest in mainland Europe, renowned for its massive gourmet food floor", rating: "4.6", reviews: "24,000" },
    { category: "Shop", name: "Hackesche Höfe", kind: "Shopping Courtyard", desc: "maze of eight beautifully restored courtyards housing independent boutiques, local designers, and cafes", rating: "4.6", reviews: "8,900" },
    { category: "Shop", name: "Boxhagener Platz Market", kind: "Market", desc: "Sunday flea market in Friedrichshain popular for retro furniture, local art prints, and records", rating: "4.4", reviews: "2,300" },
  ]
});

const munich = buildCity({
  key: "munich",
  name: "Munich, Germany",
  currency: "€",
  mealRange: [25, 45],
  stayRates: [130, 175, 230],
  doCost: 85,
  shopRange: [150, 500],
  cuisineStyle: "Bavarian",
  places: [
    { category: "Eat", name: "Hofbräuhaus", kind: "Beer Hall", desc: "historic 16th-century Bavarian beer hall serving giant steins, pork knuckles, and playing live brass music", rating: "4.5", reviews: "45,000" },
    { category: "Eat", name: "Viktualienmarkt Stalls", kind: "Food Stalls", desc: "open-air market booths serving hot sausages, fresh pretzels, local cheeses, and a central beer garden", rating: "4.6", reviews: "15,000" },
    { category: "Eat", name: "Dallmayr Delicatessen", kind: "Delicatessen", desc: "prestigious 300-year-old gourmet food hall famous for fine coffee, chocolates, oysters, and cheeses", rating: "4.5", reviews: "6,200" },
    { category: "Eat", name: "Schneider Bräuhaus", kind: "Traditional Hall", desc: "classic tavern serving traditional Munich dishes like roast pork and famous Aventinus wheat beer", rating: "4.4", reviews: "4,800" },
    { category: "Eat", name: "Cafe Frischhut", kind: "Cafe", desc: "quaint café famous for serving fresh, hot Auszogene (traditional Bavarian fried yeast pastries)", rating: "4.6", reviews: "1,500" },
    
    { category: "Stay", name: "Hotel Bayerischer Hof", kind: "Hotel", desc: "legendary 5-star hotel in the old town with luxury rooms, a rooftop pool, and a private cinema", rating: "4.7", reviews: "2,100" },
    { category: "Stay", name: "Wombat's City Hostel", kind: "Hostel", desc: "highly social hostel near the main station with a glass-roofed conservatory lounge and lively bar", rating: "4.4", reviews: "2,900" },
    { category: "Stay", name: "Eurostars Grand Central", kind: "Hotel", desc: "modern hotel with clean spacious rooms, an indoor pool, and great connections to the city center", rating: "4.3", reviews: "1,850" },
    { category: "Stay", name: "Cortiina Hotel", kind: "Hotel", desc: "stylish boutique hotel in the old town featuring elegant dark wood décor and a popular wine bar", rating: "4.6", reviews: "650" },
    { category: "Stay", name: "Ruby Lilly Hotel", kind: "Hotel", desc: "contemporary boutique hotel with retro radio-themed bar, plush beds, and central location", rating: "4.5", reviews: "1,200" },
    
    { category: "Do", name: "Marienplatz & Glockenspiel", kind: "Landmark", desc: "Munich's central square featuring the grand neo-Gothic town hall and its historic animated mechanical clock", rating: "4.8", reviews: "42,000" },
    { category: "Do", name: "English Garden (Eisbachwelle)", kind: "Park", desc: "massive city park featuring the Eisbach river where surfers ride a standing wave all year round", rating: "4.8", reviews: "32,000" },
    { category: "Do", name: "Nymphenburg Palace", kind: "Palace", desc: "grand baroque palace, summer residence of Bavarian rulers, surrounded by canals and manicured gardens", rating: "4.7", reviews: "15,000", ticket: true },
    { category: "Do", name: "Deutsches Museum", kind: "Museum", desc: "the world's largest museum of science and technology, housing exhibits from aircraft to early computers", rating: "4.7", reviews: "18,000", ticket: true },
    { category: "Do", name: "Munich Residenz", kind: "Palace", desc: "vast former royal palace of the Bavarian dukes, showcasing ornate Renaissance and Rococo halls", rating: "4.7", reviews: "12,000", ticket: true },
    
    { category: "Shop", name: "Maximilianstraße", kind: "Shopping Street", desc: "exclusive shopping avenue lined with grand architectural facades and international luxury boutiques", rating: "4.5", reviews: "3,100" },
    { category: "Shop", name: "Viktualienmarkt", kind: "Food Market", desc: "historic gourmet food market containing over 140 stalls of cheeses, sausages, flowers, and local crafts", rating: "4.7", reviews: "28,000" },
    { category: "Shop", name: "Kaufingerstraße", kind: "Shopping Street", desc: "Munich's main pedestrian shopping avenue connecting Marienplatz and Karlsplatz, busy with global retail", rating: "4.4", reviews: "15,000" },
    { category: "Shop", name: "Glockenbachviertel Boutiques", kind: "Shopping District", desc: "trendy streets filled with independent designers, local fashion boutiques, craft shops, and bookstores", rating: "4.5", reviews: "1,800" },
    { category: "Shop", name: "Servus Heimat", kind: "Artisan Shop", desc: "quirky shop specializing in modern Bavarian gifts, locally made souvenirs, and alpine lifestyle goods", rating: "4.6", reviews: "310" },
  ]
});

const hamburg = buildCity({
  key: "hamburg",
  name: "Hamburg, Germany",
  currency: "€",
  mealRange: [24, 42],
  stayRates: [120, 160, 210],
  doCost: 80,
  shopRange: [120, 450],
  cuisineStyle: "Hanseatic Seafood",
  places: [
    { category: "Eat", name: "Fischereihafen Restaurant", kind: "Seafood Restaurant", desc: "celebrated waterfront restaurant serving premium fresh fish dishes overlooking the Elbe harbor", rating: "4.6", reviews: "2,300" },
    { category: "Eat", name: "Oberhafen Kantine", kind: "Tavern", desc: "historic, tilting local tavern serving classic northern German sailor dishes like Labskaus since 1925", rating: "4.5", reviews: "920" },
    { category: "Eat", name: "Bullerei", kind: "Steakhouse", desc: "hip, industrial-chic restaurant in a former slaughterhouse, owned by celebrity chef Tim Mälzer", rating: "4.4", reviews: "2,100" },
    { category: "Eat", name: "Brücke 10", kind: "Fast Food", desc: "popular harbor-front stand serving legendary Fischbrötchen (fish rolls loaded with shrimp or herring)", rating: "4.6", reviews: "4,200" },
    { category: "Eat", name: "Elbgold Cafe", kind: "Specialty Cafe", desc: "industrial-chic coffee roasters in Schanzenviertel serving excellent espresso and freshly baked bagels", rating: "4.5", reviews: "1,800" },
    
    { category: "Stay", name: "Grand Elysée Hamburg", kind: "Hotel", desc: "5-star luxury hotel featuring spacious modern rooms, a massive spa pool, and a jazz bar", rating: "4.7", reviews: "1,900" },
    { category: "Stay", name: "Pyjama Park St. Pauli", kind: "Hostel", desc: "trendy hostel directly on the famous Reeperbahn nightlife strip, featuring cool capsule and private rooms", rating: "4.2", reviews: "1,100" },
    { category: "Stay", name: "Superbude St. Pauli", kind: "Hostel", desc: "funky design hostel with custom-built recycled furniture, waffle stations, and social lounges", rating: "4.6", reviews: "1,300" },
    { category: "Stay", name: "Henri Hotel Hamburg", kind: "Hotel", desc: "stylish boutique hotel in the city center with cozy 1960s-inspired vintage decor and a spa", rating: "4.6", reviews: "750" },
    { category: "Stay", name: "The Fontenay", kind: "Hotel", desc: "ultra-modern luxury hotel directly on the Outer Alster Lake featuring stunning organic architecture", rating: "4.8", reviews: "890" },
    
    { category: "Do", name: "Miniatur Wunderland", kind: "Museum", desc: "the world's largest model railway exhibition, displaying detailed mini cities and airports", rating: "4.9", reviews: "95,000", ticket: true },
    { category: "Do", name: "Elbphilharmonie Plaza", kind: "Landmark", desc: "futuristic glass concert hall built on an old warehouse; its public viewing deck offers port views", rating: "4.7", reviews: "62,000" },
    { category: "Do", name: "Speicherstadt", kind: "Historic District", desc: "the world's largest historic warehouse district, built on oak logs with red-brick Gothic canals", rating: "4.8", reviews: "38,000" },
    { category: "Do", name: "St. Pauli & Reeperbahn", kind: "Nightlife Area", desc: "Hamburg's famous entertainment district, rich in music history where the Beatles began their career", rating: "4.2", reviews: "28,000" },
    { category: "Do", name: "Hamburg Harbor Boat Tour", kind: "Activity", desc: "scenic boat tour navigating massive container docks, lock gates, and canals on a traditional launch", rating: "4.6", reviews: "14,000", ticket: true },
    
    { category: "Shop", name: "Mönckebergstraße", kind: "Shopping Street", desc: "Hamburg's primary pedestrian shopping avenue, home to department stores and major retail brands", rating: "4.4", reviews: "15,000" },
    { category: "Shop", name: "Neuer Wall", kind: "Shopping Street", desc: "exclusive canal-side shopping street hosting luxury fashion flagships and designer boutiques", rating: "4.5", reviews: "4,100" },
    { category: "Shop", name: "Flohschanze Flea Market", kind: "Flea Market", desc: "Saturday flea market in the Schanzenviertel, famous for vintage furniture, books, and quirky items", rating: "4.4", reviews: "2,500" },
    { category: "Shop", name: "Speicherstadt Spices", kind: "Artisan Shops", desc: "boutiques inside brick warehouses selling gourmet spices, imported coffees, and loose leaf teas", rating: "4.6", reviews: "890" },
    { category: "Shop", name: "Alsterhaus", department: "Department Store", desc: "historic luxury department store overlooking the Binnenalster lake, with premium fashion and foods", rating: "4.5", reviews: "5,200" },
  ]
});

const cologne = buildCity({
  key: "cologne",
  name: "Cologne, Germany",
  currency: "€",
  mealRange: [18, 35],
  stayRates: [90, 130, 180],
  doCost: 65,
  shopRange: [80, 300],
  cuisineStyle: "Rhenish",
  places: [
    { category: "Eat", name: "Früh am Dom", kind: "Tavern", desc: "famous traditional brewery tavern near the cathedral serving fresh Kölsch beer and hearty pork knuckle", rating: "4.5", reviews: "8,900" },
    { category: "Stay", name: "Excelsior Hotel Ernst", kind: "Hotel", desc: "prestigious 5-star luxury hotel operating since 1863, located directly opposite the cathedral", rating: "4.8", reviews: "940" },
    { category: "Do", name: "Cologne Cathedral", kind: "Cathedral", desc: "magnificent double-spired Gothic cathedral that is Germany's most visited landmark", rating: "4.9", reviews: "82,000" },
    { category: "Shop", name: "House of 4711", kind: "Specialty Store", desc: "historic flagship store of the world-famous original Eau de Cologne fragrance", rating: "4.6", reviews: "1,200" }
  ]
});


const frankfurt = buildCity({
  "key": "frankfurt",
  "name": "Frankfurt, Germany",
  "currency": "€",
  "mealRange": [
    25,
    50
  ],
  "stayRates": [
    110,
    150,
    210
  ],
  "doCost": 75,
  "shopRange": [
    120,
    400
  ],
  "cuisineStyle": "German Hessian",
  "places": []
});

const stuttgart = buildCity({
  "key": "stuttgart",
  "name": "Stuttgart, Germany",
  "currency": "€",
  "mealRange": [
    25,
    48
  ],
  "stayRates": [
    100,
    140,
    190
  ],
  "doCost": 70,
  "shopRange": [
    100,
    380
  ],
  "cuisineStyle": "Swabian",
  "places": []
});

export const GERMANY = {
  berlin,
  munich,
  hamburg,
  cologne,
  frankfurt,
  stuttgart
};
