import { buildCity } from "../builder";

const paris = buildCity({
  key: "paris",
  name: "Paris, France",
  currency: "€",
  mealRange: [30, 50],
  stayRates: [160, 210, 275],
  doCost: 96,
  shopRange: [150, 500],
  cuisineStyle: "French",
  places: [
    { id: "paris_e0", category: "Eat", name: "Le Petit Marché", kind: "Bistro", desc: "cosy Marais bistro for French classics and natural wine", rating: "4.6", reviews: "1,204" },
    { id: "paris_e1", category: "Eat", name: "Chez Janou", kind: "Provençal", desc: "Provençal corner spot famous for ratatouille and chocolate mousse", rating: "4.4", reviews: "3,120" },
    { category: "Eat", name: "Frenchie", kind: "Modern French", desc: "highly acclaimed bistro on Rue du Nil serving seasonal, modern French dishes in a rustic setting", rating: "4.7", reviews: "1,450" },
    { category: "Eat", name: "Du Pain et des Idées", kind: "Bakery", desc: "famed historic bakery serving the legendary L'Escargot Chocolat-Pistache pastry and wood-fired bread", rating: "4.6", reviews: "2,900" },
    { category: "Eat", name: "Berthillon", kind: "Ice Cream", desc: "historic family-owned salon on Île Saint-Louis, world-famous for its rich, artisanal sorbets and ice creams", rating: "4.6", reviews: "4,500" },
    
    { id: "paris_s0", category: "Stay", name: "Hôtel Le Marais", kind: "Hotel", desc: "boutique rooms by Place des Vosges", rating: "4.7", reviews: "2,010" },
    { id: "paris_s1", category: "Stay", name: "Hôtel Rivoli", kind: "Hotel", desc: "simple, central rooms near the Louvre", rating: "4.2", reviews: "1,540" },
    { category: "Stay", name: "The Hoxton, Paris", kind: "Hotel", desc: "stylish boutique hotel set in an 18th-century grand residence in the 2nd Arrondissement", rating: "4.7", reviews: "1,850" },
    { category: "Stay", name: "Les Piaules Nation", kind: "Hostel", desc: "modern design hostel featuring a rooftop terrace with views over Paris and custom-built wood cabin beds", rating: "4.4", reviews: "920" },
    { category: "Stay", name: "Generator Paris", kind: "Hostel", desc: "trendy hostel in the 10th Arrondissement featuring a rooftop bar overlooking Sacré-Cœur", rating: "4.3", reviews: "3,800" },
    
    { id: "paris_d0", category: "Do", name: "Eiffel Tower", kind: "Landmark", desc: "Gustave Eiffel's 330-metre iron icon, with viewing decks on three levels", rating: "4.8", reviews: "240,000", ticket: true, ticketUrl: "https://www.toureiffel.paris/en/rates-times" },
    { id: "paris_d1", category: "Do", name: "Louvre Museum", kind: "Museum", desc: "the world's most-visited museum, home to the Mona Lisa and Venus de Milo", rating: "4.7", reviews: "210,000", ticket: true, ticketUrl: "https://www.ticketlouvre.fr/" },
    { category: "Do", name: "Palace of Versailles", kind: "Palace", desc: "extravagant former royal residence of Louis XIV, featuring the Hall of Mirrors and vast gardens", rating: "4.8", reviews: "98,000", ticket: true },
    { category: "Do", name: "Sainte-Chapelle", kind: "Church", desc: "13th-century Gothic chapel famous for its breath-taking collection of 15-meter stained glass windows", rating: "4.8", reviews: "22,000", ticket: true },
    { category: "Do", name: "Musée d'Orsay", kind: "Museum", desc: "grand Beaux-Arts railway station housing the world's largest collection of impressionist masterpieces", rating: "4.8", reviews: "45,000", ticket: true },
    
    { id: "paris_p0", category: "Shop", name: "Le Marais", kind: "Shopping District", desc: "winding old streets of indie boutiques, vintage shops and concept stores", rating: "4.5", reviews: "6,200" },
    { id: "paris_p1", category: "Shop", name: "Marché d'Aligre", kind: "Food Market", desc: "lively neighborhood market selling cheese, produce and flea-market curios", rating: "4.4", reviews: "1,800" },
    { category: "Shop", name: "Shakespeare and Company", kind: "Bookstore", desc: "historic English-language bookstore on the Seine, a famous gathering place for writers since 1951", rating: "4.7", reviews: "15,000" },
    { category: "Shop", name: "Galeries Lafayette", kind: "Department Store", desc: "grand department store on Boulevard Haussmann under a historic stained-glass dome, with a free rooftop view", rating: "4.6", reviews: "48,000" },
    { category: "Shop", name: "Rue de Rivoli", kind: "Shopping Street", desc: "busy commercial street running from Place de la Concorde past the Louvre, home to global fashion labels", rating: "4.3", reviews: "8,900" },
  ]
});

