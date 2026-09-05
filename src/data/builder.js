import { cityDetails } from "./cityDetails";
import { CARTOON_PFPS_MALE, CARTOON_PFPS_FEMALE, CARTOON_PFPS_OTHERS } from "./cartoonPFPs";

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


function seededShuffle(arr, seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) & 0xffffffff;
  }
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    hash = (1103515245 * hash + 12345) & 0x7fffffff;
    const j = hash % (i + 1);
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

function makeGuidesForCity(cityName, key, existingGuides) {
  const femaleNames = [
    "Olivia", "Sophia", "Emma", "Isabella", "Mia", 
    "Aria", "Charlotte", "Amelia", "Harper", "Evelyn", 
    "Abigail", "Emily", "Elizabeth", "Sofia", "Avery"
  ];
  const maleNames = [
    "Liam", "Noah", "Oliver", "Lucas", "Mason", 
    "Ethan", "Logan", "James", "Alexander", "Elijah", 
    "Benjamin", "Sebastian", "William", "Lucas-Gabriel", "Michael"
  ];
  const otherNames = [
    "Sam", "Alex", "Jordan", "Taylor", "Charlie", 
    "Casey", "Jamie", "Morgan", "Robin", "Skyler", 
    "Pat", "Kim", "Kelly", "Chris", "Drew"
  ];
  const lastNames = [
    "Brown", "Smith", "Davis", "Garcia", "Wilson", 
    "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", 
    "Moore", "Martin", "Jackson", "Thompson", "White"
  ];
  
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

  const languagesPool = [
    ["English", "Spanish"],
    ["English", "French"],
    ["English", "German"],
    ["English", "Japanese"],
    ["English", "Mandarin"],
    ["English", "Italian"],
    ["English", "Korean"],
    ["English", "Portuguese"]
  ];
  
  const guides = {};
  const usedImages = new Set();
  
  const shuffledFemale = seededShuffle(CARTOON_PFPS_FEMALE, key + "-female");
  const shuffledMale = seededShuffle(CARTOON_PFPS_MALE, key + "-male");
  const shuffledOthers = seededShuffle(CARTOON_PFPS_OTHERS, key + "-others");
  
  if (existingGuides) {
    Object.keys(existingGuides).forEach((id, idx) => {
      const g = existingGuides[id];
      const pool = g.gender === "Female" ? shuffledFemale : g.gender === "Male" ? shuffledMale : shuffledOthers;
      let pfpIndex = (idx * 5 + key.charCodeAt(0)) % pool.length;
      let candidateImage = pool[pfpIndex];
      let offset = 0;
      while (usedImages.has(candidateImage)) {
        offset++;
        candidateImage = pool[(pfpIndex + offset) % pool.length];
      }
      usedImages.add(candidateImage);

      guides[id] = {
        ...g,
        id,
        category: "Guides",
        guide: true,
        pic: undefined,
        image: candidateImage,
        languages: g.languages || ["English", ["Spanish", "Catalan", "French"][Math.floor(Math.random() * 3)]],
        specialization: g.specialization || "Art & Architecture",
        contact: g.contact || `+34 93${Math.floor(100 + Math.random() * 900)} ${Math.floor(10 + Math.random() * 90)} ${Math.floor(10 + Math.random() * 90)}`
      };
    });
  }

  const genders = [
    { gender: "Female", firsts: femaleNames },
    { gender: "Male", firsts: maleNames },
    { gender: "Others", firsts: otherNames }
  ];
  
  genders.forEach(({ gender, firsts }) => {
    let existingCount = 0;
    if (existingGuides) {
      existingCount = Object.values(existingGuides).filter(g => g.gender === gender).length;
    }
    
    for (let i = existingCount; i < 15; i++) {
      const first = firsts[i % firsts.length];
      const last = lastNames[(i * 7 + key.charCodeAt(0)) % lastNames.length];
      const name = `${first} ${last}`;
      const id = `${key}_g_${gender.toLowerCase()}_${i}`;
      
      const pool = gender === "Female" ? shuffledFemale : gender === "Male" ? shuffledMale : shuffledOthers;
      let pfpIndex = (i * 3 + (gender === "Female" ? 0 : gender === "Male" ? 1 : 2)) % pool.length;
      let candidateImage = pool[pfpIndex];
      let offset = 0;
      while (usedImages.has(candidateImage)) {
        offset++;
        candidateImage = pool[(pfpIndex + offset) % pool.length];
      }
      const image = candidateImage;
      usedImages.add(image);
      
      const tour = tourTypes[i % tourTypes.length];
      const reviews = Math.floor(100 + Math.random() * 5000).toLocaleString();
      const rating = (4.0 + Math.random() * 1.0).toFixed(1);
      const pronoun = gender === "Female" ? "she" : gender === "Male" ? "he" : "they";
      const pronounCapital = pronoun.charAt(0).toUpperCase() + pronoun.slice(1);
      
      const languages = languagesPool[(i * 3 + key.charCodeAt(0)) % languagesPool.length];
      const specialization = ["Food & Markets", "Art & History", "Off the Beaten Path", "Architecture", "Nightlife & Music", "Photography", "Street Food", "Nature & Parks"][i % 8];
      const contact = `+${(i * 17 + key.charCodeAt(0) * 11) % 900 + 100} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`;

      guides[id] = {
        id,
        name,
        category: "Guides",
        guide: true,
        city: cityName,
        pic: undefined,
        image,
        gender,
        rating,
        reviews,
        kind: "Local guide",
        walk: `meets in ${cityName}`,
        open: "Available this week",
        note: `${first} is a ${cityName} local who loves showing visitors the version of the city ${pronoun} actually lives in. Warm, easy-going and full of stories, ${first} runs ${tour} that go well beyond the guidebook.`,
        detail: `Born and raised around ${cityName}, ${first} has spent years getting to know its streets, its people and its best kept corners. Tours are relaxed and personal, and ${pronoun} happily shapes the day around whatever you're curious about, whether that's local life, history, or just finding the perfect quiet spot for a coffee. ${pronounCapital} care goes into how you feel at the end of the day rather than ticking off a checklist, so you come away feeling like you saw the real ${cityName}, not just its postcards.`,
        languages,
        specialization,
        contact
      };
    }
  });
  
  return guides;
}

