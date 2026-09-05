import { buildCity } from "../builder";

const newyork = buildCity({
  key: "newyork",
  name: "New York, USA",
  currency: "$",
  mealRange: [39, 66],
  stayRates: [220, 266, 345],
  doCost: 132,
  shopRange: [220, 770],
  cuisineStyle: "Classic New York",
  places: [
    { id: "newyork_e0", category: "Eat", name: "Katz's Delicatessen", kind: "Deli", desc: "since 1888, towering pastrami on rye in a no-frills institution", rating: "4.6", reviews: "42,000" },
    { id: "newyork_e1", category: "Eat", name: "Joe's Pizza", kind: "Pizzeria", desc: "Greenwich Village standby for a classic foldable slice", rating: "4.5", reviews: "18,000" },
    { category: "Eat", name: "Levain Bakery", kind: "Bakery", desc: "cozy bakery famous for baking massive, gooey, six-ounce chocolate chip walnut cookies", rating: "4.7", reviews: "12,000" },
    { category: "Eat", name: "Peter Luger", kind: "Steakhouse", desc: "historic Brooklyn legend serving dry-aged porterhouse steaks in a beer-hall setting since 1887", rating: "4.4", reviews: "9,800" },
    { category: "Eat", name: "Balthazar", kind: "Bistro", desc: "bustling, high-end French brasserie in SoHo serving oysters, steak frites, and baked goods", rating: "4.5", reviews: "5,400" },
    
    { id: "newyork_s0", category: "Stay", name: "The Bowery House", kind: "Hotel", desc: "compact cabin-style rooms on a lively Lower East Side block", rating: "4.2", reviews: "2,300" },
    { id: "newyork_s1", category: "Stay", name: "Pod Times Square", kind: "Hotel", desc: "smart small rooms a block from the Midtown action", rating: "4.3", reviews: "5,600" },
    { category: "Stay", name: "The Standard, High Line", kind: "Hotel", desc: "striking modern hotel straddling the High Line park, featuring floor-to-ceiling river and city views", rating: "4.6", reviews: "3,200" },
    { category: "Stay", name: "The Jane Hotel", kind: "Hotel", desc: "historic cabin-style boutique hotel on the Hudson River, once home to survivors of the Titanic", rating: "4.2", reviews: "1,150" },
    { category: "Stay", name: "Freehand New York", kind: "Hostel", desc: "trendy hotel/hostel in the Flatiron district with artist-commissioned walls and a buzzing rooftop bar", rating: "4.4", reviews: "1,950" },
    
    { id: "newyork_d0", category: "Do", name: "Statue of Liberty", kind: "Landmark", desc: "Liberty Enlightening the World, a gift from France in 1886", rating: "4.7", reviews: "120,000", ticket: true, ticketUrl: "https://www.statuecruises.com/" },
    { id: "newyork_d1", category: "Do", name: "Central Park", kind: "Park", desc: "843 acres of lawns, lakes and shaded paths in the middle of Manhattan", rating: "4.8", reviews: "260,000" },
    { category: "Do", name: "Broadway Theater District", kind: "Activity", desc: "the center of global musical theater, hosting blockbusters like Hamilton in historic Times Square theaters", rating: "4.8", reviews: "45,000", ticket: true },
    { category: "Do", name: "Empire State Building", kind: "Landmark", desc: "art deco skyscraper in Midtown featuring open-air 86th-floor decks with views of the boroughs", rating: "4.7", reviews: "89,000", ticket: true },
    { category: "Do", name: "The High Line", kind: "Park", desc: "beautifully landscaped 1.4-mile public park built on a historic elevated freight rail line in Chelsea", rating: "4.7", reviews: "34,000" },
    
    { id: "newyork_p0", category: "Shop", name: "Fifth Avenue", kind: "Shopping Street", desc: "flagship stores and department giants along Midtown's spine", rating: "4.5", reviews: "30,000" },
    { id: "newyork_p1", category: "Shop", name: "Chelsea Market", kind: "Market Hall", desc: "a converted factory packed with food vendors and makers", rating: "4.5", reviews: "40,000" },
    { category: "Shop", name: "SoHo Shopping District", kind: "Shopping District", desc: "cobblestone streets filled with designer boutiques, art galleries, and upscale street fashion brands", rating: "4.6", reviews: "18,000" },
    { category: "Shop", name: "Brooklyn Flea", kind: "Flea Market", desc: "renowned weekend market in DUMBO selling vintage clothing, antique furniture, and collectibles", rating: "4.4", reviews: "2,400" },
    { category: "Shop", name: "Macy's Herald Square", kind: "Department Store", desc: "the world's largest department store covering an entire city block, operating historic wooden escalators", rating: "4.4", reviews: "35,000" },
  ]
});

