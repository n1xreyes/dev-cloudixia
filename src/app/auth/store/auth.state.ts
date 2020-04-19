import { User } from '../models/user.model';
import { Language } from '../models/language.enum';

export interface AuthState {
  user: User | null;
  isAdmin: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  language: Language;
  error: any;
}

export const authInitialState: AuthState = {
  user: null,
  isAdmin: false,
  isLoggedIn: false,
  isLoading: true,
  language: Language.ENGLISH,
  error: null
};
