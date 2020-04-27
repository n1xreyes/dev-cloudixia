import { TestBed } from '@angular/core/testing';

import { MarketplaceService } from './marketplace.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('MarketplaceService', () => {
  let service: MarketplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
      ]
    });
    service = TestBed.inject(MarketplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
