import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AdminEffects } from './admin.effects';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreRootModule, StoreModule } from '@ngrx/store';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/firestore';

describe('AdminEffects', () => {
  let actions$: Observable<any>;
  let effects: AdminEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreRootModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        AngularFirestoreModule
      ],
      providers: [
        AdminEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AdminEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
