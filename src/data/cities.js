import { SPAIN } from "./destinations/spain";
import { AUSTRALIA } from "./destinations/australia";
import { FRANCE } from "./destinations/france";
import { ITALY } from "./destinations/italy";
import { JAPAN } from "./destinations/japan";
import { USA } from "./destinations/usa";
import { GERMANY } from "./destinations/germany";
import { NETHERLANDS } from "./destinations/netherlands";
import { SINGAPORE } from "./destinations/singapore";
import { SOUTH_KOREA } from "./destinations/southkorea";
import { UK } from "./destinations/uk";
import { PORTUGAL } from "./destinations/portugal";
import { SWITZERLAND } from "./destinations/switzerland";
import { GREECE } from "./destinations/greece";
import { THAILAND } from "./destinations/thailand";
import { UAE } from "./destinations/uae";
import { INDIA } from "./destinations/india";
import { OTHERS } from "./destinations/others";

export const CITY_DATA = {
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
  ...UK,
  ...PORTUGAL,
  ...SWITZERLAND,
  ...GREECE,
  ...THAILAND,
  ...UAE,
  ...INDIA,
  ...OTHERS
};

export const CITIES = [
  // --- Australia (6) ---
  { key: "sydney", label: "Australia - Sydney" },
  { key: "melbourne", label: "Australia - Melbourne" },
  { key: "brisbane", label: "Australia - Brisbane" },
  { key: "perth", label: "Australia - Perth" },
  { key: "adelaide", label: "Australia - Adelaide" },
  { key: "hobart", label: "Australia - Hobart" },

  // --- Czechia (2) ---
  { key: "prague", label: "Czechia - Prague" },
  { key: "brno", label: "Czechia - Brno" },

  // --- France (6) ---
  { key: "paris", label: "France - Paris" },
  { key: "nice", label: "France - Nice" },
  { key: "lyon", label: "France - Lyon" },
  { key: "marseille", label: "France - Marseille" },
  { key: "bordeaux", label: "France - Bordeaux" },
  { key: "strasbourg", label: "France - Strasbourg" },

  // --- Germany (6) ---
  { key: "berlin", label: "Germany - Berlin" },
  { key: "munich", label: "Germany - Munich" },
  { key: "hamburg", label: "Germany - Hamburg" },
  { key: "cologne", label: "Germany - Cologne" },
  { key: "frankfurt", label: "Germany - Frankfurt" },
  { key: "stuttgart", label: "Germany - Stuttgart" },

  // --- Greece (4) ---
  { key: "athens", label: "Greece - Athens" },
  { key: "santorini", label: "Greece - Santorini" },
  { key: "mykonos", label: "Greece - Mykonos" },
  { key: "thessaloniki", label: "Greece - Thessaloniki" },

  // --- India (10) ---
  { key: "hyderabad", label: "India - Hyderabad" },
  { key: "mumbai", label: "India - Mumbai" },
  { key: "delhi", label: "India - Delhi" },
  { key: "bengaluru", label: "India - Bengaluru" },
  { key: "kolkata", label: "India - Kolkata" },
  { key: "chennai", label: "India - Chennai" },
  { key: "jaipur", label: "India - Jaipur" },
  { key: "agra", label: "India - Agra" },
  { key: "goa", label: "India - Goa" },
  { key: "kochi", label: "India - Kochi" },

  // --- Italy (6) ---
  { key: "rome", label: "Italy - Rome" },
  { key: "milan", label: "Italy - Milan" },
  { key: "venice", label: "Italy - Venice" },
  { key: "florence", label: "Italy - Florence" },
  { key: "naples", label: "Italy - Naples" },
  { key: "turin", label: "Italy - Turin" },

  // --- Japan (6) ---
  { key: "tokyo", label: "Japan - Tokyo" },
  { key: "kyoto", label: "Japan - Kyoto" },
  { key: "osaka", label: "Japan - Osaka" },
  { key: "sapporo", label: "Japan - Sapporo" },
  { key: "hiroshima", label: "Japan - Hiroshima" },
  { key: "fukuoka", label: "Japan - Fukuoka" },

  // --- Mexico (3) ---
  { key: "mexicocity", label: "Mexico - Mexico City" },
  { key: "guadalajara", label: "Mexico - Guadalajara" },
  { key: "cancun", label: "Mexico - Cancun" },

  // --- Morocco (3) ---
  { key: "marrakech", label: "Morocco - Marrakech" },
  { key: "casablanca", label: "Morocco - Casablanca" },
  { key: "fez", label: "Morocco - Fez" },

  // --- Netherlands (5) ---
  { key: "amsterdam", label: "Netherlands - Amsterdam" },
  { key: "rotterdam", label: "Netherlands - Rotterdam" },
  { key: "utrecht", label: "Netherlands - Utrecht" },
  { key: "thehague", label: "Netherlands - The Hague" },
  { key: "eindhoven", label: "Netherlands - Eindhoven" },

  // --- Portugal (4) ---
  { key: "lisbon", label: "Portugal - Lisbon" },
  { key: "porto", label: "Portugal - Porto" },
  { key: "braga", label: "Portugal - Braga" },
  { key: "coimbra", label: "Portugal - Coimbra" },

  // --- Singapore (1) ---
  { key: "singapore", label: "Singapore - Singapore City" },

  // --- South Korea (5) ---
  { key: "seoul", label: "South Korea - Seoul" },
  { key: "busan", label: "South Korea - Busan" },
  { key: "jeju", label: "South Korea - Jeju" },
  { key: "incheon", label: "South Korea - Incheon" },
  { key: "daegu", label: "South Korea - Daegu" },

  // --- Spain (6) ---
  { key: "barcelona", label: "Spain - Barcelona" },
  { key: "madrid", label: "Spain - Madrid" },
  { key: "seville", label: "Spain - Seville" },
  { key: "valencia", label: "Spain - Valencia" },
  { key: "bilbao", label: "Spain - Bilbao" },
  { key: "malaga", label: "Spain - Malaga" },

  // --- Switzerland (5) ---
  { key: "zurich", label: "Switzerland - Zurich" },
  { key: "geneva", label: "Switzerland - Geneva" },
  { key: "lucerne", label: "Switzerland - Lucerne" },
  { key: "basel", label: "Switzerland - Basel" },
  { key: "bern", label: "Switzerland - Bern" },

  // --- Thailand (5) ---
  { key: "bangkok", label: "Thailand - Bangkok" },
  { key: "phuket", label: "Thailand - Phuket" },
  { key: "chiangmai", label: "Thailand - Chiang Mai" },
  { key: "pattaya", label: "Thailand - Pattaya" },
  { key: "krabi", label: "Thailand - Krabi" },

  // --- Turkey (3) ---
  { key: "istanbul", label: "Turkey - Istanbul" },
  { key: "ankara", label: "Turkey - Ankara" },
  { key: "antalya", label: "Turkey - Antalya" },

  // --- UAE (3) ---
  { key: "dubai", label: "UAE - Dubai" },
  { key: "abudhabi", label: "UAE - Abu Dhabi" },
  { key: "sharjah", label: "UAE - Sharjah" },

  // --- UK (5) ---
  { key: "london", label: "UK - London" },
  { key: "edinburgh", label: "UK - Edinburgh" },
  { key: "manchester", label: "UK - Manchester" },
  { key: "birmingham", label: "UK - Birmingham" },
  { key: "glasgow", label: "UK - Glasgow" },

  // --- USA (7) ---
  { key: "newyork", label: "USA - New York" },
  { key: "sanfrancisco", label: "USA - San Francisco" },
  { key: "losangeles", label: "USA - Los Angeles" },
  { key: "chicago", label: "USA - Chicago" },
  { key: "boston", label: "USA - Boston" },
  { key: "miami", label: "USA - Miami" },
  ];

const list = (obj) => Object.values(obj);
Object.keys(CITY_DATA).forEach((k) => {
  const d = CITY_DATA[k];
  d.businessList = list(d.businesses);
  d.guideList = list(d.guides);
});

export const ENTITIES_ALL = {};
Object.values(CITY_DATA).forEach((d) => {
  Object.assign(ENTITIES_ALL, d.businesses, d.guides);
});
