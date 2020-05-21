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
  IconsModule,
  BreadcrumbModule
} from 'angular-bootstrap-md';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectWrapperComponent } from './components/ng-select-wrapper/ng-select-wrapper.component';
import { FieldErrorsPipe } from './pipe/field-errors.pipe';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { InputWrapperComponent } from './components/input-wrapper/input-wrapper.component';
import { InputErrorWrapperComponent } from './components/input-error-wrapper/input-error-wrapper.component';
import { CrudModalComponent } from './components/crud-modal/crud-modal.component';
import { CategorySelectionComponent } from './components/category-selection/category-selection.component';
import { CategorySubSelectionComponent } from './components/category-sub-selection/category-sub-selection.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    NgSelectWrapperComponent,
    FieldErrorsPipe,
    ModalWrapperComponent,
    InputWrapperComponent,
    InputErrorWrapperComponent,
    CrudModalComponent,
    CategorySelectionComponent,
    CategorySubSelectionComponent,
    CategoryFilterComponent,
    CategoryCardComponent,
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
    BreadcrumbModule,
    // ng-select
    NgSelectModule,
  ],
  exports: [
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
    // custom
    NgSelectWrapperComponent,
    FieldErrorsPipe,
    ModalWrapperComponent,
    InputWrapperComponent,
    CrudModalComponent,
    CategorySelectionComponent,
    CategoryFilterComponent,
    CategoryCardComponent,
  ],
  providers: [],
  entryComponents: [
    ConfirmModalComponent
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
