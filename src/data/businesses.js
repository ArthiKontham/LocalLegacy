import arumeImg from "../assets/arume.jpg";
import operaImg from "../assets/opera.jpg";
import orienteImg from "../assets/oriente.jpg";
import arcImg from "../assets/arc.jpg";
import batlloImg from "../assets/batllo.jpg";
import sagradaImg from "../assets/sagrada.jpg";
import portalImg from "../assets/portal.jpg";
import pinzatImg from "../assets/pinzat.jpg";

export const BUSINESSES = {
  arume: { id: "arume", city: "Barcelona", image: arumeImg, name: "Arume Restraurent", category: "Eat", rating: "4.8", reviews: "330",
    walk: "4 min walk", kind: "Restraurent", open: "Open 9 am to 10 pm", offset: { lat: 0.004, lng: 0.003 },
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
export const BUSINESS_LIST = Object.values(BUSINESSES);
