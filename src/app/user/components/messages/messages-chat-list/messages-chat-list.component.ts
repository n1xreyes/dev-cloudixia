import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ChatData } from 'src/app/shared/models/chat.model';

@Component({
  selector: 'app-messages-chat-list',
  templateUrl: './messages-chat-list.component.html',
  styleUrls: ['./messages-chat-list.component.css']
})
export class MessagesChatListComponent implements OnInit {

  @Input() chats: ChatData[];
  @Output() onChatSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  chatSelected(user: any) {
    this.onChatSelect.emit(user);
  }

}
