import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProjectsEffects } from './projects.effects';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { projectsReducer } from './projects.reducer';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

describe('ProjectsEffects', () => {
  let actions$: Observable<any>;
  let effects: ProjectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsEffects,
        provideMockActions(() => actions$)
      ],
      imports: [
        StoreModule.forFeature('projects', projectsReducer),
        StoreModule.forRoot({}),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        AngularFireFunctionsModule,
        AngularFireAuthModule
      ]
    });

    effects = TestBed.inject(ProjectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
