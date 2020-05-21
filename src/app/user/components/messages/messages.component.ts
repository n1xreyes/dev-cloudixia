import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatData } from 'src/app/shared/models/chat.model';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import * as authActions from '../../../auth/store/auth.actions';
import { getUserChats, getUserChatMessages } from 'src/app/auth/store/auth.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  chats$: Observable<ChatData[]>;
  chatMessages$: Observable<any>;
  selectedChat: ChatData;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chats$ = this.store.select(getUserChats);
  }

  getChatMessages(chatId: string) {
    this.chatMessages$ = this.store.select(getUserChatMessages).pipe(
      map(payload => {
        if (!payload || !payload[chatId]) {
          this.store.dispatch(new authActions.GetChatMessages(chatId));
          return;
        }
        return payload[chatId];
      })
    );
  }

  onChatSelect(chat: ChatData) {
    this.selectedChat = chat;
    this.getChatMessages(chat.chatId);
  }

}
