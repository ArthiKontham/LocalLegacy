import { buildCity } from "../builder";

const prague = buildCity({
  "key": "prague",
  "name": "Prague, Czechia",
  "currency": "Kč",
  "mealRange": [504, 840],
  "stayRates": [2800, 3388, 4396],
  "doCost": 1680,
  "shopRange": [2800, 9800],
  "cuisineStyle": "Czech",
  "places": [
    {
      "id": "prague_e0",
      "category": "Eat",
      "name": "Lokál Dlouhááá",
      "kind": "Pub",
      "desc": "lively beer hall for tank Pilsner and Czech classics",
      "rating": "4.5",
      "reviews": "11,000",
      "open": "Open 12 pm to 12 am",
      "walk": "in Prague"
    },
    {
      "id": "prague_e1",
      "category": "Eat",
      "name": "Café Savoy",
      "kind": "Café",
      "desc": "historic grand café with a neo-Renaissance ceiling",
      "rating": "4.6",
      "reviews": "7,400",
      "open": "Open 8 am to 8 pm",
      "walk": "in Prague"
    },
    {
      "id": "prague_s0",
      "category": "Stay",
      "name": "Hotel Josef",
      "kind": "Hotel",
      "desc": "sleek design rooms in the Old Town",
      "rating": "4.6",
      "reviews": "2,900",
      "open": "Open 24 hours",
      "walk": "in Prague"
    },
    {
      "id": "prague_s1",
      "category": "Stay",
      "name": "Mosaic House",
      "kind": "Hotel",
      "desc": "modern, central rooms near the river",
      "rating": "4.3",
      "reviews": "2,100",
      "open": "Open 24 hours",
      "walk": "in Prague"
    },
    {
      "id": "prague_d0",
      "category": "Do",
      "name": "Charles Bridge",
      "kind": "Landmark",
      "desc": "a 14th-century statue-lined bridge over the Vltava",
      "rating": "4.8",
      "reviews": "150,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Prague"
    },
    {
      "id": "prague_d1",
      "category": "Do",
      "name": "Prague Castle",
      "kind": "Castle",
      "desc": "the world's largest ancient castle complex above the city",
      "rating": "4.7",
      "reviews": "120,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Prague",
      "ticket": true,
      "ticketUrl": "https://www.hrad.cz/en/prague-castle-for-visitors/visiting-information"
    },
    {
      "id": "prague_p0",
      "category": "Shop",
      "name": "Wenceslas Square",
      "kind": "Shopping street",
      "desc": "major shopping boulevard in the New Town area",
      "rating": "4.4",
      "reviews": "28,000",
      "open": "Open 9 am to 9 pm",
      "walk": "in Prague"
    },
    {
      "id": "prague_p1",
      "category": "Shop",
      "name": "Havelská Market",
      "kind": "Market",
      "desc": "historic open-air market for souvenirs and local produce",
      "rating": "4.2",
      "reviews": "8,900",
      "open": "Open 9 am to 6 pm",
      "walk": "in Prague"
    }
  ]
});

const mexicocity = buildCity({
  "key": "mexicocity",
  "name": "Mexico City, Mexico",
  "currency": "$",
  "mealRange": [360, 600],
  "stayRates": [2000, 2420, 3140],
  "doCost": 1200,
  "shopRange": [2000, 6200],
  "cuisineStyle": "Mexican",
  "places": [
    {
      "id": "mexicocity_e0",
      "category": "Eat",
      "name": "Contramar",
      "kind": "Seafood Restaurant",
      "desc": "legendary seafood restaurant famous for its split-grilled fish and tuna tostadas",
      "rating": "4.6",
      "reviews": "5,400",
      "open": "Open 12 pm to 8 pm",
      "walk": "in Mexico City"
    },
    {
      "id": "mexicocity_e1",
      "category": "Eat",
      "name": "El Huequito",
      "kind": "Tacos Spot",
      "desc": "famous standing-room spot for al pastor tacos since 1959",
      "rating": "4.4",
      "reviews": "4,100",
      "open": "Open 9 am to 11 pm",
      "walk": "in Mexico City"
    },
    {
      "id": "mexicocity_s0",
      "category": "Stay",
      "name": "Hotel Carlota",
      "kind": "Hotel",
      "desc": "stylish boutique design hotel with a central glass pool deck",
      "rating": "4.5",
      "reviews": "1,200",
      "open": "Open 24 hours",
      "walk": "in Mexico City"
    },
    {
      "id": "mexicocity_s1",
      "category": "Stay",
      "name": "Hostel Mundo Joven",
      "kind": "Hostel",
      "desc": "popular cathedral-view hostel with a lively rooftop bar",
      "rating": "4.3",
      "reviews": "2,400",
      "open": "Open 24 hours",
      "walk": "in Mexico City"
    },
    {
      "id": "mexicocity_d0",
      "category": "Do",
      "name": "Teotihuacan",
      "kind": "Ancient Pyramids",
      "desc": "magnificent pre-hispanic holy city featuring the massive Sun and Moon pyramids",
      "rating": "4.8",
      "reviews": "90,000",
      "open": "Open 9 am to 5 pm",
      "walk": "in Mexico City",
      "ticket": true
    },
    {
      "id": "mexicocity_d1",
      "category": "Do",
      "name": "Zócalo",
      "kind": "Plaza",
      "desc": "huge historic square built over the ruins of Aztec temples",
      "rating": "4.7",
      "reviews": "70,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Mexico City"
    },
    {
      "id": "mexicocity_p0",
      "category": "Shop",
      "name": "Mercado de la Ciudadela",
      "kind": "Artisan Market",
      "desc": "vibrant market showcasing traditional crafts and folk art from across Mexico",
      "rating": "4.6",
      "reviews": "22,000",
      "open": "Open 10 am to 7 pm",
      "walk": "in Mexico City"
    }
  ]
});