export function buildCity({
  key,
  name,
  currency,
  mealRange,
  stayRates,
  doCost,
  shopRange,
  cuisineStyle,
  places,
  existingGuides
}) {
  const cityName = name.split(",")[0].trim();
  const businesses = {};
  
  // 1. Get city details from central database
  const details = cityDetails[key] || {
    neighborhoods: ["City Center"],
    dishes: ["Local Specialties"],
    landmarks: [`Explore ${cityName}`],
    shops: ["local crafts"]
  };

  // 2. Separate existing places by category
  const stays = places.filter((p) => p.category === "Stay");
  const eats = places.filter((p) => p.category === "Eat");
  const dos = places.filter((p) => p.category === "Do");
  const shops = places.filter((p) => p.category === "Shop");

  const usedNames = new Set(places.map((p) => p.name.toLowerCase()));

  // 3. Expand stays to 12
  for (let i = stays.length; i < 12; i++) {
    const neighborhood = details.neighborhoods[i % details.neighborhoods.length];
    const hotelSuffix = ["Boutique Stay", "Grand Hotel", "Guesthouse", "Central Hostel", "Luxury Apartments", "Heritage Inn", "Eco Resort", "Metropolitan Hotel", "Cozy B&B", "Executive Suites", "Travelers Lodge", "Plaza Stay"][i % 12];
    const kind = ["Hotel", "Hotel", "Guesthouse", "Hostel", "Apartment", "Hotel", "Hotel", "Hotel", "Guesthouse", "Hotel", "Hostel", "Hotel"][i % 12];
    const roomType = ["cozy single rooms", "spacious double rooms", "modern private studios", "comfortable shared dorms", "deluxe queen rooms", "heritage rooms", "smart guest rooms", "stylish suites", "classic family rooms", "executive luxury rooms", "budget cabins", "balcony suites"][i % 12];
    const price = stayRates[i % stayRates.length];
    const rating = (4.1 + ((i * 3 + key.charCodeAt(0)) % 8) * 0.1).toFixed(1);
    const reviews = ((i * 257 + key.charCodeAt(0) * 19) % 3000 + 400).toLocaleString();
    
    let generatedName = `${neighborhood} ${hotelSuffix}`;
    let attempts = 0;
    while (usedNames.has(generatedName.toLowerCase())) {
      const altSuffix = ["Hotel", "Boutique", "Resort", "Suites", "Lodge", "Inn", "Apartments", "Hostel", "Manor", "Villas"][(i + attempts) % 10];
      generatedName = `${neighborhood} ${altSuffix}`;
      attempts++;
    }
    usedNames.add(generatedName.toLowerCase());
    
    places.push({
      category: "Stay",
      name: generatedName,
      kind,
      desc: `${roomType} in the vibrant ${neighborhood} district`,
      rating,
      reviews,
      price,
      roomType,
      neighborhood
    });
  }

  // 4. Expand eats to 12
  for (let i = eats.length; i < 12; i++) {
    const neighborhood = details.neighborhoods[i % details.neighborhoods.length];
    const eatSuffix = ["Bistro", "Cafe", "Tavern", "Eatery", "Ramen Bar", "Bakery", "Food Stall", "Seafood Grill", "Fine Dining", "Street Kitchen", "Diner", "Grill"][i % 12];
    const kind = ["Bistro", "Cafe", "Tavern", "Eatery", "Noodle Bar", "Bakery", "Food Stall", "Restaurant", "Restaurant", "Street Food", "Diner", "Grill"][i % 12];
    const famousDish = details.dishes[i % details.dishes.length];
    const price = mealRange[0] + Math.floor((i % 5) * (mealRange[1] - mealRange[0]) / 4);
    const rating = (4.1 + ((i * 3 + key.charCodeAt(0) * 7) % 8) * 0.1).toFixed(1);
    const reviews = ((i * 189 + key.charCodeAt(0) * 31) % 4000 + 300).toLocaleString();
    
    let generatedName = `${neighborhood} ${eatSuffix}`;
    let attempts = 0;
    while (usedNames.has(generatedName.toLowerCase())) {
      const altSuffix = ["Bistro", "Cafe", "Kitchen", "Eatery", "Diner", "Grill", "House", "Spot", "Bar", "Room"][(i + attempts) % 10];
      generatedName = `${neighborhood} ${altSuffix}`;
      attempts++;
    }
    usedNames.add(generatedName.toLowerCase());
    
    places.push({
      category: "Eat",
      name: generatedName,
      kind,
      desc: `famous for its signature ${famousDish.toLowerCase()}`,
      famousDish,
      price,
      neighborhood,
      rating,
      reviews
    });
  }

  // 5. Expand dos to 12
  for (let i = dos.length; i < 12; i++) {
    const nameStrOriginal = details.landmarks[i % details.landmarks.length];
    const kind = ["Landmark", "Museum", "Park", "Historic Site", "Guided Tour", "Beach", "Cultural Center", "Hidden Gem", "Monument", "Art Gallery", "Botanical Garden", "Scenic View"][i % 12];
    const priceVal = i % 3 === 0 ? "Free" : Math.floor(doCost * (0.5 + (i % 4) * 0.2));
    const rating = (4.2 + ((i * 4 + key.charCodeAt(0) * 3) % 8) * 0.1).toFixed(1);
    const reviews = ((i * 312 + key.charCodeAt(0) * 11) % 8000 + 500).toLocaleString();
    
    let nameStr = nameStrOriginal;
    let attempts = 0;
    while (usedNames.has(nameStr.toLowerCase()) && attempts < details.landmarks.length) {
      nameStr = details.landmarks[(i + attempts + 1) % details.landmarks.length];
      attempts++;
    }
    if (usedNames.has(nameStr.toLowerCase())) {
      const suffixes = ["Tour", "Walk", "Visit", "Excursion", "Viewpoint", "Discovery"];
      nameStr = `${nameStr} ${suffixes[i % suffixes.length]}`;
    }
    usedNames.add(nameStr.toLowerCase());
    
    places.push({
      category: "Do",
      name: nameStr,
      kind,
      desc: `${kind.toLowerCase()} offering a unique and authentic local experience`,
      price: priceVal,
      rating,
      reviews
    });
  }

  // 6. Expand shops to 12
  for (let i = shops.length; i < 12; i++) {
    const neighborhood = details.neighborhoods[i % details.neighborhoods.length];
    const shopSuffixs = ["Market", "Artisan Shop", "Souvenir Bazaar", "Shopping Street", "Craft Studio", "Specialty Store", "Local Mall", "Boutique Alley", "Heritage Arcade", "Design Studio", "Concept Store", "Vintage Emporium"];
    const kinds = ["Local Market", "Artisan Shop", "Souvenir Shop", "Shopping Street", "Artisan Shop", "Specialty Store", "Shopping Mall", "Shopping District", "Shopping Arcade", "Artisan Shop", "Concept Store", "Vintage Shop"];
    const shopSuffix = shopSuffixs[i % 12];
    const kind = kinds[i % 12];
    const shopType = details.shops[i % details.shops.length];
    const rating = (4.1 + ((i * 2 + key.charCodeAt(0) * 13) % 8) * 0.1).toFixed(1);
    const reviews = ((i * 121 + key.charCodeAt(0) * 47) % 1500 + 100).toLocaleString();
    
    let generatedName = `${neighborhood} ${shopSuffix}`;
    let attempts = 0;
    while (usedNames.has(generatedName.toLowerCase())) {
      const altSuffix = ["Market", "Shop", "Bazaar", "Street", "Studio", "Store", "Mall", "Alley", "Arcade", "Emporium"][(i + attempts) % 10];
      generatedName = `${neighborhood} ${altSuffix}`;
      attempts++;
    }
    usedNames.add(generatedName.toLowerCase());
    
    places.push({
      category: "Shop",
      name: generatedName,
      kind,
      desc: `${kind.toLowerCase()} specializing in ${shopType}`,
      rating,
      reviews
    });
  }

  const categoryCount = { Eat: 0, Stay: 0, Do: 0, Shop: 0 };
  const usedImages = new Set();
  
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
      let lockVal = (hash % 1000) + 1;
      const tagCity = cityName.toLowerCase().replace(/[^a-z0-9]/g, "");
      const tagCat = cat === "Eat" ? "food" : cat === "Stay" ? "hotel" : cat === "Do" ? "landmark" : "shop";
      
      let candidateImage = `https://loremflickr.com/600/400/${tagCity},${tagCat}?lock=${lockVal}`;
      while (usedImages.has(candidateImage)) {
        lockVal = (lockVal + 1) % 1000 + 1;
        candidateImage = `https://loremflickr.com/600/400/${tagCity},${tagCat}?lock=${lockVal}`;
      }
      image = candidateImage;
      
      const pool = IMAGE_POOLS[cat];
      picSlug = pool[hash % pool.length];
    }
    
    let finalKey = image || picSlug;
    if (usedImages.has(finalKey)) {
      if (image && image.includes("lock=")) {
        let match = image.match(/lock=(\d+)/);
        if (match) {
          let lockVal = parseInt(match[1], 10);
          while (usedImages.has(image)) {
            lockVal = (lockVal + 1) % 1000 + 1;
            image = image.replace(/lock=\d+/, `lock=${lockVal}`);
          }
          finalKey = image;
        }
      }
    }
    usedImages.add(finalKey);
    
    const angle = (idx * 2 * Math.PI) / 8;
    const radius = 0.003 + idx * 0.002;
    const offset = p.offset || { lat: radius * Math.cos(angle), lng: radius * Math.sin(angle) };
    
    let note = "";
    let detail = "";
    
    if (cat === "Eat") {
      const priceText = p.price ? ` Typical meal: ${currency}${p.price}.` : "";
      note = (idx % 2 === 0
        ? `${p.name} is one of ${cityName}'s most-loved places to eat, a ${p.kind.toLowerCase()} where the cooking tastes like someone genuinely cares. Locals keep coming back for the warm welcome and plates that feel properly homemade.`
        : `Ask anyone in ${cityName} where to eat well without fuss and ${p.name} comes up fast. It's a ${p.kind.toLowerCase()} that keeps things simple and generous, the kind of spot you happily return to twice in one trip.`) + priceText;
      detail = `${p.name} has quietly become a small institution in ${cityName}. Known as a ${p.kind.toLowerCase()} (${p.desc}), the kitchen leans into ${cuisineStyle} cooking, and you can taste that real care goes into every plate. It's the sort of place where the staff remember a face, portions are generous and nothing feels rushed. Come hungry, take your time, and let them point you toward whatever is best that day.${priceText}`;
    } else if (cat === "Stay") {
      const rateText = p.price ? ` Approximate rates: ${currency}${p.price}/night.` : "";
      note = (idx % 2 === 0
        ? `${p.name} is the kind of ${p.kind.toLowerCase()} you're a little sad to check out of. Rooms are calm and comfortable, the welcome is warm, and the best of ${cityName} is a short walk from the door.`
        : `Right in the thick of ${cityName}, ${p.name} makes an easy, unpretentious base. Think ${p.desc}, helpful staff and a good night's sleep after a long day of exploring.`) + rateText;
      detail = `Staying at ${p.name} puts you right where you want to be in ${cityName}. It's a ${p.kind.toLowerCase()} (${p.desc}), with quiet, well-kept rooms and the kind of little touches that add up: good coffee, genuinely helpful staff and a comfortable bed at the end of a long day. The central setting means less time travelling and more time enjoying the city, which makes it an easy place to settle into for a few nights.${rateText}`;
    } else if (cat === "Do") {
      const costText = p.price !== undefined ? ` Cost: ${p.price === 0 || p.price === "Free" ? "Free" : currency + p.price}.` : "";
      note = `${p.name} is ${p.desc}. It's one of those ${cityName} sights that genuinely lives up to the hype, so give yourself time to take it in rather than rushing through.${costText}`;
      detail = `${p.name} is ${p.desc}, and easily one of ${cityName}'s essential experiences. Beyond the facts, it's simply a place that stays with you, the kind of sight you'll be describing to friends long after you're home. Go early in the day if you can to beat the crowds, and don't hurry; the small details reward a slow, curious look.${costText}`;
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
  
  const guides = makeGuidesForCity(cityName, key, existingGuides);
  
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
