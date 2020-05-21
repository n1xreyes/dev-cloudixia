import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { StoreModule } from '@ngrx/store';
import { marketplaceReducer } from '../../store/marketplace.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfile } from 'src/app/auth/models/user.model';
import { Listing } from 'src/app/shared/models/listing.model';
import { UserProfileUserComponent } from './user-profile-user/user-profile-user.component';
import { UserProfileListingsComponent } from './user-profile-listings/user-profile-listings.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { of } from 'rxjs';
import { ListingOverviewCardComponent } from '../listing-overview-card/listing-overview-card.component';
import { ModalModule } from 'angular-bootstrap-md';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent, UserProfileUserComponent, UserProfileListingsComponent, ListingOverviewCardComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('marketplace', marketplaceReducer),
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        ModalModule.forRoot(),
      ],
      providers: [
        {
          provide: MarketplaceService,
          useValue: {
            getUserProfile: () => {
              return of(mockUserProfile);
            },
            getListing: (listingId: string) => {
              return of(mockListingsDatabase.find( listing => {
                return listing.uid === listingId;
              }));
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const mockListingsDatabase: Listing[] = [
      {
      uid: '123',
      userId: 'aaabbbccc',
      photoUrl: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.clker.com%2Fclipart-favicon.html&psig=AOvVaw2iHjEJkzW9E7lIWnRWN2cx&ust=1588454144983000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjD1PzKk-kCFQAAAAAdAAAAABAD',
      price: '9.90',
      description: 'this is my first listing!!',
      title: 'my Listing',
      categories: []
    },
    {
      uid: '789',
      userId: 'dont find me!',
      photoUrl: 'bad photo',
      description: 'should not find me',
      title: 'hello twerld',
      categories: []
    },
    {
      uid: '456',
      userId: 'aaabbbccc',
      photoUrl: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.clker.com%2Fclipart-favicon.html&psig=AOvVaw2iHjEJkzW9E7lIWnRWN2cx&ust=1588454144983000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjD1PzKk-kCFQAAAAAdAAAAABAD',
      price: '19.99',
      description: 'this is my second listing!!',
      title: 'my Second Listing',
      categories: []
    }
  ];

  const mockUserProfile: UserProfile = {
    listings: {
      '123': true,
      '456': true
    },
    displayName: 'Frodo Baggins',
    photoUrl: 'https://img1.looper.com/img/gallery/frodo-baggins-entire-backstory-explained/intro-1582640416.jpg'
  };

  it('should show the user profile after retrieving', async() => {
    expect(fixture.nativeElement.querySelector('.avatar h3').innerText).toEqual(mockUserProfile.displayName);
  });

  //TODO: this test doesn't work anymore as we request data from backend i.e. we need to mock ngrx store
  // it('should retrieve the listings after user profile', async() => {
  //   component.userProfile = mockUserProfile;

  //   expect(component.listings.length).toEqual(2);
  //   expect(component.listings[0].uid).toEqual(mockListingsDatabase[0].uid);
  //   expect(component.listings[1].uid).toEqual(mockListingsDatabase[2].uid);

  //   const listingCards = fixture.nativeElement.querySelectorAll('mdb-card-title h4');

  //   expect(listingCards[0].innerText).toEqual(mockListingsDatabase[0].title);
  //   expect(listingCards[1].innerText).toEqual(mockListingsDatabase[2].title);
  // });

});
