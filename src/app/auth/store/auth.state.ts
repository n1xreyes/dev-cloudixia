import { User } from '../models/user.model';
import { Language } from '../../shared/models/language.enum';
import { ChatData } from 'src/app/shared/models/chat.model';

export interface AuthState {
  user: User | null;
  userChats: ChatState;
  isAdmin: boolean;
  isLoggedIn: boolean;
  isLoading: boolean;
  language: Language;
  error: any;
}

export const authInitialState: AuthState = {
  user: null,
  userChats: {
    chatData: [],
    chatMessages: {},
  },
  isAdmin: false,
  isLoggedIn: false,
  isLoading: true,
  language: Language.ARABIC,
  error: null
};

/**
 * chatMessages is a map where the key is a chatId.  
 * The value is an array with all the chatMessages.
 * They are in ascending order, where the most recent
 * chatMessage is in the last index.
 * 
 * As chatMessages are found and added, they are simply
 * pushed to the list, keeping the most recent
 * at the end.
 * 
 * chatData is an array containing chat meta data.  These
 * are sorted in descending order by timestamp, where the most
 * recent timestamp is at index 0.  
 */
export interface ChatState {
    chatData: ChatData[],
    chatMessages: any
}