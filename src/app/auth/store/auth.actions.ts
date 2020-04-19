import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { Language } from '../models/language.enum';

export enum AuthActionTypes {
  REGISTER_REQUESTED = '[Auth] REGISTER Requested',
  REGISTER_COMPLETED = '[Auth] REGISTER Completed',
  REGISTER_FAILED = '[Auth] REGISTER Failed',

  UPDATE_PROFILE = '[Auth] Update profile',
  UPDATE_PROFILE_SUCCESS = '[Auth] Update profile success',

  LOGIN_REQUESTED = '[Auth] LOGIN Requested',
  LOGIN_SUCCESS = '[Auth] LOGIN Success',
  LOGIN_FAILED = '[Auth] LOGIN Failed',

  SOCIAL_LOGIN = '[Auth] Social media login',

  LOGOUT_REQUESTED = '[Auth] LOGOUT requested',
  LOGOUT_COMPLETED = '[Auth] LOGOUT completed',

  LANGUAGE_CHANGE = "[Auth] Language switched",

  SAVE_USER = '[Auth] Save user',
  UPDATE_ONLINE_STATUS = '[Auth] Update online status',

  CHECK_USER_ROLE = '[Auth] Check user role',
  UPDATE_USER_ROLE = '[Auth] Update user role',

  GET_USER = '[Auth] GET User',
  GET_USER_DETAILS = '[Auth] GET User Details',

  AUTH_ERROR = '[Auth] Error'
}

export class RegisterRequested implements Action {
  readonly type = AuthActionTypes.REGISTER_REQUESTED;

  constructor(public payload: { username: string, email: string; password: string }) {}
}

export class RegisterCompleted implements Action {
  readonly type = AuthActionTypes.REGISTER_COMPLETED;
}

export class RegisterFailed implements Action {
  readonly type = AuthActionTypes.REGISTER_FAILED;

  constructor(public payload: { error: any }) {}
}

export class UpdateProfile implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE;

  constructor(public payload: { user: User }) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class LoginRequested implements Action {
  readonly type = AuthActionTypes.LOGIN_REQUESTED;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export class SocialLogin implements Action {
  readonly type = AuthActionTypes.SOCIAL_LOGIN;

  constructor(public payload: { authProvider: string }) {}
}

export class LogoutRequested implements Action {
  readonly type = AuthActionTypes.LOGOUT_REQUESTED;

  constructor(public payload: { user: User }) {}
}

export class LogoutCompleted implements Action {
  readonly type = AuthActionTypes.LOGOUT_COMPLETED;
}


export class LanguageChange implements Action {
  readonly type = AuthActionTypes.LANGUAGE_CHANGE;

  constructor(public payload: { language: Language }) {}
}

export class SaveUser implements Action {
  readonly type = AuthActionTypes.SAVE_USER;

  constructor(public payload: { user: User }) {}
}

export class UpdateOnlineStatus implements Action {
  readonly type = AuthActionTypes.UPDATE_ONLINE_STATUS;

  constructor(public payload: { uid: string, status: boolean }) {}
}

export class CheckUserRole implements Action {
  readonly type = AuthActionTypes.CHECK_USER_ROLE;

  constructor(public payload: { uid: string }) {}
}

export class UpdateUserRole implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_ROLE;

  constructor(public payload: { isAdmin: boolean }) {}
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GET_USER;
}

export class GetUserDetails implements Action {
  readonly type = AuthActionTypes.GET_USER_DETAILS;

  constructor(public uid: String) {}
}

export class AuthError implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR;

  constructor(public payload: { error: any }) {}
}

export type AuthAction =
  | RegisterRequested
  | RegisterCompleted
  | RegisterFailed
  | UpdateProfile
  | UpdateProfileSuccess
  | LoginRequested
  | LoginSuccess
  | LoginFailed
  | SocialLogin
  | LogoutRequested
  | LogoutCompleted
  | LanguageChange
  | SaveUser
  | UpdateOnlineStatus
  | CheckUserRole
  | UpdateUserRole
  | GetUserDetails
  | GetUser
  | AuthError;
