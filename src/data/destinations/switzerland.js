import { buildCity } from "../builder";

const zurich = buildCity({
  key: "zurich",
  name: "Zurich, Switzerland",
  currency: "CHF",
  mealRange: [25, 48],
  stayRates: [150, 220, 310],
  doCost: 90,
  shopRange: [150, 600],
  cuisineStyle: "Swiss",
  places: [
    { category: "Eat", name: "Zeughauskeller", kind: "Restaurant", desc: "historic beer hall inside a 15th-century armory serving hearty sausages and Zürcher Geschnetzeltes", rating: "4.5", reviews: "8,900" },
    { category: "Stay", name: "Baur au Lac", kind: "Hotel", desc: "legendary 5-star luxury hotel set in private parklands overlooking Lake Zurich and the Alps", rating: "4.9", reviews: "840" },
    { category: "Do", name: "Lake Zurich Boat Cruise", kind: "Activity", desc: "scenic passenger steamship cruise across Lake Zurich with views of alpine villages", rating: "4.7", reviews: "15,000", ticket: true },
    { category: "Shop", name: "Bahnhofstrasse", kind: "Shopping Street", desc: "one of the world's most exclusive and expensive shopping avenues, hosting luxury boutiques", rating: "4.6", reviews: "12,000" }
  ]
});

const geneva = buildCity({
  key: "geneva",
  name: "Geneva, Switzerland",
  currency: "CHF",
  mealRange: [28, 52],
  stayRates: [160, 240, 340],
  doCost: 95,
  shopRange: [180, 700],
  cuisineStyle: "Franco-Swiss",
  places: [
    { category: "Eat", name: "Les Armures", kind: "Restaurant", desc: "historic restaurant in the Old Town famous for traditional Swiss cheese fondue and raclette", rating: "4.6", reviews: "3,100" },
    { category: "Stay", name: "Four Seasons Hotel des Bergues", kind: "Hotel", desc: "historic luxury hotel built in 1834 directly on the banks of Lake Geneva", rating: "4.9", reviews: "750" },
    { category: "Do", name: "Jet d'Eau", kind: "Landmark", desc: "famous giant fountain shooting water 140 meters high into the air on Lake Geneva", rating: "4.7", reviews: "24,000" },
    { category: "Shop", name: "Rue du Rhône", kind: "Shopping Street", desc: "prestigious shopping street famous for high-end luxury Swiss watchmakers and fashion designers", rating: "4.6", reviews: "4,500" }
  ]
});

const lucerne = buildCity({
  key: "lucerne",
  name: "Lucerne, Switzerland",
  currency: "CHF",
  mealRange: [24, 45],
  stayRates: [130, 190, 260],
  doCost: 85,
  shopRange: [110, 400],
  cuisineStyle: "Swiss",
  places: [
    { category: "Eat", name: "Wirtshaus Galliker", kind: "Tavern", desc: "traditional family-run tavern operating since 1681, serving classic Lozärner Chügelipastete", rating: "4.5", reviews: "640" },
    { category: "Stay", name: "Hotel Montana", kind: "Hotel", desc: "art deco hotel on a hill overlooking Lake Lucerne, accessible via a private funicular railway", rating: "4.8", reviews: "920" },
    { category: "Do", name: "Chapel Bridge (Kapellbrücke)", kind: "Bridge", desc: "landmark 14th-century covered wooden footbridge decorated with historic paintings", rating: "4.9", reviews: "38,000" },
    { category: "Shop", name: "Schwanenplatz", kind: "Shopping Square", desc: "central square famous as the ultimate destination for luxury Swiss watches and fine jewelry", rating: "4.5", reviews: "8,900" }
  ]
});


const basel = buildCity({
  "key": "basel",
  "name": "Basel, Switzerland",
  "currency": "CHF",
  "mealRange": [
    30,
    60
  ],
  "stayRates": [
    140,
    190,
    260
  ],
  "doCost": 90,
  "shopRange": [
    130,
    450
  ],
  "cuisineStyle": "Swiss",
  "places": []
});

const bern = buildCity({
  "key": "bern",
  "name": "Bern, Switzerland",
  "currency": "CHF",
  "mealRange": [
    30,
    58
  ],
  "stayRates": [
    130,
    180,
    250
  ],
  "doCost": 85,
  "shopRange": [
    120,
    420
  ],
  "cuisineStyle": "Swiss",
  "places": []
});

export const SWITZERLAND = {
  zurich,
  geneva,
  lucerne,
  basel,
  bern
};
