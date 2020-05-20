import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/user.model';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/auth.actions';
import { ChatData } from 'src/app/shared/models/chat.model';
import { DataSnapshot } from '@angular/fire/database/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  MAX_NUM_CHATS = 10;
  MAX_NUM_CHAT_MESSAGES = 25;

  constructor(
    private afAuth: AngularFireAuth, 
    private db: AngularFireDatabase, 
    private fn: AngularFireFunctions,
    private store: Store<AppState>
    ) { }

  registerWithEmail(email: string, password: string) {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  loginWithEmail(email: string, password: string) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  socialLogin(authProvider: string) {
    let provider: any;
    if (authProvider === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    }

    if (authProvider === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
    }

    if (authProvider === 'twitter') {
      provider = new firebase.auth.TwitterAuthProvider();
    }
    return from(this.afAuth.auth.signInWithPopup(provider));
  }

  logout(uid: string) {
    this.updateOnlineStatus(uid, false);
    return from(this.afAuth.auth.signOut());
  }

  // update user in db
  saveUser(user: User) {
    const users = this.db.object('users/' + user.uid);
    return users.update(user);
  }

  // get user in DB
  getDBUser(uid: String): Observable<any> {
    return this.db.object('users/' + uid).valueChanges();
  }

  updateOnlineStatus(uid: string, status: boolean) {
    if (status) {
      this.db.database.ref().child('users/' + uid).onDisconnect().update( { isOnline: false });
    }
    return from(this.db.object('users/' + uid).update({ isOnline: status }));
  }

  checkUserRole(uid: string) {
    return this.db.object('admins/' + uid).valueChanges();
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  /**
   * Adds a new chat message to an existing chat room.
   * This action will fire off listeners to a chat room, adding the message
   * to anyone listening in to this chat room.
   * 
   * @param chatData All 5 variables are required.
   */
  addNewChatMessage(chatData: ChatData) {
    var ref = this.db.database.ref()
    
    const chatMessage = {
      sender: chatData.sender,
      timestamp: chatData.timestamp,
      message: chatData.message
    }
    
    var newChatMessage: any = {}
    newChatMessage[`chatMessages/${chatData.chatId}/${ref.push().key}`] = chatMessage;

    newChatMessage[`userChats/${chatData.receiverId}/${chatData.sender}/lastMessage`] = chatMessage;
    newChatMessage[`userChats/${chatData.sender}/${chatData.receiverId}/lastMessage`] = chatMessage;

    return ref.update(newChatMessage, function(error) {
      if (error) {
        console.log("Error updating data:", error);
      }
    }).then( _ => {});
  }

  /**
   * Creates a brand new chat between two users.  There is no logic to check 
   * if an existing chat between two users exists already.  it will simply create a new one
   * between them, which overwrites the reference IDs for each user.
   * This will not destroy the old chat, but removes the reference for it in the users.
   * 
   * So be careful to check for the existance of an existing chat between two users before creating a chat.
   * 
   * @param receiverId Who are we sending a message to?
   * @param message The message to send
   * @param timestamp A timestamp
   */
  createNewChat(receiverId: string, message: string, timestamp: any) {
    this.fn.functions.httpsCallable('createNewChat')
      ({ receiverId: receiverId, message: message, timestamp: timestamp })
      .then(function (_: any) {});
  }

  /**
   * This gets the most recent X number of chat messages between two users.
   * It also sets up a listener for all new messages in this chat.
   * 
   * It gets the chats one at a time and fires off an Action for each one.
   * @param chatId 
   */
  getMessagesForChat(chatId: string){
    return this.db.database
    .ref('chatMessages/' + chatId)
    .orderByKey()
    .limitToLast(this.MAX_NUM_CHAT_MESSAGES)
    .on('child_added', payload => {
      this.store.dispatch(new fromAuth.GetChatMessagesLoaded(chatId, payload.val()))
    })
  }

  /**
   * This will get the most recent chats metadata, one at a time, firing
   * off an event for each one.  It will pass the chatdata to a reducer which will
   * save the data to the store in the correct order.
   * 
   * This function also sets up a listener for NEW most recent chats, as well
   * as changes to the existing chats.  
   * 1. In the first scenario, if a brand new chat is created, it goes to the
   * top of the list as it is now the most recent.
   * 2. If one of the existing chats recieves a new message, it also goes to the
   * top of the list.
   * 
   * This listener at all times keeps the top X chats in sync.
   * @param userId gets all user chats that belong to this userId
   */
  initUserChatLists(userId: string) {
    // gets changes to a chat already in the top 10
    this.db.database
    .ref('userChats/' + userId)
    .orderByChild('lastMessage/timestamp')
    .limitToLast(this.MAX_NUM_CHATS)
    .on('child_changed', (payload) => {
      this.store.dispatch(new fromAuth.RecentChatLoaded(this.recentChatLoaded(payload)))
    })
    
    // Gets initial load as well as setups up
    // listeners for new "most recent" chats
    return this.db.database
    .ref('userChats/' + userId)
    .orderByChild('lastMessage/timestamp')
    .limitToLast(this.MAX_NUM_CHATS)
    .on('child_added', (payload) => {
      this.store.dispatch(new fromAuth.RecentChatLoaded(this.recentChatLoaded(payload)))
    })
  }

  private recentChatLoaded(payload: DataSnapshot): ChatData {
    const chatResponse = payload.val();

    const newChat: ChatData = {
      message: chatResponse.lastMessage.message,
      timestamp: chatResponse.lastMessage.timestamp,
      sender: chatResponse.lastMessage.sender,
      chatId: chatResponse.chatId,
      receiverId: payload.key || '',
    }

    return newChat;
  }

}
