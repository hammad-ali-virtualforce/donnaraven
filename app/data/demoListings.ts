import type {
  Listing,
} from "@/app/types/listing";

export const demoListings: Listing[] = [
  {
    id: "1",

    slug:
      "9645-franklin-avenue-franklin-park-il",

    status: "active",

    address:
      "9645 Franklin Avenue",
    city: "Franklin Park",
    state: "IL",
    zip: "60131",

    price: 875000,

    bedrooms: 4,
    bathrooms: 3,
    sqft: 2850,

    propertyType:
      "Single Family Residence",

    yearBuilt: 2019,

    lotSize: "7,500 Sq Ft",

    parking: "2 Car Garage",

    image:
      "/images/listing-1.webp",

    gallery: [
      "/images/listing-1.webp",
      "/images/listing-2.webp",
      "/images/listing-3.webp",
      "/images/listing-4.webp",
    ],

    description:
      "A beautifully presented residence offering generous living spaces, thoughtful finishes, and a comfortable layout designed for modern living. The home combines style and functionality with inviting interiors, spacious bedrooms, and excellent entertaining areas.",
  },

  {
    id: "2",

    slug:
      "1258-river-road-river-grove-il",

    status: "sold",

    address:
      "1258 River Road",
    city: "River Grove",
    state: "IL",
    zip: "60171",

    price: 899000,

    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,

    propertyType:
      "Single Family Residence",

    yearBuilt: 2017,

    lotSize: "8,100 Sq Ft",

    parking: "2 Car Garage",

    image:
      "/images/listing-2.webp",

    gallery: [
      "/images/listing-2.webp",
      "/images/listing-3.webp",
      "/images/listing-4.webp",
      "/images/listing-1.webp",
    ],

    description:
      "A spacious and beautifully maintained home featuring an impressive combination of comfort, style, and functionality. Generous living areas and well-proportioned bedrooms make this an excellent property for both everyday living and entertaining.",
  },

  {
    id: "3",

    slug:
      "7420-irving-park-road-schiller-park-il",

    status: "active",

    address:
      "7420 Irving Park Road",
    city: "Schiller Park",
    state: "IL",
    zip: "60176",

    price: 650000,

    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,

    propertyType:
      "Single Family Residence",

    yearBuilt: 2015,

    lotSize: "6,800 Sq Ft",

    parking: "2 Car Garage",

    image:
      "/images/listing-3.webp",

    gallery: [
      "/images/listing-3.webp",
      "/images/listing-1.webp",
      "/images/listing-4.webp",
      "/images/listing-2.webp",
    ],

    description:
      "An inviting property with a practical floor plan, comfortable living spaces, and a welcoming atmosphere. Thoughtfully designed interiors provide plenty of room for everyday living while maintaining a warm and refined character.",
  },

  {
    id: "4",

    slug:
      "901-grand-avenue-river-grove-il",

    status: "sold",

    address:
      "901 Grand Avenue",
    city: "River Grove",
    state: "IL",
    zip: "60171",

    price: 720000,

    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,

    propertyType:
      "Single Family Residence",

    yearBuilt: 2018,

    lotSize: "7,200 Sq Ft",

    parking: "2 Car Garage",

    image:
      "/images/listing-4.webp",

    gallery: [
      "/images/listing-4.webp",
      "/images/listing-1.webp",
      "/images/listing-2.webp",
      "/images/listing-3.webp",
    ],

    description:
      "A sophisticated home offering spacious interiors, attractive finishes, and versatile living areas. Designed with comfort in mind, the residence provides an excellent setting for entertaining, relaxing, and everyday living.",
  },
];