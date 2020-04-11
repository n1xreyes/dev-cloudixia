import { Action } from '@ngrx/store';
import { Listing } from 'src/app/shared/models/listing.model';

export enum MarketplaceActionTypes {
  MARKETPLACE_QUERY_ALL = '[Marketplace] Marketplace query all',
  MARKETPLACE_ADDED = '[Marketplace] Marketplace added one',
  MARKETPLACE_LOADED = '[Marketplace] Marketplace loaded',
  MARKETPLACE_ERROR = '[Marketplace] Marketplace error'
}

export class MarketplaceQueryAll implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_QUERY_ALL;
}

export class MarketplaceLoaded implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_LOADED;

  constructor(public payload: { projects: Listing[] }) { }
}

export class MarketplaceAdded implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_ADDED;

  constructor(public payload: { project: Listing}) {}
}

export class MarketplaceError implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_ERROR;

  constructor(public payload: { error: any }) { }
}

export type MarketplaceActions =
  | MarketplaceQueryAll
  | MarketplaceAdded
  | MarketplaceLoaded
  | MarketplaceError;
