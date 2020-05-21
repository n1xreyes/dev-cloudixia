import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfileComponent } from './main-profile.component';
import { Component } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { User } from 'src/app/auth/models/user.model';
import { Language } from 'src/app/shared/models/language.enum';
import { Observable, of } from 'rxjs';
import { authReducer } from 'src/app/auth/store/auth.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: `app-host-component`,
  template: `<app-main-profile [language$]="language" [user]="user"></app-main-profile>`
})
class TestHostComponent {
  user: User;
  language$: Observable<Language>;

  bootstrap(user: User) {
    this.user = user;
    this.language$ = of(Language.ENGLISH);
  }

}

describe('MainProfileComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        MainProfileComponent
      ],
      imports: [
        StoreModule.forFeature('auth', authReducer),
        StoreModule.forRoot({}),
        MDBBootstrapModule.forRoot(),
        ReactiveFormsModule
      ],
      providers: []
    }).compileComponents();
  }));

  const mockUser: User = {
    uid: '12345',
    email: 'myadmin@php.com',
    providerId: 'email',
    country: 'canada',
    street: '123',
    poBox: '12566',
    city: 'jeddah',
    userProfile: {
      displayName: 'Robotron',
      photoUrl: 'https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png'
    },
    pendingListings: [],
  };

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostComponent.bootstrap(mockUser);
    hostFixture.detectChanges();
  });

  it('should create the header component', async(() => {
    expect(hostFixture.nativeElement.querySelector('mdb-card')).toBeTruthy();
  }));

  it('should pull the current user info into the update form', async(() => {
    const formInputs = hostFixture.nativeElement.querySelectorAll('mdb-card .md-form input');

    // expect(formInputs[0].value).toEqual(mockUser.userProfile.photoUrl);
    expect(formInputs[0].value).toEqual(mockUser.country);
    expect(formInputs[1].value).toEqual(mockUser.poBox);
    expect(formInputs[2].value).toEqual(mockUser.city);
    expect(formInputs[3].value).toEqual(mockUser.street);
  }));

});
