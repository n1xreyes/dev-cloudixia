import { Action } from '@ngrx/store';
import { User, UserProfile } from '../models/user.model';
import { Language } from '../../shared/models/language.enum';
import { ChatData, ChatMessage } from 'src/app/shared/models/chat.model';

export enum AuthActionTypes {
  EMAIL_REGISTER_REQUESTED = '[Auth] EMAIL REGISTER Requested',
  SOCIAL_REGISTER_REQUESTED = '[Auth] SOCIAL REGISTER Requested',
  REGISTER_SUCCESS = '[Auth] REGISTER Success',
  REGISTER_COMPLETED = '[Auth] REGISTER Completed',
  REGISTER_FAILED = '[Auth] REGISTER Failed',

  LOGIN_REQUESTED = '[Auth] LOGIN Requested',
  LOGIN_SUCCESS = '[Auth] LOGIN Success',
  LOGIN_FAILED = '[Auth] LOGIN Failed',

  SOCIAL_LOGIN = '[Auth] Social media login',

  LOGOUT_REQUESTED = '[Auth] LOGOUT requested',
  LOGOUT_COMPLETED = '[Auth] LOGOUT completed',

  LANGUAGE_CHANGE = '[Auth] Language switched',

  SAVE_USER = '[Auth] Save user',
  SAVE_USER_PROFILE = '[Auth] Save user profile',
  UPDATE_ONLINE_STATUS = '[Auth] Update online status',

  CHECK_ADMIN_ROLE = '[Auth] Check admin role',
  UPDATE_USER_ROLE = '[Auth] Update user role',

  GET_USER = '[Auth] GET User',
  GET_USER_PROFILE = '[Auth] GET User Profile',
  GOT_USER_PROFILE = '[Auth] GOT User Profile',
  GET_USER_DETAILS = '[Auth] GET User Details',

  CREATE_CHAT = '[Auth] Creating a new chat',
  GET_CHATS = '[Auth] Fetching User Chats',
  RECENT_CHAT_LOADED = '[Auth] Recent Chat Loaded',

  NEW_CHAT_MESSAGE = '[Auth] Sending chat message',
  GET_CHAT_MESSAGES = '[Auth] Fetching messages for chat',
  GET_CHAT_MESSAGES_LOADED = '[Auth] Loaded Fetching messages for chat',

  AUTH_ERROR = '[Auth] Error'
}

export class EmailRegisterRequested implements Action {
  readonly type = AuthActionTypes.EMAIL_REGISTER_REQUESTED;

  constructor(public payload: { firstName: string, lastName: string, email: string; password: string }) {}
}

export class SocialRegisterRequested implements Action {
  readonly type = AuthActionTypes.SOCIAL_REGISTER_REQUESTED;

  constructor(public payload: { authProvider: string }) {}
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.REGISTER_SUCCESS;

  constructor(public payload: {user: User}) {}
}

export class RegisterCompleted implements Action {
  readonly type = AuthActionTypes.REGISTER_COMPLETED;
}

export class RegisterFailed implements Action {
  readonly type = AuthActionTypes.REGISTER_FAILED;

  constructor(public payload: { error: any }) {}
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

export class SaveUserProfile implements Action {
  readonly type = AuthActionTypes.SAVE_USER_PROFILE;

  constructor(public payload: { userProfile: UserProfile }) {}
}

export class UpdateOnlineStatus implements Action {
  readonly type = AuthActionTypes.UPDATE_ONLINE_STATUS;

  constructor(public payload: { uid: string, status: boolean }) {}
}

export class CheckAdminRole implements Action {
  readonly type = AuthActionTypes.CHECK_ADMIN_ROLE;

  constructor(public payload: { uid: string }) {}
}

export class UpdateUserRole implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_ROLE;

  constructor(public payload: { isAdmin: boolean }) {}
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GET_USER;
}

export class GetUserProfile implements Action {
  readonly type = AuthActionTypes.GET_USER_PROFILE;

  constructor(public uid: String) {}
}

export class GotUserProfile implements Action {
  readonly type = AuthActionTypes.GOT_USER_PROFILE;

  constructor(public payload: {userProfile: UserProfile}) {}
}

export class GetUserDetails implements Action {
  readonly type = AuthActionTypes.GET_USER_DETAILS;

  constructor(public uid: String) {}
}

export class CreateChat implements Action {
  readonly type = AuthActionTypes.CREATE_CHAT;

  constructor(public receiverId: string, public message:  string) {}
}

export class GetChats implements Action {
  readonly type = AuthActionTypes.GET_CHATS;
}

export class RecentChatLoaded implements Action {
  readonly type = AuthActionTypes.RECENT_CHAT_LOADED;

  constructor(public chat: ChatData) {}
}

export class NewChatMessage implements Action {
  readonly type = AuthActionTypes.NEW_CHAT_MESSAGE;

  constructor(public receiverId: string, public  message: string, public chatId: string) {}
}

export class GetChatMessages implements Action {
  readonly type = AuthActionTypes.GET_CHAT_MESSAGES;

  constructor(public chatId: string) {}
}

export class GetChatMessagesLoaded implements Action {
  readonly type = AuthActionTypes.GET_CHAT_MESSAGES_LOADED;

  constructor(public chatId: string, public chatMessage: ChatMessage) {}
}

export class AuthError implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR;

  constructor(public payload: { error: any }) {}
}

export type AuthAction =
  | EmailRegisterRequested
  | SocialRegisterRequested
  | RegisterSuccess
  | RegisterCompleted
  | RegisterFailed
  | LoginRequested
  | LoginSuccess
  | LoginFailed
  | SocialLogin
  | LogoutRequested
  | LogoutCompleted
  | LanguageChange
  | SaveUser
  | SaveUserProfile
  | UpdateOnlineStatus
  | CheckAdminRole
  | UpdateUserRole
  | GetUserDetails
  | GetUser
  | GetUserProfile
  | GotUserProfile

  // chats
  | CreateChat
  | GetChats
  | RecentChatLoaded
  | NewChatMessage
  | GetChatMessages
  | GetChatMessagesLoaded

  // error
  | AuthError;