const sanfrancisco = buildCity({
  key: "sanfrancisco",
  name: "San Francisco, USA",
  currency: "$",
  mealRange: [35, 60],
  stayRates: [160, 210, 270],
  doCost: 110,
  shopRange: [150, 500],
  cuisineStyle: "Californian & Seafood",
  places: [
    { category: "Eat", name: "Tartine Bakery", kind: "Bakery", desc: "world-renowned bakery in the Mission District, famous for rustic country sourdough loaves and hot croissants", rating: "4.6", reviews: "4,200" },
    { category: "Eat", name: "Swan Oyster Depot", kind: "Seafood counter", desc: "historic 100-year-old 18-stool counter serving the freshest oysters, crab cocktail, and clam chowder", rating: "4.6", reviews: "1,500" },
    { category: "Eat", name: "House of Prime Rib", kind: "Steakhouse", desc: "retro English-style tavern serving thick cuts of prime rib carved at your table from silver carts since 1949", rating: "4.7", reviews: "5,100" },
    { category: "Eat", name: "Zuni Café", kind: "Restaurant", desc: "californian institution on Market Street famous for wood-fired roast chicken with warm bread salad", rating: "4.4", reviews: "2,300" },
    { category: "Eat", name: "Ferry Building Marketplace", kind: "Food Hall", desc: "historic ferry terminal packed with local food stalls selling cheese, blue bottle coffee, and fresh empanadas", rating: "4.6", reviews: "15,000" },
    
    { category: "Stay", name: "Fairmont San Francisco", kind: "Hotel", desc: "prestigious luxury hotel on Nob Hill featuring grand architecture, panoramic views, and the retro Tonga Room tiki bar", rating: "4.7", reviews: "3,100" },
    { category: "Stay", name: "Green Tortoise Hostel", kind: "Hostel", desc: "legendary social hostel in North Beach with free dinners, pool tables, and an easy-going vibe", rating: "4.3", reviews: "1,200" },
    { category: "Stay", name: "Hotel Zeppelin", kind: "Hotel", desc: "rebellious boutique hotel near Union Square celebrating San Francisco's counter-culture and rock heritage", rating: "4.4", reviews: "1,400" },
    { category: "Stay", name: "CitizenM San Francisco Union Square", kind: "Hotel", desc: "modern hotel featuring smart-controlled rooms, plush beds, colorful local art, and open social lounges", rating: "4.6", reviews: "950" },
    { category: "Stay", name: "Palace Hotel", kind: "Hotel", desc: "stunning historic luxury hotel featuring the Garden Court under a massive glass-and-gold chandelier dome", rating: "4.7", reviews: "2,600" },
    
    { category: "Do", name: "Golden Gate Bridge", kind: "Landmark", desc: "iconic international orange suspension bridge, free to walk or cycle across for sweeping bay views", rating: "4.8", reviews: "98,000" },
    { category: "Do", name: "Alcatraz Island", kind: "Prison", desc: "notorious former federal prison housing Al Capone's cell, reached by ferry with a gripping audio tour", rating: "4.7", reviews: "35,000", ticket: true },
    { category: "Do", name: "Fisherman's Wharf & Pier 39", kind: "Attraction", desc: "lively waterfront area packed with seafood stands, clam chowder bowls, and a barking colony of wild sea lions", rating: "4.3", reviews: "62,000" },
    { category: "Do", name: "Cable Car Ride", kind: "Activity", desc: "riding San Francisco's historic moving cable cars hanging off the rails over steep city hills", rating: "4.6", reviews: "24,000", ticket: true },
    { category: "Do", name: "Golden Gate Park", kind: "Park", desc: "sprawling 1,017-acre park home to the Japanese Tea Garden, Conservatory of Flowers, and de Young Museum", rating: "4.8", reviews: "45,000" },
    
    { category: "Shop", name: "Union Square", kind: "Shopping District", desc: "central shopping hub packed with grand department stores, luxury brands, and art galleries", rating: "4.5", reviews: "18,000" },
    { category: "Shop", name: "Ferry Plaza Farmers Market", kind: "Food Market", desc: "acclaimed market surrounding the Ferry Building, featuring organic produce and artisan food vendors on Saturdays", rating: "4.7", reviews: "3,200" },
    { category: "Shop", name: "City Lights Bookstore", kind: "Bookstore", desc: "legendary independent bookstore in North Beach, founded by poet Lawrence Ferlinghetti, the home of beat generation writers", rating: "4.8", reviews: "3,800" },
    { category: "Shop", name: "Haight-Ashbury vintage", kind: "Shopping District", desc: "historic intersection lined with vintage clothing stores, record shops, and hippie-era craft boutiques", rating: "4.4", reviews: "6,500" },
    { category: "Shop", name: "Chestnut Street Boutiques", kind: "Shopping Street", desc: "chic Marina District street lined with local designer clothing shops, cosmetic boutiques, and bakeries", rating: "4.5", reviews: "1,800" },
  ]
});

