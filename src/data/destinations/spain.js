import { buildCity } from "../builder";
import arumeImg from "../../assets/arume.jpg";
import operaImg from "../../assets/opera.jpg";
import orienteImg from "../../assets/oriente.jpg";
import arcImg from "../../assets/arc.jpg";
import batlloImg from "../../assets/batllo.jpg";
import sagradaImg from "../../assets/sagrada.jpg";
import portalImg from "../../assets/portal.jpg";
import pinzatImg from "../../assets/pinzat.jpg";

import carlaImg from "../../assets/carla.jpg";
import martaImg from "../../assets/marta.jpg";
import sofiaImg from "../../assets/sofia.jpg";
import elenaImg from "../../assets/elena.jpg";
import carlosImg from "../../assets/carlos.jpg";
import alexnImg from "../../assets/alexn.jpg";
import pauImg from "../../assets/pau.jpg";
import jordimImg from "../../assets/jordim.jpg";
import samImg from "../../assets/sam.jpg";
import taylorImg from "../../assets/taylor.jpg";
import jordanImg from "../../assets/jordan.jpg";
import caseyImg from "../../assets/casey.jpg";

const BCN_B = {
  arume: { id: "arume", city: "Barcelona", image: arumeImg, name: "Arume Restaurant", category: "Eat", rating: "4.8", reviews: "330",
    walk: "4 min walk", kind: "Restaurant", open: "Open 9 am to 10 pm", offset: { lat: 0.004, lng: 0.003 },
    note: "Tucked away in the gritty heart of El Raval, Arume serves up high-octane Galician soul food, legendary blackberry mojitos, and the best duck rice you'll ever find in a back alley.",
    detail: "Arume Restaurant, located in the centre of Palma de Mallorca, is the place where chef Tomeu Martí expresses his cuisine with complete freedom. After more than thirteen years shaping Arume and travelling widely, he has brought together his two strongest influences: Mediterranean and Asian cooking. The result is a personal style that blends ingredients, flavours and textures with precision and originality, without fitting into any fixed definition beyond its own name. Arume also offers an extensive and carefully curated wine and sake list." },
  opera: { id: "opera", city: "Barcelona", image: operaImg, name: "Cafè de l'Òpera", category: "Eat", rating: "4.2", reviews: "1080",
    walk: "10 min walk", kind: "Cafe", open: "Open 9 am to 9 pm", offset: { lat: -0.006, lng: 0.005 },
    note: "The café serves traditional Spanish and Catalan cuisine, including tapas, pastries, sandwiches, and freshly brewed coffee, offering an authentic local dining experience.",
    detail: "Café de l'Opéra is a quintessential Parisian café that captures the essence of the city's vibrant culture. Nestled near the iconic Palais Garnier, this charming spot offers a delightful atmosphere filled with elegant decor and aromatic coffee. Guests can indulge in a variety of artisanal pastries and traditional French dishes while soaking in the lively ambiance of Paris. Whether you're seeking a quiet moment to savor a brew or a lively gathering with friends, this café is the perfect destination for anyone exploring the heart of Paris." },
  oriente: { id: "oriente", city: "Barcelona", image: orienteImg, name: "Oriente Atiram Hotel", category: "Stay", rating: "4.9", reviews: "2,692",
    walk: "on La Rambla", kind: "Hotel", open: "Open 24 hours", offset: { lat: 0.007, lng: 0.009 },
    note: "Oriente Atiram Hotel offers modern, comfortable rooms equipped with air conditioning, free Wi-Fi, private bathrooms, and elegant furnishings, providing a relaxing stay in the heart of Barcelona.",
    detail: "Oriente Atiram Hotel is a historic hotel located on Barcelona's famous La Rambla, conveniently situated between the Liceu Theatre and the Columbus Monument. Housed in a beautifully restored 19th-century building, it offers comfortable accommodations, a restaurant, a terrace, and free Wi-Fi, making it an ideal base for exploring the city." },
  arc: { id: "arc", city: "Barcelona", image: arcImg, name: "Hotel Arc La Rambla", category: "Stay", rating: "4.3", reviews: "3,797",
    walk: "central Barcelona", kind: "Hotel", open: "Open 24 hours", offset: { lat: -0.009, lng: 0.004 },
    note: "Hotel Arc La Rambla offers bright and comfortable rooms featuring modern décor, air conditioning, free Wi-Fi, private bathrooms, and soundproofing to ensure a pleasant and restful stay in central Barcelona.",
    detail: "Hotel Arc La Rambla is a 3-star hotel located in the heart of Barcelona, on the picturesque Ramblas promenade. The hotel offers a central location that provides easy access to major attractions, dining options, and transportation. Guests can enjoy comfortable rooms with modern amenities, such as satellite TV, climate control, and soundproof windows. The hotel also features a daily continental breakfast and offers various services to enhance the guest experience, including bicycle and car rental options. The hotel's commitment to sustainability is evident in its use of local products and water and energy-saving policies, earning it the Biosphere Certification." },
  batllo: { id: "batllo", image: batlloImg, name: "Casa Batlló", category: "Do", city: "Barcelona", ticket: true, rating: "4.8", reviews: "997",
    walk: "12 min walk", kind: "Landmark", open: "Open 9 am to 11 pm", offset: { lat: 0.011, lng: -0.008 },
    note: "Designed by Antoni Gaudí, a masterpiece of Catalan modernism known for its organic forms, vibrant colors, and rich symbolism, a house with a unique rooftop and immersive interior showcasing modernist architecture.",
    detail: "Casa Batlló is a building in the center of Barcelona, Spain. It was designed by Antoni Gaudí, and is considered one of his masterpieces. A remodel of a previously built house, it was redesigned in 1904 by Gaudí. The façade of Casa Batlló is a vibrant display of color and texture, featuring a mosaic made of broken ceramic tiles (trencadís) that creates a shimmering effect. The wavy surface and organic shapes are reminiscent of marine life, with elements that suggest waves and sea creatures." },
  sagrada: { id: "sagrada", image: sagradaImg, name: "La Sagrada Família", category: "Do", city: "Barcelona", ticket: true, rating: "3.9", reviews: "315",
    walk: "20 min walk", kind: "Basilica", open: "Open 9 am to 6 pm", offset: { lat: 0.015, lng: -0.012 },
    note: "An iconic basilica in Barcelona designed by Antoni Gaudí, known for its unique architectural style and ongoing construction since 1882, with completion expected in 2026.",
    detail: "La Sagrada Familia, officially known as the Basílica i Temple Expiatori de la Sagrada Família, is a Roman Catholic basilica located in the Eixample district of Barcelona, Spain. It is renowned for its intricate design and is considered one of the most extraordinary examples of modernist architecture. The basilica is a UNESCO World Heritage Site and has been under construction since 1882, with an anticipated completion date in 2026, coinciding with the centenary of Gaudí's death." },
  portal: { id: "portal", city: "Barcelona", image: portalImg, name: "Portal del Angel", category: "Shop", rating: "4.5", reviews: "5,721",
    walk: "6 min walk", kind: "Shopping street", open: "Open 9 am to 10 pm", offset: { lat: 0.005, lng: 0.006 },
    note: "This 250-meter-long Barcelona shopping district runs downhill from Plaça de Catalunya. You'll notice it's just one street over from Barcelona's most famous street: La Rambla.",
    detail: "Portal de l'Àngel is a pedestrian street in the Ciutat Vella district of Barcelona adjacent to Plaça Catalunya and part of the large shopping area that spans from Avinguda Diagonal to Barri Gòtic. It's one of the city's most visited streets and is always crowded with tourists and locals all year round." },
  pinzat: { id: "pinzat", city: "Barcelona", image: pinzatImg, name: "Pinza't", category: "Shop", rating: "3.8", reviews: "902",
    walk: "9 min walk", kind: "Artisan shop", open: "Open 11 am to 11 pm", offset: { lat: -0.004, lng: 0.008 },
    note: "This artisan shop is famous for its hand-painted technical bags made from recycled lorry materials like seat belts and buckles.",
    detail: "Pinzat is a unique concept that transforms recycled materials such as truck tarps and seatbelts into handcrafted bags and accessories. Created by local artists, each piece is individually designed and painted, combining sustainability, creativity, and urban art into one-of-a-kind products." },
};