const nice = buildCity({
  key: "nice",
  name: "Nice, France",
  currency: "€",
  mealRange: [25, 45],
  stayRates: [110, 150, 200],
  doCost: 80,
  shopRange: [100, 350],
  cuisineStyle: "Niçoise & French Mediterranean",
  places: [
    { category: "Eat", name: "Chez Pipo", kind: "Local Street Food", desc: "famous local institution serving traditional socca (chickpea crepe) cooked in wood-fired ovens since 1923", rating: "4.5", reviews: "3,100" },
    { category: "Eat", name: "Le Chantecler", kind: "Fine Dining", desc: "prestigious Michelin-starred restaurant inside Hotel Negresco serving refined gastronomy on the Promenade", rating: "4.6", reviews: "410" },
    { category: "Eat", name: "Restaurant Jan", kind: "Michelin Star", desc: "award-winning intimate restaurant by chef Jan Hendrik serving modern South African-French fusion dishes", rating: "4.7", reviews: "350" },
    { category: "Eat", name: "Café de Turin", kind: "Seafood", desc: "historic brasserie on Place Garibaldi, famous for massive oyster plates, sea urchins, and shellfish since 1908", rating: "4.3", reviews: "3,900" },
    { category: "Eat", name: "Fenocchio", kind: "Gelateria", desc: "legendary ice cream parlor in Vieux Nice offering over 90 artisanal flavors, including lavender and olive", rating: "4.6", reviews: "5,400" },
    
    { category: "Stay", name: "Le Negresco", kind: "Hotel", desc: "iconic Belle Époque luxury hotel on the Promenade des Anglais, home to a world-class private art collection", rating: "4.7", reviews: "2,400" },
    { category: "Stay", name: "Villa Hostels Nice", kind: "Hostel", desc: "highly social boutique hostel in the city center featuring a cool bar, free walking tours, and dynamic events", rating: "4.3", reviews: "1,200" },
    { category: "Stay", name: "Hotel Windsor Nice", kind: "Hotel", desc: "unique art-themed boutique hotel where rooms are designed by contemporary artists, featuring a lush hidden garden", rating: "4.5", reviews: "650" },
    { category: "Stay", name: "Westminster Hotel & Spa", kind: "Hotel", desc: "classic neo-baroque seafront hotel with high ceilings, private spa facilities, and a grand terrace", rating: "4.4", reviews: "1,450" },
    { category: "Stay", name: "The Deck Hotel Nice", kind: "Hotel", desc: "modern design hotel with beach-inspired blue and white decor, located steps from Jean Médecin and the sea", rating: "4.5", reviews: "890" },
    
    { category: "Do", name: "Promenade des Anglais", kind: "Pathway", desc: "world-famous 7km palm-fringed paved coastal walk wrapping around the blue waters of Baie des Anges", rating: "4.8", reviews: "34,000" },
    { category: "Do", name: "Castle Hill (Colline du Château)", kind: "Park", desc: "hilltop park offering breath-taking panoramic views of the city, old port, waterfall, and sea", rating: "4.7", reviews: "19,000" },
    { category: "Do", name: "Marc Chagall National Museum", kind: "Museum", desc: "beautiful national museum dedicated to Marc Chagall's large biblical message stained-glass and canvas works", rating: "4.6", reviews: "4,100", ticket: true },
    { category: "Do", name: "Vieux Nice (Old Town)", kind: "Cultural Area", desc: "historic neighborhood of narrow lanes, pastel houses, baroque churches, and bustling morning markets", rating: "4.7", reviews: "22,000" },
    { category: "Do", name: "Villefranche-sur-Mer Day Trip", kind: "Beach", desc: "beautiful adjacent fishing village with a horseshoe beach, colorful houses, and crystal-clear water", rating: "4.8", reviews: "8,900" },
    
    { category: "Shop", name: "Cours Saleya Flower Market", kind: "Market", desc: "vibrant morning market in Old Nice selling fresh cut flowers, local soaps, olives, and regional crafts", rating: "4.6", reviews: "12,000" },
    { category: "Shop", name: "Avenue Jean Médecin", kind: "Shopping Street", desc: "Nice's main commercial avenue lined with major fashion retail stores, department halls, and tram lines", rating: "4.4", reviews: "8,200" },
    { category: "Shop", name: "Rue Catherine Ségurane", kind: "Antiques", desc: "historical street near the port renowned as the antiques district, filled with vintage dealers and galleries", rating: "4.5", reviews: "340" },
    { category: "Shop", name: "Confiserie Florian", kind: "Artisan Sweets", desc: "celebrated workshop turning local fruits and flowers into glazed clementines, flower jams, and chocolates", rating: "4.6", reviews: "650" },
    { category: "Shop", name: "CAP3000", kind: "Mall", desc: "prestigious seafront shopping mall near the airport, hosting over 300 international brands and restaurants", rating: "4.5", reviews: "15,000" },
  ]
});

