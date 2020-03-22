import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AdminEffects } from './admin.effects';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('AdminEffects', () => {
  let actions$: Observable<any>;
  let effects: AdminEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
      ],
      providers: [
        AdminEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AdminEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