// Expand Barcelona to have at least 5-6 items per category by adding more places
const bcnExtraPlaces = [
  { category: "Eat", name: "El Quim de la Boqueria", kind: "Tapas Bar", desc: "legendary food stall in the heart of Boqueria market serving eggs with baby squid", rating: "4.6", reviews: "2,400" },
  { category: "Eat", name: "Tickets Bar", kind: "Gourmet Tapas", desc: "avant-garde tapas laboratory by Albert Adrià that makes food a performance art", rating: "4.7", reviews: "3,100" },
  { category: "Eat", name: "Satan's Coffee Corner", kind: "Specialty Cafe", desc: "high-grade coffee and killer breakfasts in a cool, music-filled Gothic corner", rating: "4.3", reviews: "850" },
  
  { category: "Stay", name: "Cotton House Hotel", kind: "Boutique Hotel", desc: "stunning modern design in the former 19th-century cotton guild headquarters", rating: "4.8", reviews: "1,100" },
  { category: "Stay", name: "Kabul Party Hostel", kind: "Hostel", desc: "legendary social hub off Plaça Reial, perfect for backpackers and meeting others", rating: "4.2", reviews: "2,500" },
  { category: "Stay", name: "Casa Bonay", kind: "Boutique Stay", desc: "restored 1869 mansion in Dreta de l'Eixample celebrating local creative culture", rating: "4.6", reviews: "1,200" },
  
  { category: "Do", name: "Park Güell", kind: "Park", desc: "Gaudí's mosaic-speckled garden complex overlooking the city and sea", rating: "4.5", reviews: "115,000", ticket: true },
  { category: "Do", name: "Picasso Museum", kind: "Museum", desc: "comprehensive collection of Picasso's formative years housed in five medieval palaces", rating: "4.4", reviews: "24,000", ticket: true },
  { category: "Do", name: "Barceloneta Beach", kind: "Beach", desc: "lively city beach lined with seafood restaurants, chiringuitos, and windsurfers", rating: "4.1", reviews: "45,000" },
  
  { category: "Shop", name: "La Boqueria", kind: "Food Market", desc: "world-famous historic market hall overflowing with fruit stalls, jamón, and tapas bars", rating: "4.6", reviews: "98,000" },
  { category: "Shop", name: "El Born Boutiques", kind: "Artisan Lanes", desc: "narrow medieval streets filled with independent designers, leather makers, and galleries", rating: "4.5", reviews: "8,900" },
  { category: "Shop", name: "Passeig de Gràcia", kind: "Shopping Street", desc: "grand boulevard hosting luxury brands alongside Gaudí's architectural wonders", rating: "4.6", reviews: "15,000" },
];

