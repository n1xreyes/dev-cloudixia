import { Action } from '@ngrx/store';
import { Project } from 'src/app/projects/models/project.model';

export enum MarketplaceActionTypes {
  MARKETPLACE_QUERY_ALL = '[Marketplace] Marketplace query all',
  MARKETPLACE_LOADED = '[Marketplace] Marketplace loaded',
  MARKETPLACE_ERROR = '[Marketplace] Marketplace error'
}

export class MarketplaceQueryAll implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_QUERY_ALL;
}

export class MarketplaceLoaded implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_LOADED;

  constructor(public payload: { projects: Project[] }) { }
}

export class MarketplaceError implements Action {
  readonly type = MarketplaceActionTypes.MARKETPLACE_ERROR;

  constructor(public payload: { error: any }) { }
}

export type MarketplaceActions =
  | MarketplaceQueryAll
  | MarketplaceLoaded
  | MarketplaceError;
