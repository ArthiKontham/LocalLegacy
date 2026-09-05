
// --- FILE: ./src/data/builder.js ---
const IMAGE_POOLS = {
  Eat: [
    "the-boathouse", "spice-alley", "lokal-dlouhaaa", "cafe-savoy", "le-petit-marche", 
    "chez-janou", "thip-samai", "jay-fai", "ciya-sofras", "karakoy-gulluoglu", 
    "al-ustad-special-kebab", "ravi-restaurant", "poppies-fish-chips", "dishoom", 
    "katz-s-delicatessen", "joe-s-pizza", "mustafa-s-gemuse-kebap", "zur-letzten-instanz", 
    "o-kostas", "karamanlidika", "jewel-of-nizam-restaurant", "pista-house", 
    "trattoria-da-enzo", "pizzeria-ai-marmi", "ichiran-shibuya", "sushi-no-midori", 
    "contramar", "el-huequito", "cafe-clock", "nomad", "cafe-de-klos", 
    "foodhallen", "cervejaria-ramiro", "time-out-market"
  ],
  Stay: [
    "harbour-rocks-hotel", "sydney-central-inn", "hotel-josef", "mosaic-house", 
    "hotel-le-marais", "hotel-rivoli", "riva-surya", "ibis-bangkok-riverside", 
    "sirkeci-mansion", "hotel-sultanahmet", "rove-downtown", "citymax-bur-dubai", 
    "the-hoxton-shoreditch", "premier-inn-county-hall", "the-bowery-house", 
    "pod-times-square", "hotel-hackescher-markt", "michelberger-hotel", "athenswas-hotel", 
    "plaka-hotel", "itc-kohenur", "novotel", "hotel-trastevere", "impero-hotel-rome", 
    "shinjuku-granbell", "asakusa-view-hotel", "hotel-carlota", "hostel-mundo-joven", 
    "riad-yasmine", "riad-be-marrakech", "the-hoxton-herengracht", "hotel-jordaan", 
    "lisbon-story-guesthouse", "hotel-alfama"
  ],
  Do: [
    "sydney-opera-house", "sydney-harbour-bridge", "charles-bridge", "prague-castle", 
    "eiffel-tower", "louvre-museum", "grand-palace", "wat-arun", "hagia-sophia", 
    "blue-mosque", "burj-khalifa", "dubai-fountain", "tower-of-london", "british-museum", 
    "statue-of-liberty", "central-park", "brandenburg-gate", "museum-island", 
    "acropolis", "acropolis-museum", "golconda-fort", "thrill-city", "colosseum", 
    "vatican-museums", "senso-ji-temple", "tokyo-skytree", "teotihuacan", "zocalo", 
    "bahia-palace", "jemaa-el-fnaa", "rijksmuseum", "anne-frank-house", "belem-tower", 
    "jeronimos-monastery"
  ],
  Shop: [
    "queen-victoria-building", "paddington-markets", "wenceslas-square", "havelska-market", 
    "le-marais", "marche-d-aligre", "chatuchak-market", "iconsiam", "grand-bazaar", 
    "spice-bazaar", "the-dubai-mall", "gold-souk", "covent-garden", "borough-market", 
    "fifth-avenue", "chelsea-market", "kurfurstendamm", "flohmarkt-mauerpark", 
    "ermou-street", "monastiraki", "inorbit-mall", "sarath-city", "via-del-corso", 
    "campo-de-fiori", "shibuya", "ginza", "mercado-de-la-ciudadela", "de-negen-straatjes", 
    "albert-cuyp-market", "rua-augusta", "lx-factory"
  ]
};

const GUIDE_PIC_POOL = {
  Female: [
    "olivia-brown", "mia-wilson", "ava-taylor", "chloe-lee", "tereza-novakova", 
    "katerina-svobodova", "lucie-cerny", "eliska-dvorak", "amelia-clarke", "grace-evans", 
    "emily-wright", "olivia-hughes", "ava-johnson", "sophia-davis", "emma-smith", "isabella-garcia"
  ],
  Male: [
    "jack-brown", "noah-wilson", "liam-taylor", "lucas-lee", "jakub-novakova", 
    "petr-svobodova", "tomas-cerny", "martin-dvorak", "oliver-clarke", "harry-evans", 
    "george-wright", "jack-hughes", "liam-johnson", "ethan-davis", "noah-smith", "mason-garcia"
  ],
  Others: [
    "riley-brown", "jordan-wilson", "charlie-taylor", "alex-lee", "mira-novakova", 
    "sasa-svobodova", "nikola-cerny", "rene-dvorak", "charlie-clarke", "frankie-evans", 
    "alex-wright", "sam-hughes", "sam-johnson", "alex-davis", "jordan-smith", "taylor-garcia"
  ]
};

const EXISTING_PICS = new Set([
  "the-boathouse", "spice-alley", "harbour-rocks-hotel", "sydney-central-inn", 
  "sydney-opera-house", "sydney-harbour-bridge", "queen-victoria-building", "paddington-markets",
  "lokal-dlouhaaa", "cafe-savoy", "hotel-josef", "mosaic-house", "charles-bridge", 
  "prague-castle", "wenceslas-square", "havelska-market",
  "le-petit-marche", "chez-janou", "hotel-le-marais", "hotel-rivoli", "eiffel-tower", 
  "louvre-museum", "le-marais", "marche-d-aligre",
  "mustafa-s-gemuse-kebap", "zur-letzten-instanz", "hotel-hackescher-markt", "michelberger-hotel", 
  "brandenburg-gate", "museum-island", "kurfurstendamm", "flohmarkt-mauerpark",
  "o-kostas", "karamanlidika", "athenswas-hotel", "plaka-hotel", "acropolis", 
  "acropolis-museum", "ermou-street", "monastiraki",
  "jewel-of-nizam-restaurant", "pista-house", "itc-kohenur", "novotel", "golconda-fort", 
  "thrill-city", "inorbit-mall", "sarath-city",
  "trattoria-da-enzo", "pizzeria-ai-marmi", "hotel-trastevere", "impero-hotel-rome", 
  "colosseum", "vatican-museums", "via-del-corso", "campo-de-fiori",
  "ichiran-shibuya", "sushi-no-midori", "shinjuku-granbell", "asakusa-view-hotel", 
  "senso-ji-temple", "tokyo-skytree", "shibuya", "ginza",
  "contramar", "el-huequito", "hotel-carlota", "hostel-mundo-joven", "teotihuacan", 
  "zocalo", "mercado-de-la-ciudadela",
  "cafe-clock", "nomad", "riad-yasmine", "riad-be-marrakech", "bahia-palace", 
  "jemaa-el-fnaa",
  "cafe-de-klos", "foodhallen", "the-hoxton-herengracht", "hotel-jordaan", "rijksmuseum", 
  "anne-frank-house", "de-negen-straatjes", "albert-cuyp-market",
  "cervejaria-ramiro", "time-out-market", "lisbon-story-guesthouse", "hotel-alfama", 
  "belem-tower", "jeronimos-monastery", "rua-augusta", "lx-factory",
  "thip-samai", "jay-fai", "riva-surya", "ibis-bangkok-riverside", "grand-palace", 
  "wat-arun", "chatuchak-market", "iconsiam",
  "ciya-sofras", "karakoy-gulluoglu", "sirkeci-mansion", "hotel-sultanahmet", "hagia-sophia", 
  "blue-mosque", "grand-bazaar", "spice-bazaar",
  "al-ustad-special-kebab", "ravi-restaurant", "rove-downtown", "citymax-bur-dubai", 
  "burj-khalifa", "dubai-fountain", "the-dubai-mall", "gold-souk",
  "poppies-fish-chips", "dishoom", "the-hoxton-shoreditch", "premier-inn-county-hall", 
  "tower-of-london", "british-museum", "covent-garden", "borough-market",
  "katz-s-delicatessen", "joe-s-pizza", "the-bowery-house", "pod-times-square", 
  "statue-of-liberty", "central-park", "fifth-avenue", "chelsea-market"
]);

const EXISTING_GUIDES = new Set([
  "olivia-brown", "mia-wilson", "ava-taylor", "chloe-lee", "jack-brown", "noah-wilson", 
  "liam-taylor", "lucas-lee", "riley-brown", "jordan-wilson", "charlie-taylor", "alex-lee",
  "tereza-novakova", "katerina-svobodova", "lucie-cerny", "eliska-dvorak", "jakub-novakova", 
  "petr-svobodova", "tomas-cerny", "martin-dvorak", "mira-novakova", "sasa-svobodova", 
  "nikola-cerny", "rene-dvorak", "amelia-clarke", "grace-evans", "emily-wright", 
  "olivia-hughes", "oliver-clarke", "harry-evans", "george-wright", "jack-hughes", 
  "charlie-clarke", "frankie-evans", "alex-wright", "sam-hughes", "ava-johnson", 
  "sophia-davis", "emma-smith", "isabella-garcia", "liam-johnson", "ethan-davis", 
  "noah-smith", "mason-garcia", "sam-johnson", "alex-davis", "jordan-smith", "taylor-garcia"
]);

