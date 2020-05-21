import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsComponent } from './listing-details.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Listing } from 'src/app/shared/models/listing.model';
import { UserProfile } from 'src/app/auth/models/user.model';
import { AngularFirestoreModule } from '@angular/fire/firestore';

describe('ListingDetailsComponent', () => {
  let component: ListingDetailsComponent;
  let fixture: ComponentFixture<ListingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailsComponent ],
      imports: [
        StoreModule.forRoot({}),
        RouterModule.forRoot([], {}),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const mockListing: Listing = {
    uid: '12345',
    userId: 'John Lennon',
    photoUrl: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.clker.com%2Fclipart-favicon.html&psig=AOvVaw2iHjEJkzW9E7lIWnRWN2cx&ust=1588454144983000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjD1PzKk-kCFQAAAAAdAAAAABAD',
    price: '9.90',
    description: 'this is my listing!!',
    title: 'my Listing',
    categories: []
  };

  const mockUserProfile: UserProfile = {
    displayName: 'Frodo Baggins',
    photoUrl: 'https://img1.looper.com/img/gallery/frodo-baggins-entire-backstory-explained/intro-1582640416.jpg'
  };

  it('should show a listing', () => {
    component.isLoading = false;
    component.listing = mockListing;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h3').innerText).toEqual(mockListing.title);
    expect(fixture.nativeElement.querySelector('p.description').innerText).toEqual(mockListing.description);
  });

  it('should show a user', () => {
    component.isLoading = false;
    component.listing = mockListing;
    component.listingUserProfile = mockUserProfile;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.avatar img').src).toEqual(mockUserProfile.photoUrl);
    expect(fixture.nativeElement.querySelector('.avatar a').innerText).toEqual(mockUserProfile.displayName);
  });

});
