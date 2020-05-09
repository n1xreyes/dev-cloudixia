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
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import {ImageUploadService} from './components/image-upload/image-upload.service';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    ImageUploadComponent,
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
        TranslateModule,
        ImageUploadComponent
    ],
  providers: [
    ImageUploadService
    ],
  entryComponents: [
    ConfirmModalComponent,
    ImageUploadComponent
  ]
})
export class SharedModule {}
