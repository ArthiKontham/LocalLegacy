import { buildCity } from "../builder";

const amsterdam = buildCity({
  key: "amsterdam",
  name: "Amsterdam, Netherlands",
  currency: "€",
  mealRange: [28, 48],
  stayRates: [130, 180, 240],
  doCost: 88,
  shopRange: [120, 420],
  cuisineStyle: "Dutch & International",
  places: [
    { id: "amsterdam_e0", category: "Eat", name: "Café de Klos", kind: "Pub", pic: "cafe-de-klos", desc: "lively, wood-panelled pub famous for its delicious smoked spare ribs and cold beers", rating: "4.5", reviews: "2,400" },
    { id: "amsterdam_e1", category: "Eat", name: "Foodhallen", kind: "Food court", pic: "foodhallen", desc: "indoor food hall in a converted tram depot serving global street food bites", rating: "4.5", reviews: "14,000" },
    { category: "Eat", name: "Winkel 43", kind: "Cafe", desc: "cozy neighborhood cafe in Jordaan, famous for serving the best thick, warm Dutch apple pie with whipped cream", rating: "4.6", reviews: "8,900" },
    { category: "Eat", name: "Rijsel", kind: "Bistro", desc: "highly popular retro bistro serving refined French-Flemish rotisserie chicken and seasonal sides", rating: "4.6", reviews: "1,200" },
    { category: "Eat", name: "Moeders", kind: "Restaurant", desc: "quirky restaurant decorated with photos of mothers, serving traditional Dutch hotchpotch and stews", rating: "4.5", reviews: "3,100" },
    
    { id: "amsterdam_s0", category: "Stay", name: "The Hoxton, Herengracht", kind: "Hotel", pic: "the-hoxton-herengracht", desc: "gorgeous canal-house hotel along the grand Herengracht canal", rating: "4.7", reviews: "1,900" },
    { id: "amsterdam_s1", category: "Stay", name: "Hotel Jordaan", kind: "Hotel", pic: "hotel-jordaan", desc: "cozy, boutique rooms nestled in the historic Jordaan neighborhood", rating: "4.3", reviews: "850" },
    { category: "Stay", name: "Generator Amsterdam", kind: "Hostel", desc: "stylish designer hostel set in a converted university building in Oosterpark, with vibrant lounge areas", rating: "4.3", reviews: "2,600" },
    { category: "Stay", name: "CitizenM Amsterdam South", kind: "Hotel", desc: "contemporary smart hotel near the business district, featuring XL beds and mood-pad room control", rating: "4.6", reviews: "1,800" },
    { category: "Stay", name: "Cocomama", kind: "Hostel", desc: "charming boutique hostel inside a former canal-side mansion, featuring cozy private rooms and a resident cat", rating: "4.5", reviews: "750" },
    
    { id: "amsterdam_d0", category: "Do", name: "Rijksmuseum", kind: "Museum", pic: "rijksmuseum", desc: "national museum dedicated to Dutch art and history, housing masterpieces by Rembrandt", rating: "4.8", reviews: "45,000" },
    { id: "amsterdam_d1", category: "Do", name: "Anne Frank House", kind: "Museum", pic: "anne-frank-house", desc: "historic canal-house museum where Anne Frank wrote her diary during WWII", rating: "4.7", reviews: "120,000", ticket: true },
    { category: "Do", name: "Van Gogh Museum", kind: "Museum", desc: "modern museum containing the world's largest collection of paintings, drawings, and letters by Vincent van Gogh", rating: "4.8", reviews: "38,000", ticket: true },
    { category: "Do", name: "Vondelpark", kind: "Park", desc: "sprawling 120-acre urban park featuring English-style gardens, cafes, lakes, and open-air theaters", rating: "4.7", reviews: "24,000" },
    { category: "Do", name: "Canal Cruise", kind: "Activity", desc: "classic boat tour navigating Amsterdam's UNESCO-listed canal rings with audio guides and drinks", rating: "4.6", reviews: "18,000", ticket: true },
    
    { id: "amsterdam_p0", category: "Shop", name: "De Negen Straatjes", kind: "Shopping district", pic: "de-negen-straatjes", desc: "nine scenic streets of independent boutiques, vintage stores, and canalside cafes", rating: "4.5", reviews: "6,200" },
    { id: "amsterdam_p1", category: "Shop", name: "Albert Cuyp Market", kind: "Street market", pic: "albert-cuyp-market", desc: "famous open-air market in De Pijp selling fresh stroopwafels, cheeses, and clothing", rating: "4.5", reviews: "8,900" },
    { category: "Shop", name: "Bloemenmarkt", kind: "Market", desc: "the world's only floating flower market, lined with houseboats selling flower bulbs, seeds, and souvenirs", rating: "4.1", reviews: "12,000" },
    { category: "Shop", name: "Waterlooplein Flea Market", kind: "Flea Market", desc: "historic open-air market in the old Jewish quarter, famous for vintage clothing, militaria, and curios", rating: "4.3", reviews: "6,800" },
    { category: "Shop", name: "Magna Plaza", kind: "Shopping Arcade", desc: "grand neo-gothic former post office building transformed into an upscale indoor shopping arcade", rating: "4.4", reviews: "3,100" },
  ]
});

