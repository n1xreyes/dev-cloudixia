import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { LanguageService } from './shared/language.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {CurrencyPipe} from '@angular/common';
import { ErrorLogEffects } from './store/error-log/error-log.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,
    HttpClientModule,
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    // ngx
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
      metaReducers
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // ngx-translate and the loader module
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ErrorLogEffects]),
    // mdb
    ModalModule.forRoot(),
    // custom
    SharedModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
  ],
  providers: [
    CurrencyPipe,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
// Todo - do I need this ?
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
