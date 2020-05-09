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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromImageUpload from '../store/image-upload/image-upload.reducers';
import { ImageUploadEffects } from '../store/image-upload/image-upload.effects';


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
    TranslateModule,
    StoreModule.forFeature('imageUpload', fromImageUpload.imageUploadReducer),
    EffectsModule.forFeature([ImageUploadEffects])
  ],
    exports: [
        TranslateModule,
        ImageUploadComponent
    ],
  providers: [],
  entryComponents: [
    ConfirmModalComponent,
    ImageUploadComponent
  ]
})
export class SharedModule {}