const rotterdam = buildCity({
  key: "rotterdam",
  name: "Rotterdam, Netherlands",
  currency: "€",
  mealRange: [24, 42],
  stayRates: [100, 140, 195],
  doCost: 80,
  shopRange: [100, 350],
  cuisineStyle: "Dutch & Modern International",
  places: [
    { category: "Eat", name: "Markthal", kind: "Food Hall", desc: "massive horseshoe-shaped building containing a fresh food market under a giant colorful mural ceiling", rating: "4.6", reviews: "32,000" },
    { category: "Eat", name: "Fenix Food Factory", kind: "Food Hall", desc: "hipster food market in a former harbor warehouse in Katendrecht, offering craft beer, cheese, and bread", rating: "4.5", reviews: "2,400" },
    { category: "Eat", name: "Ter Marsch & Co", kind: "Burger Bar", desc: "cozy burger joint famous for serving award-winning gourmet beef burgers and specialty fries", rating: "4.4", reviews: "1,800" },
    { category: "Eat", name: "FG Food Labs", kind: "Michelin Star", desc: "chef François Geurds' Michelin-starred culinary laboratory serving creative dishes inside a railway arch", rating: "4.6", reviews: "450" },
    { category: "Eat", name: "Cafe de Witte Aap", kind: "Bar", desc: "legendary pub on Witte de Withstraat, voted the world's best bar by Lonely Planet for its lively outdoor terrace", rating: "4.4", reviews: "1,900" },
    
    { category: "Stay", name: "nhow Rotterdam", kind: "Hotel", desc: "design hotel set inside Rem Koolhaas's 'De Rotterdam' skyscraper, featuring rooms with views of the Erasmus Bridge", rating: "4.6", reviews: "2,900" },
    { category: "Stay", name: "King Kong Hostel", kind: "Hostel", desc: "highly rated design hostel on Witte de Withstraat, combining cool vintage design with a lively cafe-bar", rating: "4.5", reviews: "1,200" },
    { category: "Stay", name: "ss Rotterdam", kind: "Hotel", desc: "former historic ocean liner transformed into a floating hotel and museum docked in Katendrecht", rating: "4.5", reviews: "3,100" },
    { category: "Stay", name: "CitizenM Rotterdam", kind: "Hotel", desc: "contemporary boutique hotel in the Old Harbour featuring smart rooms with wall-to-wall windows", rating: "4.6", reviews: "1,500" },
    { category: "Stay", name: "CityHub Rotterdam", kind: "Hotel", desc: "futuristic pod hotel featuring private sleeping hubs, app-controlled lighting, and shared luxury showers", rating: "4.4", reviews: "890" },
    
    { category: "Do", name: "Erasmus Bridge (Erasmusbrug)", kind: "Landmark", desc: "iconic 800-meter-long asymmetric cable suspension bridge spanning the Maas River, nicknamed 'The Swan'", rating: "4.8", reviews: "15,000" },
    { category: "Do", name: "Cube Houses (Kijk-Kubus)", kind: "Architecture", desc: "Piet Blom's unique architectural tilted cube houses built on pedestals, with a show house open to public", rating: "4.5", reviews: "18,000", ticket: true },
    { category: "Do", name: "Euromast", kind: "Tower", desc: "185-meter-tall observation tower featuring a rotating glass elevator, panoramic views, and a restaurant", rating: "4.5", reviews: "12,000", ticket: true },
    { category: "Do", name: "Rotterdam Harbor Cruise", kind: "Activity", desc: "scenic boat tour navigating Rotterdam's bustling deep-water seaport and modern shipping terminals", rating: "4.5", reviews: "8,900", ticket: true },
    { category: "Do", name: "Museum Boijmans Van Beuningen", kind: "Museum", desc: "premier art museum featuring collections of Western art from the Middle Ages to the present day", rating: "4.6", reviews: "4,100" },
    
    { category: "Shop", name: "Koopgoot", kind: "Shopping Street", desc: "sunken pedestrian shopping street under the main road, packed with high street fashion stores", rating: "4.4", reviews: "6,800" },
    { category: "Shop", name: "Witte de Withstraat Boutiques", kind: "Shopping Street", desc: "trendy street lined with independent clothing stores, design galleries, bookstores, and shoe boutiques", rating: "4.5", reviews: "3,400" },
    { category: "Shop", name: "Swan Market", kind: "Artisan Market", desc: "roving lifestyle market in Rotterdam showcasing handmade jewelry, vintage toys, prints, and local treats", rating: "4.4", reviews: "920" },
    { category: "Shop", name: "Lijnbaan", kind: "Shopping District", desc: "the world's first purpose-built pedestrian shopping mall, opened in 1953, hosting major retail brands", rating: "4.3", reviews: "5,400" },
    { category: "Shop", name: "De Groene Passage", kind: "Market", desc: "eco-friendly shopping arcade housing organic butcheries, fair-trade design stores, and green groceries", rating: "4.5", reviews: "750" },
  ]
});

