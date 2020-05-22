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
import { ChatData, ChatMessage } from 'src/app/shared/models/chat.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  MAX_NUM_CHATS = 10;
  MAX_NUM_CHAT_MESSAGES = 15;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private fn: AngularFireFunctions,
    private fs: AngularFirestore,
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
    const users = this.fs.doc('users/' + user.uid);
    return users.update(user);
  }

  // get user in DB
  getDBUser(uid: String): Observable<any> {
    return this.fs.doc('users/' + uid).valueChanges();
  }

  // Uses RTDB for online presence tracking
  updateOnlineStatus(uid: string, status: boolean) {
    if (status) {
      this.db.database.ref().child('users/' + uid).onDisconnect().update( { isOnline: false });
    }
    return from(this.db.object('users/' + uid).update({ isOnline: status }));
  }

  checkAdminRole(uid: string) {
    return this.fs.doc('admins/' + uid).valueChanges();
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
    const batch = this.fs.firestore.batch();

    const chatMessage = {
      sender: chatData.sender,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: chatData.message
    };

    const chatRef = this.fs.firestore.collection('chatMessages')
      .doc(chatData.chatId)
      .collection('chats')
      .doc(this.fs.createId());

    batch.set(chatRef, chatMessage);

    const senderRef = this.fs.firestore.collection('userChats')
      .doc(chatData.sender)
      .collection('chats')
      .doc(chatData.receiverId);

    batch.update(senderRef, chatMessage);

    const receiverRef = this.fs.firestore.collection('userChats')
      .doc(chatData.receiverId)
      .collection('chats')
      .doc(chatData.sender);

    batch.update(receiverRef, chatMessage);

    batch.commit().then( _ => {});
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
  createNewChat(receiverId: string, message: string) {
    this.fn.functions.httpsCallable('createNewChat')
      ({
        receiverId: receiverId,
        message: message,
      }).then(function (_: any) {});
  }

  /**
   * This gets the most recent X number of chat messages between two users.
   * It also sets up a listener for all new messages in this chat.
   *
   * It gets the chats one at a time and fires off an Action for each one.
   * @param chatId
   */
  getMessagesForChat(chatId: string) {
    this.fs.firestore
      .collection('chatMessages').doc(chatId).collection('chats')
      .orderBy('timestamp', 'desc')
      .limit(this.MAX_NUM_CHAT_MESSAGES)
      .onSnapshot( snapshot => {
        snapshot.docChanges()
          .filter( item => item.type === 'added')
          // We reverse because it arrives sorted, but we add messages to the "top"
          // of the list as they come in.  This sets up initial data correctly
          // as well as future changes
          .reverse()
          .forEach(snapshotDoc => {
            const message: ChatMessage = {
              message: snapshotDoc.doc.data().message,
              sender: snapshotDoc.doc.data().sender,
              timestamp: snapshotDoc.doc.data({ serverTimestamps: 'estimate' }).timestamp
            };
            this.store.dispatch(new fromAuth.GetChatMessagesLoaded(chatId, message));
          });
      });
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

      return this.fs.firestore
      .collection('userChats').doc(userId).collection('chats')
      .orderBy('timestamp', 'desc')
      .limit(this.MAX_NUM_CHATS)
      .onSnapshot((snapshot => {
        snapshot.docChanges()
          // We ignore "removed" chats.
          .filter( item => item.type === 'added' || item.type === 'modified')
          // We reverse because it arrives sorted, but we add messages to the "top"
          // of the list as they come in.  This sets up initial data correctly
          // as well as future changes
          .reverse()
          .forEach(snapshotDoc => {
            const chatData: ChatData = {
              chatId: snapshotDoc.doc.data().chatId,
              message: snapshotDoc.doc.data().message,
              sender: snapshotDoc.doc.data().sender,
              timestamp: snapshotDoc.doc.data({ serverTimestamps: 'estimate' }).timestamp,
              receiverId: snapshotDoc.doc.id
            };
            this.store.dispatch(new fromAuth.RecentChatLoaded(chatData));
          });
      }));

  }

}
