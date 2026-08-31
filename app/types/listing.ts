export type ListingStatus =
  | "active"
  | "sold";

export type Listing = {
  id: string;
  slug: string;

  status: ListingStatus;

  address: string;
  city: string;
  state: string;
  zip: string;

  price: number;

  bedrooms: number;
  bathrooms: number;
  sqft: number;

  image: string;

  gallery?: string[];

  description?: string;

  propertyType?: string;
  yearBuilt?: number;
  lotSize?: string;
  parking?: string;
};