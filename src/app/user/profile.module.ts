import { NgModule } from '@angular/core';
import { ProfileComponent } from './containers/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SharedModule } from '../shared/shared.module';
import { MessagesChatListComponent } from './components/messages/messages-chat-list/messages-chat-list.component';
import { MessagesChatRoomComponent } from './components/messages/messages-chat-room/messages-chat-room.component';

@NgModule({
  imports: [
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    MainProfileComponent,
    ProfileUserComponent,
    MessagesComponent,
    MessagesChatListComponent,
    MessagesChatRoomComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
