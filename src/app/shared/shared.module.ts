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
import { TranslateModule } from '@ngx-translate/core';

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
    CardsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [],
  entryComponents: [
    ConfirmModalComponent
  ]
})
export class SharedModule {}