const utrecht = buildCity({
  key: "utrecht",
  name: "Utrecht, Netherlands",
  currency: "€",
  mealRange: [18, 35],
  stayRates: [100, 140, 190],
  doCost: 70,
  shopRange: [80, 300],
  cuisineStyle: "Dutch",
  places: [
    { category: "Eat", name: "Olivier", kind: "Tavern", desc: "gorgeous Belgian beer cafe set inside a former hidden church, offering classic stews and mussels", rating: "4.6", reviews: "3,100" },
    { category: "Stay", name: "Grand Hotel Karel V", kind: "Hotel", desc: "luxurious 5-star hotel set in a historic 14th-century monastery surrounded by private gardens", rating: "4.8", reviews: "940" },
    { category: "Do", name: "Dom Tower of Utrecht", kind: "Tower", desc: "the tallest church tower in the Netherlands, offering spectacular panoramic views after climbing 465 steps", rating: "4.7", reviews: "8,900" },
    { category: "Shop", name: "Oudegracht Canalside Shops", kind: "Shopping Street", desc: "unique shopping street running along the canals, with stores set in historic wharf cellars", rating: "4.6", reviews: "4,500" }
  ]
});


const thehague = buildCity({
  "key": "thehague",
  "name": "The Hague, Netherlands",
  "currency": "€",
  "mealRange": [
    28,
    52
  ],
  "stayRates": [
    120,
    160,
    220
  ],
  "doCost": 80,
  "shopRange": [
    120,
    400
  ],
  "cuisineStyle": "Dutch",
  "places": []
});

const eindhoven = buildCity({
  "key": "eindhoven",
  "name": "Eindhoven, Netherlands",
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
    350
  ],
  "cuisineStyle": "Dutch Brabant",
  "places": []
});

export const NETHERLANDS = {
  amsterdam,
  rotterdam,
  utrecht,
  thehague,
  eindhoven
};
