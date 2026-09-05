import { buildCity } from "../builder";

const rome = buildCity({
  key: "rome",
  name: "Rome, Italy",
  currency: "€",
  mealRange: [25, 42],
  stayRates: [140, 169, 220],
  doCost: 84,
  shopRange: [140, 490],
  cuisineStyle: "Roman",
  places: [
    { id: "rome_e0", category: "Eat", name: "Trattoria Da Enzo", kind: "Trattoria", desc: "tiny Trastevere trattoria famous for carbonara and fried artichokes", rating: "4.7", reviews: "5,400" },
    { id: "rome_e1", category: "Eat", name: "Pizzeria ai Marmi", kind: "Pizzeria", desc: "buzzy late-night spot for thin, blistered Roman pizza", rating: "4.3", reviews: "2,210" },
    { category: "Eat", name: "Bonci Pizzarium", kind: "Pizza Slice", desc: "legendary gourmet pizza al taglio by chef Gabriele Bonci, featuring slow-fermented dough and wild toppings", rating: "4.5", reviews: "3,800" },
    { category: "Eat", name: "Frigidarium", kind: "Gelateria", desc: "celebrated gelateria near Piazza Navona dipping their artisanal gelato scoops in dark or white chocolate shells", rating: "4.6", reviews: "4,900" },
    { category: "Eat", name: "Armando al Pantheon", kind: "Restaurant", desc: "historic family-run eatery serving impeccable Roman classics like Cacio e Pepe right beside the Pantheon", rating: "4.6", reviews: "2,400" },
    
    { id: "rome_s0", category: "Stay", name: "Hotel Trastevere", kind: "Hotel", desc: "friendly, well-priced rooms in cobbled Trastevere", rating: "4.5", reviews: "1,860" },
    { id: "rome_s1", category: "Stay", name: "Impero Hotel Rome", kind: "Hotel", desc: "smart, modern rooms within easy walking distance of the main sights", rating: "4.4", reviews: "2,430" },
    { category: "Stay", name: "Generator Rome", kind: "Hostel", desc: "stylish hostel set in a grand 19th-century building in Esquilino, with vintage decor and a cool bar", rating: "4.3", reviews: "2,100" },
    { category: "Stay", name: "Elizabeth Unique Hotel", kind: "Hotel", desc: "luxurious 5-star art hotel displaying contemporary works, located steps from the Spanish Steps", rating: "4.8", reviews: "620" },
    { category: "Stay", name: "The Beehive", kind: "Hostel", desc: "cozy, eco-conscious boutique hostel and guest house featuring a quiet organic garden near Termini", rating: "4.6", reviews: "540" },
    
    { id: "rome_d0", category: "Do", name: "Colosseum", kind: "Landmark", desc: "the vast first-century amphitheatre that once held 50,000 spectators", rating: "4.8", reviews: "320,000", ticket: true, ticketUrl: "https://www.coopculture.it/en/colosseo-e-shop.cfm" },
    { id: "rome_d1", category: "Do", name: "Vatican Museums", kind: "Museum", desc: "miles of galleries leading to Michelangelo's Sistine Chapel ceiling", rating: "4.7", reviews: "190,000", ticket: true, ticketUrl: "https://tickets.museivaticani.va/" },
    { category: "Do", name: "Trevi Fountain", kind: "Landmark", desc: "Nicola Salvi's magnificent baroque fountain; legend says throwing a coin guarantees your return to Rome", rating: "4.8", reviews: "115,000" },
    { category: "Do", name: "The Pantheon", kind: "Landmark", desc: "2,000-year-old temple with a spectacular concrete dome and oculus, the best-preserved ancient Roman monument", rating: "4.8", reviews: "89,000" },
    { category: "Do", name: "Roman Forum & Palatine Hill", kind: "Ancient Ruins", desc: "the ancient heart of the Roman Empire, filled with ruined temples, basilicas, and triumphal arches", rating: "4.7", reviews: "98,000", ticket: true },
    
    { id: "rome_p0", category: "Shop", name: "Via del Corso", kind: "Shopping Street", desc: "Rome's long central shopping street, from high street to boutiques", rating: "4.4", reviews: "7,100" },
    { id: "rome_p1", category: "Shop", name: "Campo de' Fiori", kind: "Market", desc: "a morning market square for produce, flowers and spices", rating: "4.3", reviews: "1,500" },
    { category: "Shop", name: "Via Condotti", kind: "Shopping Street", desc: "Rome's legendary high-fashion street home to flagship boutiques like Gucci, Prada, and Bvlgari", rating: "4.6", reviews: "4,500" },
    { category: "Shop", name: "Mercato di Testaccio", kind: "Food Market", desc: "modern covered market housing stalls selling fresh cheese, local street foods, sandwiches, and craft beer", rating: "4.5", reviews: "2,900" },
    { category: "Shop", name: "Chez Dede", kind: "Artisan Shop", desc: "chic concept store selling bespoke bags, clothing, home goods, and unique art books on Via di Monserrato", rating: "4.6", reviews: "180" },
  ]
});

