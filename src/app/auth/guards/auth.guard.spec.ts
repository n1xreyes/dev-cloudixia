import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { StoreModule } from '@ngrx/store';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import * as fromAuth from '../store/auth.reducer';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/firestore';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [
        StoreModule.forFeature('auth', fromAuth.authReducer),
        StoreModule.forRoot({}),
        RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        AngularFirestoreModule
      ],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
