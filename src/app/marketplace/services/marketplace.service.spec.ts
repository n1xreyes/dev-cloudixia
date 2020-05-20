import { TestBed } from '@angular/core/testing';

import { MarketplaceService } from './marketplace.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import * as fromMarket from '../store/marketplace.reducer';

describe('MarketplaceService', () => {
  let service: MarketplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forFeature('marketplace', fromMarket.marketplaceReducer),
        StoreModule.forRoot({}),
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

  // it('Prepare filters for algolia categories search', () => {
  //   expect(service.prepareMarketplaceFilters([
  //     categories[0],
  //     categories[1]
  //   ])).toBe(`categories.name:"${categories[0].title}" OR categories.name:"${categories[1].title}"`);
  // });
});
