import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceComponent } from './marketplace.component';
import { StoreModule } from '@ngrx/store';
import { TranslateTestingModule } from 'ngx-translate-testing';
import * as fromMarket from '../store/marketplace.reducer';

describe('MarketplaceComponent', () => {
  let component: MarketplaceComponent;
  let fixture: ComponentFixture<MarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarketplaceComponent],
      imports: [
        StoreModule.forFeature('marketplace', fromMarket.marketplaceReducer),
        StoreModule.forRoot({}),
        TranslateTestingModule.withTranslations("en", {'marketplace.componentHeader': 'Marketplace'})]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h3 title', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h3 = bannerElement.querySelector('h3');
    h3 && expect(h3.textContent).toEqual('Marketplace');
  });

});