const losangeles = buildCity({
  key: "losangeles",
  name: "Los Angeles, USA",
  currency: "$",
  mealRange: [30, 55],
  stayRates: [180, 230, 310],
  doCost: 110,
  shopRange: [180, 600],
  cuisineStyle: "Cal-Mexican & Hollywood Fusion",
  places: [
    { category: "Eat", name: "Grand Central Market", kind: "Food Hall", desc: "historic 1917 downtown food market packed with eggslut, taco stands, oyster bars, and ramen shops", rating: "4.6", reviews: "18,000" },
    { category: "Eat", name: "Langer's Delicatessen", kind: "Deli", desc: "legendary Westlake deli famous for its Hot Pastrami on Rye #19 sandwich, operating since 1947", rating: "4.6", reviews: "3,400" },
    { category: "Eat", name: "Republique", kind: "French-Italian", desc: "stunning restaurant set in a historic Charlie Chaplin-built brick building, serving pastries and pastas", rating: "4.5", reviews: "2,900" },
    { category: "Eat", name: "In-N-Out Burger", kind: "Fast Food", desc: "legendary California fast-food spot famous for fresh burgers, animal-style fries, and milkshakes", rating: "4.5", reviews: "15,000" },
    { category: "Eat", name: "Nobu Malibu", kind: "Seafood", desc: "upscale Japanese restaurant directly on the beach, serving famous black cod miso and yellowtail sashimi", rating: "4.6", reviews: "4,200" },
    
    { category: "Stay", name: "The Beverly Hills Hotel", kind: "Hotel", desc: "iconic luxury 'Pink Palace' hotel on Sunset Boulevard, featuring tropical pool cabanas and celebrity history", rating: "4.8", reviews: "2,800" },
    { category: "Stay", name: "Freehand Los Angeles", kind: "Hostel", desc: "cool downtown hostel set in a historic commercial building, featuring a rooftop pool bar and shared/private rooms", rating: "4.4", reviews: "2,100" },
    { category: "Stay", name: "The Line Hotel", kind: "Hotel", desc: "industrial-chic boutique hotel in Koreatown featuring floor-to-ceiling concrete walls and views of the Hollywood Hills", rating: "4.3", reviews: "1,950" },
    { category: "Stay", name: "Mama Shelter LA", kind: "Hotel", desc: "playful boutique hotel in Hollywood with colorful, quirky rooms and a massive rooftop bar restaurant", rating: "4.5", reviews: "1,200" },
    { category: "Stay", name: "Chateau Marmont", kind: "Hotel", desc: "historic Hollywood castle hotel on Sunset Strip, famous as a private sanctuary for film stars since 1929", rating: "4.6", reviews: "850" },
    
    { category: "Do", name: "Hollywood Walk of Fame", kind: "Landmark", desc: "sidewalk path containing over 2,700 brass stars embedded in the pavement along Hollywood Boulevard", rating: "4.1", reviews: "45,000" },
    { category: "Do", name: "Griffith Observatory", kind: "Observatory", desc: "hilltop planetarium offering public telescopes, space exhibits, and spectacular views of the Hollywood Sign", rating: "4.8", reviews: "38,000" },
    { category: "Do", name: "Santa Monica Pier & Beach", kind: "Beach", desc: "landmark pier marking the end of Route 66, featuring an amusement park, aquarium, and wide sandy beach", rating: "4.6", reviews: "62,000" },
    { category: "Do", name: "Getty Center", kind: "Art Museum", desc: "modernist Richard Meier-designed hilltop museum housing classic art, sculpture gardens, and views of LA", rating: "4.8", reviews: "28,000" },
    { category: "Do", name: "Venice Beach Boardwalk", kind: "Attraction", desc: "eclectic beachfront pathway filled with street performers, muscle beach, skate parks, and murals", rating: "4.3", reviews: "24,000" },
    
    { category: "Shop", name: "Rodeo Drive", kind: "Shopping Street", desc: "famous three-block shopping street in Beverly Hills, home to high-end designer boutiques and sports cars", rating: "4.6", reviews: "15,000" },
    { category: "Shop", name: "The Grove", kind: "Shopping District", desc: "popular outdoor shopping mall featuring retail shops, an animated fountain, and a vintage double-decker trolley", rating: "4.6", reviews: "12,000" },
    { category: "Shop", name: "Abbot Kinney Boulevard", kind: "Shopping District", desc: "hip shopping avenue in Venice lined with trendy designer shops, galleries, and artisan cafes", rating: "4.5", reviews: "3,100" },
    { category: "Shop", name: "Rose Bowl Flea Market", kind: "Flea Market", desc: "massive second-Sunday flea market in Pasadena with over 2,500 vendors selling vintage fashion and antiques", rating: "4.5", reviews: "1,500", ticket: true },
    { category: "Shop", name: "Melrose Avenue", kind: "Shopping Street", desc: "famous avenue in West Hollywood lined with streetwear stores, vintage boutiques, and Instagram-famous pink walls", rating: "4.4", reviews: "6,800" },
  ]
});