const marrakech = buildCity({
  "key": "marrakech",
  "name": "Marrakech, Morocco",
  "currency": "DH",
  "mealRange": [150, 300],
  "stayRates": [1100, 1650, 2420],
  "doCost": 660,
  "shopRange": [1100, 3300],
  "cuisineStyle": "Moroccan",
  "places": [
    {
      "id": "marrakech_e0",
      "category": "Eat",
      "name": "Café Clock",
      "kind": "Café",
      "desc": "hip cross-cultural café famous for camel burgers, storytelling and music",
      "rating": "4.5",
      "reviews": "1,900",
      "open": "Open 9 am to 10 pm",
      "walk": "in Marrakech"
    },
    {
      "id": "marrakech_e1",
      "category": "Eat",
      "name": "Nomad",
      "kind": "Restaurant",
      "desc": "chic rooftop dining serving modern Moroccan creations in the spice market",
      "rating": "4.4",
      "reviews": "3,400",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Marrakech"
    },
    {
      "id": "marrakech_s0",
      "category": "Stay",
      "name": "Riad Yasmine",
      "kind": "Riad",
      "desc": "gorgeous traditional riad famous for its iconic green tiled pool courtyard",
      "rating": "4.8",
      "reviews": "850",
      "open": "Open 24 hours",
      "walk": "in Marrakech"
    },
    {
      "id": "marrakech_s1",
      "category": "Stay",
      "name": "Riad BE Marrakech",
      "kind": "Riad",
      "desc": "beautifully designed riad offering calm courtyards and yoga rooftop decks",
      "rating": "4.7",
      "reviews": "920",
      "open": "Open 24 hours",
      "walk": "in Marrakech"
    },
    {
      "id": "marrakech_d0",
      "category": "Do",
      "name": "Bahia Palace",
      "kind": "Palace",
      "desc": "exquisite 19th-century palace showcasing intricate wood carvings and mosaic tilings",
      "rating": "4.4",
      "reviews": "34,000",
      "open": "Open 9 am to 5 pm",
      "walk": "in Marrakech",
      "ticket": true
    },
    {
      "id": "marrakech_d1",
      "category": "Do",
      "name": "Jemaa el-Fnaa",
      "kind": "Plaza",
      "desc": "legendary main square alive with snake charmers, musicians and food stalls",
      "rating": "4.4",
      "reviews": "98,000",
      "open": "Open 24 hours",
      "walk": "in Marrakech"
    }
  ]
});