const milan = buildCity({
  key: "milan",
  name: "Milan, Italy",
  currency: "€",
  mealRange: [28, 48],
  stayRates: [150, 200, 260],
  doCost: 90,
  shopRange: [200, 700],
  cuisineStyle: "Milanese & Lombard",
  places: [
    { category: "Eat", name: "Luini", kind: "Bakery", desc: "legendary bakery near the Duomo famous for its hot, fried panzerotti filled with tomato and mozzarella since 1888", rating: "4.5", reviews: "12,000" },
    { category: "Eat", name: "Trattoria Trippa", kind: "Trattoria", desc: "acclaimed modern trattoria serving offal and rustic Lombard plates, hardest table to book in Milan", rating: "4.7", reviews: "2,400" },
    { category: "Eat", name: "Ratanà", kind: "Restaurant", desc: "chef Cesare Battisti's modern tavern set in a historic railway building, famous for saffron risotto with bone marrow", rating: "4.6", reviews: "1,100" },
    { category: "Eat", name: "Pasticceria Marchesi", kind: "Cafe", desc: "historic 1824 café decorated with pastel green velvet walls, serving espresso and exquisite panettone", rating: "4.5", reviews: "2,100" },
    { category: "Eat", name: "Dry Milano", kind: "Pizzeria", desc: "trendy spot combining award-winning wood-fired pizzas with a high-end cocktail bar and house music", rating: "4.4", reviews: "1,500" },
    
    { category: "Stay", name: "Bulgari Hotel Milano", kind: "Hotel", desc: "ultra-exclusive 5-star hotel featuring sleek black marble rooms, a private spa, and a hidden garden patio", rating: "4.8", reviews: "890" },
    { category: "Stay", name: "Ostello Bello Duomo", kind: "Hostel", desc: "award-winning social hostel in the city center featuring free welcome drinks, live music, and private rooms", rating: "4.6", reviews: "3,100" },
    { category: "Stay", name: "Room Mate Giulia", kind: "Hotel", desc: "vibrant boutique hotel designed by Patricia Urquiola with colorful terracotta tiles and modern furniture", rating: "4.6", reviews: "1,600" },
    { category: "Stay", name: "Senato Hotel Milano", kind: "Hotel", desc: "charming hotel inside a neo-classical building featuring a marble-filled lobby and quiet chic rooms", rating: "4.5", reviews: "650" },
    { category: "Stay", name: "Grand Hotel et de Milan", kind: "Hotel", desc: "historic hotel beloved by opera composers, featuring antique furniture, oil paintings, and timeless luxury", rating: "4.7", reviews: "940" },
    
    { category: "Do", name: "Duomo di Milano", kind: "Landmark", desc: "glorious pink-white marble Gothic cathedral, with a rooftop terrace offering views of the city and Alps", rating: "4.8", reviews: "85,000", ticket: true },
    { category: "Do", name: "Galleria Vittorio Emanuele II", kind: "Landmark", desc: "magnificent 19th-century glass-domed shopping arcade, Italy's oldest active mall, housing historic stores", rating: "4.7", reviews: "65,000" },
    { category: "Do", name: "Santa Maria delle Grazie", kind: "Church", desc: "Renaissance church housing Leonardo da Vinci's legendary 15th-century fresco, The Last Supper", rating: "4.7", reviews: "24,000", ticket: true },
    { category: "Do", name: "Sforza Castle (Castello Sforzesco)", kind: "Castle", desc: "massive 15th-century fortress housing museums with Michelangelo's Pietà Rondanini and lush gardens", rating: "4.6", reviews: "38,000" },
    { category: "Do", name: "Pinacoteca di Brera", kind: "Art Museum", desc: "premier public gallery of Italian paintings, showcasing Renaissance masterpieces by Raphael and Caravaggio", rating: "4.7", reviews: "12,000", ticket: true },
    
    { category: "Shop", name: "Quadrilatero della Moda", kind: "Shopping District", desc: "Milan's high-fashion district, home to Via Montenapoleone and the world's most luxurious designer storefronts", rating: "4.6", reviews: "12,000" },
    { category: "Shop", name: "10 Corso Como", kind: "Concept Store", desc: "world-famous multifunctional venue combining art galleries, a bookstore, fashion boutique, and garden cafe", rating: "4.4", reviews: "2,900" },
    { category: "Shop", name: "Fiera di Sinigaglia", kind: "Flea Market", desc: "historic Saturday flea market along the Navigli canal, selling vintage clothes, vinyl, and collectibles", rating: "4.2", reviews: "1,500" },
    { category: "Shop", name: "Navigli Canals Boutiques", kind: "Shopping District", desc: "artisan shops, vintage stores, and design studios lining the canals in the bohemian Navigli neighborhood", rating: "4.5", reviews: "4,500" },
    { category: "Shop", name: "Rinascente Milano Duomo", kind: "Department Store", desc: "massive upscale department store offering fashion, design goods, and a rooftop food hall with Duomo views", rating: "4.5", reviews: "18,000" },
  ]
});