const lyon = buildCity({
  key: "lyon",
  name: "Lyon, France",
  currency: "€",
  mealRange: [22, 40],
  stayRates: [100, 140, 190],
  doCost: 75,
  shopRange: [90, 300],
  cuisineStyle: "Lyonnaise Bouchon",
  places: [
    { category: "Eat", name: "Café des Fédérations", kind: "Bouchon", desc: "authentic family Bouchon Lyonnais serving classic sausage, quenelles, and local Beaujolais wine", rating: "4.5", reviews: "1,500" },
    { category: "Eat", name: "Les Halles de Lyon Paul Bocuse", kind: "Food Hall", desc: "famed indoor food market featuring top French charcuterie, oysters, artisanal cheeses, and macarons", rating: "4.7", reviews: "9,800" },
    { category: "Eat", name: "Le Suprême", kind: "Restaurant", desc: "modern bistro offering a gourmet menu focused on Lyon's famous Bresse chicken dishes and local poultry", rating: "4.6", reviews: "340" },
    { category: "Eat", name: "Bouchon Tupin", kind: "Bouchon", desc: "warm, modern bouchon serving authentic local cuisine made with fresh seasonal ingredients from market vendors", rating: "4.6", reviews: "750" },
    { category: "Eat", name: "Chez Mounier", kind: "Bouchon", desc: "cozy, traditional budget-friendly bouchon in Presqu'île offering generous plates of local Lyonnais comfort food", rating: "4.4", reviews: "1,100" },
    
    { category: "Stay", name: "Villa Florentine", kind: "Hotel", desc: "luxurious 5-star hotel in a restored Renaissance convent overlooking the rooftops of Vieux Lyon", rating: "4.7", reviews: "920" },
    { category: "Stay", name: "Slo Living Hostel", kind: "Hostel", desc: "boutique design hostel featuring sleek minimalist dorms, cozy private rooms, and a welcoming backyard patio", rating: "4.5", reviews: "780" },
    { category: "Stay", name: "Cour des Loges", kind: "Hotel", desc: "magnificent hotel spanning four historic Renaissance buildings with an indoor courtyard and spa", rating: "4.6", reviews: "1,150" },
    { category: "Stay", name: "Hotel Carlton Lyon", kind: "Hotel", desc: "heritage boutique stay on the Presqu'île peninsula combining classic French charm with modern rooms", rating: "4.5", reviews: "1,200" },
    { category: "Stay", name: "Globe & Cecil Hotel", kind: "Hotel", desc: "charming, historic boutique hotel steps from Place Bellecour, showcasing unique themed rooms", rating: "4.4", reviews: "640" },
    
    { category: "Do", name: "Basilique Notre-Dame de Fourvière", kind: "Landmark", desc: "hilltop 19th-century basilica with white towers, gold mosaics, and panoramic views of the city", rating: "4.8", reviews: "26,000" },
    { category: "Do", name: "Traboules of Vieux Lyon", kind: "Passages", desc: "historic hidden covered pedestrian pathways cutting through Renaissance courtyards and silk houses", rating: "4.7", reviews: "14,000" },
    { category: "Do", name: "Parc de la Tête d'Or", kind: "Park", desc: "sprawling 290-acre urban park featuring a boating lake, rose gardens, glasshouses, and a free zoo", rating: "4.8", reviews: "32,000" },
    { category: "Do", name: "Musée des Confluences", kind: "Museum", desc: "striking futuristic science and anthropology museum built where the Rhône and Saône rivers merge", rating: "4.6", reviews: "12,000", ticket: true },
    { category: "Do", name: "Lyon Cathedral", kind: "Cathedral", desc: "gothic cathedral in Vieux Lyon housing a 14th-century astronomical clock that rings at midday", rating: "4.5", reviews: "8,900" },
    
    { category: "Shop", name: "Rue de la République", kind: "Shopping Street", desc: "major pedestrian shopping street lined with beautiful 19th-century architecture and global retail", rating: "4.4", reviews: "12,500" },
    { category: "Shop", name: "La Croix-Rousse Workshops", kind: "Artisan Shops", desc: "hilly silk-weaving district filled with local artists, printmakers, independent designers, and booksellers", rating: "4.6", reviews: "2,400" },
    { category: "Shop", name: "La Part-Dieu", kind: "Mall", desc: "one of Europe's largest downtown shopping malls, hosting hundreds of shops, movie screens, and food courts", rating: "4.2", reviews: "19,000" },
    { category: "Shop", name: "Presqu'île Boutiques", kind: "Shopping District", desc: "chic streets between Bellecour and Cordeliers lined with luxury brands, fashion boutiques, and local makers", rating: "4.5", reviews: "4,100" },
    { category: "Shop", name: "Marché Saint-Antoine", kind: "Food Market", desc: "scenic riverside food market selling farm-fresh cheese, local rotisserie chicken, and regional wines", rating: "4.6", reviews: "1,500" },
  ]
});

