import { buildCity } from "../builder";

const singapore = buildCity({
  key: "singapore",
  name: "Singapore City, Singapore",
  currency: "S$",
  mealRange: [15, 35],
  stayRates: [180, 240, 320],
  doCost: 95,
  shopRange: [100, 450],
  cuisineStyle: "Singaporean & Pan-Asian",
  places: [
    { category: "Eat", name: "Lau Pa Sat", kind: "Hawker Centre", desc: "historic octagonal hawker hall in the financial district, famous for its outdoor evening Satay Street", rating: "4.5", reviews: "22,000" },
    { category: "Eat", name: "Maxwell Food Centre", kind: "Hawker Centre", desc: "bustling local hawker centre in Chinatown, home to the famous Tian Tian Hainanese Chicken Rice stall", rating: "4.5", reviews: "12,000" },
    { category: "Eat", name: "Hawker Chan", kind: "Soya Sauce Chicken", desc: "world-famous stall in Chinatown complex, awarded a Michelin star for its cheap and delicious chicken rice", rating: "4.2", reviews: "4,500" },
    { category: "Eat", name: "Odette", kind: "Fine Dining", desc: "3-Michelin-starred modern French restaurant inside the National Gallery, voted one of the best in Asia", rating: "4.8", reviews: "920" },
    { category: "Eat", name: "Candlenut", kind: "Peranakan", desc: "the world's first Michelin-starred Peranakan restaurant, serving refined heritage dishes like beef rendang", rating: "4.6", reviews: "1,100" },
    
    { category: "Stay", name: "Marina Bay Sands", kind: "Hotel", desc: "world-famous luxury hotel featuring three towers topped by a massive sands-skypark and iconic infinity pool", rating: "4.7", reviews: "48,000" },
    { category: "Stay", name: "Raffles Hotel Singapore", kind: "Hotel", desc: "legendary colonial-style luxury hotel operating since 1887, the birthplace of the Singapore Sling cocktail", rating: "4.8", reviews: "3,800" },
    { category: "Stay", name: "Cube Boutique Capsule Hotel", kind: "Hostel", desc: "stylish and modern capsule hostel in Chinatown featuring comfortable, soundproofed single and double pods", rating: "4.4", reviews: "1,150" },
    { category: "Stay", name: "Carlton City Hotel", kind: "Hotel", desc: "sleek and modern business hotel in Tanjong Pagar featuring clean rooms, a fitness center, and rooftop pool", rating: "4.5", reviews: "2,400" },
    { category: "Stay", name: "Lloyd's Inn", kind: "Hotel", desc: "minimalist boutique hotel near Orchard Road featuring raw concrete rooms and outdoor dipping pools", rating: "4.5", reviews: "940" },
    
    { category: "Do", name: "Gardens by the Bay", kind: "Gardens", desc: "futuristic botanical park featuring massive vertical Supertrees, the Flower Dome, and Cloud Forest waterfall", rating: "4.8", reviews: "98,000", ticket: true },
    { category: "Do", name: "Singapore Flyer", kind: "Ferris Wheel", desc: "giant observation wheel offering panoramic views over Marina Bay, the city skyline, and neighboring islands", rating: "4.6", reviews: "15,000", ticket: true },
    { category: "Do", name: "Sentosa Island", kind: "Beach Resort", desc: "man-made resort island featuring sandy beaches, luxury resorts, theme parks, and cable car access", rating: "4.6", reviews: "28,000" },
    { category: "Do", name: "Merlion Park", kind: "Landmark", desc: "picturesque waterfront park home to the iconic half-lion, half-fish Merlion statue spouting water", rating: "4.7", reviews: "45,000" },
    { category: "Do", name: "National Gallery Singapore", kind: "Museum", desc: "world-class art museum housing the largest public collection of modern Southeast Asian art inside historic halls", rating: "4.7", reviews: "9,800", ticket: true },
    
    { category: "Shop", name: "Orchard Road", kind: "Shopping Street", desc: "Singapore's premier 2.2km shopping boulevard, lined with futuristic luxury mega-malls and designer brands", rating: "4.6", reviews: "24,000" },
    { category: "Shop", name: "Haji Lane", kind: "Boutique Lanes", desc: "narrow pedestrian alleyway in Kampong Glam lined with colorful shophouse boutiques, murals, and cafes", rating: "4.5", reviews: "6,200" },
    { category: "Shop", name: "Chinatown Street Market", kind: "Market", desc: "lively streets lined with stalls selling silk robes, traditional medicine, spices, and cheap souvenirs", rating: "4.3", reviews: "12,000" },
    { category: "Shop", name: "Mustafa Centre", kind: "24-Hour Mall", desc: "legendary, massive 24-hour department store in Little India selling electronics, gold, spices, and apparel", rating: "4.3", reviews: "18,000" },
    { category: "Shop", name: "Jewel Changi Airport", kind: "Mall", desc: "nature-themed entertainment complex containing the world's tallest indoor waterfall (the Rain Vortex)", rating: "4.8", reviews: "38,000" },
  ]
});

export const SINGAPORE = {
  singapore
};