const BCN_G = {
  carla: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "carla", name: "Carla Ruiz", gender: "Female", rating: "4.9", reviews: "1,287", image: carlaImg, walk: "meets in Gòtic", offset: { lat: -0.003, lng: -0.004 },
    note: "Carla specializes in art and architecture tours, helping visitors appreciate the creativity and history behind Barcelona's most iconic landmarks.",
    detail: "Born and raised around Barcelona, Carla has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and she happily shapes the day around whatever you're curious about. Her care goes into how you feel at the end of the day." },
  marta: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "marta", name: "Marta Soler", gender: "Female", rating: "4.1", reviews: "4190", image: martaImg, walk: "meets in Eixample", offset: { lat: 0.002, lng: -0.006 },
    note: "Marta creates relaxed and enjoyable tours tailored to each group. Whether you're visiting famous attractions or lesser-known spots, she ensures every experience is memorable and engaging.",
    detail: "Born and raised around Barcelona, Marta has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and she happily shapes the day around whatever you're curious about. Her care goes into how you feel at the end of the day." },
  sofia: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "sofia", name: "Sofia Morales", gender: "Female", rating: "3.5", reviews: "201", image: sofiaImg, walk: "meets in El Born", offset: { lat: -0.005, lng: 0.003 },
    note: "Sofia enjoys showing visitors the authentic side of Barcelona, from charming local cafés to vibrant neighborhoods.",
    detail: "Born and raised around Barcelona, Sofia has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and she happily shapes the day around whatever you're curious about. Her care goes into how you feel at the end of the day." },
  elena: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "elena", name: "Elena García", gender: "Female", rating: "3.5", reviews: "5,721", image: elenaImg, walk: "meets in Gràcia", offset: { lat: 0.006, lng: 0.002 },
    note: "A lifelong Barcelona resident, she enjoys helping visitors experience the city beyond the tourist attractions, introducing them to local favorites and unique experiences.",
    detail: "Born and raised around Barcelona, Elena has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and she happily shapes the day around whatever you're curious about. Her care goes into how you feel at the end of the day." },
  carlos: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "carlos", name: "Carlos", gender: "Male", rating: "5.0", reviews: "1,011", image: carlosImg, walk: "meets at La Boqueria", offset: { lat: 0.003, lng: 0.005 },
    note: "A true food enthusiast, Carlos introduces visitors to Barcelona's best local markets, cafés, and restaurants. His tours are perfect for travelers who want to explore the city through its flavors.",
    detail: "Born and raised around Barcelona, Carlos has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and he happily shapes the day around whatever you're curious about. His care goes into how you feel at the end of the day." },
  alexn: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "alexn", name: "Alex Navarro", gender: "Male", rating: "4.9", reviews: "893", image: alexnImg, walk: "meets in Eixample", offset: { lat: -0.004, lng: 0.006 },
    note: "Alex is an energetic guide who enjoys helping travelers discover Barcelona's famous attractions as well as lesser-known spots loved by locals.",
    detail: "Born and raised around Barcelona, Alex has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and he happily shapes the day around whatever you're curious about. His care goes into how you feel at the end of the day." },
  pau: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "pau", name: "Pau Roca", gender: "Male", rating: "4.4", reviews: "875", image: pauImg, walk: "meets in Sant Antoni", offset: { lat: 0.005, lng: -0.003 },
    note: "A passionate food lover, Pau introduces visitors to authentic Catalan cuisine, local markets, and family-owned restaurants that many tourists miss.",
    detail: "Born and raised around Barcelona, Pau has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and he happily shapes the day around whatever you're curious about. His care goes into how you feel at the end of the day." },
  jordim: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "jordim", name: "Jordi Martínez", gender: "Male", rating: "3.1", reviews: "5,721", image: jordimImg, walk: "meets in Gòtic", offset: { lat: -0.002, lng: -0.007 },
    note: "Born and raised in Barcelona, Jordi loves sharing the city's hidden streets, local stories, and historic landmarks. His tours feel like exploring Barcelona with a knowledgeable friend.",
    detail: "Born and raised around Barcelona, Jordi has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and he happily shapes the day around whatever you're curious about. His care goes into how you feel at the end of the day." },
  sam: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "sam", name: "Sam Rivera", gender: "Others", rating: "5.0", reviews: "1,295", image: samImg, walk: "meets in Raval", offset: { lat: 0.004, lng: -0.002 },
    note: "Sam loves introducing travelers to Barcelona's diverse neighborhoods, hidden cafés, and vibrant local culture through personalized tours.",
    detail: "Born and raised around Barcelona, Sam has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and they happily shapes the day around whatever you're curious about. Their care goes into how you feel at the end of the day." },
  taylor: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "taylor", name: "Taylor Costa", gender: "Others", rating: "4.2", reviews: "4,190", image: taylorImg, walk: "meets in Poble-sec", offset: { lat: -0.003, lng: 0.004 },
    note: "Taylor focuses on creating authentic experiences that help visitors connect with the city's people, traditions, and everyday life.",
    detail: "Born and raised around Barcelona, Taylor has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and they happily shapes the day around whatever you're curious about. Their care goes into how you feel at the end of the day." },
  jordan: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "jordan", name: "Jordan Vega", gender: "Others", rating: "3.3", reviews: "109", image: jordanImg, walk: "meets in Gràcia", offset: { lat: 0.006, lng: 0.001 },
    note: "Jordan combines local knowledge with a friendly personality, guiding travelers through both popular attractions and off-the-beaten-path locations.",
    detail: "Born and raised around Barcelona, Jordan has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and they happily shapes the day around whatever you're curious about. Their care goes into how you feel at the end of the day." },
  casey: { category: "Guides", guide: true, kind: "Local guide", open: "Available this week", id: "casey", name: "Casey Moreno", gender: "Others", rating: "3.0", reviews: "5,721", image: caseyImg, walk: "meets in Sants", offset: { lat: -0.005, lng: -0.004 },
    note: "Casey is passionate about sustainable tourism and enjoys helping visitors discover local businesses, community spaces, and unique cultural experiences.",
    detail: "Born and raised around Barcelona, Casey has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and they happily shapes the day around whatever you're curious about. Their care goes into how you feel at the end of the day." },
};