const chicago = buildCity({
  key: "chicago",
  name: "Chicago, United States",
  currency: "$",
  mealRange: [25, 50],
  stayRates: [120, 160, 220],
  doCost: 80,
  shopRange: [120, 500],
  cuisineStyle: "Midwestern",
  places: [
    { category: "Eat", name: "Lou Malnati's Pizzeria", kind: "Pizzeria", desc: "legendary family-run spot famous for authentic Chicago-style deep-dish pizza with buttercrust", rating: "4.6", reviews: "12,000" },
    { category: "Stay", name: "The Chicago Athletic Association", kind: "Hotel", desc: "stunning hotel set in a restored 1890 Venetian Gothic private club overlooking Millennium Park", rating: "4.8", reviews: "1,900" },
    { category: "Do", name: "Millennium Park (The Bean)", kind: "Park", desc: "famous park housing Anish Kapoor's shiny Cloud Gate sculpture, gardens, and outdoor concerts", rating: "4.8", reviews: "65,000" },
    { category: "Shop", name: "Garrett Popcorn Shops", kind: "Specialty Store", desc: "world-famous shop known for the Chicago Mix, combining sweet caramel and savory cheese popcorn", rating: "4.7", reviews: "5,400" }
  ]
});


const boston = buildCity({
  "key": "boston",
  "name": "Boston, USA",
  "currency": "$",
  "mealRange": [
    28,
    55
  ],
  "stayRates": [
    160,
    220,
    300
  ],
  "doCost": 95,
  "shopRange": [
    150,
    500
  ],
  "cuisineStyle": "New England",
  "places": []
});

const miami = buildCity({
  "key": "miami",
  "name": "Miami, USA",
  "currency": "$",
  "mealRange": [
    30,
    65
  ],
  "stayRates": [
    180,
    250,
    350
  ],
  "doCost": 100,
  "shopRange": [
    150,
    600
  ],
  "cuisineStyle": "Floribbean",
  "places": []
});

export const USA = {
  newyork,
  sanfrancisco,
  losangeles,
  chicago,
  boston,
  miami};