const istanbul = buildCity({
  "key": "istanbul",
  "name": "Istanbul, Turkey",
  "currency": "₺",
  "mealRange": [450, 750],
  "stayRates": [2400, 3100, 4200],
  "doCost": 1500,
  "shopRange": [2400, 9300],
  "cuisineStyle": "Turkish",
  "places": [
    {
      "id": "istanbul_e0",
      "category": "Eat",
      "name": "Çiya Sofrası",
      "kind": "Restaurant",
      "desc": "acclaimed restaurant on the Asian side reviving lost regional Turkish recipes",
      "rating": "4.5",
      "reviews": "5,100",
      "open": "Open 11 am to 10 pm",
      "walk": "in Istanbul"
    },
    {
      "id": "istanbul_e1",
      "category": "Eat",
      "name": "Karaköy Güllüoğlu",
      "kind": "Bakery",
      "desc": "famous bakery serving the absolute finest handmade baklava since 1949",
      "rating": "4.6",
      "reviews": "14,000",
      "open": "Open 7 am to 11 pm",
      "walk": "in Istanbul"
    },
    {
      "id": "istanbul_s0",
      "category": "Stay",
      "name": "Sirkeci Mansion",
      "kind": "Hotel",
      "desc": "elegant boutique mansion in the historic core with a Turkish spa",
      "rating": "4.8",
      "reviews": "1,900",
      "open": "Open 24 hours",
      "walk": "in Istanbul"
    },
    {
      "id": "istanbul_s1",
      "category": "Stay",
      "name": "Hotel Sultanahmet",
      "kind": "Hotel",
      "desc": "charming terrace hotel facing the Blue Mosque and Hagia Sophia",
      "rating": "4.4",
      "reviews": "1,100",
      "open": "Open 24 hours",
      "walk": "in Istanbul"
    },
    {
      "id": "istanbul_d0",
      "category": "Do",
      "name": "Hagia Sophia",
      "kind": "Mosque",
      "desc": "breathtaking Byzantine cathedral turned mosque with standard-defining domes",
      "rating": "4.8",
      "reviews": "150,000",
      "open": "Open 9 am to 7 pm",
      "walk": "in Istanbul"
    },
    {
      "id": "istanbul_d1",
      "category": "Do",
      "name": "Blue Mosque",
      "kind": "Mosque",
      "desc": "the iconic Sultan Ahmed Mosque decorated with 20,000 hand-painted blue tiles",
      "rating": "4.7",
      "reviews": "120,000",
      "open": "Open 8 am to 6 pm",
      "walk": "in Istanbul"
    },
    {
      "id": "istanbul_p0",
      "category": "Shop",
      "name": "Grand Bazaar",
      "kind": "Bazaar",
      "desc": "one of the world's oldest covered markets, 4,000 shops deep",
      "rating": "4.5",
      "reviews": "90,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Istanbul"
    },
    {
      "id": "istanbul_p1",
      "category": "Shop",
      "name": "Spice Bazaar",
      "kind": "Market",
      "desc": "fragrant stalls of spices, teas and Turkish delight",
      "rating": "4.5",
      "reviews": "40,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Istanbul"
    }
  ]
});

// --- NEW OTHERS DESTINATIONS ---

const brno = buildCity({
  key: "brno",
  name: "Brno, Czechia",
  currency: "Kč",
  mealRange: [400, 750],
  stayRates: [2000, 2800, 3600],
  doCost: 1200,
  shopRange: [2000, 8000],
  cuisineStyle: "Czech",
  places: []
});

const guadalajara = buildCity({
  key: "guadalajara",
  name: "Guadalajara, Mexico",
  currency: "$",
  mealRange: [200, 450],
  stayRates: [1000, 1500, 2200],
  doCost: 600,
  shopRange: [800, 2500],
  cuisineStyle: "Mexican",
  places: []
});

const cancun = buildCity({
  key: "cancun",
  name: "Cancun, Mexico",
  currency: "$",
  mealRange: [300, 800],
  stayRates: [1800, 3000, 4500],
  doCost: 1000,
  shopRange: [1000, 3500],
  cuisineStyle: "Mexican and Yucatecan",
  places: []
});

const casablanca = buildCity({
  key: "casablanca",
  name: "Casablanca, Morocco",
  currency: "DH",
  mealRange: [100, 250],
  stayRates: [600, 900, 1400],
  doCost: 400,
  shopRange: [500, 1800],
  cuisineStyle: "Moroccan",
  places: []
});

const fez = buildCity({
  key: "fez",
  name: "Fez, Morocco",
  currency: "DH",
  mealRange: [80, 200],
  stayRates: [450, 750, 1100],
  doCost: 350,
  shopRange: [400, 1500],
  cuisineStyle: "Moroccan",
  places: []
});

const ankara = buildCity({
  key: "ankara",
  name: "Ankara, Turkey",
  currency: "₺",
  mealRange: [150, 350],
  stayRates: [900, 1400, 2000],
  doCost: 600,
  shopRange: [800, 2500],
  cuisineStyle: "Turkish",
  places: []
});

const antalya = buildCity({
  key: "antalya",
  name: "Antalya, Turkey",
  currency: "₺",
  mealRange: [200, 450],
  stayRates: [1100, 1800, 2700],
  doCost: 800,
  shopRange: [1000, 3000],
  cuisineStyle: "Mediterranean Turkish",
  places: []
});

export const OTHERS = {
  prague,
  mexicocity,
  marrakech,
  istanbul,
  brno,
  guadalajara,
  cancun,
  casablanca,
  fez,
  ankara,
  antalya
};