const BARCELONA_TRIP = {
  eat: { imgs: [operaImg, arumeImg], html: "Barcelona is known for its rich Catalan cuisine, and you can enjoy local favorites such as <strong>Paella Valenciana, Patatas Bravas, Pan con Tomate, Jamón Ibérico, and Crema Catalana</strong> at restaurants like <strong>CAFÈ DE L’ÒPERA</strong>. A typical meal featuring these dishes costs around <strong>€30 to €40</strong> per person, allowing you to experience authentic local flavors throughout your stay." },
  stay: { imgs: [orienteImg, arcImg], rates: [140, 170, 220], html: "For your <strong>{d} day</strong> trip, <strong>Oriente Atiram Hotel</strong> offers a comfortable single room with one bed for approximately <strong>€{single}</strong> in total, while <strong>Hotel Arc La Rambla</strong> provides a spacious double room for around <strong>€{double}</strong>. If you’re traveling with family or friends, a room with two beds at Oriente Atiram Hotel costs about <strong>€{twobed}</strong> for the entire stay, leaving plenty of room in your budget for other experiences." },
  do: { imgs: [sagradaImg, batlloImg], html: "Make the most of your visit by exploring Barcelona’s iconic landmarks, including <strong>Sagrada Família, Casa Batlló, Park Güell, Montjuïc, and the Gothic Quarter.</strong> Visiting these attractions and joining a guided walking tour would cost approximately <strong>€116</strong> per person, giving you access to some of the city’s most famous cultural and architectural treasures." },
  shop: { imgs: [portalImg, pinzatImg], html: "For shopping, head to <strong>Passeig de Gràcia</strong> for fashion and luxury brands, browse artisan stores and local boutiques in <strong>El Born</strong>, and visit <strong>La Boqueria Market</strong> for souvenirs and local products. Setting aside around <strong>€200 to €600</strong> will allow you to take home unique gifts, handmade crafts, and memorable keepsakes from Barcelona." },
};

