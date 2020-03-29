import { MarketplaceActions, MarketplaceActionTypes } from './marketplace.actions';
import { marketplaceInitialState, MarketplaceState } from './marketplace.state';


export function marketplaceReducer(state = marketplaceInitialState, action: MarketplaceActions): MarketplaceState {
  switch (action.type) {

    case MarketplaceActionTypes.MARKETPLACE_QUERY_ALL: {
      return Object.assign({}, state, {
        loading: true,
      });
    }

    case MarketplaceActionTypes.MARKETPLACE_LOADED: {
      return Object.assign({}, state, {
        projects: action.payload.projects,
        loading: false,
      });
    }

    case MarketplaceActionTypes.MARKETPLACE_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error
      });
    }

    default:
      return state;
  }
}
