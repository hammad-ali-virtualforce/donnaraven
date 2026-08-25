export type ListingStatus =
  | "active"
  | "sold";

export type Listing = {
  id: string;

  status: ListingStatus;

  address: string;

  city: string;

  state: string;

  zip: string;

  price: number;

  bedrooms?: number;

  bathrooms?: number;

  sqft?: number;

  image: string;

  url?: string;
};