const barcelonaBase = buildCity({
  key: "barcelona",
  name: "Barcelona, Spain",
  currency: "€",
  mealRange: [30, 40],
  stayRates: [140, 170, 220],
  doCost: 116,
  shopRange: [200, 600],
  cuisineStyle: "Catalan",
  places: [
    ...Object.values(BCN_B),
    ...bcnExtraPlaces
  ],
  existingGuides: BCN_G
});
barcelonaBase.trip = BARCELONA_TRIP;

const madrid = buildCity({
  key: "madrid",
  name: "Madrid, Spain",
  currency: "€",
  mealRange: [25, 45],
  stayRates: [120, 160, 210],
  doCost: 90,
  shopRange: [150, 500],
  cuisineStyle: "Spanish and Madrileño",
  places: [
    { category: "Eat", name: "Casa Lucio", kind: "Tavern", desc: "famous for Huevos Rotos (broken eggs over fries) frequented by royalty and actors", rating: "4.5", reviews: "4,200" },
    { category: "Eat", name: "Chocolatería San Ginés", kind: "Cafe", desc: "historic 1894 café serving the best thick hot chocolate and freshly fried churros", rating: "4.6", reviews: "21,000" },
    { category: "Eat", name: "Sobrino de Botín", kind: "Restaurant", desc: "certified by Guinness as the world's oldest continuously operating restaurant, famous for roast suckling pig", rating: "4.4", reviews: "8,900" },
    { category: "Eat", name: "La Barraca", kind: "Restaurant", desc: "renowned family-run restaurant serving authentic valencian paellas and classic tapas", rating: "4.3", reviews: "1,500" },
    { category: "Eat", name: "Mercado de San Miguel", kind: "Market Stall", desc: "gorgeous iron-and-glass market packed with gourmet tapas, oysters, and local wines", rating: "4.5", reviews: "32,000" },
    
    { category: "Stay", name: "Gran Meliá Palacio de los Duques", kind: "Hotel", desc: "luxurious 5-star hotel in a converted 19th-century ducal palace with private gardens", rating: "4.8", reviews: "1,200" },
    { category: "Stay", name: "Hotel Regina", kind: "Hotel", desc: "modern rooms steps from Puerta del Sol and the Prado museum, offering an excellent breakfast", rating: "4.5", reviews: "3,100" },
    { category: "Stay", name: "Generator Madrid", kind: "Hostel", desc: "stylish boutique hostel with private rooms, social dorms, and a buzzing rooftop bar", rating: "4.3", reviews: "2,700" },
    { category: "Stay", name: "Only YOU Boutique Hotel", kind: "Hotel", desc: "trendy hotel in Chueca set in a restored palace with striking eclectic interiors", rating: "4.7", reviews: "1,650" },
    { category: "Stay", name: "Dear Hotel Madrid", kind: "Hotel", desc: "sleek design hotel on Gran Vía with Nordic décor and a sky-high pool deck", rating: "4.6", reviews: "1,890" },
    
    { category: "Do", name: "Prado Museum", kind: "Museum", desc: "world-renowned art museum housing the finest collection of Spanish masterpieces by Velázquez and Goya", rating: "4.8", reviews: "45,000", ticket: true },
    { category: "Do", name: "Royal Palace of Madrid", kind: "Palace", desc: "grand official residence of the Spanish Royal Family featuring opulent apartments and royal armory", rating: "4.7", reviews: "35,000", ticket: true },
    { category: "Do", name: "El Retiro Park", kind: "Park", desc: "sprawling 350-acre green space featuring the beautiful Glass Palace, rose gardens, and a rowing lake", rating: "4.8", reviews: "78,000" },
    { category: "Do", name: "Plaza Mayor", kind: "Landmark", desc: "historic arcaded square built during the Hapsburg empire, perfect for calamari sandwiches and people-watching", rating: "4.6", reviews: "62,000" },
    { category: "Do", name: "Temple of Debod", kind: "Monument", desc: "authentic ancient Egyptian temple rebuilt in Madrid, offering the best sunset views in the city", rating: "4.5", reviews: "14,000" },
    
    { category: "Shop", name: "Gran Vía", kind: "Shopping Street", desc: "vibrant central boulevard lined with massive flagship fashion stores, theaters, and landmarks", rating: "4.6", reviews: "28,000" },
    { category: "Shop", name: "El Rastro", kind: "Flea Market", desc: "sprawling Sunday open-air market in La Latina selling antiques, vintage clothes, and curios", rating: "4.4", reviews: "18,000" },
    { category: "Shop", name: "Calle de Serrano", kind: "Shopping District", desc: "exclusive shopping avenue in the Salamanca neighborhood hosting luxury brands and boutiques", rating: "4.5", reviews: "3,400" },
    { category: "Shop", name: "Casa de Diego", kind: "Artisan Shop", desc: "historic shop on Puerta del Sol crafting traditional handmade fans, umbrellas, and walking sticks since 1823", rating: "4.5", reviews: "650" },
    { category: "Shop", name: "Mercado de San Antón", kind: "Food Market", desc: "multi-story market in Chueca featuring fresh produce stalls, gourmet tapas, and a terrace bar", rating: "4.4", reviews: "4,100" },
  ]
});

