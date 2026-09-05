import { buildCity } from "../builder";

const lisbon = buildCity({
  key: "lisbon",
  name: "Lisbon, Portugal",
  currency: "€",
  mealRange: [21, 36],
  stayRates: [120, 145, 188],
  doCost: 72,
  shopRange: [120, 420],
  cuisineStyle: "Portuguese",
  places: [
    {
      id: "lisbon_e0",
      category: "Eat",
      name: "Time Out Market",
      kind: "Food hall",
      desc: "large food hall showcasing Lisbon's top chefs and artisan food stalls",
      rating: "4.5",
      reviews: "30,000",
      open: "Open 12 pm to 11 pm",
      walk: "in Lisbon",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "lisbon_e1",
      category: "Eat",
      name: "Cervejaria Ramiro",
      kind: "Seafood",
      desc: "beer-hall seafood institution for prawns and crab",
      rating: "4.6",
      reviews: "18,000",
      open: "Open 12 pm to 11 pm",
      walk: "in Lisbon",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "lisbon_s0",
      category: "Stay",
      name: "Lisbon Story Guesthouse",
      kind: "Guesthouse",
      desc: "charming rooms on a square near the river",
      rating: "4.5",
      reviews: "1,500",
      open: "Open 24 hours",
      walk: "in Lisbon",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "lisbon_s1",
      category: "Stay",
      name: "Hotel Alfama",
      kind: "Hotel",
      desc: "simple rooms in the tangled lanes of old Alfama",
      rating: "4.3",
      reviews: "1,200",
      open: "Open 24 hours",
      walk: "in Lisbon",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "lisbon_d0",
      category: "Do",
      name: "Belém Tower",
      kind: "Landmark",
      desc: "a 16th-century riverside fort and Manueline gem",
      rating: "4.6",
      reviews: "60,000",
      open: "Open 9 am to 6 pm",
      walk: "in Lisbon",
      ticket: true,
      ticketUrl: ""
    },
    {
      id: "lisbon_d1",
      category: "Do",
      name: "Jerónimos Monastery",
      kind: "Monastery",
      desc: "an ornate UNESCO monastery and resting place of explorers",
      rating: "4.7",
      reviews: "75,000",
      open: "Open 8 am to 6 pm",
      walk: "in Lisbon",
      ticket: true,
      ticketUrl: ""
    },
    {
      id: "lisbon_p0",
      category: "Shop",
      name: "Rua Augusta",
      kind: "Shopping street",
      desc: "a grand pedestrian street under a triumphal arch",
      rating: "4.4",
      reviews: "12,000",
      open: "Shops open 10 am to 9 pm",
      walk: "in Lisbon",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "lisbon_p1",
      category: "Shop",
      name: "LX Factory",
      kind: "Creative hub",
      desc: "a converted factory of indie shops, cafés and a bookshop",
      rating: "4.5",
      reviews: "9,000",
      open: "Open 9 am to 6 pm",
      walk: "in Lisbon",
      ticket: false,
      ticketUrl: ""
    }
  ]
});

const porto = buildCity({
  key: "porto",
  name: "Porto, Portugal",
  currency: "€",
  mealRange: [18, 32],
  stayRates: [95, 125, 175],
  doCost: 65,
  shopRange: [90, 350],
  cuisineStyle: "Northern Portuguese",
  places: [
    { category: "Eat", name: "Café Santiago", kind: "Cafe", desc: "famous cafe known for the Francesinha, a massive sandwich covered in melted cheese and beer sauce", rating: "4.5", reviews: "5,400" },
    { category: "Stay", name: "The Yeatman", kind: "Hotel", desc: "luxurious wine hotel in Vila Nova de Gaia with a decanter-shaped pool overlooking the city", rating: "4.9", reviews: "1,100" },
    { category: "Do", name: "Clérigos Church & Tower", kind: "Tower", desc: "baroque church featuring a tall bell tower that offers 360-degree views of Porto", rating: "4.7", reviews: "15,000", ticket: true },
    { category: "Shop", name: "Livraria Lello", kind: "Specialty Store", desc: "gorgeous neo-Gothic historic bookstore with an iconic red staircase and stained glass", rating: "4.6", reviews: "24,000", ticket: true }
  ]
});


const braga = buildCity({
  "key": "braga",
  "name": "Braga, Portugal",
  "currency": "€",
  "mealRange": [
    18,
    35
  ],
  "stayRates": [
    70,
    100,
    140
  ],
  "doCost": 50,
  "shopRange": [
    60,
    220
  ],
  "cuisineStyle": "Minho",
  "places": []
});

const coimbra = buildCity({
  "key": "coimbra",
  "name": "Coimbra, Portugal",
  "currency": "€",
  "mealRange": [
    18,
    38
  ],
  "stayRates": [
    75,
    110,
    150
  ],
  "doCost": 55,
  "shopRange": [
    70,
    250
  ],
  "cuisineStyle": "Beira Litoral",
  "places": []
});

export const PORTUGAL = {
  lisbon,
  porto,
  braga,
  coimbra
};