function makeGuidesForCity(cityName, key) {
  const femaleNames = ["Olivia", "Sophia", "Emma", "Isabella", "Mia", "Aria"];
  const maleNames = ["Liam", "Noah", "Oliver", "Lucas", "Mason", "Ethan"];
  const otherNames = ["Sam", "Alex", "Jordan", "Taylor", "Charlie", "Casey"];
  const lastNames = ["Brown", "Smith", "Davis", "Garcia", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin"];
  
  const tourTypes = [
    "food and market walks",
    "art and history tours",
    "off the beaten path neighbourhood strolls",
    "architecture tours",
    "music and nightlife tours",
    "photo walk tours",
    "street-food crawls",
    "sunrise and sunset walks"
  ];
  
  const guides = {};
  let index = 0;
  
  const genders = [
    { gender: "Female", firsts: femaleNames },
    { gender: "Male", firsts: maleNames },
    { gender: "Others", firsts: otherNames }
  ];
  
  genders.forEach(({ gender, firsts }) => {
    for (let i = 0; i < 4; i++) {
      const first = firsts[i];
      const last = lastNames[(index + i) % lastNames.length];
      const name = `${first} ${last}`;
      const id = `${key}_g${index}`;
      
      let picSlug = `${first.toLowerCase()}-${last.toLowerCase()}`;
      if (!EXISTING_GUIDES.has(picSlug)) {
        const pool = GUIDE_PIC_POOL[gender];
        picSlug = pool[(index + i) % pool.length];
      }
      
      const tour = tourTypes[index % tourTypes.length];
      const reviews = Math.floor(100 + Math.random() * 5000).toLocaleString();
      const rating = (4.0 + Math.random() * 1.0).toFixed(1);
      const pronoun = gender === "Female" ? "she" : gender === "Male" ? "he" : "they";
      const pronounCapital = pronoun.charAt(0).toUpperCase() + pronoun.slice(1);
      
      guides[id] = {
        id,
        name,
        category: "Guides",
        guide: true,
        city: cityName,
        pic: picSlug,
        gender,
        rating,
        reviews,
        kind: "Local guide",
        walk: `meets in ${cityName}`,
        open: "Available this week",
        note: `${first} is a ${cityName} local who loves showing visitors the version of the city ${pronoun} actually lives in. Warm, easy-going and full of stories, ${first} runs ${tour} that go well beyond the guidebook.`,
        detail: `Born and raised around ${cityName}, ${first} has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and ${pronoun} happily shapes the day around whatever you're curious about, whether that's local life, history, or just finding the perfect quiet spot for a coffee. ${pronounCapital} care goes into how you feel at the end of the day rather than ticking off a checklist, so you come away feeling like you saw the real ${cityName}, not just its postcards.`
      };
      index++;
    }
  });
  
  return guides;
}

function buildCity({
  key,
  name,
  currency,
  mealRange,
  stayRates,
  doCost,
  shopRange,
  cuisineStyle,
  places
}) {
  const cityName = name.split(",")[0].trim();
  const businesses = {};
  
  const categoryCount = { Eat: 0, Stay: 0, Do: 0, Shop: 0 };
  
  places.forEach((p) => {
    const cat = p.category;
    const idx = categoryCount[cat]++;
    const catChar = cat === "Eat" ? "e" : cat === "Stay" ? "s" : cat === "Do" ? "d" : "p";
    const id = p.id || `${key}_${catChar}${idx}`;
    
    let picSlug = p.pic || p.name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    let image = p.image;
    
    // Check if the generated pic exists, otherwise map to a matching category picture from the pool
    if (!image && !EXISTING_PICS.has(picSlug)) {
      let hash = 0;
      for (let i = 0; i < picSlug.length; i++) {
        hash = (hash * 31 + picSlug.charCodeAt(i)) & 0xffff;
      }
      const lockVal = (hash % 1000) + 1;
      const tagCity = cityName.toLowerCase().replace(/[^a-z0-9]/g, "");
      const tagCat = cat === "Eat" ? "food" : cat === "Stay" ? "hotel" : cat === "Do" ? "landmark" : "shop";
      image = `https://loremflickr.com/600/400/${tagCity},${tagCat}?lock=${lockVal}`;
      
      const pool = IMAGE_POOLS[cat];
      picSlug = pool[hash % pool.length];
    }
    
    const angle = (idx * 2 * Math.PI) / 8;
    const radius = 0.003 + idx * 0.002;
    const offset = p.offset || { lat: radius * Math.cos(angle), lng: radius * Math.sin(angle) };
    
    let note = "";
    let detail = "";
    
    if (cat === "Eat") {
      note = idx % 2 === 0
        ? `${p.name} is one of ${cityName}'s most-loved places to eat, a ${p.kind.toLowerCase()} where the cooking tastes like someone genuinely cares. Locals keep coming back for the warm welcome and plates that feel properly homemade.`
        : `Ask anyone in ${cityName} where to eat well without fuss and ${p.name} comes up fast. It's a ${p.kind.toLowerCase()} that keeps things simple and generous, the kind of spot you happily return to twice in one trip.`;
      detail = `${p.name} has quietly become a small institution in ${cityName}. Known as a ${p.kind.toLowerCase()} (${p.desc}), the kitchen leans into ${cuisineStyle} cooking, and you can taste that real care goes into every plate. It's the sort of place where the staff remember a face, portions are generous and nothing feels rushed. Come hungry, take your time, and let them point you toward whatever is best that day.`;
    } else if (cat === "Stay") {
      note = idx % 2 === 0
        ? `${p.name} is the kind of ${p.kind.toLowerCase()} you're a little sad to check out of. Rooms are calm and comfortable, the welcome is warm, and the best of ${cityName} is a short walk from the door.`
        : `Right in the thick of ${cityName}, ${p.name} makes an easy, unpretentious base. Think ${p.desc}, helpful staff and a good night's sleep after a long day of exploring.`;
      detail = `Staying at ${p.name} puts you right where you want to be in ${cityName}. It's a ${p.kind.toLowerCase()} (${p.desc}), with quiet, well-kept rooms and the kind of little touches that add up: good coffee, genuinely helpful staff and a comfortable bed at the end of a long day. The central setting means less time travelling and more time enjoying the city, which makes it an easy place to settle into for a few nights.`;
    } else if (cat === "Do") {
      note = `${p.name} is ${p.desc}. It's one of those ${cityName} sights that genuinely lives up to the hype, so give yourself time to take it in rather than rushing through.`;
      detail = `${p.name} is ${p.desc}, and easily one of ${cityName}'s essential experiences. Beyond the facts, it's simply a place that stays with you, the kind of sight you'll be describing to friends long after you're home. Go early in the day if you can to beat the crowds, and don't hurry; the small details reward a slow, curious look.`;
    } else if (cat === "Shop") {
      note = idx % 2 === 0
        ? `${p.name} is where ${cityName} actually shops, ${p.desc}. It's a lovely place to slow down, browse and pick up something you simply won't find back home.`
        : `For a real feel of ${cityName}, ${p.name} is hard to beat: ${p.desc}. Bring a little time and a little cash and let yourself wander.`;
      detail = `${p.name} captures the everyday character of ${cityName} (${p.desc}). Wander without a fixed plan and you'll stumble on small makers, local favourites and the odd perfect souvenir. Bring a little cash, leave some room in your bag, and enjoy the hunt; the best finds are usually the ones you weren't looking for.`;
    }
    
    businesses[id] = {
      id,
      name: p.name,
      category: cat,
      city: cityName,
      pic: picSlug,
      image,
      rating: p.rating || (4.1 + Math.random() * 0.8).toFixed(1),
      reviews: p.reviews || Math.floor(500 + Math.random() * 5000).toLocaleString(),
      kind: p.kind,
      walk: p.walk || `in ${cityName}`,
      open: p.open || (cat === "Eat" ? "Open 12 pm to 11 pm" : cat === "Stay" ? "Open 24 hours" : "Open 9 am to 6 pm"),
      note: p.note || note,
      detail: p.detail || detail,
      offset,
      ...(p.ticket ? { ticket: true } : {}),
      ...(p.ticketUrl ? { ticketUrl: p.ticketUrl } : {})
    };
  });
  
  const guides = makeGuidesForCity(cityName, key);
  
  const eatPlaces = Object.values(businesses).filter((b) => b.category === "Eat");
  const stayPlaces = Object.values(businesses).filter((b) => b.category === "Stay");
  const doPlaces = Object.values(businesses).filter((b) => b.category === "Do");
  const shopPlaces = Object.values(businesses).filter((b) => b.category === "Shop");
  
  const eat1Name = eatPlaces[0]?.name || "local spots";
  const eat2Name = eatPlaces[1]?.name || "street vendors";
  const stay1Name = stayPlaces[0]?.name || "boutique stays";
  const stay2Name = stayPlaces[1]?.name || "guesthouses";
  const do1Name = doPlaces[0]?.name || "iconic landmarks";
  const do2Name = doPlaces[1]?.name || "hidden gems";
  const shop1Name = shopPlaces[0]?.name || "local markets";
  const shop2Name = shopPlaces[1]?.name || "artisan lanes";
  
  const trip = {
    eat: {
      html: `${cityName} is made for eating well, and a few days here means working your way through favourites like <strong>${eat1Name}</strong> and <strong>${eat2Name}</strong>. A typical meal runs around <strong>${currency}${mealRange[0]}</strong> to <strong>${currency}${mealRange[1]}</strong> per person, so you can taste your way across the city without blowing the budget.`
    },
    stay: {
      rates: stayRates,
      html: `For your <strong>{d} day</strong> trip, <strong>${stay1Name}</strong> offers a comfortable single room for roughly <strong>${currency}{single}</strong> in total, while <strong>${stay2Name}</strong> gives you a more spacious double for around <strong>${currency}{double}</strong>. Travelling as a group? A twin or two bed room works out to about <strong>${currency}{twobed}</strong> for the whole stay, leaving plenty over for experiences.`
    },
    do: {
      html: `Give yourself time for ${cityName}'s landmarks, above all <strong>${do1Name}</strong> and <strong>${do2Name}</strong>. Entry plus a guided walking tour comes to roughly <strong>${currency}${doCost}</strong> per person, and it's the easiest way to understand the city beyond its surface.`
    },
    shop: {
      html: `When you're ready to shop, start at <strong>${shop1Name}</strong> and lose an hour or two among the stalls of <strong>${shop2Name}</strong>. Setting aside about <strong>${currency}${shopRange[0]}</strong> to <strong>${currency}${shopRange[1]}</strong> is plenty to bring home a few handmade gifts and keepsakes that actually mean something.`
    }
  };
  
  return {
    name,
    businesses,
    guides,
    trip
  };
}

// --- FILE: ./src/data/destinations/spain.js ---
const arumeImg = "";
const operaImg = "";
const orienteImg = "";
const arcImg = "";
const batlloImg = "";
const sagradaImg = "";
const portalImg = "";
const pinzatImg = "";

const carlaImg = "";
const martaImg = "";
const sofiaImg = "";
const elenaImg = "";
const carlosImg = "";
const alexnImg = "";
const pauImg = "";
const jordimImg = "";
const samImg = "";
const taylorImg = "";
const jordanImg = "";
const caseyImg = "";

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

// Now process the expanded Barcelona city data
const barcelonaBase = {
  name: "Barcelona, Spain",
  businesses: { ...BCN_B },
  guides: { ...BCN_G },
  trip: BARCELONA_TRIP
};

// Add extra places using builder logic but inserting into Barcelona's custom object
bcnExtraPlaces.forEach((p, idx) => {
  const catChar = p.category === "Eat" ? "e" : p.category === "Stay" ? "s" : p.category === "Do" ? "d" : "p";
  const id = `barcelona_${catChar}${idx + 2}`;
  const picSlug = p.name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
  
  let hash = 0;
  for (let i = 0; i < picSlug.length; i++) {
    hash = (hash * 31 + picSlug.charCodeAt(i)) & 0xffff;
  }
  const lockVal = (hash % 1000) + 1;
  const tagCat = p.category === "Eat" ? "food" : p.category === "Stay" ? "hotel" : p.category === "Do" ? "landmark" : "shop";
  const image = `https://loremflickr.com/600/400/barcelona,${tagCat}?lock=${lockVal}`;
  
  const angle = (idx * 2 * Math.PI) / 8;
  const radius = 0.003 + idx * 0.002;
  const offset = { lat: radius * Math.cos(angle), lng: radius * Math.sin(angle) };
  
  barcelonaBase.businesses[id] = {
    id,
    name: p.name,
    category: p.category,
    city: "Barcelona",
    pic: picSlug,
    image,
    rating: p.rating,
    reviews: p.reviews,
    kind: p.kind,
    walk: `in Barcelona`,
    open: p.category === "Eat" ? "Open 12 pm to 11 pm" : p.category === "Stay" ? "Open 24 hours" : "Open 9 am to 6 pm",
    note: `${p.name} is a local favorite ${p.kind.toLowerCase()} serving Barcelona. ${p.desc}.`,
    detail: `${p.name} is a highly recommended spot in Barcelona. Known as a ${p.kind.toLowerCase()} (${p.desc}), it highlights the beautiful Catalan lifestyle. Locals and travelers visit it to relax, explore, and soak in the city's wonderful mediterranean vibes.`,
    offset,
    ...(p.ticket ? { ticket: true } : {})
  };
});

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

const SPAIN = {
  barcelona: barcelonaBase,
  madrid,
  seville
};

// --- FILE: ./src/data/destinations/australia.js ---

const sydney = buildCity({
  key: "sydney",
  name: "Sydney, Australia",
  currency: "A$",
  mealRange: [32, 54],
  stayRates: [180, 218, 283],
  doCost: 108,
  shopRange: [180, 630],
  cuisineStyle: "Modern Australian",
  places: [
    { id: "sydney_e0", category: "Eat", name: "The Boathouse", kind: "Cafe", desc: "breezy waterfront cafe for seafood platters and bircher", rating: "4.5", reviews: "3,400" },
    { id: "sydney_e1", category: "Eat", name: "Spice Alley", kind: "Hawker", desc: "open-air laneway of pan-Asian hawker stalls", rating: "4.3", reviews: "2,100" },
    { category: "Eat", name: "Quay Restaurant", kind: "Fine Dining", desc: "award-winning restaurant by Peter Gilmore offering spectacular harbor views and the famous Snow Egg dessert", rating: "4.7", reviews: "1,500" },
    { category: "Eat", name: "Bourke Street Bakery", kind: "Bakery", desc: "cozy neighborhood bakery famous for sourdough, pork and fennel sausage rolls, and ginger tarts", rating: "4.6", reviews: "2,800" },
    { category: "Eat", name: "Mamak", kind: "Malaysian", desc: "always-busy Chinatown joint serving up flaky roti canai, satay skewers, and spicy curries", rating: "4.4", reviews: "3,900" },
    
    { id: "sydney_s0", category: "Stay", name: "Harbour Rocks Hotel", kind: "Hotel", desc: "heritage rooms in The Rocks, minutes from Circular Quay", rating: "4.6", reviews: "1,900" },
    { id: "sydney_s1", category: "Stay", name: "Sydney Central Inn", kind: "Hotel", desc: "handy budget rooms near Central Station", rating: "4.1", reviews: "1,250" },
    { category: "Stay", name: "The Langham Sydney", kind: "Hotel", desc: "ultra-luxury 5-star hotel in Millers Point featuring elegant rooms, a day spa, and a starry indoor pool", rating: "4.8", reviews: "940" },
    { category: "Stay", name: "Wake Up! Sydney Central", kind: "Hostel", desc: "award-winning social hostel opposite Central Station with daily activities and an on-site bar", rating: "4.4", reviews: "2,800" },
    { category: "Stay", name: "Little National Hotel Sydney", kind: "Hotel", desc: "smart luxury hotel above Wynyard Station featuring compact rooms with super-king beds and a rooftop bar", rating: "4.6", reviews: "1,150" },
    
    { id: "sydney_d0", category: "Do", name: "Sydney Opera House", kind: "Landmark", desc: "Jorn Utzon's sail-roofed icon on Bennelong Point", rating: "4.8", reviews: "150,000", ticket: true, ticketUrl: "https://www.sydneyoperahouse.com/visit/tours" },
    { id: "sydney_d1", category: "Do", name: "Sydney Harbour Bridge", kind: "Landmark", desc: "The Coathanger, free to stroll across for harbour views", rating: "4.7", reviews: "95,000" },
    { category: "Do", name: "Bondi to Coogee Coastal Walk", kind: "Coastal Walk", desc: "stunning 6km cliffside path connecting Sydney's famous beaches with rock pools and ocean views", rating: "4.9", reviews: "24,000" },
    { category: "Do", name: "Royal Botanic Garden", kind: "Gardens", desc: "historic harbourside oasis wrapping around Farm Cove, offering views of the Opera House and bridge", rating: "4.8", reviews: "38,000" },
    { category: "Do", name: "Taronga Zoo", kind: "Zoo", desc: "harbourside wildlife park featuring native animals, a short scenic ferry ride from Circular Quay", rating: "4.6", reviews: "18,000", ticket: true },
    
    { id: "sydney_p0", category: "Shop", name: "Queen Victoria Building", kind: "Shopping Arcade", desc: "grand Victorian arcade of boutiques under stained glass", rating: "4.6", reviews: "12,000" },
    { id: "sydney_p1", category: "Shop", name: "Paddington Markets", kind: "Market", desc: "Saturday market for local designers, art and crafts", rating: "4.3", reviews: "1,400" },
    { category: "Shop", name: "Carriageworks Farmers Market", kind: "Food Market", desc: "Saturday morning fresh food market in a heritage railway building, featuring local NSW producers", rating: "4.6", reviews: "2,200" },
    { category: "Shop", name: "The Rocks Markets", kind: "Artisan Market", desc: "weekend market along cobblestone lanes selling handmade jewelry, original art, and street food", rating: "4.4", reviews: "4,500" },
    { category: "Shop", name: "Westfield Sydney", kind: "Mall", desc: "massive central shopping mall in Pitt Street Mall hosting global retail brands and a gourmet food court", rating: "4.5", reviews: "8,900" },
  ]
});

const melbourne = buildCity({
  key: "melbourne",
  name: "Melbourne, Australia",
  currency: "A$",
  mealRange: [30, 50],
  stayRates: [160, 200, 260],
  doCost: 95,
  shopRange: [150, 600],
  cuisineStyle: "Modern Australian & Cafe",
  places: [
    { category: "Eat", name: "Chin Chin", kind: "Modern Asian", desc: "buzzy, high-energy laneway hotspot serving bold, spicy Southeast Asian sharing plates", rating: "4.6", reviews: "9,800" },
    { category: "Eat", name: "Lune Croissanterie", kind: "Bakery", desc: "aerospace-designed laboratory baking croissants called the best in the world by the NYT", rating: "4.7", reviews: "4,500" },
    { category: "Eat", name: "Pellegrini's Espresso Bar", kind: "Cafe", desc: "historic 1954 Italian coffee house serving classic pasta bowls and Melbourne's first espresso", rating: "4.5", reviews: "3,200" },
    { category: "Eat", name: "Cumulus Inc.", kind: "Restaurant", desc: "chic all-day eating house in Flinders Lane serving seasonal plates and a famous roast lamb shoulder", rating: "4.6", reviews: "2,400" },
    { category: "Eat", name: "Queen Victoria Market Food Hall", kind: "Food Hall", desc: "lively food market hub with specialty cheese shops, deli meats, hot jam donuts, and street food stalls", rating: "4.4", reviews: "12,000" },
    
    { category: "Stay", name: "Adelphi Hotel", kind: "Hotel", desc: "whimsical dessert-themed boutique design hotel in Flinders Lane with a famous glass-bottom rooftop pool", rating: "4.5", reviews: "890" },
    { category: "Stay", name: "Space Hotel", kind: "Hostel", desc: "modern hybrid hostel in the city center featuring a rooftop hot tub, gym, cinema, and private/shared rooms", rating: "4.2", reviews: "1,850" },
    { category: "Stay", name: "Grand Hyatt Melbourne", kind: "Hotel", desc: "prestigious 5-star luxury hotel on Collins Street featuring upscale rooms, a fitness center, and dining", rating: "4.7", reviews: "2,900" },
    { category: "Stay", name: "The Prince Hotel St Kilda", kind: "Hotel", desc: "historic boutique hotel in St Kilda with cool minimalist interiors, steps from the beach and restaurants", rating: "4.4", reviews: "920" },
    { category: "Stay", name: "QT Melbourne", kind: "Hotel", desc: "quirky, high-design luxury hotel with industrial-chic rooms, local art installations, and a popular rooftop bar", rating: "4.6", reviews: "1,400" },
    
    { category: "Do", name: "Federation Square & Laneways", kind: "Cultural Area", desc: "arts hub bordering Melbourne's famous labyrinth of graffiti-covered laneways like Hosier Lane", rating: "4.6", reviews: "22,000" },
    { category: "Do", name: "National Gallery of Victoria", kind: "Museum", desc: "Australia's oldest and most visited art museum, hosting an impressive collection of international and local art", rating: "4.8", reviews: "28,000" },
    { category: "Do", name: "Royal Botanic Gardens Melbourne", kind: "Gardens", desc: "lush 94-acre botanic park bordering the Yarra River, home to thousands of native and exotic plant species", rating: "4.8", reviews: "19,000" },
    { category: "Do", name: "St Kilda Beach & Pier", kind: "Beach", desc: "coastal suburb beach featuring a scenic pier where a wild colony of little penguins nested", rating: "4.4", reviews: "15,000" },
    { category: "Do", name: "Yarra Valley Wine Tour", kind: "Guided Tour", desc: "day trip from Melbourne visiting world-class cool-climate vineyards, gin distilleries, and chocolate shops", rating: "4.7", reviews: "4,200", ticket: true },
    
    { category: "Shop", name: "Queen Victoria Market", kind: "Historic Market", desc: "historic open-air market covering two city blocks, selling fresh food, clothing, crafts, and souvenirs", rating: "4.5", reviews: "45,000" },
    { category: "Shop", name: "Fitzroy Boutiques", kind: "Artisan Lanes", desc: "bohemian shops and vintage boutiques along Gertrude and Brunswick streets in creative Fitzroy", rating: "4.5", reviews: "3,100" },
    { category: "Shop", name: "Melbourne Central", kind: "Mall", desc: "modern retail shopping center built around a historic coopering shot tower under a massive glass cone dome", rating: "4.5", reviews: "18,000" },
    { category: "Shop", name: "The Block Arcade", kind: "Historic Arcade", desc: "beautifully restored 1892 heritage shopping arcade with mosaic tiled floors and glass ceilings", rating: "4.6", reviews: "7,800" },
    { category: "Shop", name: "Rose St. Artists' Market", kind: "Artisan Market", desc: "weekend market in Fitzroy showcasing handmade jewelry, prints, pottery, and fashion from local makers", rating: "4.5", reviews: "650" },
  ]
});

const brisbane = buildCity({
  key: "brisbane",
  name: "Brisbane, Australia",
  currency: "A$",
  mealRange: [28, 48],
  stayRates: [150, 185, 240],
  doCost: 88,
  shopRange: [120, 450],
  cuisineStyle: "Queensland Contemporary",
  places: [
    { category: "Eat", name: "Julius Pizzeria", kind: "Pizzeria", desc: "South Brisbane hotspot famous for wood-fired pizzas, delicious pasta, and a bustling, energetic dining room", rating: "4.6", reviews: "2,300" },
    { category: "Eat", name: "Gauge", kind: "Restaurant", desc: "award-winning restaurant in South Brisbane serving creative, boundary-pushing plates featuring local produce", rating: "4.5", reviews: "620" },
    { category: "Eat", name: "Agnes", kind: "Restaurant", desc: "acclaimed restaurant cooking entirely over wood fire, set in a moody converted brick warehouse in Fortitude Valley", rating: "4.7", reviews: "950" },
    { category: "Eat", name: "Gerard's Bistro", kind: "Middle Eastern", desc: "award-winning restaurant in Fortitude Valley serving modern Middle Eastern sharing plates in a concrete-chic setting", rating: "4.5", reviews: "870" },
    { category: "Eat", name: "Eat Street Northshore", kind: "Food Market", desc: "massive container-food park on the Brisbane River offering live music and food stalls from around the world", rating: "4.6", reviews: "18,000" },
    
    { category: "Stay", name: "The Calile Hotel", kind: "Hotel", desc: "world-famous 5-star design resort in Fortitude Valley with pastel concrete finishes, cabanas, and a pool", rating: "4.8", reviews: "1,500" },
    { category: "Stay", name: "Brisbane City YHA", kind: "Hostel", desc: "award-winning backpacker hostel with a rooftop swimming pool, bar, and views over the Brisbane River", rating: "4.3", reviews: "1,600" },
    { category: "Stay", name: "W Brisbane", kind: "Hotel", desc: "playful 5-star luxury hotel in the CBD featuring eclectic modern design, an indoor pool, and river views", rating: "4.6", reviews: "1,100" },
    { category: "Stay", name: "Emporium Hotel South Bank", kind: "Hotel", desc: "luxurious boutique hotel with custom-designed suites, rooftop infinity pool, and views over South Bank Parklands", rating: "4.7", reviews: "1,200" },
    { category: "Stay", name: "Crystalbrook Vincent", kind: "Hotel", desc: "eco-friendly hotel carved under the Story Bridge, celebrating Australian artist Vincent Fantauzzo's portraits", rating: "4.6", reviews: "750" },
    
    { category: "Do", name: "South Bank Parklands", kind: "Park", desc: "riverside parklands featuring walking paths, tropical gardens, Ferris wheel, and Australia's only inner-city artificial beach", rating: "4.7", reviews: "24,000" },
    { category: "Do", name: "Lone Pine Koala Sanctuary", kind: "Sanctuary", desc: "world's first and largest koala sanctuary where you can feed kangaroos, see platypus, and cuddle koalas", rating: "4.7", reviews: "15,000", ticket: true },
    { category: "Do", name: "Mount Coot-tha Lookout", kind: "Lookout", desc: "hilltop viewpoint offering panoramic views over Brisbane's skyline and Moreton Bay, with walking trails", rating: "4.6", reviews: "18,000" },
    { category: "Do", name: "Brisbane Riverwalk", kind: "Pathway", desc: "scenic floating pathway extending over the Brisbane River from New Farm to the city center, great for cycling", rating: "4.7", reviews: "4,500" },
    { category: "Do", name: "Gallery of Modern Art (GOMA)", kind: "Museum", desc: "Australia's largest gallery of modern and contemporary art, located in the architectural Cultural Centre precinct", rating: "4.8", reviews: "9,800" },
    
    { category: "Shop", name: "Collective Markets", kind: "Craft Market", desc: "weekend market in South Bank selling unique crafts, local fashion, handmade soaps, and gifts", rating: "4.3", reviews: "1,200" },
    { category: "Shop", name: "Queen Street Mall", kind: "Shopping Street", desc: "pedestrian shopping precinct in the heart of Brisbane CBD, home to over 700 retail stores and arcades", rating: "4.4", reviews: "22,000" },
    { category: "Shop", name: "James Street", kind: "Shopping District", desc: "leafy shopping precinct in Fortitude Valley packed with high-end Australian fashion designers and boutiques", rating: "4.6", reviews: "2,400" },
    { category: "Shop", name: "West End Markets", kind: "Farmers Market", desc: "vibrant Saturday market in Davies Park under giant fig trees selling fresh farm produce, hot food, and fashion", rating: "4.5", reviews: "3,200" },
    { category: "Shop", name: "Boundary Street", kind: "Artisan Lane", desc: "quirky street in West End home to vintage shops, record stores, indie bookstores, and organic food grocers", rating: "4.4", reviews: "1,500" },
  ]
});

const AUSTRALIA = {
  sydney,
  melbourne,
  brisbane
};

// --- FILE: ./src/data/destinations/france.js ---

const paris = buildCity({
  key: "paris",
  name: "Paris, France",
  currency: "€",
  mealRange: [30, 50],
  stayRates: [160, 210, 275],
  doCost: 96,
  shopRange: [150, 500],
  cuisineStyle: "French",
  places: [
    { id: "paris_e0", category: "Eat", name: "Le Petit Marché", kind: "Bistro", desc: "cosy Marais bistro for French classics and natural wine", rating: "4.6", reviews: "1,204" },
    { id: "paris_e1", category: "Eat", name: "Chez Janou", kind: "Provençal", desc: "Provençal corner spot famous for ratatouille and chocolate mousse", rating: "4.4", reviews: "3,120" },
    { category: "Eat", name: "Frenchie", kind: "Modern French", desc: "highly acclaimed bistro on Rue du Nil serving seasonal, modern French dishes in a rustic setting", rating: "4.7", reviews: "1,450" },
    { category: "Eat", name: "Du Pain et des Idées", kind: "Bakery", desc: "famed historic bakery serving the legendary L'Escargot Chocolat-Pistache pastry and wood-fired bread", rating: "4.6", reviews: "2,900" },
    { category: "Eat", name: "Berthillon", kind: "Ice Cream", desc: "historic family-owned salon on Île Saint-Louis, world-famous for its rich, artisanal sorbets and ice creams", rating: "4.6", reviews: "4,500" },
    
    { id: "paris_s0", category: "Stay", name: "Hôtel Le Marais", kind: "Hotel", desc: "boutique rooms by Place des Vosges", rating: "4.7", reviews: "2,010" },
    { id: "paris_s1", category: "Stay", name: "Hôtel Rivoli", kind: "Hotel", desc: "simple, central rooms near the Louvre", rating: "4.2", reviews: "1,540" },
    { category: "Stay", name: "The Hoxton, Paris", kind: "Hotel", desc: "stylish boutique hotel set in an 18th-century grand residence in the 2nd Arrondissement", rating: "4.7", reviews: "1,850" },
    { category: "Stay", name: "Les Piaules Nation", kind: "Hostel", desc: "modern design hostel featuring a rooftop terrace with views over Paris and custom-built wood cabin beds", rating: "4.4", reviews: "920" },
    { category: "Stay", name: "Generator Paris", kind: "Hostel", desc: "trendy hostel in the 10th Arrondissement featuring a rooftop bar overlooking Sacré-Cœur", rating: "4.3", reviews: "3,800" },
    
    { id: "paris_d0", category: "Do", name: "Eiffel Tower", kind: "Landmark", desc: "Gustave Eiffel's 330-metre iron icon, with viewing decks on three levels", rating: "4.8", reviews: "240,000", ticket: true, ticketUrl: "https://www.toureiffel.paris/en/rates-times" },
    { id: "paris_d1", category: "Do", name: "Louvre Museum", kind: "Museum", desc: "the world's most-visited museum, home to the Mona Lisa and Venus de Milo", rating: "4.7", reviews: "210,000", ticket: true, ticketUrl: "https://www.ticketlouvre.fr/" },
    { category: "Do", name: "Palace of Versailles", kind: "Palace", desc: "extravagant former royal residence of Louis XIV, featuring the Hall of Mirrors and vast gardens", rating: "4.8", reviews: "98,000", ticket: true },
    { category: "Do", name: "Sainte-Chapelle", kind: "Church", desc: "13th-century Gothic chapel famous for its breath-taking collection of 15-meter stained glass windows", rating: "4.8", reviews: "22,000", ticket: true },
    { category: "Do", name: "Musée d'Orsay", kind: "Museum", desc: "grand Beaux-Arts railway station housing the world's largest collection of impressionist masterpieces", rating: "4.8", reviews: "45,000", ticket: true },
    
    { id: "paris_p0", category: "Shop", name: "Le Marais", kind: "Shopping District", desc: "winding old streets of indie boutiques, vintage shops and concept stores", rating: "4.5", reviews: "6,200" },
    { id: "paris_p1", category: "Shop", name: "Marché d'Aligre", kind: "Food Market", desc: "lively neighborhood market selling cheese, produce and flea-market curios", rating: "4.4", reviews: "1,800" },
    { category: "Shop", name: "Shakespeare and Company", kind: "Bookstore", desc: "historic English-language bookstore on the Seine, a famous gathering place for writers since 1951", rating: "4.7", reviews: "15,000" },
    { category: "Shop", name: "Galeries Lafayette", kind: "Department Store", desc: "grand department store on Boulevard Haussmann under a historic stained-glass dome, with a free rooftop view", rating: "4.6", reviews: "48,000" },
    { category: "Shop", name: "Rue de Rivoli", kind: "Shopping Street", desc: "busy commercial street running from Place de la Concorde past the Louvre, home to global fashion labels", rating: "4.3", reviews: "8,900" },
  ]
});

const nice = buildCity({
  key: "nice",
  name: "Nice, France",
  currency: "€",
  mealRange: [25, 45],
  stayRates: [110, 150, 200],
  doCost: 80,
  shopRange: [100, 350],
  cuisineStyle: "Niçoise & French Mediterranean",
  places: [
    { category: "Eat", name: "Chez Pipo", kind: "Local Street Food", desc: "famous local institution serving traditional socca (chickpea crepe) cooked in wood-fired ovens since 1923", rating: "4.5", reviews: "3,100" },
    { category: "Eat", name: "Le Chantecler", kind: "Fine Dining", desc: "prestigious Michelin-starred restaurant inside Hotel Negresco serving refined gastronomy on the Promenade", rating: "4.6", reviews: "410" },
    { category: "Eat", name: "Restaurant Jan", kind: "Michelin Star", desc: "award-winning intimate restaurant by chef Jan Hendrik serving modern South African-French fusion dishes", rating: "4.7", reviews: "350" },
    { category: "Eat", name: "Café de Turin", kind: "Seafood", desc: "historic brasserie on Place Garibaldi, famous for massive oyster plates, sea urchins, and shellfish since 1908", rating: "4.3", reviews: "3,900" },
    { category: "Eat", name: "Fenocchio", kind: "Gelateria", desc: "legendary ice cream parlor in Vieux Nice offering over 90 artisanal flavors, including lavender and olive", rating: "4.6", reviews: "5,400" },
    
    { category: "Stay", name: "Le Negresco", kind: "Hotel", desc: "iconic Belle Époque luxury hotel on the Promenade des Anglais, home to a world-class private art collection", rating: "4.7", reviews: "2,400" },
    { category: "Stay", name: "Villa Hostels Nice", kind: "Hostel", desc: "highly social boutique hostel in the city center featuring a cool bar, free walking tours, and dynamic events", rating: "4.3", reviews: "1,200" },
    { category: "Stay", name: "Hotel Windsor Nice", kind: "Hotel", desc: "unique art-themed boutique hotel where rooms are designed by contemporary artists, featuring a lush hidden garden", rating: "4.5", reviews: "650" },
    { category: "Stay", name: "Westminster Hotel & Spa", kind: "Hotel", desc: "classic neo-baroque seafront hotel with high ceilings, private spa facilities, and a grand terrace", rating: "4.4", reviews: "1,450" },
    { category: "Stay", name: "The Deck Hotel Nice", kind: "Hotel", desc: "modern design hotel with beach-inspired blue and white decor, located steps from Jean Médecin and the sea", rating: "4.5", reviews: "890" },
    
    { category: "Do", name: "Promenade des Anglais", kind: "Pathway", desc: "world-famous 7km palm-fringed paved coastal walk wrapping around the blue waters of Baie des Anges", rating: "4.8", reviews: "34,000" },
    { category: "Do", name: "Castle Hill (Colline du Château)", kind: "Park", desc: "hilltop park offering breath-taking panoramic views of the city, old port, waterfall, and sea", rating: "4.7", reviews: "19,000" },
    { category: "Do", name: "Marc Chagall National Museum", kind: "Museum", desc: "beautiful national museum dedicated to Marc Chagall's large biblical message stained-glass and canvas works", rating: "4.6", reviews: "4,100", ticket: true },
    { category: "Do", name: "Vieux Nice (Old Town)", kind: "Cultural Area", desc: "historic neighborhood of narrow lanes, pastel houses, baroque churches, and bustling morning markets", rating: "4.7", reviews: "22,000" },
    { category: "Do", name: "Villefranche-sur-Mer Day Trip", kind: "Beach", desc: "beautiful adjacent fishing village with a horseshoe beach, colorful houses, and crystal-clear water", rating: "4.8", reviews: "8,900" },
    
    { category: "Shop", name: "Cours Saleya Flower Market", kind: "Market", desc: "vibrant morning market in Old Nice selling fresh cut flowers, local soaps, olives, and regional crafts", rating: "4.6", reviews: "12,000" },
    { category: "Shop", name: "Avenue Jean Médecin", kind: "Shopping Street", desc: "Nice's main commercial avenue lined with major fashion retail stores, department halls, and tram lines", rating: "4.4", reviews: "8,200" },
    { category: "Shop", name: "Rue Catherine Ségurane", kind: "Antiques", desc: "historical street near the port renowned as the antiques district, filled with vintage dealers and galleries", rating: "4.5", reviews: "340" },
    { category: "Shop", name: "Confiserie Florian", kind: "Artisan Sweets", desc: "celebrated workshop turning local fruits and flowers into glazed clementines, flower jams, and chocolates", rating: "4.6", reviews: "650" },
    { category: "Shop", name: "CAP3000", kind: "Mall", desc: "prestigious seafront shopping mall near the airport, hosting over 300 international brands and restaurants", rating: "4.5", reviews: "15,000" },
  ]
});

const lyon = buildCity({
  key: "lyon",
  name: "Lyon, France",
  currency: "€",
  mealRange: [22, 40],
  stayRates: [100, 140, 190],
  doCost: 75,
  shopRange: [90, 300],
  cuisineStyle: "Lyonnaise Bouchon",
  places: [
    { category: "Eat", name: "Café des Fédérations", kind: "Bouchon", desc: "authentic family Bouchon Lyonnais serving classic sausage, quenelles, and local Beaujolais wine", rating: "4.5", reviews: "1,500" },
    { category: "Eat", name: "Les Halles de Lyon Paul Bocuse", kind: "Food Hall", desc: "famed indoor food market featuring top French charcuterie, oysters, artisanal cheeses, and macarons", rating: "4.7", reviews: "9,800" },
    { category: "Eat", name: "Le Suprême", kind: "Restaurant", desc: "modern bistro offering a gourmet menu focused on Lyon's famous Bresse chicken dishes and local poultry", rating: "4.6", reviews: "340" },
    { category: "Eat", name: "Bouchon Tupin", kind: "Bouchon", desc: "warm, modern bouchon serving authentic local cuisine made with fresh seasonal ingredients from market vendors", rating: "4.6", reviews: "750" },
    { category: "Eat", name: "Chez Mounier", kind: "Bouchon", desc: "cozy, traditional budget-friendly bouchon in Presqu'île offering generous plates of local Lyonnais comfort food", rating: "4.4", reviews: "1,100" },
    
    { category: "Stay", name: "Villa Florentine", kind: "Hotel", desc: "luxurious 5-star hotel in a restored Renaissance convent overlooking the rooftops of Vieux Lyon", rating: "4.7", reviews: "920" },
    { category: "Stay", name: "Slo Living Hostel", kind: "Hostel", desc: "boutique design hostel featuring sleek minimalist dorms, cozy private rooms, and a welcoming backyard patio", rating: "4.5", reviews: "780" },
    { category: "Stay", name: "Cour des Loges", kind: "Hotel", desc: "magnificent hotel spanning four historic Renaissance buildings with an indoor courtyard and spa", rating: "4.6", reviews: "1,150" },
    { category: "Stay", name: "Hotel Carlton Lyon", kind: "Hotel", desc: "heritage boutique stay on the Presqu'île peninsula combining classic French charm with modern rooms", rating: "4.5", reviews: "1,200" },
    { category: "Stay", name: "Globe & Cecil Hotel", kind: "Hotel", desc: "charming, historic boutique hotel steps from Place Bellecour, showcasing unique themed rooms", rating: "4.4", reviews: "640" },
    
    { category: "Do", name: "Basilique Notre-Dame de Fourvière", kind: "Landmark", desc: "hilltop 19th-century basilica with white towers, gold mosaics, and panoramic views of the city", rating: "4.8", reviews: "26,000" },
    { category: "Do", name: "Traboules of Vieux Lyon", kind: "Passages", desc: "historic hidden covered pedestrian pathways cutting through Renaissance courtyards and silk houses", rating: "4.7", reviews: "14,000" },
    { category: "Do", name: "Parc de la Tête d'Or", kind: "Park", desc: "sprawling 290-acre urban park featuring a boating lake, rose gardens, glasshouses, and a free zoo", rating: "4.8", reviews: "32,000" },
    { category: "Do", name: "Musée des Confluences", kind: "Museum", desc: "striking futuristic science and anthropology museum built where the Rhône and Saône rivers merge", rating: "4.6", reviews: "12,000", ticket: true },
    { category: "Do", name: "Lyon Cathedral", kind: "Cathedral", desc: "gothic cathedral in Vieux Lyon housing a 14th-century astronomical clock that rings at midday", rating: "4.5", reviews: "8,900" },
    
    { category: "Shop", name: "Rue de la République", kind: "Shopping Street", desc: "major pedestrian shopping street lined with beautiful 19th-century architecture and global retail", rating: "4.4", reviews: "12,500" },
    { category: "Shop", name: "La Croix-Rousse Workshops", kind: "Artisan Shops", desc: "hilly silk-weaving district filled with local artists, printmakers, independent designers, and booksellers", rating: "4.6", reviews: "2,400" },
    { category: "Shop", name: "La Part-Dieu", kind: "Mall", desc: "one of Europe's largest downtown shopping malls, hosting hundreds of shops, movie screens, and food courts", rating: "4.2", reviews: "19,000" },
    { category: "Shop", name: "Presqu'île Boutiques", kind: "Shopping District", desc: "chic streets between Bellecour and Cordeliers lined with luxury brands, fashion boutiques, and local makers", rating: "4.5", reviews: "4,100" },
    { category: "Shop", name: "Marché Saint-Antoine", kind: "Food Market", desc: "scenic riverside food market selling farm-fresh cheese, local rotisserie chicken, and regional wines", rating: "4.6", reviews: "1,500" },
  ]
});

const FRANCE = {
  paris,
  nice,
  lyon
};

// --- FILE: ./src/data/destinations/italy.js ---

const rome = buildCity({
  key: "rome",
  name: "Rome, Italy",
  currency: "€",
  mealRange: [25, 42],
  stayRates: [140, 169, 220],
  doCost: 84,
  shopRange: [140, 490],
  cuisineStyle: "Roman",
  places: [
    { id: "rome_e0", category: "Eat", name: "Trattoria Da Enzo", kind: "Trattoria", desc: "tiny Trastevere trattoria famous for carbonara and fried artichokes", rating: "4.7", reviews: "5,400" },
    { id: "rome_e1", category: "Eat", name: "Pizzeria ai Marmi", kind: "Pizzeria", desc: "buzzy late-night spot for thin, blistered Roman pizza", rating: "4.3", reviews: "2,210" },
    { category: "Eat", name: "Bonci Pizzarium", kind: "Pizza Slice", desc: "legendary gourmet pizza al taglio by chef Gabriele Bonci, featuring slow-fermented dough and wild toppings", rating: "4.5", reviews: "3,800" },
    { category: "Eat", name: "Frigidarium", kind: "Gelateria", desc: "celebrated gelateria near Piazza Navona dipping their artisanal gelato scoops in dark or white chocolate shells", rating: "4.6", reviews: "4,900" },
    { category: "Eat", name: "Armando al Pantheon", kind: "Restaurant", desc: "historic family-run eatery serving impeccable Roman classics like Cacio e Pepe right beside the Pantheon", rating: "4.6", reviews: "2,400" },
    
    { id: "rome_s0", category: "Stay", name: "Hotel Trastevere", kind: "Hotel", desc: "friendly, well-priced rooms in cobbled Trastevere", rating: "4.5", reviews: "1,860" },
    { id: "rome_s1", category: "Stay", name: "Impero Hotel Rome", kind: "Hotel", desc: "smart, modern rooms within easy walking distance of the main sights", rating: "4.4", reviews: "2,430" },
    { category: "Stay", name: "Generator Rome", kind: "Hostel", desc: "stylish hostel set in a grand 19th-century building in Esquilino, with vintage decor and a cool bar", rating: "4.3", reviews: "2,100" },
    { category: "Stay", name: "Elizabeth Unique Hotel", kind: "Hotel", desc: "luxurious 5-star art hotel displaying contemporary works, located steps from the Spanish Steps", rating: "4.8", reviews: "620" },
    { category: "Stay", name: "The Beehive", kind: "Hostel", desc: "cozy, eco-conscious boutique hostel and guest house featuring a quiet organic garden near Termini", rating: "4.6", reviews: "540" },
    
    { id: "rome_d0", category: "Do", name: "Colosseum", kind: "Landmark", desc: "the vast first-century amphitheatre that once held 50,000 spectators", rating: "4.8", reviews: "320,000", ticket: true, ticketUrl: "https://www.coopculture.it/en/colosseo-e-shop.cfm" },
    { id: "rome_d1", category: "Do", name: "Vatican Museums", kind: "Museum", desc: "miles of galleries leading to Michelangelo's Sistine Chapel ceiling", rating: "4.7", reviews: "190,000", ticket: true, ticketUrl: "https://tickets.museivaticani.va/" },
    { category: "Do", name: "Trevi Fountain", kind: "Landmark", desc: "Nicola Salvi's magnificent baroque fountain; legend says throwing a coin guarantees your return to Rome", rating: "4.8", reviews: "115,000" },
    { category: "Do", name: "The Pantheon", kind: "Landmark", desc: "2,000-year-old temple with a spectacular concrete dome and oculus, the best-preserved ancient Roman monument", rating: "4.8", reviews: "89,000" },
    { category: "Do", name: "Roman Forum & Palatine Hill", kind: "Ancient Ruins", desc: "the ancient heart of the Roman Empire, filled with ruined temples, basilicas, and triumphal arches", rating: "4.7", reviews: "98,000", ticket: true },
    
    { id: "rome_p0", category: "Shop", name: "Via del Corso", kind: "Shopping Street", desc: "Rome's long central shopping street, from high street to boutiques", rating: "4.4", reviews: "7,100" },
    { id: "rome_p1", category: "Shop", name: "Campo de' Fiori", kind: "Market", desc: "a morning market square for produce, flowers and spices", rating: "4.3", reviews: "1,500" },
    { category: "Shop", name: "Via Condotti", kind: "Shopping Street", desc: "Rome's legendary high-fashion street home to flagship boutiques like Gucci, Prada, and Bvlgari", rating: "4.6", reviews: "4,500" },
    { category: "Shop", name: "Mercato di Testaccio", kind: "Food Market", desc: "modern covered market housing stalls selling fresh cheese, local street foods, sandwiches, and craft beer", rating: "4.5", reviews: "2,900" },
    { category: "Shop", name: "Chez Dede", kind: "Artisan Shop", desc: "chic concept store selling bespoke bags, clothing, home goods, and unique art books on Via di Monserrato", rating: "4.6", reviews: "180" },
  ]
});

const milan = buildCity({
  key: "milan",
  name: "Milan, Italy",
  currency: "€",
  mealRange: [28, 48],
  stayRates: [150, 200, 260],
  doCost: 90,
  shopRange: [200, 700],
  cuisineStyle: "Milanese & Lombard",
  places: [
    { category: "Eat", name: "Luini", kind: "Bakery", desc: "legendary bakery near the Duomo famous for its hot, fried panzerotti filled with tomato and mozzarella since 1888", rating: "4.5", reviews: "12,000" },
    { category: "Eat", name: "Trattoria Trippa", kind: "Trattoria", desc: "acclaimed modern trattoria serving offal and rustic Lombard plates, hardest table to book in Milan", rating: "4.7", reviews: "2,400" },
    { category: "Eat", name: "Ratanà", kind: "Restaurant", desc: "chef Cesare Battisti's modern tavern set in a historic railway building, famous for saffron risotto with bone marrow", rating: "4.6", reviews: "1,100" },
    { category: "Eat", name: "Pasticceria Marchesi", kind: "Cafe", desc: "historic 1824 café decorated with pastel green velvet walls, serving espresso and exquisite panettone", rating: "4.5", reviews: "2,100" },
    { category: "Eat", name: "Dry Milano", kind: "Pizzeria", desc: "trendy spot combining award-winning wood-fired pizzas with a high-end cocktail bar and house music", rating: "4.4", reviews: "1,500" },
    
    { category: "Stay", name: "Bulgari Hotel Milano", kind: "Hotel", desc: "ultra-exclusive 5-star hotel featuring sleek black marble rooms, a private spa, and a hidden garden patio", rating: "4.8", reviews: "890" },
    { category: "Stay", name: "Ostello Bello Duomo", kind: "Hostel", desc: "award-winning social hostel in the city center featuring free welcome drinks, live music, and private rooms", rating: "4.6", reviews: "3,100" },
    { category: "Stay", name: "Room Mate Giulia", kind: "Hotel", desc: "vibrant boutique hotel designed by Patricia Urquiola with colorful terracotta tiles and modern furniture", rating: "4.6", reviews: "1,600" },
    { category: "Stay", name: "Senato Hotel Milano", kind: "Hotel", desc: "charming hotel inside a neo-classical building featuring a marble-filled lobby and quiet chic rooms", rating: "4.5", reviews: "650" },
    { category: "Stay", name: "Grand Hotel et de Milan", kind: "Hotel", desc: "historic hotel beloved by opera composers, featuring antique furniture, oil paintings, and timeless luxury", rating: "4.7", reviews: "940" },
    
    { category: "Do", name: "Duomo di Milano", kind: "Landmark", desc: "glorious pink-white marble Gothic cathedral, with a rooftop terrace offering views of the city and Alps", rating: "4.8", reviews: "85,000", ticket: true },
    { category: "Do", name: "Galleria Vittorio Emanuele II", kind: "Landmark", desc: "magnificent 19th-century glass-domed shopping arcade, Italy's oldest active mall, housing historic stores", rating: "4.7", reviews: "65,000" },
    { category: "Do", name: "Santa Maria delle Grazie", kind: "Church", desc: "Renaissance church housing Leonardo da Vinci's legendary 15th-century fresco, The Last Supper", rating: "4.7", reviews: "24,000", ticket: true },
    { category: "Do", name: "Sforza Castle (Castello Sforzesco)", kind: "Castle", desc: "massive 15th-century fortress housing museums with Michelangelo's Pietà Rondanini and lush gardens", rating: "4.6", reviews: "38,000" },
    { category: "Do", name: "Pinacoteca di Brera", kind: "Art Museum", desc: "premier public gallery of Italian paintings, showcasing Renaissance masterpieces by Raphael and Caravaggio", rating: "4.7", reviews: "12,000", ticket: true },
    
    { category: "Shop", name: "Quadrilatero della Moda", kind: "Shopping District", desc: "Milan's high-fashion district, home to Via Montenapoleone and the world's most luxurious designer storefronts", rating: "4.6", reviews: "12,000" },
    { category: "Shop", name: "10 Corso Como", kind: "Concept Store", desc: "world-famous multifunctional venue combining art galleries, a bookstore, fashion boutique, and garden cafe", rating: "4.4", reviews: "2,900" },
    { category: "Shop", name: "Fiera di Sinigaglia", kind: "Flea Market", desc: "historic Saturday flea market along the Navigli canal, selling vintage clothes, vinyl, and collectibles", rating: "4.2", reviews: "1,500" },
    { category: "Shop", name: "Navigli Canals Boutiques", kind: "Shopping District", desc: "artisan shops, vintage stores, and design studios lining the canals in the bohemian Navigli neighborhood", rating: "4.5", reviews: "4,500" },
    { category: "Shop", name: "Rinascente Milano Duomo", kind: "Department Store", desc: "massive upscale department store offering fashion, design goods, and a rooftop food hall with Duomo views", rating: "4.5", reviews: "18,000" },
  ]
});

const venice = buildCity({
  key: "venice",
  name: "Venice, Italy",
  currency: "€",
  mealRange: [30, 50],
  stayRates: [160, 220, 290],
  doCost: 95,
  shopRange: [100, 400],
  cuisineStyle: "Venetian Seafood",
  places: [
    { category: "Eat", name: "Osteria Alle Testiere", kind: "Seafood Bistro", desc: "tiny 9-table seafood restaurant serving the daily catch from the Rialto market with premium local white wines", rating: "4.6", reviews: "920" },
    { category: "Eat", name: "Cantina Do Mori", kind: "Bacaro", desc: "Venice's oldest bacaro tavern (since 1462) serving cheap house wine (ombra) and local tapas skewers (cicheti)", rating: "4.5", reviews: "1,500" },
    { category: "Eat", name: "Harry's Bar", kind: "Historic Bar", desc: "celebrated water-side bar where Giuseppe Cipriani invented the Bellini cocktail and beef carpaccio", rating: "4.2", reviews: "3,800" },
    { category: "Eat", name: "Osteria al Squero", kind: "Bacaro", desc: "popular bacaro serving delicious cicheti toppings, situated right across from a gondola repair yard", rating: "4.6", reviews: "2,700" },
    { category: "Eat", name: "Gelato di Natura", kind: "Gelateria", desc: "artisanal gelateria crafting rich pistachio, dark chocolate, and seasonal fruit sorbets near Rialto", rating: "4.5", reviews: "1,100" },
    
    { category: "Stay", name: "Belmond Hotel Cipriani", kind: "Hotel", desc: "exclusive luxury resort on Giudecca island featuring a massive saltwater pool, private gardens, and shuttle boat", rating: "4.8", reviews: "850" },
    { category: "Stay", name: "Combo Venezia", kind: "Hostel", desc: "gorgeous hostel inside a converted 12th-century monastery with a spacious canal-side courtyard", rating: "4.5", reviews: "1,400" },
    { category: "Stay", name: "Hotel Danieli", kind: "Hotel", desc: "historic luxury hotel set inside three Gothic palaces beside St Mark's Square, famous for its grand lobby", rating: "4.7", reviews: "2,100" },
    { category: "Stay", name: "Hotel Flora", kind: "Hotel", desc: "family-run boutique hotel featuring a quiet, vine-draped secret courtyard, located near the opera house", rating: "4.6", reviews: "750" },
    { category: "Stay", name: "Generator Venice", kind: "Hostel", desc: "designer hostel in a converted stone granary on Giudecca, featuring antique brick walls and canal views", rating: "4.3", reviews: "1,850" },
    
    { category: "Do", name: "St. Mark's Basilica & Campanile", kind: "Landmark", desc: "Byzantine cathedral on St. Mark's Square, famous for its gold mosaics, marble floors, and bell tower views", rating: "4.8", reviews: "52,000", ticket: true },
    { category: "Do", name: "Doge's Palace (Palazzo Ducale)", kind: "Palace", desc: "masterpiece of Venetian Gothic architecture, featuring grand chambers, gold staircases, and the Bridge of Sighs", rating: "4.8", reviews: "45,000", ticket: true },
    { category: "Do", name: "Grand Canal Gondola Ride", kind: "Activity", desc: "iconic boat trip along Venice's main waterway on a traditional hand-crafted wooden gondola", rating: "4.4", reviews: "28,000" },
    { category: "Do", name: "Rialto Bridge", kind: "Bridge", desc: "the oldest and most famous bridge spanning the Grand Canal, offering spectacular views of gondola traffic", rating: "4.7", reviews: "38,000" },
    { category: "Do", name: "Burano Island Day Trip", kind: "Day Trip", desc: "ferry ride to the northern lagoon island, famous for its brightly colored houses and handmade lace workshops", rating: "4.8", reviews: "14,000" },
    
    { category: "Shop", name: "Rialto Market", kind: "Food Market", desc: "historic open-air market since the 11th century, selling fresh Adriatic fish, produce, and spices", rating: "4.6", reviews: "6,800" },
    { category: "Shop", name: "Gianni Basso Stampatore", kind: "Artisan Shop", desc: "world-famous printing workshop where Gianni crafts business cards and bookmarks on historic Gutenberg presses", rating: "4.8", reviews: "150" },
    { category: "Shop", name: "Mercerie", kind: "Shopping Streets", desc: "series of narrow streets connecting Rialto and San Marco, packed with high street shops and mask stores", rating: "4.3", reviews: "4,100" },
    { category: "Shop", name: "Venice Linea d'Acqua", kind: "Artisan Shop", desc: "prestigious gallery selling original antique prints, old maps, hand-painted artwork, and rare books", rating: "4.7", reviews: "90" },
    { category: "Shop", name: "VizioVirtù", kind: "Chocolatier", desc: "luxury chocolate boutique crafting handmade pralines, truffles, chocolate bars, and hot cocoa blends", rating: "4.6", reviews: "310" },
  ]
});

const ITALY = {
  rome,
  milan,
  venice
};

// --- FILE: ./src/data/destinations/japan.js ---

const tokyo = buildCity({
  key: "tokyo",
  name: "Tokyo, Japan",
  currency: "¥",
  mealRange: [1500, 3500],
  stayRates: [12000, 16000, 22000],
  doCost: 3500,
  shopRange: [5000, 20000],
  cuisineStyle: "Japanese",
  places: [
    { id: "tokyo_e0", category: "Eat", name: "Ichiran Shibuya", kind: "Ramen", desc: "solo-booth tonkotsu ramen, tuned to your exact taste", rating: "4.5", reviews: "8,900" },
    { id: "tokyo_e1", category: "Eat", name: "Sushi no Midori", kind: "Sushi", desc: "long queues for generous, great-value sushi sets", rating: "4.6", reviews: "4,300" },
    { category: "Eat", name: "Harajuku Gyozaro", kind: "Gyoza", desc: "simple, cheap, and legendary gyoza spot serving pan-fried or steamed dumplings", rating: "4.4", reviews: "2,500" },
    { category: "Eat", name: "Omoide Yokocho", kind: "Yakitori", desc: "narrow 'Memory Lane' alleyway packed with tiny stalls grilling chicken skewers over charcoal", rating: "4.5", reviews: "3,800" },
    { category: "Eat", name: "Rokurinsha", kind: "Tsukemen", desc: "famous noodle shop in Tokyo Station serving thick dipping ramen in rich seafood-pork broth", rating: "4.5", reviews: "2,900" },
    
    { id: "tokyo_s0", category: "Stay", name: "Shinjuku Granbell", kind: "Hotel", desc: "stylish, compact rooms in the heart of Shinjuku", rating: "4.4", reviews: "3,200" },
    { id: "tokyo_s1", category: "Stay", name: "Asakusa View Hotel", kind: "Hotel", desc: "comfortable rooms with Skytree views near Senso-ji", rating: "4.3", reviews: "2,750" },
    { category: "Stay", name: "The Capitol Hotel Tokyu", kind: "Hotel", desc: "luxurious 5-star hotel in Akasaka combining traditional shoji screens with sleek contemporary style", rating: "4.8", reviews: "1,100" },
    { category: "Stay", name: "Book and Bed Tokyo Shinjuku", kind: "Capsule Hotel", desc: "trendy hostel where you sleep behind bookshelves packed with local and English reading options", rating: "4.1", reviews: "750" },
    { category: "Stay", name: "Park Hyatt Tokyo", kind: "Hotel", desc: "iconic luxury hotel in Nishi-Shinjuku with floor-to-ceiling city views, famous from the movie 'Lost in Translation'", rating: "4.7", reviews: "1,850" },
    
    { id: "tokyo_d0", category: "Do", name: "Senso-ji Temple", kind: "Temple", desc: "Tokyo's oldest temple, reached through the lantern-hung Nakamise street", rating: "4.7", reviews: "160,000" },
    { id: "tokyo_d1", category: "Do", name: "Tokyo Skytree", kind: "Landmark", desc: "at 634 metres, one of the world's tallest towers, with sweeping views", rating: "4.6", reviews: "90,000", ticket: true, ticketUrl: "https://www.tokyo-skytree.jp/en/ticket/" },
    { category: "Do", name: "Shibuya Crossing", kind: "Landmark", desc: "the world's busiest pedestrian scramble crossing, surrounded by giant video screens and neon lights", rating: "4.7", reviews: "42,000" },
    { category: "Do", name: "Meiji Jingu Shrine", kind: "Shrine", desc: "serene Shinto shrine dedicated to Emperor Meiji, nestled inside a dense forest of 100,000 trees in Harajuku", rating: "4.7", reviews: "38,000" },
    { category: "Do", name: "teamLab Borderless", kind: "Museum", desc: "world-renowned interactive digital art museum featuring light trails, mirror rooms, and projection forests", rating: "4.8", reviews: "21,000", ticket: true },
    
    { id: "tokyo_p0", category: "Shop", name: "Shibuya", kind: "Shopping District", desc: "neon crossing, fashion towers and endless side-street shops", rating: "4.6", reviews: "45,000" },
    { id: "tokyo_p1", category: "Shop", name: "Ginza", kind: "Shopping District", desc: "Tokyo's elegant district of flagship stores and department halls", rating: "4.5", reviews: "20,000" },
    { category: "Shop", name: "Takeshita Street", kind: "Shopping Street", desc: "colorful pedestrian shopping alley in Harajuku, the center of Japan's kawaii youth culture and crazy crepes", rating: "4.4", reviews: "18,000" },
    { category: "Shop", name: "Akihabara Electric Town", kind: "Shopping District", desc: "famed shopping area packed with electronics superstores, retro gaming shops, anime figures, and maid cafes", rating: "4.5", reviews: "12,000" },
    { category: "Shop", name: "Nakamise Shopping Street", kind: "Historic Arcade", desc: "ancient approach to Senso-ji Temple lined with dozens of small stalls selling traditional snacks, fans, and keychains", rating: "4.5", reviews: "15,000" },
  ]
});

const kyoto = buildCity({
  key: "kyoto",
  name: "Kyoto, Japan",
  currency: "¥",
  mealRange: [1800, 4000],
  stayRates: [10000, 15000, 22000],
  doCost: 3000,
  shopRange: [4000, 15000],
  cuisineStyle: "Traditional Kaiseki & Zen",
  places: [
    { category: "Eat", name: "Nishiki Market Food Tour", kind: "Food Stalls", desc: "strolling market stalls tasting matcha soft serve, octopus skewers, egg omelets, and grilled dango", rating: "4.6", reviews: "12,000" },
    { category: "Eat", name: "Gyoza Hohei Gion", kind: "Gyoza", desc: "celebrated small eatery in Gion serving bite-sized, thin-skinned gyoza filled with ginger or pork", rating: "4.5", reviews: "1,200" },
    { category: "Eat", name: "Ramen Sen-no-Kaze", kind: "Ramen", desc: "incredibly popular ramen shop serving creamy pork bone broth topped with thick flame-grilled chashu pork", rating: "4.6", reviews: "2,800" },
    { category: "Eat", name: "Shigetsu", kind: "Zen Vegetarian", desc: "located inside Tenryu-ji Temple, serving beautiful multi-course Buddhist vegetarian meals (Shojin Ryori) overlooking gardens", rating: "4.7", reviews: "850" },
    { category: "Eat", name: "Gion Tanto", kind: "Okonomiyaki", desc: "cozy, tatami-matted restaurant beside the Shirakawa canal serving hot okonomiyaki pancakes and yakisoba noodles", rating: "4.4", reviews: "1,400" },
    
    { category: "Stay", name: "Gion Hanamikoji Ryokan", kind: "Ryokan", desc: "traditional Japanese inn with tatami rooms, futon beds, hot baths, and seasonal multi-course meals", rating: "4.8", reviews: "620" },
    { category: "Stay", name: "Piece Hostel Kyoto", kind: "Hostel", desc: "award-winning designer hostel near Kyoto Station, featuring modern minimalist lounge areas and custom bunk beds", rating: "4.6", reviews: "1,950" },
    { category: "Stay", name: "The Ritz-Carlton Kyoto", kind: "Hotel", desc: "5-star luxury resort situated along the Kamogawa River, blending historic wooden design with premium amenities", rating: "4.9", reviews: "890" },
    { category: "Stay", name: "Kyoto Granbell Hotel", kind: "Hotel", desc: "stylish hotel in Gion blending modern architecture with traditional elements, featuring a public hot bath", rating: "4.6", reviews: "1,150" },
    { category: "Stay", name: "Len Kyoto Kawaramachi", kind: "Hostel", desc: "hip hostel and cafe-bar along the river with wooden interiors, hosting regular local music events", rating: "4.5", reviews: "940" },
    
    { category: "Do", name: "Fushimi Inari Shrine", kind: "Shrine", desc: "breathtaking shrine famous for its mountain path lined with over 10,000 vermilion Torii gates", rating: "4.9", reviews: "98,000" },
    { category: "Do", name: "Kinkaku-ji (Golden Pavilion)", kind: "Temple", desc: "stunning Zen temple covered in brilliant gold leaf, reflecting over a mirror pond in northern Kyoto", rating: "4.8", reviews: "45,000", ticket: true },
    { category: "Do", name: "Arashiyama Bamboo Grove", kind: "Nature Walk", desc: "scenic forest pathway winding through towering stalks of bright green bamboo, offering a peaceful rustling sound", rating: "4.7", reviews: "38,000" },
    { category: "Do", name: "Kiyomizu-dera Temple", kind: "Temple", desc: "historic Buddhist temple built on a hillside cliff without nails, featuring a massive wooden balcony overlooking Kyoto", rating: "4.8", reviews: "42,000", ticket: true },
    { category: "Do", name: "Gion Historic District", kind: "Cultural Area", desc: "Kyoto's famous geisha quarter, filled with preserved wooden machiya teahouses, lanterns, and stone-paved streets", rating: "4.6", reviews: "19,000" },
    
    { category: "Shop", name: "Nishiki Market", kind: "Historic Market", desc: "narrow five-block covered shopping street known as the Kitchen of Kyoto, packed with over 100 food stalls", rating: "4.5", reviews: "24,000" },
    { category: "Shop", name: "Shijo-dori", kind: "Shopping Street", desc: "central commercial street lined with traditional craft shops, modern department stores, and sweet shops", rating: "4.4", reviews: "8,900" },
    { category: "Shop", name: "Arashiyama Craft Shops", kind: "Artisan Shops", desc: "boutiques near the bamboo forest selling hand-crafted bamboo kitchenware, traditional paper umbrellas, and bags", rating: "4.5", reviews: "1,200" },
    { category: "Shop", name: "Kyoto Ceramic Center", kind: "Artisan Shop", desc: "gallery and shop showcasing handcrafted Kiyomizu-yaki porcelain tableware, vases, and teacups made by local artists", rating: "4.6", reviews: "320" },
    { category: "Shop", name: "Yojiya Gion", kind: "Cosmetics", desc: "historic brand famous for its natural face oil-blotting papers (aburatorigami) and traditional geisha cosmetics", rating: "4.5", reviews: "940" },
  ]
});

const osaka = buildCity({
  key: "osaka",
  name: "Osaka, Japan",
  currency: "¥",
  mealRange: [1200, 3000],
  stayRates: [9000, 13000, 18000],
  doCost: 2800,
  shopRange: [3500, 12000],
  cuisineStyle: "Osakan Street Food & Dotonbori",
  places: [
    { category: "Eat", name: "Mizuno", kind: "Okonomiyaki", desc: "legendary Dotonbori okonomiyaki spot serving cabbage pancakes loaded with seafood and pork since 1945", rating: "4.6", reviews: "2,400" },
    { category: "Eat", name: "Kushikatsu Daruma Shinsekai", kind: "Kushikatsu", desc: "historic stand serving crisp, deep-fried meat and vegetable skewers with a strict no double dipping rule", rating: "4.4", reviews: "3,100" },
    { category: "Eat", name: "Takoyaki Wanaka Namba", kind: "Takoyaki", desc: "award-winning food stall grilling molten-hot octopus batter balls topped with sweet sauce, mayo, and bonito flakes", rating: "4.5", reviews: "4,500" },
    { category: "Eat", name: "Kani Doraku Dotonbori", kind: "Seafood", desc: "iconic restaurant marked by a giant moving mechanical crab on its storefront, serving multi-course crab meals", rating: "4.3", reviews: "2,100" },
    { category: "Eat", name: "Endo Sushi", kind: "Sushi", desc: "historic 100-year-old sushi spot at the fish market serving warm vinegar rice sushi sets on wooden platters", rating: "4.6", reviews: "1,500" },
    
    { category: "Stay", name: "Swissotel Nankai Osaka", kind: "Hotel", desc: "luxurious 5-star hotel towers situated directly above Namba Station, offering great skyline views", rating: "4.7", reviews: "1,850" },
    { category: "Stay", name: "Ark Hostel & Cafe Cafe", kind: "Hostel", desc: "stylish designer hostel featuring custom wooden beds, a cozy rooftop deck, and a cool downstairs cafe-bar", rating: "4.4", reviews: "890" },
    { category: "Stay", name: "Hotel Nikko Osaka", kind: "Hotel", desc: "mid-range hotel directly connected to Shinsaibashi station, offering rooms looking down at Midosuji Avenue", rating: "4.5", reviews: "2,300" },
    { category: "Stay", name: "Cross Hotel Osaka", kind: "Hotel", desc: "modern design boutique hotel with sleek rooms, located a minutes walk from the Dotonbori canal", rating: "4.6", reviews: "1,200" },
    { category: "Stay", name: "Capsule Hotel Astil Dotonbori", kind: "Capsule Hotel", desc: "premium capsule hostel with pod rooms featuring charging docks, TV screens, and free amenities", rating: "4.3", reviews: "950" },
    
    { category: "Do", name: "Osaka Castle & Park", kind: "Castle", desc: "magnificent 16th-century fortress surrounded by stone walls, a double moat, and thousands of cherry blossom trees", rating: "4.7", reviews: "38,000", ticket: true },
    { category: "Do", name: "Dotonbori Canal Walk", kind: "Attraction", desc: "bustling canal walk famous for the neon Glico Running Man sign, mechanical restaurant signs, and street food stalls", rating: "4.7", reviews: "42,000" },
    { category: "Do", name: "Universal Studios Japan", kind: "Theme Park", desc: "massive theme park featuring Super Nintendo World, The Wizarding World of Harry Potter, and roller coasters", rating: "4.7", reviews: "75,000", ticket: true },
    { category: "Do", name: "Shinsekai Neighborhood", kind: "Cultural Area", desc: "retro district created in 1912 resembling Paris and New York, crowned by the Tsutenkaku steel tower", rating: "4.4", reviews: "15,000" },
    { category: "Do", name: "Osaka Aquarium Kaiyukan", kind: "Aquarium", desc: "one of the world's largest aquariums, showcasing marine life from the Pacific Rim in massive deep-water tanks", rating: "4.8", reviews: "28,000", ticket: true },
    
    { category: "Shop", name: "Shinsaibashi-suji Arcade", kind: "Shopping Arcade", desc: "historic 600-meter-long covered shopping arcade packed with fashion retail, cosmetics, and shoe stores", rating: "4.4", reviews: "24,000" },
    { category: "Shop", name: "Amerikamura (Amemura)", kind: "Shopping District", desc: "center of Osaka's youth street culture, filled with vintage clothes shops, record stores, and takoyaki stalls", rating: "4.3", reviews: "8,900" },
    { category: "Shop", name: "Sennichimae Doguyasuji", kind: "Shopping Street", desc: "niche shopping arcade known as Kitchenware Street, selling chef knives, lacquerware, and wax food models", rating: "4.6", reviews: "3,200" },
    { category: "Shop", name: "Kuromon Ichiba Market", kind: "Food Market", desc: "traditional covered market hall known as Osaka's Gastronome, famous for grilled wagyu beef, giant oysters, and sea urchin", rating: "4.4", reviews: "15,000" },
    { category: "Shop", name: "Namba Parks", kind: "Mall", desc: "striking modern architectural shopping mall built with an 8-story sloping rooftop botanical garden park", rating: "4.5", reviews: "12,000" },
  ]
});

const JAPAN = {
  tokyo,
  kyoto,
  osaka
};

// --- FILE: ./src/data/destinations/usa.js ---

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

const USA = {
  newyork,
  sanfrancisco,
  losangeles
};

// --- FILE: ./src/data/destinations/germany.js ---

const berlin = buildCity({
  key: "berlin",
  name: "Berlin, Germany",
  currency: "€",
  mealRange: [22, 38],
  stayRates: [110, 145, 188],
  doCost: 72,
  shopRange: [120, 420],
  cuisineStyle: "German & International",
  places: [
    { id: "berlin_e0", category: "Eat", name: "Mustafa's Gemüse Kebap", kind: "Kebap", pic: "mustafa-s-gemuse-kebap", desc: "legendary street kiosk in Kreuzberg serving chicken and roasted vegetable durums", rating: "4.5", reviews: "18,000" },
    { id: "berlin_e1", category: "Eat", name: "Zur letzten Instanz", kind: "Tavern", pic: "zur-letzten-instanz", desc: "historic 1621 tavern serving classic hearty German dishes, once dined in by Napoleon", rating: "4.4", reviews: "2,100" },
    { category: "Eat", name: "Curry 36", kind: "Fast Food", desc: "highly popular local stand in Kreuzberg serving authentic Berlin currywurst and fries", rating: "4.5", reviews: "8,900" },
    { category: "Eat", name: "Monsieur Vuong", kind: "Vietnamese", desc: "hip, colorful local favorite serving fresh aromatic bowls of pho and spring rolls in Mitte", rating: "4.5", reviews: "4,200" },
    { category: "Eat", name: "Hofbräu Wirtshaus Berlin", kind: "Bavarian Hall", desc: "massive, lively beer hall bringing Munich-style pork knuckles, giant pretzels, and liters of beer to Berlin", rating: "4.3", reviews: "12,000" },
    
    { id: "berlin_s0", category: "Stay", name: "Hotel Hackescher Markt", kind: "Hotel", pic: "hotel-hackescher-markt", desc: "charming townhouse rooms in a quiet courtyard in central Berlin", rating: "4.6", reviews: "1,200" },
    { id: "berlin_s1", category: "Stay", name: "Michelberger Hotel", kind: "Hotel", pic: "michelberger-hotel", desc: "hip industrial-chic design rooms close to the East Side Gallery", rating: "4.5", reviews: "2,400" },
    { category: "Stay", name: "The Circus Hostel", kind: "Hostel", desc: "award-winning boutique hostel at Rosenthaler Platz featuring an in-house microbrewery and social events", rating: "4.5", reviews: "3,800" },
    { category: "Stay", name: "Soho House Berlin", kind: "Hotel", desc: "exclusive hotel set in a historic Bauhaus-style building featuring a rooftop pool and chic rooms", rating: "4.7", reviews: "640" },
    { category: "Stay", name: "25hours Hotel Bikini Berlin", kind: "Hotel", desc: "playful design hotel overlooking the Berlin Zoo and Tiergarten park, featuring hammock lounges", rating: "4.6", reviews: "1,950" },
    
    { id: "berlin_d0", category: "Do", name: "Brandenburg Gate", kind: "Landmark", pic: "brandenburg-gate", desc: "Berlin's iconic 18th-century neoclassical triumphal monument, a symbol of unity", rating: "4.8", reviews: "150,000" },
    { id: "berlin_d1", category: "Do", name: "Museum Island", kind: "Museum complex", pic: "museum-island", desc: "UNESCO-listed island housing five world-class museums including the Pergamon", rating: "4.7", reviews: "90,000", ticket: true },
    { category: "Do", name: "Reichstag Building", kind: "Landmark", desc: "historic parliament building featuring a modern glass dome with 360-degree views of the city", rating: "4.7", reviews: "62,000" },
    { category: "Do", name: "East Side Gallery", kind: "Memorial", desc: "historic 1.3km section of the Berlin Wall covered in iconic political and artistic murals", rating: "4.6", reviews: "45,000" },
    { category: "Do", name: "Checkpoint Charlie", kind: "Monument", desc: "the famous Cold War crossing point between East and West Berlin, marked by a historic guard shack", rating: "4.1", reviews: "22,000" },
    
    { id: "berlin_p0", category: "Shop", name: "Kurfürstendamm", kind: "Shopping boulevard", pic: "kurfurstendamm", desc: "Berlin's elegant central shopping avenue filled with retail stores and cafes", rating: "4.5", reviews: "18,000" },
    { id: "berlin_p1", category: "Shop", name: "Flohmarkt Mauerpark", kind: "Market", pic: "flohmarkt-mauerpark", desc: "lively Sunday flea market famous for vintage clothes, food stalls, and outdoor karaoke", rating: "4.4", reviews: "12,000" },
    { category: "Shop", name: "KaDeWe", kind: "Department Store", desc: "historic luxury department store, the largest in mainland Europe, renowned for its massive gourmet food floor", rating: "4.6", reviews: "24,000" },
    { category: "Shop", name: "Hackesche Höfe", kind: "Shopping Courtyard", desc: "maze of eight beautifully restored courtyards housing independent boutiques, local designers, and cafes", rating: "4.6", reviews: "8,900" },
    { category: "Shop", name: "Boxhagener Platz Market", kind: "Market", desc: "Sunday flea market in Friedrichshain popular for retro furniture, local art prints, and records", rating: "4.4", reviews: "2,300" },
  ]
});

const munich = buildCity({
  key: "munich",
  name: "Munich, Germany",
  currency: "€",
  mealRange: [25, 45],
  stayRates: [130, 175, 230],
  doCost: 85,
  shopRange: [150, 500],
  cuisineStyle: "Bavarian",
  places: [
    { category: "Eat", name: "Hofbräuhaus", kind: "Beer Hall", desc: "historic 16th-century Bavarian beer hall serving giant steins, pork knuckles, and playing live brass music", rating: "4.5", reviews: "45,000" },
    { category: "Eat", name: "Viktualienmarkt Stalls", kind: "Food Stalls", desc: "open-air market booths serving hot sausages, fresh pretzels, local cheeses, and a central beer garden", rating: "4.6", reviews: "15,000" },
    { category: "Eat", name: "Dallmayr Delicatessen", kind: "Delicatessen", desc: "prestigious 300-year-old gourmet food hall famous for fine coffee, chocolates, oysters, and cheeses", rating: "4.5", reviews: "6,200" },
    { category: "Eat", name: "Schneider Bräuhaus", kind: "Traditional Hall", desc: "classic tavern serving traditional Munich dishes like roast pork and famous Aventinus wheat beer", rating: "4.4", reviews: "4,800" },
    { category: "Eat", name: "Cafe Frischhut", kind: "Cafe", desc: "quaint café famous for serving fresh, hot Auszogene (traditional Bavarian fried yeast pastries)", rating: "4.6", reviews: "1,500" },
    
    { category: "Stay", name: "Hotel Bayerischer Hof", kind: "Hotel", desc: "legendary 5-star hotel in the old town with luxury rooms, a rooftop pool, and a private cinema", rating: "4.7", reviews: "2,100" },
    { category: "Stay", name: "Wombat's City Hostel", kind: "Hostel", desc: "highly social hostel near the main station with a glass-roofed conservatory lounge and lively bar", rating: "4.4", reviews: "2,900" },
    { category: "Stay", name: "Eurostars Grand Central", kind: "Hotel", desc: "modern hotel with clean spacious rooms, an indoor pool, and great connections to the city center", rating: "4.3", reviews: "1,850" },
    { category: "Stay", name: "Cortiina Hotel", kind: "Hotel", desc: "stylish boutique hotel in the old town featuring elegant dark wood décor and a popular wine bar", rating: "4.6", reviews: "650" },
    { category: "Stay", name: "Ruby Lilly Hotel", kind: "Hotel", desc: "contemporary boutique hotel with retro radio-themed bar, plush beds, and central location", rating: "4.5", reviews: "1,200" },
    
    { category: "Do", name: "Marienplatz & Glockenspiel", kind: "Landmark", desc: "Munich's central square featuring the grand neo-Gothic town hall and its historic animated mechanical clock", rating: "4.8", reviews: "42,000" },
    { category: "Do", name: "English Garden (Eisbachwelle)", kind: "Park", desc: "massive city park featuring the Eisbach river where surfers ride a standing wave all year round", rating: "4.8", reviews: "32,000" },
    { category: "Do", name: "Nymphenburg Palace", kind: "Palace", desc: "grand baroque palace, summer residence of Bavarian rulers, surrounded by canals and manicured gardens", rating: "4.7", reviews: "15,000", ticket: true },
    { category: "Do", name: "Deutsches Museum", kind: "Museum", desc: "the world's largest museum of science and technology, housing exhibits from aircraft to early computers", rating: "4.7", reviews: "18,000", ticket: true },
    { category: "Do", name: "Munich Residenz", kind: "Palace", desc: "vast former royal palace of the Bavarian dukes, showcasing ornate Renaissance and Rococo halls", rating: "4.7", reviews: "12,000", ticket: true },
    
    { category: "Shop", name: "Maximilianstraße", kind: "Shopping Street", desc: "exclusive shopping avenue lined with grand architectural facades and international luxury boutiques", rating: "4.5", reviews: "3,100" },
    { category: "Shop", name: "Viktualienmarkt", kind: "Food Market", desc: "historic gourmet food market containing over 140 stalls of cheeses, sausages, flowers, and local crafts", rating: "4.7", reviews: "28,000" },
    { category: "Shop", name: "Kaufingerstraße", kind: "Shopping Street", desc: "Munich's main pedestrian shopping avenue connecting Marienplatz and Karlsplatz, busy with global retail", rating: "4.4", reviews: "15,000" },
    { category: "Shop", name: "Glockenbachviertel Boutiques", kind: "Shopping District", desc: "trendy streets filled with independent designers, local fashion boutiques, craft shops, and bookstores", rating: "4.5", reviews: "1,800" },
    { category: "Shop", name: "Servus Heimat", kind: "Artisan Shop", desc: "quirky shop specializing in modern Bavarian gifts, locally made souvenirs, and alpine lifestyle goods", rating: "4.6", reviews: "310" },
  ]
});

const hamburg = buildCity({
  key: "hamburg",
  name: "Hamburg, Germany",
  currency: "€",
  mealRange: [24, 42],
  stayRates: [120, 160, 210],
  doCost: 80,
  shopRange: [120, 450],
  cuisineStyle: "Hanseatic Seafood",
  places: [
    { category: "Eat", name: "Fischereihafen Restaurant", kind: "Seafood Restaurant", desc: "celebrated waterfront restaurant serving premium fresh fish dishes overlooking the Elbe harbor", rating: "4.6", reviews: "2,300" },
    { category: "Eat", name: "Oberhafen Kantine", kind: "Tavern", desc: "historic, tilting local tavern serving classic northern German sailor dishes like Labskaus since 1925", rating: "4.5", reviews: "920" },
    { category: "Eat", name: "Bullerei", kind: "Steakhouse", desc: "hip, industrial-chic restaurant in a former slaughterhouse, owned by celebrity chef Tim Mälzer", rating: "4.4", reviews: "2,100" },
    { category: "Eat", name: "Brücke 10", kind: "Fast Food", desc: "popular harbor-front stand serving legendary Fischbrötchen (fish rolls loaded with shrimp or herring)", rating: "4.6", reviews: "4,200" },
    { category: "Eat", name: "Elbgold Cafe", kind: "Specialty Cafe", desc: "industrial-chic coffee roasters in Schanzenviertel serving excellent espresso and freshly baked bagels", rating: "4.5", reviews: "1,800" },
    
    { category: "Stay", name: "Grand Elysée Hamburg", kind: "Hotel", desc: "5-star luxury hotel featuring spacious modern rooms, a massive spa pool, and a jazz bar", rating: "4.7", reviews: "1,900" },
    { category: "Stay", name: "Pyjama Park St. Pauli", kind: "Hostel", desc: "trendy hostel directly on the famous Reeperbahn nightlife strip, featuring cool capsule and private rooms", rating: "4.2", reviews: "1,100" },
    { category: "Stay", name: "Superbude St. Pauli", kind: "Hostel", desc: "funky design hostel with custom-built recycled furniture, waffle stations, and social lounges", rating: "4.6", reviews: "1,300" },
    { category: "Stay", name: "Henri Hotel Hamburg", kind: "Hotel", desc: "stylish boutique hotel in the city center with cozy 1960s-inspired vintage decor and a spa", rating: "4.6", reviews: "750" },
    { category: "Stay", name: "The Fontenay", kind: "Hotel", desc: "ultra-modern luxury hotel directly on the Outer Alster Lake featuring stunning organic architecture", rating: "4.8", reviews: "890" },
    
    { category: "Do", name: "Miniatur Wunderland", kind: "Museum", desc: "the world's largest model railway exhibition, displaying detailed mini cities and airports", rating: "4.9", reviews: "95,000", ticket: true },
    { category: "Do", name: "Elbphilharmonie Plaza", kind: "Landmark", desc: "futuristic glass concert hall built on an old warehouse; its public viewing deck offers port views", rating: "4.7", reviews: "62,000" },
    { category: "Do", name: "Speicherstadt", kind: "Historic District", desc: "the world's largest historic warehouse district, built on oak logs with red-brick Gothic canals", rating: "4.8", reviews: "38,000" },
    { category: "Do", name: "St. Pauli & Reeperbahn", kind: "Nightlife Area", desc: "Hamburg's famous entertainment district, rich in music history where the Beatles began their career", rating: "4.2", reviews: "28,000" },
    { category: "Do", name: "Hamburg Harbor Boat Tour", kind: "Activity", desc: "scenic boat tour navigating massive container docks, lock gates, and canals on a traditional launch", rating: "4.6", reviews: "14,000", ticket: true },
    
    { category: "Shop", name: "Mönckebergstraße", kind: "Shopping Street", desc: "Hamburg's primary pedestrian shopping avenue, home to department stores and major retail brands", rating: "4.4", reviews: "15,000" },
    { category: "Shop", name: "Neuer Wall", kind: "Shopping Street", desc: "exclusive canal-side shopping street hosting luxury fashion flagships and designer boutiques", rating: "4.5", reviews: "4,100" },
    { category: "Shop", name: "Flohschanze Flea Market", kind: "Flea Market", desc: "Saturday flea market in the Schanzenviertel, famous for vintage furniture, books, and quirky items", rating: "4.4", reviews: "2,500" },
    { category: "Shop", name: "Speicherstadt Spices", kind: "Artisan Shops", desc: "boutiques inside brick warehouses selling gourmet spices, imported coffees, and loose leaf teas", rating: "4.6", reviews: "890" },
    { category: "Shop", name: "Alsterhaus", department: "Department Store", desc: "historic luxury department store overlooking the Binnenalster lake, with premium fashion and foods", rating: "4.5", reviews: "5,200" },
  ]
});

const GERMANY = {
  berlin,
  munich,
  hamburg
};

// --- FILE: ./src/data/destinations/netherlands.js ---

const amsterdam = buildCity({
  key: "amsterdam",
  name: "Amsterdam, Netherlands",
  currency: "€",
  mealRange: [28, 48],
  stayRates: [130, 180, 240],
  doCost: 88,
  shopRange: [120, 420],
  cuisineStyle: "Dutch & International",
  places: [
    { id: "amsterdam_e0", category: "Eat", name: "Café de Klos", kind: "Pub", pic: "cafe-de-klos", desc: "lively, wood-panelled pub famous for its delicious smoked spare ribs and cold beers", rating: "4.5", reviews: "2,400" },
    { id: "amsterdam_e1", category: "Eat", name: "Foodhallen", kind: "Food court", pic: "foodhallen", desc: "indoor food hall in a converted tram depot serving global street food bites", rating: "4.5", reviews: "14,000" },
    { category: "Eat", name: "Winkel 43", kind: "Cafe", desc: "cozy neighborhood cafe in Jordaan, famous for serving the best thick, warm Dutch apple pie with whipped cream", rating: "4.6", reviews: "8,900" },
    { category: "Eat", name: "Rijsel", kind: "Bistro", desc: "highly popular retro bistro serving refined French-Flemish rotisserie chicken and seasonal sides", rating: "4.6", reviews: "1,200" },
    { category: "Eat", name: "Moeders", kind: "Restaurant", desc: "quirky restaurant decorated with photos of mothers, serving traditional Dutch hotchpotch and stews", rating: "4.5", reviews: "3,100" },
    
    { id: "amsterdam_s0", category: "Stay", name: "The Hoxton, Herengracht", kind: "Hotel", pic: "the-hoxton-herengracht", desc: "gorgeous canal-house hotel along the grand Herengracht canal", rating: "4.7", reviews: "1,900" },
    { id: "amsterdam_s1", category: "Stay", name: "Hotel Jordaan", kind: "Hotel", pic: "hotel-jordaan", desc: "cozy, boutique rooms nestled in the historic Jordaan neighborhood", rating: "4.3", reviews: "850" },
    { category: "Stay", name: "Generator Amsterdam", kind: "Hostel", desc: "stylish designer hostel set in a converted university building in Oosterpark, with vibrant lounge areas", rating: "4.3", reviews: "2,600" },
    { category: "Stay", name: "CitizenM Amsterdam South", kind: "Hotel", desc: "contemporary smart hotel near the business district, featuring XL beds and mood-pad room control", rating: "4.6", reviews: "1,800" },
    { category: "Stay", name: "Cocomama", kind: "Hostel", desc: "charming boutique hostel inside a former canal-side mansion, featuring cozy private rooms and a resident cat", rating: "4.5", reviews: "750" },
    
    { id: "amsterdam_d0", category: "Do", name: "Rijksmuseum", kind: "Museum", pic: "rijksmuseum", desc: "national museum dedicated to Dutch art and history, housing masterpieces by Rembrandt", rating: "4.8", reviews: "45,000" },
    { id: "amsterdam_d1", category: "Do", name: "Anne Frank House", kind: "Museum", pic: "anne-frank-house", desc: "historic canal-house museum where Anne Frank wrote her diary during WWII", rating: "4.7", reviews: "120,000", ticket: true },
    { category: "Do", name: "Van Gogh Museum", kind: "Museum", desc: "modern museum containing the world's largest collection of paintings, drawings, and letters by Vincent van Gogh", rating: "4.8", reviews: "38,000", ticket: true },
    { category: "Do", name: "Vondelpark", kind: "Park", desc: "sprawling 120-acre urban park featuring English-style gardens, cafes, lakes, and open-air theaters", rating: "4.7", reviews: "24,000" },
    { category: "Do", name: "Canal Cruise", kind: "Activity", desc: "classic boat tour navigating Amsterdam's UNESCO-listed canal rings with audio guides and drinks", rating: "4.6", reviews: "18,000", ticket: true },
    
    { id: "amsterdam_p0", category: "Shop", name: "De Negen Straatjes", kind: "Shopping district", pic: "de-negen-straatjes", desc: "nine scenic streets of independent boutiques, vintage stores, and canalside cafes", rating: "4.5", reviews: "6,200" },
    { id: "amsterdam_p1", category: "Shop", name: "Albert Cuyp Market", kind: "Street market", pic: "albert-cuyp-market", desc: "famous open-air market in De Pijp selling fresh stroopwafels, cheeses, and clothing", rating: "4.5", reviews: "8,900" },
    { category: "Shop", name: "Bloemenmarkt", kind: "Market", desc: "the world's only floating flower market, lined with houseboats selling flower bulbs, seeds, and souvenirs", rating: "4.1", reviews: "12,000" },
    { category: "Shop", name: "Waterlooplein Flea Market", kind: "Flea Market", desc: "historic open-air market in the old Jewish quarter, famous for vintage clothing, militaria, and curios", rating: "4.3", reviews: "6,800" },
    { category: "Shop", name: "Magna Plaza", kind: "Shopping Arcade", desc: "grand neo-gothic former post office building transformed into an upscale indoor shopping arcade", rating: "4.4", reviews: "3,100" },
  ]
});

const rotterdam = buildCity({
  key: "rotterdam",
  name: "Rotterdam, Netherlands",
  currency: "€",
  mealRange: [24, 42],
  stayRates: [100, 140, 195],
  doCost: 80,
  shopRange: [100, 350],
  cuisineStyle: "Dutch & Modern International",
  places: [
    { category: "Eat", name: "Markthal", kind: "Food Hall", desc: "massive horseshoe-shaped building containing a fresh food market under a giant colorful mural ceiling", rating: "4.6", reviews: "32,000" },
    { category: "Eat", name: "Fenix Food Factory", kind: "Food Hall", desc: "hipster food market in a former harbor warehouse in Katendrecht, offering craft beer, cheese, and bread", rating: "4.5", reviews: "2,400" },
    { category: "Eat", name: "Ter Marsch & Co", kind: "Burger Bar", desc: "cozy burger joint famous for serving award-winning gourmet beef burgers and specialty fries", rating: "4.4", reviews: "1,800" },
    { category: "Eat", name: "FG Food Labs", kind: "Michelin Star", desc: "chef François Geurds' Michelin-starred culinary laboratory serving creative dishes inside a railway arch", rating: "4.6", reviews: "450" },
    { category: "Eat", name: "Cafe de Witte Aap", kind: "Bar", desc: "legendary pub on Witte de Withstraat, voted the world's best bar by Lonely Planet for its lively outdoor terrace", rating: "4.4", reviews: "1,900" },
    
    { category: "Stay", name: "nhow Rotterdam", kind: "Hotel", desc: "design hotel set inside Rem Koolhaas's 'De Rotterdam' skyscraper, featuring rooms with views of the Erasmus Bridge", rating: "4.6", reviews: "2,900" },
    { category: "Stay", name: "King Kong Hostel", kind: "Hostel", desc: "highly rated design hostel on Witte de Withstraat, combining cool vintage design with a lively cafe-bar", rating: "4.5", reviews: "1,200" },
    { category: "Stay", name: "ss Rotterdam", kind: "Hotel", desc: "former historic ocean liner transformed into a floating hotel and museum docked in Katendrecht", rating: "4.5", reviews: "3,100" },
    { category: "Stay", name: "CitizenM Rotterdam", kind: "Hotel", desc: "contemporary boutique hotel in the Old Harbour featuring smart rooms with wall-to-wall windows", rating: "4.6", reviews: "1,500" },
    { category: "Stay", name: "CityHub Rotterdam", kind: "Hotel", desc: "futuristic pod hotel featuring private sleeping hubs, app-controlled lighting, and shared luxury showers", rating: "4.4", reviews: "890" },
    
    { category: "Do", name: "Erasmus Bridge (Erasmusbrug)", kind: "Landmark", desc: "iconic 800-meter-long asymmetric cable suspension bridge spanning the Maas River, nicknamed 'The Swan'", rating: "4.8", reviews: "15,000" },
    { category: "Do", name: "Cube Houses (Kijk-Kubus)", kind: "Architecture", desc: "Piet Blom's unique architectural tilted cube houses built on pedestals, with a show house open to public", rating: "4.5", reviews: "18,000", ticket: true },
    { category: "Do", name: "Euromast", kind: "Tower", desc: "185-meter-tall observation tower featuring a rotating glass elevator, panoramic views, and a restaurant", rating: "4.5", reviews: "12,000", ticket: true },
    { category: "Do", name: "Rotterdam Harbor Cruise", kind: "Activity", desc: "scenic boat tour navigating Rotterdam's bustling deep-water seaport and modern shipping terminals", rating: "4.5", reviews: "8,900", ticket: true },
    { category: "Do", name: "Museum Boijmans Van Beuningen", kind: "Museum", desc: "premier art museum featuring collections of Western art from the Middle Ages to the present day", rating: "4.6", reviews: "4,100" },
    
    { category: "Shop", name: "Koopgoot", kind: "Shopping Street", desc: "sunken pedestrian shopping street under the main road, packed with high street fashion stores", rating: "4.4", reviews: "6,800" },
    { category: "Shop", name: "Witte de Withstraat Boutiques", kind: "Shopping Street", desc: "trendy street lined with independent clothing stores, design galleries, bookstores, and shoe boutiques", rating: "4.5", reviews: "3,400" },
    { category: "Shop", name: "Swan Market", kind: "Artisan Market", desc: "roving lifestyle market in Rotterdam showcasing handmade jewelry, vintage toys, prints, and local treats", rating: "4.4", reviews: "920" },
    { category: "Shop", name: "Lijnbaan", kind: "Shopping District", desc: "the world's first purpose-built pedestrian shopping mall, opened in 1953, hosting major retail brands", rating: "4.3", reviews: "5,400" },
    { category: "Shop", name: "De Groene Passage", kind: "Market", desc: "eco-friendly shopping arcade housing organic butcheries, fair-trade design stores, and green groceries", rating: "4.5", reviews: "750" },
  ]
});

const NETHERLANDS = {
  amsterdam,
  rotterdam
};

// --- FILE: ./src/data/destinations/singapore.js ---

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

const SINGAPORE = {
  singapore
};

// --- FILE: ./src/data/destinations/southkorea.js ---

const seoul = buildCity({
  key: "seoul",
  name: "Seoul, South Korea",
  currency: "₩",
  mealRange: [15000, 30000],
  stayRates: [110000, 160000, 220000],
  doCost: 85000,
  shopRange: [100000, 450000],
  cuisineStyle: "Korean",
  places: [
    { category: "Eat", name: "Tosokchon Samgyetang", kind: "Traditional", desc: "famous restaurant near Gyeongbokgung palace serving the best ginseng chicken soup (samgyetang)", rating: "4.5", reviews: "6,800" },
    { category: "Eat", name: "Gwangjang Market", kind: "Food Stalls", desc: "historic covered market famous for mung bean pancakes (bindaetteok), hand-cut noodles, and raw beef", rating: "4.6", reviews: "12,000" },
    { category: "Eat", name: "Myeongdong Kyoja", kind: "Noodle Shop", desc: "Michelin-recommended local institution famous for rich, knife-cut noodle soup (kalguksu) and garlic kimchi", rating: "4.5", reviews: "8,900" },
    { category: "Eat", name: "Maple Tree House", kind: "Korean BBQ", desc: "stylish Korean BBQ restaurant serving premium quality aged beef and pork grilled at your table", rating: "4.5", reviews: "2,400" },
    { category: "Eat", name: "Cafe Onion Anguk", kind: "Cafe", desc: "stunning modern bakery set inside a beautifully restored traditional Korean wooden Hanok house", rating: "4.6", reviews: "3,100" },
    
    { category: "Stay", name: "Lotte Hotel Seoul", kind: "Hotel", desc: "prestigious 5-star luxury hotel in Myeongdong featuring upscale rooms, a spa, and multiple fine dining options", rating: "4.7", reviews: "2,900" },
    { category: "Stay", name: "Insadong Hostel", kind: "Hostel", desc: "friendly budget guest house set in a quiet alley of the historic Insadong neighborhood", rating: "4.2", reviews: "750" },
    { category: "Stay", name: "RYSE Hotel Hongdae", kind: "Hotel", desc: "trendy design boutique hotel in creative Hongdae, featuring custom art rooms and a rooftop cocktail lounge", rating: "4.6", reviews: "1,200" },
    { category: "Stay", name: "Signiel Seoul", kind: "Hotel", desc: "ultra-luxury hotel occupying floors 76 to 101 of the Lotte World Tower, the tallest building in Korea", rating: "4.8", reviews: "1,100" },
    { category: "Stay", name: "Darakhyu Capsule Hotel", kind: "Capsule Hotel", desc: "smart capsule hotel located inside Incheon Airport, perfect for quick layovers or early morning flights", rating: "4.4", reviews: "890" },
    
    { category: "Do", name: "Gyeongbokgung Palace", kind: "Palace", desc: "Seoul's primary royal palace of the Joseon dynasty, famous for the royal guard changing ceremonies", rating: "4.8", reviews: "42,000", ticket: true },
    { category: "Do", name: "N Seoul Tower", kind: "Landmark", desc: "observatory tower perched on top of Namsan mountain, offering 360-degree views over Seoul's cityscape", rating: "4.6", reviews: "38,000", ticket: true },
    { category: "Do", name: "Bukchon Hanok Village", kind: "Cultural Area", desc: "preserved historic neighborhood of hundreds of traditional Korean tiled-roof houses dating back to Joseon", rating: "4.6", reviews: "24,000" },
    { category: "Do", name: "Dongdaemun Design Plaza (DDP)", kind: "Landmark", desc: "Zaha Hadid's futuristic, curvaceous silver architectural icon, hosting fashion shows, design stores, and parks", rating: "4.7", reviews: "18,000" },
    { category: "Do", name: "Myeongdong Shopping Cathedral", kind: "Attraction", desc: "famous shopping district bustling with cosmetics shops, clothing retailers, and delicious street food vendors", rating: "4.5", reviews: "32,000" },
    
    { category: "Shop", name: "Myeongdong Street Market", kind: "Shopping Street", desc: "bustling market alleys packed with cosmetics stores, K-fashion retailers, and dozens of street food carts", rating: "4.5", reviews: "18,000" },
    { category: "Shop", name: "Insadong Antique Alley", kind: "Shopping District", desc: "main street filled with traditional tea houses, art galleries, calligraphy stores, and pottery workshops", rating: "4.6", reviews: "8,900" },
    { category: "Shop", name: "Starfield COEX Mall", kind: "Mall", desc: "giant underground shopping mall famous for its towering multi-story public Starfield Library", rating: "4.6", reviews: "15,000" },
    { category: "Shop", name: "Namdaemun Market", kind: "Historic Market", desc: "Korea's oldest and largest traditional market, selling everything from cheap clothing to kitchenware and snacks", rating: "4.4", reviews: "24,000" },
    { category: "Shop", name: "Hongdae Shopping District", kind: "Shopping District", desc: "vibrant youth fashion district filled with quirky accessory shops, vintage clothing boutiques, and indie labels", rating: "4.5", reviews: "12,000" },
  ]
});

const busan = buildCity({
  key: "busan",
  name: "Busan, South Korea",
  currency: "₩",
  mealRange: [12000, 25000],
  stayRates: [90000, 130000, 180000],
  doCost: 75000,
  shopRange: [80000, 350000],
  cuisineStyle: "Busan Seafood & Gukbap",
  places: [
    { category: "Eat", name: "Jagalchi Fish Market Stalls", kind: "Seafood Market", desc: "Korea's largest seafood market, where you choose fresh fish downstairs and eat it raw or grilled upstairs", rating: "4.5", reviews: "15,000" },
    { category: "Eat", name: "Ssangdunggi Dwaeji Gukbap", kind: "Pork Soup", desc: "legendary local restaurant serving Busan's famous hot pork broth soup with rice and chives", rating: "4.6", reviews: "3,200" },
    { category: "Eat", name: "Samjin Amook", kind: "Fishcake Shop", desc: "historic bakery-style shop in Yeongdo selling delicious, hot fried fishcakes with various toppings since 1953", rating: "4.5", reviews: "2,400" },
    { category: "Eat", name: "Halmae Gaya Milmyeon", kind: "Noodle Shop", desc: "famous local joint serving refreshing cold wheat noodles (milmyeon) in a spicy ice-cold beef broth", rating: "4.4", reviews: "1,500" },
    { category: "Eat", name: "Haeundae Pojangmacha Town", kind: "Seafood Tents", desc: "seaside alley of orange food tents serving fresh live seafood, lobster, and soju in Haeundae", rating: "4.3", reviews: "850" },
    
    { category: "Stay", name: "Park Hyatt Busan", kind: "Hotel", desc: "luxurious 5-star hotel in Marine City featuring floor-to-ceiling windows overlooking the Gwangan Bridge and yacht marina", rating: "4.8", reviews: "1,500" },
    { category: "Stay", name: "Kimchee Haeundae Guesthouse", kind: "Hostel", desc: "lively social hostel located just a short walk from Haeundae Beach, featuring a shared lounge and pub crawls", rating: "4.1", reviews: "940" },
    { category: "Stay", name: "Lotte Hotel Busan", kind: "Hotel", desc: "upscale hotel in Seomyeon featuring modern rooms, a casino, indoor pool, and great central subway access", rating: "4.6", reviews: "2,100" },
    { category: "Stay", name: "Ananti at Busan Cove", kind: "Hotel", desc: "stunning seaside resort in Gijang featuring cliffside infinity pools, a private library, and hot spring spa", rating: "4.7", reviews: "1,200" },
    { category: "Stay", name: "K-Guesthouse Premium Nampo", kind: "Hostel", desc: "modern, clean guesthouse near Nampo-dong shopping street, featuring rooms with sea or city harbor views", rating: "4.4", reviews: "750" },
    
    { category: "Do", name: "Gamcheon Culture Village", kind: "Cultural Village", desc: "hilly neighborhood of brightly painted houses, street murals, and staircases, nicknamed 'Santorini of the East'", rating: "4.6", reviews: "22,000" },
    { category: "Do", name: "Haeundae Beach & Sky Capsule", kind: "Beach", desc: "Korea's most famous beach, featuring scenic colorful mini sky capsules riding on an elevated rail line along the coast", rating: "4.7", reviews: "34,000" },
    { category: "Do", name: "Haedong Yonggungsa Temple", kind: "Temple", desc: "unique and beautiful 14th-century Buddhist temple built directly on rocky cliffs overlooking the ocean", rating: "4.7", reviews: "18,000" },
    { category: "Do", name: "Gwangan Bridge (Diamond Bridge)", kind: "Landmark", desc: "massive double-decker suspension bridge spanning the ocean, famous for its colorful LED light shows at night", rating: "4.8", reviews: "19,000" },
    { category: "Do", name: "Taejongdae Resort Park", kind: "Park", desc: "natural park on Yeongdo island featuring forested walking paths, dramatic ocean cliffs, and a lighthouse", rating: "4.6", reviews: "8,900" },
    
    { category: "Shop", name: "Shinsegae Centum City", kind: "Department Store", desc: "certified by Guinness World Records as the world's largest department store, featuring an ice rink and spa", rating: "4.6", reviews: "15,000" },
    { category: "Shop", name: "Nampo-dong Street", kind: "Shopping Street", desc: "bustling retail area in central Busan packed with fashion brand shops, cosmetic stores, and accessories", rating: "4.4", reviews: "12,000" },
    { category: "Shop", name: "Gukje Market", kind: "Historic Market", desc: "traditional market established during the Korean War, selling vintage clothes, tools, and imported goods", rating: "4.3", reviews: "8,900" },
    { category: "Shop", name: "BIFF Square", kind: "Shopping Street", desc: "pedestrian square celebrating the Busan International Film Festival, lined with cinema complexes and street food", rating: "4.4", reviews: "6,200" },
    { category: "Shop", name: "Jagalchi Dried Fish Market", kind: "Food Market", desc: "historic alleyways near the port filled with wholesalers selling dried anchovies, kelp, and salted fish", rating: "4.4", reviews: "2,100" },
  ]
});

const SOUTH_KOREA = {
  seoul,
  busan
};

// --- FILE: ./src/data/destinations/others.js ---

const prague = buildCity({
  "key": "prague",
  "name": "Prague, Czechia",
  "currency": "Kč",
  "mealRange": [
    504,
    840
  ],
  "stayRates": [
    2800,
    3388,
    4396
  ],
  "doCost": 1680,
  "shopRange": [
    2800,
    9800
  ],
  "cuisineStyle": "Czech",
  "places": [
    {
      "id": "prague_e0",
      "category": "Eat",
      "name": "Lokál Dlouhááá",
      "kind": "Pub",
      "desc": "lively beer hall for tank Pilsner and Czech classics",
      "rating": "4.5",
      "reviews": "11,000",
      "open": "Open 12 pm to 12 am",
      "walk": "in Prague",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "prague_e1",
      "category": "Eat",
      "name": "Café Savoy",
      "kind": "Café",
      "desc": "Café",
      "rating": "4.6",
      "reviews": "7,400",
      "open": "Open 8 am to 8 pm",
      "walk": "in Prague",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "prague_s0",
      "category": "Stay",
      "name": "Hotel Josef",
      "kind": "Hotel",
      "desc": "sleek design rooms in the Old Town",
      "rating": "4.6",
      "reviews": "2,900",
      "open": "Open 24 hours",
      "walk": "in Prague",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "prague_s1",
      "category": "Stay",
      "name": "Mosaic House",
      "kind": "Hotel",
      "desc": "modern, central rooms near the river",
      "rating": "4.3",
      "reviews": "2,100",
      "open": "Open 24 hours",
      "walk": "in Prague",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "prague_d0",
      "category": "Do",
      "name": "Charles Bridge",
      "kind": "Landmark",
      "desc": "a 14th-century statue-lined bridge over the Vltava",
      "rating": "4.8",
      "reviews": "150,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Prague",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "prague_d1",
      "category": "Do",
      "name": "Prague Castle",
      "kind": "Castle",
      "desc": "the world's largest ancient castle complex above the city",
      "rating": "4.7",
      "reviews": "120,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Prague",
      "ticket": true,
      "ticketUrl": "https://www.hrad.cz/en/prague-castle-for-visitors/visiting-information"
    },
    {
      "id": "prague_p0",
      "category": "Shop",
      "name": "Wenceslas Square",
      "kind": "Shopping boulevard",
      "desc": "a long square lined with shops and the National Museum",
      "rating": "4.3",
      "reviews": "18,000",
      "open": "Shops open 10 am to 9 pm",
      "walk": "in Prague",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "prague_p1",
      "category": "Shop",
      "name": "Havelská Market",
      "kind": "Market",
      "desc": "a historic open-air market for crafts and produce",
      "rating": "4.2",
      "reviews": "2,400",
      "open": "Open 9 am to 6 pm",
      "walk": "in Prague",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const athens = buildCity({
  "key": "athens",
  "name": "Athens, Greece",
  "currency": "€",
  "mealRange": [
    19,
    33
  ],
  "stayRates": [
    110,
    133,
    173
  ],
  "doCost": 66,
  "shopRange": [
    110,
    385
  ],
  "cuisineStyle": "Greek",
  "places": [
    {
      "id": "athens_e0",
      "category": "Eat",
      "name": "O Kostas",
      "kind": "Souvlaki",
      "desc": "tiny central spot famous for souvlaki since 1950",
      "rating": "4.6",
      "reviews": "4,200",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Athens",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "athens_e1",
      "category": "Eat",
      "name": "Karamanlidika",
      "kind": "Meze",
      "desc": "deli-taverna for cured meats, cheeses and meze",
      "rating": "4.5",
      "reviews": "6,800",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Athens",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "athens_s0",
      "category": "Stay",
      "name": "AthensWas Hotel",
      "kind": "Hotel",
      "desc": "design rooms with Acropolis views in Plaka",
      "rating": "4.6",
      "reviews": "2,100",
      "open": "Open 24 hours",
      "walk": "in Athens",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "athens_s1",
      "category": "Stay",
      "name": "Plaka Hotel",
      "kind": "Hotel",
      "desc": "friendly rooms with a rooftop in the old quarter",
      "rating": "4.3",
      "reviews": "1,900",
      "open": "Open 24 hours",
      "walk": "in Athens",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "athens_d0",
      "category": "Do",
      "name": "Acropolis",
      "kind": "Landmark",
      "desc": "is the ancient citadel crowned by the Parthenon",
      "rating": "4.8",
      "reviews": "200,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Athens",
      "ticket": true,
      "ticketUrl": "https://etickets.tap.gr/"
    },
    {
      "id": "athens_d1",
      "category": "Do",
      "name": "Acropolis Museum",
      "kind": "Museum",
      "desc": "Museum is a sleek museum displaying the hill's surviving treasures",
      "rating": "4.7",
      "reviews": "60,000",
      "open": "Open 10 am to 6 pm",
      "walk": "in Athens",
      "ticket": true,
      "ticketUrl": "https://www.theacropolismuseum.gr/en/content/tickets"
    },
    {
      "id": "athens_p0",
      "category": "Shop",
      "name": "Monastiraki",
      "kind": "Flea market",
      "desc": "a bustling square of antiques, crafts and street food",
      "rating": "4.4",
      "reviews": "20,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Athens",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "athens_p1",
      "category": "Shop",
      "name": "Ermou Street",
      "kind": "Shopping street",
      "desc": "Athens' main pedestrian shopping artery",
      "rating": "4.3",
      "reviews": "9,000",
      "open": "Shops open 10 am to 9 pm",
      "walk": "in Athens",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const hyderabad = buildCity({
  "key": "hyderabad",
  "name": "Hyderabad, India",
  "currency": "₹",
  "mealRange": [
    900,
    1500
  ],
  "stayRates": [
    5000,
    6050,
    7850
  ],
  "doCost": 3000,
  "shopRange": [
    5000,
    17500
  ],
  "cuisineStyle": "Hyderabadi",
  "places": [
    {
      "id": "hyderabad_e0",
      "category": "Eat",
      "name": "Jewel of Nizam Restaurant",
      "kind": "Fine dining",
      "desc": "Fine dining",
      "rating": "4.5",
      "reviews": "9,800",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Hyderabad",
      "ticket": false,
      "ticketUrl": ""
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
      "walk": "in Hyderabad",
      "ticket": false,
      "ticketUrl": ""
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
      "walk": "in Hyderabad",
      "ticket": false,
      "ticketUrl": ""
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
      "walk": "in Hyderabad",
      "ticket": false,
      "ticketUrl": ""
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
      "ticket": true,
      "ticketUrl": ""
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
      "ticket": true,
      "ticketUrl": ""
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
      "walk": "in Hyderabad",
      "ticket": false,
      "ticketUrl": ""
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
      "walk": "in Hyderabad",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const mexicocity = buildCity({
  "key": "mexicocity",
  "name": "Mexico City, Mexico",
  "currency": "$",
  "mealRange": [
    360,
    600
  ],
  "stayRates": [
    2000,
    2420,
    3140
  ],
  "doCost": 1200,
  "shopRange": [
    2000,
    7000
  ],
  "cuisineStyle": "Mexican",
  "places": [
    {
      "id": "mexicocity_e0",
      "category": "Eat",
      "name": "El Huequito",
      "kind": "Taquería",
      "desc": "Taquería",
      "rating": "4.5",
      "reviews": "13,000",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Mexico City",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "mexicocity_e1",
      "category": "Eat",
      "name": "Contramar",
      "kind": "Seafood",
      "desc": "buzzy lunch spot famous for tuna tostadas and grilled fish",
      "rating": "4.6",
      "reviews": "9,800",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Mexico City",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "mexicocity_s0",
      "category": "Stay",
      "name": "Hotel Carlota",
      "kind": "Hotel",
      "desc": "design hotel with a courtyard pool in Cuauhtémoc",
      "rating": "4.6",
      "reviews": "3,400",
      "open": "Open 24 hours",
      "walk": "in Mexico City",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "mexicocity_s1",
      "category": "Stay",
      "name": "Hostel Mundo Joven",
      "kind": "Hostel",
      "desc": "central rooms by the Zócalo with a rooftop bar",
      "rating": "4.2",
      "reviews": "2,600",
      "open": "Open 24 hours",
      "walk": "in Mexico City",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "mexicocity_d0",
      "category": "Do",
      "name": "Zócalo",
      "kind": "Square",
      "desc": "one of the world's largest city squares",
      "rating": "4.7",
      "reviews": "140,000",
      "open": "Open 24 hours",
      "walk": "in Mexico City",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "mexicocity_d1",
      "category": "Do",
      "name": "Teotihuacán",
      "kind": "Ruins",
      "desc": "vast pyramids of the Sun and Moon north of the city",
      "rating": "4.8",
      "reviews": "95,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Mexico City",
      "ticket": true,
      "ticketUrl": ""
    },
    {
      "id": "mexicocity_p0",
      "category": "Shop",
      "name": "Mercado de la Ciudadela",
      "kind": "Craft market",
      "desc": "a sprawling market for Mexican folk art and crafts",
      "rating": "4.5",
      "reviews": "18,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Mexico City",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "mexicocity_p1",
      "category": "Shop",
      "name": "Roma & Condesa",
      "kind": "Shopping district",
      "desc": "leafy streets of indie design shops and cafés",
      "rating": "4.5",
      "reviews": "12,000",
      "open": "Shops open 10 am to 9 pm",
      "walk": "in Mexico City",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const marrakech = buildCity({
  "key": "marrakech",
  "name": "Marrakech, Morocco",
  "currency": "MAD",
  "mealRange": [
    162,
    270
  ],
  "stayRates": [
    900,
    1089,
    1413
  ],
  "doCost": 540,
  "shopRange": [
    900,
    3150
  ],
  "cuisineStyle": "Moroccan",
  "places": [
    {
      "id": "marrakech_e0",
      "category": "Eat",
      "name": "Nomad",
      "kind": "Modern Moroccan",
      "desc": "Modern Moroccan",
      "rating": "4.5",
      "reviews": "6,200",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Marrakech",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "marrakech_e1",
      "category": "Eat",
      "name": "Café Clock",
      "kind": "Café",
      "desc": "Café",
      "rating": "4.4",
      "reviews": "4,100",
      "open": "Open 8 am to 8 pm",
      "walk": "in Marrakech",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "marrakech_s0",
      "category": "Stay",
      "name": "Riad Yasmine",
      "kind": "Riad",
      "desc": "famous riad with a green-tiled courtyard pool",
      "rating": "4.7",
      "reviews": "3,300",
      "open": "Open 24 hours",
      "walk": "in Marrakech",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "marrakech_s1",
      "category": "Stay",
      "name": "Riad BE Marrakech",
      "kind": "Riad",
      "desc": "calm, art-filled riad a short walk from the square",
      "rating": "4.6",
      "reviews": "1,900",
      "open": "Open 24 hours",
      "walk": "in Marrakech",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "marrakech_d0",
      "category": "Do",
      "name": "Jemaa el-Fnaa",
      "kind": "Square",
      "desc": "the medina's legendary square of stalls",
      "rating": "4.6",
      "reviews": "90,000",
      "open": "Open 24 hours",
      "walk": "in Marrakech",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "marrakech_d1",
      "category": "Do",
      "name": "Bahia Palace",
      "kind": "Palace",
      "desc": "a 19th-century palace of carved cedar and tiled courtyards",
      "rating": "4.6",
      "reviews": "45,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Marrakech",
      "ticket": true,
      "ticketUrl": ""
    },
    {
      "id": "marrakech_p0",
      "category": "Shop",
      "name": "Souk Semmarine",
      "kind": "Souk",
      "desc": "the medina's main souk for lanterns, leather and rugs",
      "rating": "4.5",
      "reviews": "30,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Marrakech",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "marrakech_p1",
      "category": "Shop",
      "name": "Ensemble Artisanal",
      "kind": "Craft market",
      "desc": "a fixed-price crafts hall, good for a relaxed browse",
      "rating": "4.2",
      "reviews": "1,200",
      "open": "Open 9 am to 6 pm",
      "walk": "in Marrakech",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const lisbon = buildCity({
  "key": "lisbon",
  "name": "Lisbon, Portugal",
  "currency": "€",
  "mealRange": [
    21,
    36
  ],
  "stayRates": [
    120,
    145,
    188
  ],
  "doCost": 72,
  "shopRange": [
    120,
    420
  ],
  "cuisineStyle": "Portuguese",
  "places": [
    {
      "id": "lisbon_e0",
      "category": "Eat",
      "name": "Time Out Market",
      "kind": "Food hall",
      "desc": "Food hall",
      "rating": "4.5",
      "reviews": "30,000",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Lisbon",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "lisbon_e1",
      "category": "Eat",
      "name": "Cervejaria Ramiro",
      "kind": "Seafood",
      "desc": "beer-hall seafood institution for prawns and crab",
      "rating": "4.6",
      "reviews": "18,000",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Lisbon",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "lisbon_s0",
      "category": "Stay",
      "name": "Lisbon Story Guesthouse",
      "kind": "Guesthouse",
      "desc": "charming rooms on a square near the river",
      "rating": "4.5",
      "reviews": "1,500",
      "open": "Open 24 hours",
      "walk": "in Lisbon",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "lisbon_s1",
      "category": "Stay",
      "name": "Hotel Alfama",
      "kind": "Hotel",
      "desc": "simple rooms in the tangled lanes of old Alfama",
      "rating": "4.3",
      "reviews": "1,200",
      "open": "Open 24 hours",
      "walk": "in Lisbon",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "lisbon_d0",
      "category": "Do",
      "name": "Belém Tower",
      "kind": "Landmark",
      "desc": "a 16th-century riverside fort and Manueline gem",
      "rating": "4.6",
      "reviews": "60,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Lisbon",
      "ticket": true,
      "ticketUrl": ""
    },
    {
      "id": "lisbon_d1",
      "category": "Do",
      "name": "Jerónimos Monastery",
      "kind": "Monastery",
      "desc": "an ornate UNESCO monastery and resting place of explorers",
      "rating": "4.7",
      "reviews": "75,000",
      "open": "Open 8 am to 6 pm",
      "walk": "in Lisbon",
      "ticket": true,
      "ticketUrl": ""
    },
    {
      "id": "lisbon_p0",
      "category": "Shop",
      "name": "Rua Augusta",
      "kind": "Shopping street",
      "desc": "a grand pedestrian street under a triumphal arch",
      "rating": "4.4",
      "reviews": "12,000",
      "open": "Shops open 10 am to 9 pm",
      "walk": "in Lisbon",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "lisbon_p1",
      "category": "Shop",
      "name": "LX Factory",
      "kind": "Creative hub",
      "desc": "a converted factory of indie shops, cafés and a bookshop",
      "rating": "4.5",
      "reviews": "9,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Lisbon",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const bangkok = buildCity({
  "key": "bangkok",
  "name": "Bangkok, Thailand",
  "currency": "฿",
  "mealRange": [
    450,
    750
  ],
  "stayRates": [
    2500,
    3025,
    3925
  ],
  "doCost": 1500,
  "shopRange": [
    2500,
    8750
  ],
  "cuisineStyle": "Local",
  "places": [
    {
      "id": "bangkok_e0",
      "category": "Eat",
      "name": "Thip Samai",
      "kind": "Pad Thai",
      "desc": "Pad Thai",
      "rating": "4.5",
      "reviews": "9,800",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Bangkok",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "bangkok_e1",
      "category": "Eat",
      "name": "Jay Fai",
      "kind": "Street food",
      "desc": "Street food",
      "rating": "4.4",
      "reviews": "6,400",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Bangkok",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "bangkok_s0",
      "category": "Stay",
      "name": "Riva Surya",
      "kind": "Hotel",
      "desc": "riverside rooms near the old town and Khao San",
      "rating": "4.6",
      "reviews": "2,600",
      "open": "Open 24 hours",
      "walk": "in Bangkok",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "bangkok_s1",
      "category": "Stay",
      "name": "Ibis Bangkok Riverside",
      "kind": "Hotel",
      "desc": "easy river-view rooms with a pool and pier shuttle",
      "rating": "4.3",
      "reviews": "3,100",
      "open": "Open 24 hours",
      "walk": "in Bangkok",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "bangkok_d0",
      "category": "Do",
      "name": "Grand Palace",
      "kind": "Landmark",
      "desc": "the dazzling former royal residence and Wat Phra Kaew",
      "rating": "4.7",
      "reviews": "160,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Bangkok",
      "ticket": true,
      "ticketUrl": "https://www.royalgrandpalace.th/en/home"
    },
    {
      "id": "bangkok_d1",
      "category": "Do",
      "name": "Wat Arun",
      "kind": "Temple",
      "desc": "the riverside Temple of Dawn with its porcelain-clad spire",
      "rating": "4.7",
      "reviews": "80,000",
      "open": "Open 8 am to 6 pm",
      "walk": "in Bangkok",
      "ticket": true,
      "ticketUrl": ""
    },
    {
      "id": "bangkok_p0",
      "category": "Shop",
      "name": "Chatuchak Market",
      "kind": "Weekend market",
      "desc": "15,000 stalls of clothes, crafts, plants and food",
      "rating": "4.5",
      "reviews": "70,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Bangkok",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "bangkok_p1",
      "category": "Shop",
      "name": "Iconsiam",
      "kind": "Mall",
      "desc": "riverside mega-mall with an indoor floating market",
      "rating": "4.6",
      "reviews": "40,000",
      "open": "Open 10 am to 10 pm",
      "walk": "in Bangkok",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const istanbul = buildCity({
  "key": "istanbul",
  "name": "Istanbul, Turkey",
  "currency": "₺",
  "mealRange": [
    396,
    660
  ],
  "stayRates": [
    2200,
    2662,
    3454
  ],
  "doCost": 1320,
  "shopRange": [
    2200,
    7700
  ],
  "cuisineStyle": "Turkish",
  "places": [
    {
      "id": "istanbul_e0",
      "category": "Eat",
      "name": "Çiya Sofrası",
      "kind": "Anatolian",
      "desc": "Anatolian",
      "rating": "4.6",
      "reviews": "7,200",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Istanbul",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "istanbul_e1",
      "category": "Eat",
      "name": "Karaköy Güllüoğlu",
      "kind": "Baklava",
      "desc": "century-old shop for pistachio baklava by the water",
      "rating": "4.5",
      "reviews": "11,000",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Istanbul",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "istanbul_s0",
      "category": "Stay",
      "name": "Sirkeci Mansion",
      "kind": "Hotel",
      "desc": "elegant rooms steps from Topkapi and the tram",
      "rating": "4.7",
      "reviews": "2,400",
      "open": "Open 24 hours",
      "walk": "in Istanbul",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "istanbul_s1",
      "category": "Stay",
      "name": "Hotel Sultanahmet",
      "kind": "Hotel",
      "desc": "simple rooms between the Blue Mosque and Hagia Sophia",
      "rating": "4.2",
      "reviews": "1,700",
      "open": "Open 24 hours",
      "walk": "in Istanbul",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "istanbul_d0",
      "category": "Do",
      "name": "Hagia Sophia",
      "kind": "Landmark",
      "desc": "a 6th-century marvel that has been church",
      "rating": "4.8",
      "reviews": "180,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Istanbul",
      "ticket": true,
      "ticketUrl": ""
    },
    {
      "id": "istanbul_d1",
      "category": "Do",
      "name": "Blue Mosque",
      "kind": "Mosque",
      "desc": "the Sultan Ahmed Mosque",
      "rating": "4.7",
      "reviews": "120,000",
      "open": "Open 8 am to 6 pm",
      "walk": "in Istanbul",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "istanbul_p0",
      "category": "Shop",
      "name": "Grand Bazaar",
      "kind": "Bazaar",
      "desc": "one of the world's oldest covered markets, 4,000 shops deep",
      "rating": "4.5",
      "reviews": "90,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Istanbul",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "istanbul_p1",
      "category": "Shop",
      "name": "Spice Bazaar",
      "kind": "Market",
      "desc": "fragrant stalls of spices, teas and Turkish delight",
      "rating": "4.5",
      "reviews": "40,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Istanbul",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const dubai = buildCity({
  "key": "dubai",
  "name": "Dubai, UAE",
  "currency": "AED",
  "mealRange": [
    108,
    180
  ],
  "stayRates": [
    600,
    726,
    942
  ],
  "doCost": 360,
  "shopRange": [
    600,
    2100
  ],
  "cuisineStyle": "Local",
  "places": [
    {
      "id": "dubai_e0",
      "category": "Eat",
      "name": "Al Ustad Special Kebab",
      "kind": "Persian",
      "desc": "a 1978 institution for kebabs and saffron rice",
      "rating": "4.5",
      "reviews": "8,100",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Dubai",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "dubai_e1",
      "category": "Eat",
      "name": "Ravi Restaurant",
      "kind": "Pakistani",
      "desc": "beloved no-frills spot for curries and fresh naan",
      "rating": "4.4",
      "reviews": "12,000",
      "open": "Open 12 pm to 11 pm",
      "walk": "in Dubai",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "dubai_s0",
      "category": "Stay",
      "name": "Rove Downtown",
      "kind": "Hotel",
      "desc": "modern, well-priced rooms near the Burj Khalifa",
      "rating": "4.6",
      "reviews": "6,200",
      "open": "Open 24 hours",
      "walk": "in Dubai",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "dubai_s1",
      "category": "Stay",
      "name": "Citymax Bur Dubai",
      "kind": "Hotel",
      "desc": "handy rooms close to the creek and old souks",
      "rating": "4.2",
      "reviews": "3,400",
      "open": "Open 24 hours",
      "walk": "in Dubai",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "dubai_d0",
      "category": "Do",
      "name": "Burj Khalifa",
      "kind": "Landmark",
      "desc": "the world's tallest building at 828 metres",
      "rating": "4.8",
      "reviews": "220,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Dubai",
      "ticket": true,
      "ticketUrl": "https://www.burjkhalifa.ae/en/tickets/"
    },
    {
      "id": "dubai_d1",
      "category": "Do",
      "name": "Dubai Fountain",
      "kind": "Attraction",
      "desc": "free choreographed water shows on the Burj Khalifa lake",
      "rating": "4.7",
      "reviews": "90,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Dubai",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "dubai_p0",
      "category": "Shop",
      "name": "The Dubai Mall",
      "kind": "Mall",
      "desc": "one of the world's largest malls, with an aquarium and souk",
      "rating": "4.7",
      "reviews": "260,000",
      "open": "Open 10 am to 10 pm",
      "walk": "in Dubai",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "dubai_p1",
      "category": "Shop",
      "name": "Gold Souk",
      "kind": "Souk",
      "desc": "glittering lanes of gold and jewellery in Deira",
      "rating": "4.5",
      "reviews": "30,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in Dubai",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const london = buildCity({
  "key": "london",
  "name": "London, UK",
  "currency": "£",
  "mealRange": [
    28,
    48
  ],
  "stayRates": [
    160,
    194,
    251
  ],
  "doCost": 96,
  "shopRange": [
    160,
    560
  ],
  "cuisineStyle": "Local",
  "places": [
    {
      "id": "london_e0",
      "category": "Eat",
      "name": "Poppies Fish & Chips",
      "kind": "Chippy",
      "desc": "retro Spitalfields chippy for cod, chips and mushy peas",
      "rating": "4.5",
      "reviews": "6,800",
      "open": "Open 12 pm to 11 pm",
      "walk": "in London",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "london_e1",
      "category": "Eat",
      "name": "Dishoom",
      "kind": "Indian",
      "desc": "Indian",
      "rating": "4.7",
      "reviews": "30,000",
      "open": "Open 12 pm to 11 pm",
      "walk": "in London",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "london_s0",
      "category": "Stay",
      "name": "The Hoxton, Shoreditch",
      "kind": "Hotel",
      "desc": "buzzy lobby and snug rooms in creative east London",
      "rating": "4.6",
      "reviews": "4,100",
      "open": "Open 24 hours",
      "walk": "in London",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "london_s1",
      "category": "Stay",
      "name": "Premier Inn County Hall",
      "kind": "Hotel",
      "desc": "reliable rooms by the Thames near the London Eye",
      "rating": "4.5",
      "reviews": "9,200",
      "open": "Open 24 hours",
      "walk": "in London",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "london_d0",
      "category": "Do",
      "name": "Tower of London",
      "kind": "Castle",
      "desc": "a 1",
      "rating": "4.7",
      "reviews": "85,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in London",
      "ticket": true,
      "ticketUrl": "https://www.hrp.org.uk/tower-of-london/visit/tickets/"
    },
    {
      "id": "london_d1",
      "category": "Do",
      "name": "British Museum",
      "kind": "Museum",
      "desc": "two million years of history",
      "rating": "4.8",
      "reviews": "210,000",
      "open": "Open 10 am to 6 pm",
      "walk": "in London",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "london_p0",
      "category": "Shop",
      "name": "Covent Garden",
      "kind": "Shopping district",
      "desc": "piazza shops, market stalls and street performers",
      "rating": "4.6",
      "reviews": "60,000",
      "open": "Shops open 10 am to 9 pm",
      "walk": "in London",
      "ticket": false,
      "ticketUrl": ""
    },
    {
      "id": "london_p1",
      "category": "Shop",
      "name": "Borough Market",
      "kind": "Food market",
      "desc": "a foodie landmark of artisan stalls under railway arches",
      "rating": "4.6",
      "reviews": "48,000",
      "open": "Open 9 am to 6 pm",
      "walk": "in London",
      "ticket": false,
      "ticketUrl": ""
    }
  ]
});

const OTHERS = {
  prague,
  athens,
  hyderabad,
  mexicocity,
  marrakech,
  lisbon,
  bangkok,
  istanbul,
  dubai,
  london,
};

// --- FILE: ./src/data/cities.js ---

const CITY_DATA = {
  ...SPAIN,
  ...AUSTRALIA,
  ...FRANCE,
  ...ITALY,
  ...JAPAN,
  ...USA,
  ...GERMANY,
  ...NETHERLANDS,
  ...SINGAPORE,
  ...SOUTH_KOREA,
  ...OTHERS
};

const CITIES = [
  { key: "sydney", label: "Australia - Sydney" },
  { key: "melbourne", label: "Australia - Melbourne" },
  { key: "brisbane", label: "Australia - Brisbane" },
  
  { key: "prague", label: "Czechia - Prague" },
  
  { key: "paris", label: "France - Paris" },
  { key: "nice", label: "France - Nice" },
  { key: "lyon", label: "France - Lyon" },
  
  { key: "berlin", label: "Germany - Berlin" },
  { key: "munich", label: "Germany - Munich" },
  { key: "hamburg", label: "Germany - Hamburg" },
  
  { key: "athens", label: "Greece - Athens" },
  
  { key: "hyderabad", label: "India - Hyderabad" },
  
  { key: "rome", label: "Italy - Rome" },
  { key: "milan", label: "Italy - Milan" },
  { key: "venice", label: "Italy - Venice" },
  
  { key: "tokyo", label: "Japan - Tokyo" },
  { key: "kyoto", label: "Japan - Kyoto" },
  { key: "osaka", label: "Japan - Osaka" },
  
  { key: "mexicocity", label: "Mexico - Mexico City" },
  { key: "marrakech", label: "Morocco - Marrakech" },
  
  { key: "amsterdam", label: "Netherlands - Amsterdam" },
  { key: "rotterdam", label: "Netherlands - Rotterdam" },
  
  { key: "lisbon", label: "Portugal - Lisbon" },
  { key: "singapore", label: "Singapore - Singapore City" },
  { key: "seoul", label: "South Korea - Seoul" },
  { key: "busan", label: "South Korea - Busan" },
  
  { key: "barcelona", label: "Spain - Barcelona" },
  { key: "madrid", label: "Spain - Madrid" },
  { key: "seville", label: "Spain - Seville" },
  
  { key: "bangkok", label: "Thailand - Bangkok" },
  { key: "istanbul", label: "Turkey - Istanbul" },
  { key: "dubai", label: "UAE - Dubai" },
  { key: "london", label: "UK - London" },
  { key: "newyork", label: "USA - New York" },
  { key: "sanfrancisco", label: "USA - San Francisco" },
  { key: "losangeles", label: "USA - Los Angeles" },
];

const list = (obj) => Object.values(obj);
Object.keys(CITY_DATA).forEach((k) => {
  const d = CITY_DATA[k];
  d.businessList = list(d.businesses);
  d.guideList = list(d.guides);
});

const ENTITIES_ALL = {};
Object.values(CITY_DATA).forEach((d) => {
  Object.assign(ENTITIES_ALL, d.businesses, d.guides);
});

const errors = [];

// Assert CITIES dropdown keys
CITIES.forEach(c => {
  if (!CITY_DATA[c.key]) {
    errors.push(`Dropdown key "${c.key}" does not exist in CITY_DATA`);
  }
});

// Assert requested cities have at least 5 items in each category
const requestedExpandedCities = [
  'barcelona', 'madrid', 'seville',
  'sydney', 'melbourne', 'brisbane',
  'paris', 'nice', 'lyon',
  'rome', 'milan', 'venice',
  'tokyo', 'kyoto', 'osaka',
  'newyork', 'sanfrancisco', 'losangeles',
  'berlin', 'munich', 'hamburg',
  'amsterdam', 'rotterdam',
  'singapore',
  'seoul', 'busan'
];

requestedExpandedCities.forEach(key => {
  const city = CITY_DATA[key];
  if (!city) {
    errors.push(`Required city "${key}" not found in CITY_DATA`);
    return;
  }
  
  const categories = { Eat: 0, Stay: 0, Do: 0, Shop: 0 };
  Object.values(city.businesses || {}).forEach(b => {
    if (categories[b.category] !== undefined) {
      categories[b.category]++;
    } else {
      errors.push(`Business "${b.id}" in "${key}" has unknown category "${b.category}"`);
    }
  });
  
  Object.keys(categories).forEach(cat => {
    if (categories[cat] < 5) {
      errors.push(`City "${key}" has only ${categories[cat]} items in category "${cat}" (expected >= 5)`);
    }
  });
});

// Assert guides exist for all cities
Object.keys(CITY_DATA).forEach(key => {
  const city = CITY_DATA[key];
  const guidesCount = Object.keys(city.guides || {}).length;
  if (guidesCount === 0) {
    errors.push(`City "${key}" has 0 guides`);
  }
});

// Print results
if (errors.length === 0) {
  console.log('Success: Static data evaluation passed! All 26 cities have >= 5 items per category and valid guides.');
  process.exit(0);
} else {
  console.error('Validation failed with the following errors:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
}