const seville = buildCity({
  key: "seville",
  name: "Seville, Spain",
  currency: "€",
  mealRange: [18, 35],
  stayRates: [100, 140, 190],
  doCost: 75,
  shopRange: [80, 300],
  cuisineStyle: "Andalusian Tapas",
  places: [
    { category: "Eat", name: "El Rinconcillo", kind: "Tapas Bar", desc: "Seville's oldest tapas bar, serving classic spinach with chickpeas and cured meats since 1670", rating: "4.5", reviews: "6,800" },
    { category: "Eat", name: "Bodega Santa Cruz", kind: "Tapas Bar", desc: "lively, chaotic spot in the Santa Cruz district famous for cheap tapas, montaditos, and cold beer", rating: "4.6", reviews: "7,200" },
    { category: "Eat", name: "Abantal", kind: "Restaurant", desc: "chef Julio Fernández's Michelin-starred restaurant serving refined, modern interpretations of Andalusian food", rating: "4.6", reviews: "520" },
    { category: "Eat", name: "Cañabota", kind: "Restaurant", desc: "industrial-chic seafood tavern offering the freshest local fish, cooked with precision and open-fire grill", rating: "4.7", reviews: "840" },
    { category: "Eat", name: "Mercado de Triana", kind: "Food Market", desc: "traditional market built over castle ruins, packed with jamón shops, cheese merchants, and tiny eateries", rating: "4.5", reviews: "4,300" },
    
    { category: "Stay", name: "Hotel Alfonso XIII", kind: "Hotel", desc: "iconic Moorish-style luxury hotel built in 1928, featuring grand arches, tiles, and a courtyard pool", rating: "4.8", reviews: "2,100" },
    { category: "Stay", name: "Las Casas de la Judería", kind: "Hotel", desc: "unique hotel created from 27 interconnected historic houses in the old Jewish quarter with courtyards and tunnels", rating: "4.6", reviews: "3,800" },
    { category: "Stay", name: "TOC Hostel Seville", kind: "Hostel", desc: "modern design hostel with tech features, stylish shared dorms, private rooms, and a central patio", rating: "4.5", reviews: "1,950" },
    { category: "Stay", name: "Hotel Amadeus", kind: "Hotel", desc: "charming classical music-themed hotel in Santa Cruz with a rooftop terrace overlooking the cathedral", rating: "4.7", reviews: "890" },
    { category: "Stay", name: "Casa Romana Hotel Boutique", kind: "Hotel", desc: "stylish boutique stay set in a restored 18th-century home featuring clean contemporary rooms", rating: "4.5", reviews: "940" },
    
    { category: "Do", name: "Seville Cathedral & Giralda", kind: "Landmark", desc: "largest Gothic cathedral in the world, final resting place of Christopher Columbus, and its Moorish bell tower", rating: "4.8", reviews: "42,000", ticket: true },
    { category: "Do", name: "Royal Alcázar of Seville", kind: "Palace", desc: "exquisite royal palace complex displaying mudéjar architecture, lush orange-tree gardens, and ponds", rating: "4.8", reviews: "48,000", ticket: true },
    { category: "Do", name: "Plaza de España", kind: "Landmark", desc: "spectacular semi-circular plaza built in 1929, lined with tiled alcoves representing Spain's provinces and a canal", rating: "4.9", reviews: "75,000" },
    { category: "Do", name: "Triana Neighborhood", kind: "Cultural Area", desc: "vibrant district across the Guadalquivir river famous for ceramic workshops, flamenco heritage, and riverside bars", rating: "4.6", reviews: "12,000" },
    { category: "Do", name: "Metropol Parasol", kind: "Attraction", desc: "massive modern wooden structure (known locally as Las Setas) with an archeological museum and walkway views", rating: "4.4", reviews: "21,000", ticket: true },
    
    { category: "Shop", name: "Calle Sierpes", kind: "Shopping Street", desc: "traditional pedestrian shopping street in the city center hosting historic shops, hatters, and fashion brands", rating: "4.5", reviews: "8,900" },
    { category: "Shop", name: "Ceramica Triana", kind: "Artisan Shop", desc: "authentic ceramic shop selling hand-painted tiles, plates, and pottery crafted in traditional Triana styles", rating: "4.6", reviews: "420" },
    { category: "Shop", name: "Mercadillo el Jueves", kind: "Flea Market", desc: "outdoor market held on Thursdays along Calle Feria, specializing in vintage books, antiques, and paintings", rating: "4.3", reviews: "1,500" },
    { category: "Shop", name: "Juan Foronda", kind: "Artisan Shop", desc: "heritage store specializing in authentic handmade lace mantillas, silk shawls, and handpainted Spanish fans", rating: "4.7", reviews: "230" },
    { category: "Shop", name: "Centro Comercial Torre Sevilla", kind: "Mall", desc: "modern open-air shopping center at the foot of Seville's tallest building, offering global fashion retail", rating: "4.2", reviews: "3,100" },
  ]
});

