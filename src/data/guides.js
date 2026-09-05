import carlaImg from "../assets/carla.jpg";
import martaImg from "../assets/marta.jpg";
import sofiaImg from "../assets/sofia.jpg";
import elenaImg from "../assets/elena.jpg";
import carlosImg from "../assets/carlos.jpg";
import alexnImg from "../assets/alexn.jpg";
import pauImg from "../assets/pau.jpg";
import jordimImg from "../assets/jordim.jpg";
import samImg from "../assets/sam.jpg";
import taylorImg from "../assets/taylor.jpg";
import jordanImg from "../assets/jordan.jpg";
import caseyImg from "../assets/casey.jpg";

const base = { category: "Guides", guide: true, kind: "Local guide", open: "Available this week" };

export const GUIDES = {
  // ----- Female -----
  carla: { ...base, id: "carla", name: "Carla Ruiz", gender: "Female", rating: "4.9", reviews: "1,287", image: carlaImg, walk: "meets in Gòtic", offset: { lat: -0.003, lng: -0.004 },
    note: "Carla specializes in art and architecture tours, helping visitors appreciate the creativity and history behind Barcelona's most iconic landmarks." },
  marta: { ...base, id: "marta", name: "Marta Soler", gender: "Female", rating: "4.1", reviews: "4190", image: martaImg, walk: "meets in Eixample", offset: { lat: 0.002, lng: -0.006 },
    note: "Marta creates relaxed and enjoyable tours tailored to each group. Whether you're visiting famous attractions or lesser-known spots, she ensures every experience is memorable and engaging." },
  sofia: { ...base, id: "sofia", name: "Sofia Morales", gender: "Female", rating: "3.5", reviews: "201", image: sofiaImg, walk: "meets in El Born", offset: { lat: -0.005, lng: 0.003 },
    note: "Sofia enjoys showing visitors the authentic side of Barcelona, from charming local cafés to vibrant neighborhoods." },
  elena: { ...base, id: "elena", name: "Elena García", gender: "Female", rating: "3.5", reviews: "5,721", image: elenaImg, walk: "meets in Gràcia", offset: { lat: 0.006, lng: 0.002 },
    note: "A lifelong Barcelona resident, she enjoys helping visitors experience the city beyond the tourist attractions, introducing them to local favorites and unique experiences." },

  // ----- Male -----
  carlos: { ...base, id: "carlos", name: "Carlos", gender: "Male", rating: "5.0", reviews: "1,011", image: carlosImg, walk: "meets at La Boqueria", offset: { lat: 0.003, lng: 0.005 },
    note: "A true food enthusiast, Carlos introduces visitors to Barcelona's best local markets, cafés, and restaurants. His tours are perfect for travelers who want to explore the city through its flavors." },
  alexn: { ...base, id: "alexn", name: "Alex Navarro", gender: "Male", rating: "4.9", reviews: "893", image: alexnImg, walk: "meets in Eixample", offset: { lat: -0.004, lng: 0.006 },
    note: "Alex is an energetic guide who enjoys helping travelers discover Barcelona's famous attractions as well as lesser-known spots loved by locals." },
  pau: { ...base, id: "pau", name: "Pau Roca", gender: "Male", rating: "4.4", reviews: "875", image: pauImg, walk: "meets in Sant Antoni", offset: { lat: 0.005, lng: -0.003 },
    note: "A passionate food lover, Pau introduces visitors to authentic Catalan cuisine, local markets, and family-owned restaurants that many tourists miss." },
  jordim: { ...base, id: "jordim", name: "Jordi Martínez", gender: "Male", rating: "3.1", reviews: "5,721", image: jordimImg, walk: "meets in Gòtic", offset: { lat: -0.002, lng: -0.007 },
    note: "Born and raised in Barcelona, Jordi loves sharing the city's hidden streets, local stories, and historic landmarks. His tours feel like exploring Barcelona with a knowledgeable friend." },

  // ----- Others -----
  sam: { ...base, id: "sam", name: "Sam Rivera", gender: "Others", rating: "5.0", reviews: "1,295", image: samImg, walk: "meets in Raval", offset: { lat: 0.004, lng: -0.002 },
    note: "Sam loves introducing travelers to Barcelona's diverse neighborhoods, hidden cafés, and vibrant local culture through personalized tours." },
  taylor: { ...base, id: "taylor", name: "Taylor Costa", gender: "Others", rating: "4.2", reviews: "4,190", image: taylorImg, walk: "meets in Poble-sec", offset: { lat: -0.003, lng: 0.004 },
    note: "Taylor focuses on creating authentic experiences that help visitors connect with the city's people, traditions, and everyday life." },
  jordan: { ...base, id: "jordan", name: "Jordan Vega", gender: "Others", rating: "3.3", reviews: "109", image: jordanImg, walk: "meets in Gràcia", offset: { lat: 0.006, lng: 0.001 },
    note: "Jordan combines local knowledge with a friendly personality, guiding travelers through both popular attractions and off-the-beaten-path locations." },
  casey: { ...base, id: "casey", name: "Casey Moreno", gender: "Others", rating: "3.0", reviews: "5,721", image: caseyImg, walk: "meets in Sants", offset: { lat: -0.005, lng: -0.004 },
    note: "Casey is passionate about sustainable tourism and enjoys helping visitors discover local businesses, community spaces, and unique cultural experiences." },
};
export const GUIDE_LIST = Object.values(GUIDES);
