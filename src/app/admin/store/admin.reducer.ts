import { adminInitialState, AdminState } from './admin.state';
import { AdminActions, AdminActionTypes } from './admin.actions';

export function adminReducer(state = adminInitialState, action: AdminActions): AdminState {
  switch (action.type) {

    case AdminActionTypes.GET_USERS_LIST: {
      return Object.assign({}, state, {
        usersListLoading: true
      });
    }

    case AdminActionTypes.USERS_LIST_FETCHED: {
      return Object.assign({}, state, {
        usersList: action.payload.usersList,
        usersListLoading: false
      });
    }

    case AdminActionTypes.ADMIN_ERROR: {
      return Object.assign({}, state, {
        error: action.payload.error
      });
    }

    case AdminActionTypes.GET_PENDING_LISTINGS: {
      return Object.assign({}, state, {
        pendingListLoading: true
      })
    }

    case AdminActionTypes.PENDING_LISTINGS_FETCHED: {
      return Object.assign({}, state, {
        pendingListLoading: false,
        pendingListings: action.payload.pendingListings
      })
    }
    
    default:
      return state;
  }
}
