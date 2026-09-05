import { buildCity } from "../builder";

const bangkok = buildCity({
  key: "bangkok",
  name: "Bangkok, Thailand",
  currency: "฿",
  mealRange: [450, 750],
  stayRates: [2500, 3025, 3925],
  doCost: 1500,
  shopRange: [2500, 8750],
  cuisineStyle: "Thai",
  places: [
    {
      id: "bangkok_e0",
      category: "Eat",
      name: "Thip Samai",
      kind: "Pad Thai",
      desc: "legendary restaurant famous for authentic charcoal-cooked Pad Thai wrapped in thin egg omelette",
      rating: "4.5",
      reviews: "9,800",
      open: "Open 12 pm to 11 pm",
      walk: "in Bangkok",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "bangkok_e1",
      category: "Eat",
      name: "Jay Fai",
      kind: "Street food",
      desc: "Michelin-starred open-air shophouse famous for crab omelettes and drunken noodles cooked by the owner in goggles",
      rating: "4.4",
      reviews: "6,400",
      open: "Open 12 pm to 11 pm",
      walk: "in Bangkok",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "bangkok_s0",
      category: "Stay",
      name: "Riva Surya",
      kind: "Hotel",
      desc: "riverside rooms near the old town and Khao San",
      rating: "4.6",
      reviews: "2,600",
      open: "Open 24 hours",
      walk: "in Bangkok",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "bangkok_s1",
      category: "Stay",
      name: "Ibis Bangkok Riverside",
      kind: "Hotel",
      desc: "easy river-view rooms with a pool and pier shuttle",
      rating: "4.3",
      reviews: "3,100",
      open: "Open 24 hours",
      walk: "in Bangkok",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "bangkok_d0",
      category: "Do",
      name: "Grand Palace",
      kind: "Landmark",
      desc: "the dazzling former royal residence and Wat Phra Kaew",
      rating: "4.7",
      reviews: "160,000",
      open: "Open 9 am to 6 pm",
      walk: "in Bangkok",
      ticket: true,
      ticketUrl: "https://www.royalgrandpalace.th/en/home"
    },
    {
      id: "bangkok_d1",
      category: "Do",
      name: "Wat Arun",
      kind: "Temple",
      desc: "the riverside Temple of Dawn with its porcelain-clad spire",
      rating: "4.7",
      reviews: "80,000",
      open: "Open 8 am to 6 pm",
      walk: "in Bangkok",
      ticket: true,
      ticketUrl: ""
    },
    {
      id: "bangkok_p0",
      category: "Shop",
      name: "Chatuchak Market",
      kind: "Weekend market",
      desc: "15,000 stalls of clothes, crafts, plants and food",
      rating: "4.5",
      reviews: "70,000",
      open: "Open 9 am to 6 pm",
      walk: "in Bangkok",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "bangkok_p1",
      category: "Shop",
      name: "Iconsiam",
      kind: "Mall",
      desc: "riverside mega-mall with an indoor floating market",
      rating: "4.6",
      reviews: "40,000",
      open: "Open 10 am to 10 pm",
      walk: "in Bangkok",
      ticket: false,
      ticketUrl: ""
    }
  ]
});

const phuket = buildCity({
  key: "phuket",
  name: "Phuket, Thailand",
  currency: "฿",
  mealRange: [400, 800],
  stayRates: [2000, 3500, 5000],
  doCost: 1200,
  shopRange: [2000, 7000],
  cuisineStyle: "Southern Thai",
  places: [
    { category: "Eat", name: "Raya Restaurant", kind: "Restaurant", desc: "famous heritage house restaurant serving authentic Phuket crab curry with rice vermicelli", rating: "4.6", reviews: "1,400" },
    { category: "Stay", name: "The Slate", kind: "Hotel", desc: "luxury industrial-chic resort in Nai Yang Beach designed around Phuket's historic tin mining industry", rating: "4.8", reviews: "920" },
    { category: "Do", name: "Big Buddha Phuket", kind: "Landmark", desc: "giant 45-meter-tall white marble Buddha statue sitting atop Nakkerd Hill with views of the bay", rating: "4.7", reviews: "24,000" },
    { category: "Shop", name: "Phuket Old Town Walking Street", kind: "Local Market", desc: "vibrant Sunday evening market held among historic colorful Sino-Portuguese shophouses", rating: "4.6", reviews: "8,900" }
  ]
});

const chiangmai = buildCity({
  key: "chiangmai",
  name: "Chiang Mai, Thailand",
  currency: "฿",
  mealRange: [300, 600],
  stayRates: [1500, 2500, 4000],
  doCost: 1000,
  shopRange: [1500, 5000],
  cuisineStyle: "Lanna style",
  places: [
    { category: "Eat", name: "Khao Soi Lam Duan", kind: "Noodle Shop", desc: "long-running local spot famous for serving the best northern Thai yellow curry egg noodles", rating: "4.5", reviews: "3,100" },
    { category: "Stay", name: "Tamarind Village", kind: "Hotel", desc: "charming boutique hotel set around quiet courtyards in the heart of the historic Old City", rating: "4.7", reviews: "840" },
    { category: "Do", name: "Wat Phra That Doi Suthep", kind: "Temple", desc: "sacred golden temple set high up on a mountain overlooking the valley of Chiang Mai", rating: "4.8", reviews: "22,000", ticket: true },
    { category: "Shop", name: "Chiang Mai Sunday Walking Street", kind: "Local Market", desc: "massive Sunday open-air market spanning the Old City, showcasing local handicrafts and street food", rating: "4.7", reviews: "15,000" }
  ]
});


const pattaya = buildCity({
  "key": "pattaya",
  "name": "Pattaya, Thailand",
  "currency": "฿",
  "mealRange": [
    250,
    700
  ],
  "stayRates": [
    1200,
    2200,
    3500
  ],
  "doCost": 900,
  "shopRange": [
    800,
    3000
  ],
  "cuisineStyle": "Thai",
  "places": []
});

const krabi = buildCity({
  "key": "krabi",
  "name": "Krabi, Thailand",
  "currency": "฿",
  "mealRange": [
    200,
    600
  ],
  "stayRates": [
    1000,
    1800,
    3000
  ],
  "doCost": 800,
  "shopRange": [
    600,
    2500
  ],
  "cuisineStyle": "Southern Thai",
  "places": []
});

export const THAILAND = {
  bangkok,
  phuket,
  chiangmai,
  pattaya,
  krabi
};
