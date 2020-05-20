import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingOverviewCardComponent } from './listing-overview-card.component';
import { Component } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: `host-component`,
  template: `<app-listing-overview-card [listing]="listing" ></app-listing-overview-card>`
})
class TestHostComponent {
  listing: Listing;

  bootstrap(listing: Listing) {
    this.listing = listing;
  }

}

describe('ListingOverviewCardComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            TestHostComponent,
            ListingOverviewCardComponent
        ],
        imports: [
            StoreModule.forRoot({}),
            MDBBootstrapModule.forRoot()
        ],
        providers: [

        ]
    }).compileComponents();


    const mockListing: Listing = {
      uid: 'test',
      title: 'mockListingTitle',
      categories: []
    };

    beforeEach(() => {
        hostFixture = TestBed.createComponent(TestHostComponent);
        hostComponent = hostFixture.componentInstance;
        hostComponent.bootstrap(mockListing);
        hostFixture.detectChanges();
    });

    it('should create', () => {
      expect(hostComponent).toBeTruthy();
    });

  }));

});
