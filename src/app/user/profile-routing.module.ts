import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './containers/profile.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
