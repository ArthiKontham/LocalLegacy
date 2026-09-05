import { buildCity } from "../builder";

const london = buildCity({
  key: "london",
  name: "London, UK",
  currency: "£",
  mealRange: [28, 48],
  stayRates: [160, 194, 251],
  doCost: 96,
  shopRange: [160, 560],
  cuisineStyle: "British",
  places: [
    {
      id: "london_e0",
      category: "Eat",
      name: "Poppies Fish & Chips",
      kind: "Chippy",
      desc: "retro Spitalfields chippy for cod, chips and mushy peas",
      rating: "4.5",
      reviews: "6,800",
      open: "Open 12 pm to 11 pm",
      walk: "in London",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "london_e1",
      category: "Eat",
      name: "Dishoom",
      kind: "Indian",
      desc: "Mumbai-inspired cafe serving modern Indian sharing plates",
      rating: "4.7",
      reviews: "30,000",
      open: "Open 12 pm to 11 pm",
      walk: "in London",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "london_s0",
      category: "Stay",
      name: "The Hoxton, Shoreditch",
      kind: "Hotel",
      desc: "buzzy lobby and snug rooms in creative east London",
      rating: "4.6",
      reviews: "4,100",
      open: "Open 24 hours",
      walk: "in London",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "london_s1",
      category: "Stay",
      name: "Premier Inn County Hall",
      kind: "Hotel",
      desc: "reliable rooms by the Thames near the London Eye",
      rating: "4.5",
      reviews: "9,200",
      open: "Open 24 hours",
      walk: "in London",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "london_d0",
      category: "Do",
      name: "Tower of London",
      kind: "Castle",
      desc: "historic fortress housing the Crown Jewels and Beefeaters",
      rating: "4.7",
      reviews: "85,000",
      open: "Open 9 am to 6 pm",
      walk: "in London",
      ticket: true,
      ticketUrl: "https://www.hrp.org.uk/tower-of-london/visit/tickets/"
    },
    {
      id: "london_d1",
      category: "Do",
      name: "British Museum",
      kind: "Museum",
      desc: "vast collection spanning two million years of human history",
      rating: "4.8",
      reviews: "210,000",
      open: "Open 10 am to 6 pm",
      walk: "in London",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "london_p0",
      category: "Shop",
      name: "Covent Garden",
      kind: "Shopping district",
      desc: "piazza shops, market stalls and street performers",
      rating: "4.6",
      reviews: "60,000",
      open: "Shops open 10 am to 9 pm",
      walk: "in London",
      ticket: false,
      ticketUrl: ""
    },
    {
      id: "london_p1",
      category: "Shop",
      name: "Borough Market",
      kind: "Food market",
      desc: "a foodie landmark of artisan stalls under railway arches",
      rating: "4.6",
      reviews: "48,000",
      open: "Open 9 am to 6 pm",
      walk: "in London",
      ticket: false,
      ticketUrl: ""
    }
  ]
});

const edinburgh = buildCity({
  key: "edinburgh",
  name: "Edinburgh, UK",
  currency: "£",
  mealRange: [24, 42],
  stayRates: [130, 170, 220],
  doCost: 80,
  shopRange: [120, 450],
  cuisineStyle: "Scottish",
  places: [
    { category: "Eat", name: "The Scran & Scallie", kind: "Gastropub", desc: "famous Michelin-guide gastropub serving hearty scottish classics like haggis and fish pie", rating: "4.6", reviews: "2,400" },
    { category: "Stay", name: "The Balmoral Hotel", kind: "Hotel", desc: "iconic luxury 5-star hotel at No. 1 Princes Street featuring the famous clock tower", rating: "4.8", reviews: "1,150" },
    { category: "Do", name: "Edinburgh Castle", kind: "Castle", desc: "majestic historic fortress dominating the skyline of the city from atop Castle Rock", rating: "4.8", reviews: "52,000", ticket: true },
    { category: "Shop", name: "W. Armstrong & Son", kind: "Specialty Store", desc: "historic and sprawling vintage clothing emporium operating since 1840 on Grassmarket", rating: "4.5", reviews: "1,100" }
  ]
});

const manchester = buildCity({
  key: "manchester",
  name: "Manchester, UK",
  currency: "£",
  mealRange: [22, 38],
  stayRates: [100, 140, 190],
  doCost: 70,
  shopRange: [100, 380],
  cuisineStyle: "British",
  places: [
    { category: "Eat", name: "Bundobust", kind: "Indian Street Food", desc: "vibrant central spot serving vegetarian indian street food paired with local craft beers", rating: "4.6", reviews: "2,100" },
    { category: "Stay", name: "The Midland Hotel", kind: "Hotel", desc: "grand historic Edwardian hotel famous for hosting royalty and the meeting of Rolls and Royce", rating: "4.5", reviews: "3,100" },
    { category: "Do", name: "Science and Industry Museum", kind: "Museum", desc: "fascinating museum set in the world's oldest surviving passenger railway station", rating: "4.6", reviews: "8,900" },
    { category: "Shop", name: "Afflecks", kind: "Shopping District", desc: "iconic multi-story creative indoor market featuring independent designers, records, and crafts", rating: "4.7", reviews: "5,200" }
  ]
});


const birmingham = buildCity({
  "key": "birmingham",
  "name": "Birmingham, UK",
  "currency": "£",
  "mealRange": [
    20,
    42
  ],
  "stayRates": [
    90,
    130,
    180
  ],
  "doCost": 65,
  "shopRange": [
    90,
    320
  ],
  "cuisineStyle": "British",
  "places": []
});

const glasgow = buildCity({
  "key": "glasgow",
  "name": "Glasgow, UK",
  "currency": "£",
  "mealRange": [
    22,
    45
  ],
  "stayRates": [
    95,
    140,
    195
  ],
  "doCost": 70,
  "shopRange": [
    100,
    350
  ],
  "cuisineStyle": "Scottish",
  "places": []
});

export const UK = {
  london,
  edinburgh,
  manchester,
  birmingham,
  glasgow
};