const marseille = buildCity({
  key: "marseille",
  name: "Marseille, France",
  currency: "€",
  mealRange: [24, 45],
  stayRates: [110, 150, 200],
  doCost: 75,
  shopRange: [80, 300],
  cuisineStyle: "Provencal",
  places: [
    { category: "Eat", name: "Chez Loury", kind: "Restaurant", desc: "famous traditional restaurant serving the most authentic bouillabaisse in the old port", rating: "4.5", reviews: "840" },
    { category: "Stay", name: "InterContinental Marseille", kind: "Hotel", desc: "luxurious 5-star hotel housed in a magnificent 18th-century building overlooking the old port", rating: "4.7", reviews: "1,100" },
    { category: "Do", name: "Basilique Notre-Dame de la Garde", kind: "Landmark", desc: "stunning neo-Byzantine hilltop basilica offering panoramic 360-degree views of Marseille and the sea", rating: "4.8", reviews: "38,000" },
    { category: "Shop", name: "Marché de Noailles", kind: "Food Market", desc: "vibrant, colorful market filled with Mediterranean spices, olives, flatbreads, and fresh produce", rating: "4.5", reviews: "3,100" }
  ]
});


const bordeaux = buildCity({
  "key": "bordeaux",
  "name": "Bordeaux, France",
  "currency": "€",
  "mealRange": [
    28,
    55
  ],
  "stayRates": [
    110,
    150,
    210
  ],
  "doCost": 80,
  "shopRange": [
    120,
    400
  ],
  "cuisineStyle": "French Aquitaine",
  "places": []
});

const strasbourg = buildCity({
  "key": "strasbourg",
  "name": "Strasbourg, France",
  "currency": "€",
  "mealRange": [
    25,
    50
  ],
  "stayRates": [
    100,
    140,
    200
  ],
  "doCost": 75,
  "shopRange": [
    100,
    350
  ],
  "cuisineStyle": "Alsatian",
  "places": []
});

export const FRANCE = {
  paris,
  nice,
  lyon,
  marseille,
  bordeaux,
  strasbourg
};