const venice = buildCity({
  key: "venice",
  name: "Venice, Italy",
  currency: "€",
  mealRange: [30, 50],
  stayRates: [160, 220, 290],
  doCost: 95,
  shopRange: [100, 400],
  cuisineStyle: "Venetian Seafood",
  places: [
    { category: "Eat", name: "Osteria Alle Testiere", kind: "Seafood Bistro", desc: "tiny 9-table seafood restaurant serving the daily catch from the Rialto market with premium local white wines", rating: "4.6", reviews: "920" },
    { category: "Eat", name: "Cantina Do Mori", kind: "Bacaro", desc: "Venice's oldest bacaro tavern (since 1462) serving cheap house wine (ombra) and local tapas skewers (cicheti)", rating: "4.5", reviews: "1,500" },
    { category: "Eat", name: "Harry's Bar", kind: "Historic Bar", desc: "celebrated water-side bar where Giuseppe Cipriani invented the Bellini cocktail and beef carpaccio", rating: "4.2", reviews: "3,800" },
    { category: "Eat", name: "Osteria al Squero", kind: "Bacaro", desc: "popular bacaro serving delicious cicheti toppings, situated right across from a gondola repair yard", rating: "4.6", reviews: "2,700" },
    { category: "Eat", name: "Gelato di Natura", kind: "Gelateria", desc: "artisanal gelateria crafting rich pistachio, dark chocolate, and seasonal fruit sorbets near Rialto", rating: "4.5", reviews: "1,100" },
    
    { category: "Stay", name: "Belmond Hotel Cipriani", kind: "Hotel", desc: "exclusive luxury resort on Giudecca island featuring a massive saltwater pool, private gardens, and shuttle boat", rating: "4.8", reviews: "850" },
    { category: "Stay", name: "Combo Venezia", kind: "Hostel", desc: "gorgeous hostel inside a converted 12th-century monastery with a spacious canal-side courtyard", rating: "4.5", reviews: "1,400" },
    { category: "Stay", name: "Hotel Danieli", kind: "Hotel", desc: "historic luxury hotel set inside three Gothic palaces beside St Mark's Square, famous for its grand lobby", rating: "4.7", reviews: "2,100" },
    { category: "Stay", name: "Hotel Flora", kind: "Hotel", desc: "family-run boutique hotel featuring a quiet, vine-draped secret courtyard, located near the opera house", rating: "4.6", reviews: "750" },
    { category: "Stay", name: "Generator Venice", kind: "Hostel", desc: "designer hostel in a converted stone granary on Giudecca, featuring antique brick walls and canal views", rating: "4.3", reviews: "1,850" },
    
    { category: "Do", name: "St. Mark's Basilica & Campanile", kind: "Landmark", desc: "Byzantine cathedral on St. Mark's Square, famous for its gold mosaics, marble floors, and bell tower views", rating: "4.8", reviews: "52,000", ticket: true },
    { category: "Do", name: "Doge's Palace (Palazzo Ducale)", kind: "Palace", desc: "masterpiece of Venetian Gothic architecture, featuring grand chambers, gold staircases, and the Bridge of Sighs", rating: "4.8", reviews: "45,000", ticket: true },
    { category: "Do", name: "Grand Canal Gondola Ride", kind: "Activity", desc: "iconic boat trip along Venice's main waterway on a traditional hand-crafted wooden gondola", rating: "4.4", reviews: "28,000" },
    { category: "Do", name: "Rialto Bridge", kind: "Bridge", desc: "the oldest and most famous bridge spanning the Grand Canal, offering spectacular views of gondola traffic", rating: "4.7", reviews: "38,000" },
    { category: "Do", name: "Burano Island Day Trip", kind: "Day Trip", desc: "ferry ride to the northern lagoon island, famous for its brightly colored houses and handmade lace workshops", rating: "4.8", reviews: "14,000" },
    
    { category: "Shop", name: "Rialto Market", kind: "Food Market", desc: "historic open-air market since the 11th century, selling fresh Adriatic fish, produce, and spices", rating: "4.6", reviews: "6,800" },
    { category: "Shop", name: "Gianni Basso Stampatore", kind: "Artisan Shop", desc: "world-famous printing workshop where Gianni crafts business cards and bookmarks on historic Gutenberg presses", rating: "4.8", reviews: "150" },
    { category: "Shop", name: "Mercerie", kind: "Shopping Streets", desc: "series of narrow streets connecting Rialto and San Marco, packed with high street shops and mask stores", rating: "4.3", reviews: "4,100" },
    { category: "Shop", name: "Venice Linea d'Acqua", kind: "Artisan Shop", desc: "prestigious gallery selling original antique prints, old maps, hand-painted artwork, and rare books", rating: "4.7", reviews: "90" },
    { category: "Shop", name: "VizioVirtù", kind: "Chocolatier", desc: "luxury chocolate boutique crafting handmade pralines, truffles, chocolate bars, and hot cocoa blends", rating: "4.6", reviews: "310" }
  ]
});

