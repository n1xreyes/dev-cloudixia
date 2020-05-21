import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromAdmin from '../../store/admin.reducer';
import { AdminComponent } from './admin.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CollapseModule,
  CardsModule,
  DropdownModule,
  BadgeModule,
  ButtonsModule,
  IconsModule,
  MDBModalService,
  MDBBootstrapModule
} from 'angular-bootstrap-md';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from '../../store/admin.effects';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { User } from 'src/app/auth/models/user.model';
import { of } from 'rxjs';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { UserComponent } from '../../components/user/user.component';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
        BrowserAnimationsModule,
        CollapseModule,
        CardsModule,
        DropdownModule,
        BadgeModule,
        ButtonsModule,
        IconsModule,
        StoreModule.forFeature('admin', fromAdmin.adminReducer),
        StoreModule.forRoot({}),
        EffectsModule.forFeature([AdminEffects]),
        EffectsModule.forRoot([AdminEffects]),
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MDBBootstrapModule.forRoot(),
        AngularFirestoreModule,
        AngularFireFunctionsModule,
      ],
      providers: [
        MDBModalService
      ],
      declarations: [AdminComponent, UsersListComponent, UserComponent, UserDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const mockUsers: User[] = [
    {
      uid: '12345',
      email: 'myemail@yahoo.com',
      providerId: 'email',
      userProfile: {
        displayName: 'sedky',
        photoUrl: 'myphoto',
      },
      pendingListings: [],
    },
    {
      uid: '67890',
      email: 'rami@yahoo.com',
      providerId: 'email',
      userProfile: {
        photoUrl: 'ramiphoto',
        displayName: 'rami',
      },
      pendingListings: [],
    }
  ];

  it('should show the loading thingy', () => {
    expect(fixture.nativeElement.querySelectorAll('.spinner-grow')).toBeTruthy();
  });

  describe('with users, ', () => {
    beforeEach(() => {
      component.users$ = of(mockUsers);
      component.usersListLoading$ = of(false);
      fixture.detectChanges();
    });

    it('should display two user cards', () => {
      const cards = fixture.nativeElement.querySelectorAll('mdb-card');
      expect(cards.length).toEqual(mockUsers.length);
    });

    it('should display user details', () => {
      const card = fixture.nativeElement.querySelector('mdb-card .btn-primary');
      card.click();
      fixture.detectChanges();

      const userDetails = fixture.nativeElement.querySelector('app-user-detail');
      expect(userDetails).toBeTruthy();
    });

  });

});
