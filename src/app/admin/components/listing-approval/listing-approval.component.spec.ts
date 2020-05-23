import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromAdmin from '../../store/admin.reducer';

import { ListingApprovalComponent } from './listing-approval.component';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { Listing, ListingWithCategory } from 'src/app/shared/models/listing.model';

describe('ListingApprovalComponent,', () => {
  let component: ListingApprovalComponent;
  let fixture: ComponentFixture<ListingApprovalComponent>;

  const mockListings: ListingWithCategory[] = [
    {
      uid: '12345',
      userId: 'John Lennon',
      photoUrl: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.clker.com%2Fclipart-favicon.html&psig=AOvVaw2iHjEJkzW9E7lIWnRWN2cx&ust=1588454144983000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjD1PzKk-kCFQAAAAAdAAAAABAD',
      price: '9.90',
      description: 'this is my listing!!',
      title: 'my Listing',
      categories: [
        'Cat1',
        'Cat2'
      ],
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forFeature('admin', fromAdmin.adminReducer),
        StoreModule.forRoot({}),
        MDBBootstrapModule.forRoot()
      ],
      declarations: [ListingApprovalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the loading screen and hide it appropriately', () => {
    let loadEl;

    component.isLoading$ = of(true);
    fixture.detectChanges();
    loadEl = fixture.nativeElement.querySelector('.spinner-grow span');
    expect(loadEl.innerText).toEqual('Loading...');

    component.isLoading$ = of(false);
    fixture.detectChanges();
    loadEl = fixture.nativeElement.querySelector('.spinner-grow span');
    expect(loadEl).toBeNull();
  });

  describe('with a listing,', () => {
    beforeEach(() => {
      component.listings$ = of(mockListings);
      fixture.detectChanges();
    });

    it('should show a pending listing', () => {
      expect(fixture.nativeElement.querySelectorAll('mdb-card').length).toEqual(1);
    });

    it('should show two pending listings', () => {
      const twoMockListings: Listing[] = Object.assign([], mockListings);
      twoMockListings.push(twoMockListings[0]);

      component.listings$ = of(twoMockListings);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelectorAll('mdb-card').length).toEqual(2);
    });

    it('should show all the features of the listing', () => {
      expect(fixture.nativeElement.querySelector('mdb-card img').src).toEqual(mockListings[0].photoUrl);
      const textInserts = fixture.nativeElement.querySelectorAll('mdb-card-body mdb-card-text p');

      expect(textInserts[0].innerText).toEqual('Title: ' + mockListings[0].title);
      expect(textInserts[1].innerText).toEqual('Description: ' + mockListings[0].description);
      // expect(textInserts[2].innerText).toEqual('Categories: ' + ListringWithCategory.getCategoryName(mockListings[0]));
      expect(textInserts[3].innerText).toEqual('Price: ' + mockListings[0].price);
      expect(textInserts[4].innerText).toEqual('Owner: ' + mockListings[0].userId);
    });

  });

  describe('Testing the button modals,', () => {

    beforeEach(() => {
      component.listings$ = of(mockListings);
      fixture.detectChanges();
    });

    it('should open a modal when "delete" is pressed', () => {
      fixture.nativeElement.querySelector('.red.btn').click();
      expect(fixture.nativeElement.parentNode.querySelector('.modal-dialog')).toBeTruthy();
    });

    it('should open a modal when "approve" is pressed', () => {
      fixture.nativeElement.querySelector('.btn-primary').click();
      expect(fixture.nativeElement.parentNode.querySelector('.modal-dialog')).toBeTruthy();
    });
  });

});
