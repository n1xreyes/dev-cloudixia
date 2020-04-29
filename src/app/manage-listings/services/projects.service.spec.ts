import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
      ]
    });
  });

  // it('should be created', inject([ProjectsService], (service: ProjectsService) => {
  //   expect(service).toBeTruthy();
  // }));
});
