import { buildCity } from "../builder";

const athens = buildCity({
  key: "athens",
  name: "Athens, Greece",
  currency: "€",
  mealRange: [19, 33],
  stayRates: [110, 133, 173],
  doCost: 66,
  shopRange: [110, 385],
  cuisineStyle: "Greek",
  places: [
    {
      id: "athens_e0",
      category: "Eat",
      name: "O Kostas",
      kind: "Souvlaki",
      desc: "tiny central spot famous for souvlaki since 1950",
      rating: "4.6",
      reviews: "4,200",
      open: "Open 12 pm to 11 pm",
      walk: "in Athens",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "athens_e1",
      category: "Eat",
      name: "Karamanlidika",
      kind: "Meze",
      desc: "deli-taverna for cured meats, cheeses and meze",
      rating: "4.5",
      reviews: "6,800",
      open: "Open 12 pm to 11 pm",
      walk: "in Athens",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "athens_s0",
      category: "Stay",
      name: "AthensWas Hotel",
      kind: "Hotel",
      desc: "design rooms with Acropolis views in Plaka",
      rating: "4.6",
      reviews: "2,100",
      open: "Open 24 hours",
      walk: "in Athens",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "athens_s1",
      category: "Stay",
      name: "Plaka Hotel",
      kind: "Hotel",
      desc: "friendly rooms with a rooftop in the old quarter",
      rating: "4.3",
      reviews: "1,900",
      open: "Open 24 hours",
      walk: "in Athens",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "athens_d0",
      category: "Do",
      name: "Acropolis",
      kind: "Landmark",
      desc: "ancient citadel crowned by the iconic Parthenon temple",
      rating: "4.8",
      reviews: "200,000",
      open: "Open 9 am to 6 pm",
      walk: "in Athens",
      ticket: true,
      ticketUrl: "https://etickets.tap.gr/"
    },
    {
      id: "athens_d1",
      category: "Do",
      name: "Acropolis Museum",
      kind: "Museum",
      desc: "sleek contemporary museum displaying the hill's surviving treasures",
      rating: "4.7",
      reviews: "60,000",
      open: "Open 10 am to 6 pm",
      walk: "in Athens",
      ticket: true,
      ticketUrl: "https://www.theacropolismuseum.gr/en/content/tickets"
    },
    {
      id: "athens_p0",
      category: "Shop",
      name: "Monastiraki",
      kind: "Flea market",
      desc: "a bustling square of antiques, crafts and street food",
      rating: "4.4",
      reviews: "20,000",
      open: "Open 9 am to 6 pm",
      walk: "in Athens",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "athens_p1",
      category: "Shop",
      name: "Ermou Street",
      kind: "Shopping street",
      desc: "Athens' main pedestrian shopping artery",
      rating: "4.3",
      reviews: "9,000",
      open: "Shops open 10 am to 9 pm",
      walk: "in Athens",
      ticket: false,
      ticketUrl: ""
    }
  ]
});

const santorini = buildCity({
  key: "santorini",
  name: "Santorini, Greece",
  currency: "€",
  mealRange: [22, 45],
  stayRates: [150, 220, 320],
  doCost: 90,
  shopRange: [120, 500],
  cuisineStyle: "Cycladic Greek",
  places: [
    { category: "Eat", name: "Metaxi Mas", kind: "Tavern", desc: "famous tavern in Exo Gonia serving authentic Cretan-Santorinian dishes and local wine", rating: "4.8", reviews: "2,900" },
    { category: "Stay", name: "Katikies Santorini", kind: "Hotel", desc: "luxurious 5-star cliffside hotel in Oia with infinity pools overlooking the caldera", rating: "4.9", reviews: "820" },
    { category: "Do", name: "Oia Sunset Lookout", kind: "Landmark", desc: "the most famous sunset viewpoint in Greece, set against blue-domed churches and white houses", rating: "4.8", reviews: "38,000" },
    { category: "Shop", name: "Atlantis Books", kind: "Specialty Store", desc: "quirky, famous cave bookshop in Oia overlooking the caldera, filled with rare books", rating: "4.7", reviews: "1,200" }
  ]
});


const mykonos = buildCity({
  "key": "mykonos",
  "name": "Mykonos, Greece",
  "currency": "€",
  "mealRange": [
    35,
    80
  ],
  "stayRates": [
    180,
    280,
    420
  ],
  "doCost": 100,
  "shopRange": [
    150,
    600
  ],
  "cuisineStyle": "Cycladic Greek",
  "places": []
});

const thessaloniki = buildCity({
  "key": "thessaloniki",
  "name": "Thessaloniki, Greece",
  "currency": "€",
  "mealRange": [
    20,
    40
  ],
  "stayRates": [
    80,
    120,
    170
  ],
  "doCost": 60,
  "shopRange": [
    80,
    250
  ],
  "cuisineStyle": "Macedonian Greek",
  "places": []
});

export const GREECE = {
  athens,
  santorini,
  mykonos,
  thessaloniki
};
