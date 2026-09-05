import { buildCity } from "../builder";

const hyderabad = buildCity({
  "key": "hyderabad",
  "name": "Hyderabad, India",
  "currency": "₹",
  "mealRange": [900, 1500],
  "stayRates": [5000, 6050, 7850],
  "doCost": 3000,
  "shopRange": [5000, 17500],
  "cuisineStyle": "Hyderabadi",
  "places": [
    {
      "id": "hyderabad_e0",
      "category": "Eat",
      "name": "Jewel of Nizam Restaurant",
      "kind": "Fine dining",
      "desc": "fine dining with Nizami flavor and majestic ambiance",
      "rating": "4.5",
      "reviews": "9,800",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Hyderabad"
    },
    {
      "id": "hyderabad_e1",
      "category": "Eat",
      "name": "Pista House",
      "kind": "Bakery",
      "desc": "the city's most famous name for haleem and Irani bakes",
      "rating": "4.4",
      "reviews": "21,000",
      "open": "Open 8 am to 8 pm",
      "walk": "in Hyderabad"
    },
    {
      "id": "hyderabad_s0",
      "category": "Stay",
      "name": "ITC Kohenur",
      "kind": "Hotel",
      "desc": "sleek luxury tower in the HITEC City tech hub",
      "rating": "4.7",
      "reviews": "6,400",
      "open": "Open 24 hours",
      "walk": "in Hyderabad"
    },
    {
      "id": "hyderabad_s1",
      "category": "Stay",
      "name": "Novotel",
      "kind": "Hotel",
      "desc": "reliable, comfortable rooms near the convention centre",
      "rating": "4.4",
      "reviews": "5,100",
      "open": "Open 24 hours",
      "walk": "in Hyderabad"
    },
    {
      "id": "hyderabad_d0",
      "category": "Do",
      "name": "Golconda Fort",
      "kind": "Fort",
      "desc": "a mighty hilltop fort famed for its acoustics and evening sound and light show",
      "rating": "4.6",
      "reviews": "95,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Hyderabad",
      "ticket": true
    },
    {
      "id": "hyderabad_d1",
      "category": "Do",
      "name": "Thrill City",
      "kind": "Theme park",
      "desc": "a big amusement and water park for a fun day out",
      "rating": "4.2",
      "reviews": "12,000",
      "open": "Open 11 am to 9 pm",
      "walk": "in Hyderabad",
      "ticket": true
    },
    {
      "id": "hyderabad_p0",
      "category": "Shop",
      "name": "Inorbit Mall",
      "kind": "Mall",
      "desc": "a large, popular mall in Madhapur with brands and a food court",
      "rating": "4.5",
      "reviews": "60,000",
      "open": "Open 10 am to 10 pm",
      "walk": "in Hyderabad"
    },
    {
      "id": "hyderabad_p1",
      "category": "Shop",
      "name": "Sarath City",
      "kind": "Mall",
      "desc": "one of India's largest malls, with shopping, food and entertainment",
      "rating": "4.6",
      "reviews": "40,000",
      "open": "Open 10 am to 10 pm",
      "walk": "in Hyderabad"
    }
  ]
});

const mumbai = buildCity({
  key: "mumbai",
  name: "Mumbai, India",
  currency: "₹",
  mealRange: [500, 1500],
  stayRates: [4000, 7000, 12000],
  doCost: 1500,
  shopRange: [2000, 7500],
  cuisineStyle: "Maharashtrian and Indian",
  places: []
});

const delhi = buildCity({
  key: "delhi",
  name: "Delhi, India",
  currency: "₹",
  mealRange: [400, 1200],
  stayRates: [3500, 6000, 10000],
  doCost: 1200,
  shopRange: [1500, 6000],
  cuisineStyle: "North Indian",
  places: []
});

const bengaluru = buildCity({
  key: "bengaluru",
  name: "Bengaluru, India",
  currency: "₹",
  mealRange: [300, 900],
  stayRates: [3000, 5000, 8500],
  doCost: 1000,
  shopRange: [1000, 4500],
  cuisineStyle: "South Indian",
  places: []
});

const kolkata = buildCity({
  key: "kolkata",
  name: "Kolkata, India",
  currency: "₹",
  mealRange: [250, 800],
  stayRates: [2500, 4500, 7500],
  doCost: 800,
  shopRange: [1000, 4000],
  cuisineStyle: "Bengali",
  places: []
});

const chennai = buildCity({
  key: "chennai",
  name: "Chennai, India",
  currency: "₹",
  mealRange: [250, 750],
  stayRates: [2500, 4500, 7000],
  doCost: 800,
  shopRange: [1000, 3500],
  cuisineStyle: "Tamil and South Indian",
  places: []
});

const jaipur = buildCity({
  key: "jaipur",
  name: "Jaipur, India",
  currency: "₹",
  mealRange: [300, 850],
  stayRates: [2500, 4500, 7500],
  doCost: 1000,
  shopRange: [1200, 4500],
  cuisineStyle: "Rajasthani",
  places: []
});

const agra = buildCity({
  key: "agra",
  name: "Agra, India",
  currency: "₹",
  mealRange: [300, 900],
  stayRates: [2500, 4500, 8000],
  doCost: 2000,
  shopRange: [1500, 5000],
  cuisineStyle: "Mughlai",
  places: []
});

const goa = buildCity({
  key: "goa",
  name: "Goa, India",
  currency: "₹",
  mealRange: [400, 1200],
  stayRates: [3000, 5500, 9000],
  doCost: 1200,
  shopRange: [1000, 4000],
  cuisineStyle: "Goan",
  places: []
});

const kochi = buildCity({
  key: "kochi",
  name: "Kochi, India",
  currency: "₹",
  mealRange: [300, 850],
  stayRates: [2500, 4500, 7500],
  doCost: 1000,
  shopRange: [1000, 3500],
  cuisineStyle: "Keralite and South Indian",
  places: []
});

export const INDIA = {
  hyderabad,
  mumbai,
  delhi,
  bengaluru,
  kolkata,
  chennai,
  jaipur,
  agra,
  goa,
  kochi
};
