import { authInitialState, AuthState } from './auth.state';
import { AuthAction, AuthActionTypes } from './auth.actions';
import { cloneDeep } from 'lodash';
export function authReducer(state = authInitialState, action: AuthAction): AuthState {
  switch (action.type) {

    case AuthActionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        user: action.payload.user,
        isLoggedIn: true,
        isLoading: false,
        error: null
      });
    }

    case AuthActionTypes.UPDATE_USER_ROLE: {
      return Object.assign({}, state, {
        isAdmin: action.payload.isAdmin
      });
    }

    case AuthActionTypes.GOT_USER_PROFILE: {
      return Object.assign({}, state, {
        userProfile: action.payload.userProfile
      });
    }

    case AuthActionTypes.LOGIN_FAILED: {
      return Object.assign({}, state, {
        user: null,
        isLoading: false,
        isLoggedIn: false
      });
    }

    case AuthActionTypes.AUTH_ERROR: {
      return Object.assign({}, state, {
        error: action.payload.error
      });
    }

    case AuthActionTypes.LOGOUT_COMPLETED: {
      return Object.assign({}, state, {
        user: null,
        isLoading: false,
        isLoggedIn: false
      });
    }

    case AuthActionTypes.LANGUAGE_CHANGE: {
      return Object.assign({}, state, {
        language: action.payload.language
      });
    }

    // TODO - tests
    /**
    * chatMessages is a map where the key is a chatId.
    * The value is an array with all the chatMessages.
    * They are in ascending order, where the most recent
    * chatMessage is in the last index.
    *
    * As chatMessages are found and added, they are simply
    * pushed to the list, keeping the most recent
    * at the end.
     */
    case AuthActionTypes.GET_CHAT_MESSAGES_LOADED: {
      const newState = cloneDeep(state);

      if (!newState.chatMessages[action.chatId]) {
        newState.chatMessages[action.chatId] = [action.chatMessage];
      } else {
        newState.chatMessages[action.chatId].push(action.chatMessage);
      }

      return newState;
    }

    // TODO - tests
    /**
     * chatData is an array containing chat meta data.  These
     * are sorted in descending order by timestamp, where the most
     * recent timestamp is at index 0.
     */
    case AuthActionTypes.RECENT_CHAT_LOADED: {
      const newState = cloneDeep(state);

      // Does the new chat already exist in list?
      const index = state.chatData.findIndex( chat => chat.chatId === action.chat.chatId);

      // If it doesn't, add it at the front of the list
      if (index === -1) {
        newState.chatData.unshift(action.chat);
      } else { // If it does, move it to the front by remove & add
        newState.chatData.splice(index, 1);
        newState.chatData.unshift(action.chat);
      }

      return newState;
    }

    default:
      return state;
  }
}