const florence = buildCity({
  key: "florence",
  name: "Florence, Italy",
  currency: "€",
  mealRange: [22, 40],
  stayRates: [110, 150, 200],
  doCost: 80,
  shopRange: [100, 400],
  cuisineStyle: "Tuscan",
  places: [
    { category: "Eat", name: "Trattoria Mario", kind: "Tavern", desc: "famous busy tavern near San Lorenzo market serving the best Bistecca alla Fiorentina and ribollita", rating: "4.5", reviews: "2,300" },
    { category: "Stay", name: "Hotel Brunelleschi", kind: "Hotel", desc: "stunning hotel set in a restored Byzantine tower and medieval church overlooking the Duomo", rating: "4.8", reviews: "1,400" },
    { category: "Do", name: "Florence Cathedral (Duomo)", kind: "Cathedral", desc: "Brunelleschi's magnificent red-domed cathedral dominating the Tuscan skyline", rating: "4.8", reviews: "75,000" },
    { category: "Shop", name: "San Lorenzo Leather Market", kind: "Local Market", desc: "famous open-air market selling Florentine leather bags, jackets, belts, and souvenirs", rating: "4.5", reviews: "12,000" }
  ]
});


const naples = buildCity({
  "key": "naples",
  "name": "Naples, Italy",
  "currency": "€",
  "mealRange": [
    18,
    38
  ],
  "stayRates": [
    85,
    120,
    170
  ],
  "doCost": 65,
  "shopRange": [
    80,
    280
  ],
  "cuisineStyle": "Neapolitan",
  "places": []
});

const turin = buildCity({
  "key": "turin",
  "name": "Turin, Italy",
  "currency": "€",
  "mealRange": [
    25,
    45
  ],
  "stayRates": [
    100,
    140,
    190
  ],
  "doCost": 70,
  "shopRange": [
    100,
    350
  ],
  "cuisineStyle": "Piedmontese",
  "places": []
});

export const ITALY = {
  rome,
  milan,
  venice,
  florence,
  naples,
  turin
};
