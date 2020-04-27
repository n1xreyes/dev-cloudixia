import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [
        StoreModule.forRoot({}),
        StoreRootModule,
        RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
      ],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
