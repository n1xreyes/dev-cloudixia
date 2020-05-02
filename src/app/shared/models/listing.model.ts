import { ListingState } from "./listing-state.enum";

export interface Listing {
  uid?: any;
  userId?: string;
  title?: string;
  description?: string;
  photoUrl?: string;
  price?: string;
  categories?: string[];
  state?: ListingState
}