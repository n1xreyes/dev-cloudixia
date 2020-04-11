import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import {
  ButtonsModule,
  InputsModule,
  CardsModule,
  InputUtilitiesModule,
  IconsModule
} from 'angular-bootstrap-md';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    InputsModule,
    InputUtilitiesModule,
    IconsModule,
    FormsModule,
    ButtonsModule,
    CardsModule
  ],
  exports: [],
  providers: [],
  entryComponents: [
    ConfirmModalComponent
  ]
})
export class SharedModule {}
