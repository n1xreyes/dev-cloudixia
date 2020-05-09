import {
  ActionReducerMap,
  MetaReducer,
  ActionReducer,
  Action
} from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromAdmin from '../admin/store/admin.reducer';
import * as fromMarketplace from '../marketplace/store/marketplace.reducer';
import * as fromImageUpload from '../store/image-upload/image-upload.reducers';
import { AuthState } from '../auth/store/auth.state';
import { AdminState } from '../admin/store/admin.state';
import { MarketplaceState } from '../marketplace/store/marketplace.state';
import {ImageUploadState} from '../store/image-upload/image-upload.reducers';

export interface AppState {
  auth: AuthState;
  admin: AdminState;
  marketplace: MarketplaceState;
  imageUpload: ImageUploadState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  admin: fromAdmin.adminReducer,
  marketplace: fromMarketplace.marketplaceReducer,
  imageUpload: fromImageUpload.imageUploadReducer
};

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState | undefined, action: Action): AppState {
    if (action.type === '[Auth] LOGOUT completed') {
      state = undefined;
    }
    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<AppState>[] = [clearState];
