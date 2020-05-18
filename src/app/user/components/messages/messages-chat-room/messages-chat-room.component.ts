import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage, ChatData } from 'src/app/shared/models/chat.model';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../../auth/store/auth.actions';

@Component({
  selector: 'app-messages-chat-room',
  templateUrl: './messages-chat-room.component.html',
  styleUrls: ['./messages-chat-room.component.css']
})
export class MessagesChatRoomComponent implements OnInit {

  @Input() chatMessages: ChatMessage[];
  @Input() chatData: ChatData;

  messageText: string = "";
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  
  sendMessage(){
    // Don't submit if no text is entered
    if (!this.messageText.trim()) {
      return;
    }

    this.store.dispatch(new fromAuth.NewChatMessage(
      // metadata
      this.chatData.receiverId,
      this.messageText,
      this.chatData.chatId
    ))

    this.messageText = '';
  }

}
