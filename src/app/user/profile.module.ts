import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule, ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './containers/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CardsModule,
    ButtonsModule,
    InputsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ProfileComponent, MainProfileComponent, ProfileUserComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }
