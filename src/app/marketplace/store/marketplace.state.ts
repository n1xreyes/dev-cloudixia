import { Listing } from 'src/app/shared/models/listing.model';

export interface MarketplaceState {
    projects: Listing[] | null;
    loading: boolean;
    error: any;
  }
  
  export const marketplaceInitialState: MarketplaceState = {
    projects: null,
    loading: false,
    error: null
  };
  