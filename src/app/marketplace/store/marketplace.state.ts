import { Listing } from 'src/app/shared/models/listing.model';

export interface MarketplaceState {
  listings: Listing[] | null;
  loading: boolean;
  error: any;
}

export const marketplaceInitialState: MarketplaceState = {
  listings: null,
  loading: false,
  error: null
};
