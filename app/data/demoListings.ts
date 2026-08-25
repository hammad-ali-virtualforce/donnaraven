import type {
  Listing,
} from "@/app/types/listing";

export const demoListings: Listing[] = [
  {
    id: "1",
    status: "active",
    address: "9645 Franklin Avenue",
    city: "Franklin Park",
    state: "IL",
    zip: "60131",
    price: 875000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2850,
    image:
      "/images/listing-1.webp",
  },

  {
    id: "2",
    status: "sold",
    address: "1258 River Road",
    city: "River Grove",
    state: "IL",
    zip: "60171",
    price: 899000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    image:
      "/images/listing-2.webp",
  },

  {
    id: "3",
    status: "active",
    address: "7420 Irving Park Road",
    city: "Schiller Park",
    state: "IL",
    zip: "60176",
    price: 650000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    image:
      "/images/listing-3.webp",
  },

  {
    id: "4",
    status: "sold",
    address: "901 Grand Avenue",
    city: "River Grove",
    state: "IL",
    zip: "60171",
    price: 720000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    image:
      "/images/listing-4.webp",
  },
];