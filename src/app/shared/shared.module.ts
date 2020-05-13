import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import {
  ButtonsModule,
  InputsModule,
  CardsModule,
  InputUtilitiesModule,
  IconsModule
} from 'angular-bootstrap-md';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectWrapperComponent } from './components/ng-select-wrapper/ng-select-wrapper.component';
import { FieldErrorsPipe } from './pipe/field-errors.pipe';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { InputWrapperComponent } from './components/input-wrapper/input-wrapper.component';
import { InputErrorWrapperComponent } from './components/input-error-wrapper/input-error-wrapper.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromImageUpload from '../store/image-upload/image-upload.reducers';
import { ImageUploadEffects } from '../store/image-upload/image-upload.effects';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    NgSelectWrapperComponent,
    FieldErrorsPipe,
    ModalWrapperComponent,
    InputWrapperComponent,
    InputErrorWrapperComponent,
    ImageUploadComponent,
  ],
  imports: [
    // angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    // mdb
    InputsModule,
    InputUtilitiesModule,
    IconsModule,
    ButtonsModule,
    CardsModule,
    // ng-select
    NgSelectModule,
    StoreModule.forFeature('imageUpload', fromImageUpload.imageUploadReducer),
    EffectsModule.forFeature([ImageUploadEffects])
  ],
  exports: [
    // angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ImageUploadComponent,
    // mdb
    InputsModule,
    InputUtilitiesModule,
    IconsModule,
    ButtonsModule,
    CardsModule,
    // ng-select
    NgSelectModule,
    // custom
    NgSelectWrapperComponent,
    FieldErrorsPipe,
    ModalWrapperComponent,
    InputWrapperComponent,
  ],
  providers: [],
  entryComponents: [
    ConfirmModalComponent,
    ImageUploadComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
