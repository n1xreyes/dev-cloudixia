import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MarketplaceState } from './marketplace.state';

export const getMarketplaceState = createFeatureSelector<MarketplaceState>('marketplace');

export const getAllLoaded = createSelector(
  getMarketplaceState,
  marketplace => marketplace.loading
);

export const getError = createSelector(
  getMarketplaceState,
  marketplace => marketplace.error
);

export const GetListings = createSelector(
  getMarketplaceState,
  marketplace => marketplace.listings
);