import { buildCity } from "../builder";

const dubai = buildCity({
  key: "dubai",
  name: "Dubai, UAE",
  currency: "AED",
  mealRange: [108, 180],
  stayRates: [600, 726, 942],
  doCost: 360,
  shopRange: [600, 2100],
  cuisineStyle: "Emirati",
  places: [
    {
      id: "dubai_e0",
      category: "Eat",
      name: "Al Ustad Special Kebab",
      kind: "Persian",
      desc: "a 1978 institution for traditional Persian kebabs and saffron rice",
      rating: "4.5",
      reviews: "8,100",
      open: "Open 12 pm to 11 pm",
      walk: "in Dubai",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "dubai_e1",
      category: "Eat",
      name: "Ravi Restaurant",
      kind: "Pakistani",
      desc: "beloved no-frills spot for authentic Pakistani curries and fresh naan",
      rating: "4.4",
      reviews: "12,000",
      open: "Open 12 pm to 11 pm",
      walk: "in Dubai",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "dubai_s0",
      category: "Stay",
      name: "Rove Downtown",
      kind: "Hotel",
      desc: "modern, well-priced rooms near the Burj Khalifa",
      rating: "4.6",
      reviews: "6,200",
      open: "Open 24 hours",
      walk: "in Dubai",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "dubai_s1",
      category: "Stay",
      name: "Citymax Bur Dubai",
      kind: "Hotel",
      desc: "handy rooms close to the creek and old souks",
      rating: "4.2",
      reviews: "3,400",
      open: "Open 24 hours",
      walk: "in Dubai",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "dubai_d0",
      category: "Do",
      name: "Burj Khalifa",
      kind: "Landmark",
      desc: "the world's tallest building at 828 metres",
      rating: "4.8",
      reviews: "220,000",
      open: "Open 9 am to 6 pm",
      walk: "in Dubai",
      ticket: true,
      ticketUrl: "https://www.burjkhalifa.ae/en/tickets/"
    },
    {
      id: "dubai_d1",
      category: "Do",
      name: "Dubai Fountain",
      kind: "Attraction",
      desc: "free choreographed water shows on the Burj Khalifa lake",
      rating: "4.7",
      reviews: "90,000",
      open: "Open 9 am to 6 pm",
      walk: "in Dubai",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "dubai_p0",
      category: "Shop",
      name: "The Dubai Mall",
      kind: "Mall",
      desc: "one of the world's largest malls, with an aquarium and souk",
      rating: "4.7",
      reviews: "260,000",
      open: "Open 10 am to 10 pm",
      walk: "in Dubai",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "dubai_p1",
      category: "Shop",
      name: "Gold Souk",
      kind: "Souk",
      desc: "glittering lanes of gold and jewellery in Deira",
      rating: "4.5",
      reviews: "30,000",
      open: "Open 9 am to 6 pm",
      walk: "in Dubai",
      ticket: false,
      ticketUrl: ""
    }
  ]
});

const abudhabi = buildCity({
  key: "abudhabi",
  name: "Abu Dhabi, UAE",
  currency: "AED",
  mealRange: [100, 180],
  stayRates: [500, 700, 1000],
  doCost: 300,
  shopRange: [500, 2000],
  cuisineStyle: "Emirati",
  places: [
    { category: "Eat", name: "Meylas", kind: "Restaurant", desc: "charming Emirati eatery in Al Muneera serving traditional home-style lamb machboos and luqaimat", rating: "4.5", reviews: "640" },
    { category: "Stay", name: "Emirates Palace Mandarin Oriental", kind: "Hotel", desc: "world-renowned 5-star palace hotel featuring massive gold-gilded rooms and private beach", rating: "4.9", reviews: "3,100" },
    { category: "Do", name: "Sheikh Zayed Grand Mosque", kind: "Mosque", desc: "architectural masterpiece of white marble, crystal chandeliers, and the world's largest hand-knotted carpet", rating: "4.9", reviews: "45,000" },
    { category: "Shop", name: "Yas Mall", kind: "Mall", desc: "Abu Dhabi's largest retail destination, located on Yas Island with hundreds of fashion brands", rating: "4.6", reviews: "12,000" }
  ]
});


const sharjah = buildCity({
  "key": "sharjah",
  "name": "Sharjah, UAE",
  "currency": "AED",
  "mealRange": [
    50,
    120
  ],
  "stayRates": [
    250,
    450,
    700
  ],
  "doCost": 150,
  "shopRange": [
    200,
    800
  ],
  "cuisineStyle": "Emirati",
  "places": []
});

export const UAE = {
  dubai,
  abudhabi,
  sharjah
};
