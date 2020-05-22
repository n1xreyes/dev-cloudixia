import { TestBed, inject } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';


describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreRootModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireFunctionsModule
      ],
      providers: [AdminGuard]
    });
  });

  it('should ...', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