const valencia = buildCity({
  key: "valencia",
  name: "Valencia, Spain",
  currency: "€",
  mealRange: [20, 38],
  stayRates: [90, 130, 180],
  doCost: 65,
  shopRange: [70, 250],
  cuisineStyle: "Valencian",
  places: [
    { category: "Eat", name: "La Riuá", kind: "Tavern", desc: "family-run restaurant celebrated for serving the most authentic traditional Valencian paella", rating: "4.5", reviews: "2,100" },
    { category: "Stay", name: "Caro Hotel", kind: "Hotel", desc: "stunning 5-star hotel in a 19th-century palace containing remnants of historic Roman walls", rating: "4.8", reviews: "520" },
    { category: "Do", name: "City of Arts and Sciences", kind: "Landmark", desc: "Santiago Calatrava's futuristic architectural masterpiece featuring a science museum and oceanarium", rating: "4.7", reviews: "45,000", ticket: true },
    { category: "Shop", name: "Central Market of Valencia", kind: "Food Market", desc: "sprawling modernist market hall filled with fresh oranges, saffron, and local specialty foods", rating: "4.8", reviews: "22,000" }
  ]
});


const bilbao = buildCity({
  "key": "bilbao",
  "name": "Bilbao, Spain",
  "currency": "€",
  "mealRange": [
    25,
    50
  ],
  "stayRates": [
    100,
    140,
    190
  ],
  "doCost": 75,
  "shopRange": [
    100,
    350
  ],
  "cuisineStyle": "Basque",
  "places": []
});

const malaga = buildCity({
  "key": "malaga",
  "name": "Malaga, Spain",
  "currency": "€",
  "mealRange": [
    20,
    45
  ],
  "stayRates": [
    90,
    130,
    180
  ],
  "doCost": 65,
  "shopRange": [
    80,
    300
  ],
  "cuisineStyle": "Andalusian",
  "places": []
});

export const SPAIN = {
  barcelona: barcelonaBase,
  madrid,
  seville,
  valencia,
  bilbao,
  malaga
};
