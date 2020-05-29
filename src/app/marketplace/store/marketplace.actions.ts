import { Action } from '@ngrx/store';
import { Listing } from 'src/app/shared/models/listing.model';
import { MarketplaceListingPayload } from '../models/marketplace-listing-payload.model';

export enum MarketplaceActionTypes {
  MARKETPLACE_QUERY_ALL = '[Marketplace] Marketplace query all',
  MARKETPLACE_SEARCH = '[Marketplace] Marketplace Text Search',
  MARKETPLACE_ADDED = '[Marketplace] Marketplace added one',
  MARKETPLACE_LOADED = '[Marketplace] Marketplace loaded',
  MARKETPLACE_PURCHASE = '[Marketplace] Marketplace purchase',
  MARKETPLACE_ERROR = '[Marketplace] Marketplace error'
}

export class MarketplaceSearch implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_SEARCH;

  constructor(public payload: MarketplaceListingPayload) {}
}

export class MarketplaceLoaded implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_LOADED;

  constructor(public payload: { listings: Listing[] }) { }
}

export class MarketplaceAdded implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_ADDED;

  constructor(public payload: { listing: Listing }) {}
}

export class MarketplacePurchase implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_PURCHASE;

  constructor(public payload: { listing: Listing }) {}
}

export class MarketplaceError implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_ERROR;

  constructor(public payload: { error: any }) { }
}

export type MarketplaceActions =
  | MarketplaceSearch
  | MarketplaceAdded
  | MarketplaceLoaded
  | MarketplaceError
  | MarketplacePurchase;
