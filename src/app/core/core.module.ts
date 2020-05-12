import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {
  NavbarModule,
  DropdownModule,
} from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocalizationModalComponent } from './header/localization-modal/localization-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    NavbarModule,
    RouterModule,
    DropdownModule.forRoot(),
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LocalizationModalComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {}
