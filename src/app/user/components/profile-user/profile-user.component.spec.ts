import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Component } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { ProfileUserComponent } from './profile-user.component';

@Component({
  selector: `app-host-component`,
  template: `<app-profile-user [user]="user" [userProfile]="user.userProfile"></app-profile-user>`
})
class TestHostComponent {
  user: User;

  bootstrap(user: User) {
    this.user = user;
  }

}

describe('ProfileUserComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        ProfileUserComponent
      ],
      imports: [
        StoreModule.forRoot({}),
        MDBBootstrapModule.forRoot()
      ],
      providers: []
    }).compileComponents();
  }));

  const mockUser: User = {
    uid: '12345',
    email: 'myadmin@php.com',
    providerId: 'email',
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
    nativeElement = hostFixture.nativeElement;
    hostFixture.detectChanges();
  });


  it('should create the profile user component', async(() => {
    expect(nativeElement.querySelector('mdb-card mdb-card-body')).toBeTruthy();
  }));

  it('should show the user profile', async(() => {
    expect((nativeElement.querySelector('mdb-card .avatar img') as HTMLImageElement)?.src).toEqual(mockUser.userProfile.photoUrl);
  }));

  it('should show the user name', async(() => {
    expect(nativeElement.querySelector('h3')?.innerText).toEqual(mockUser.userProfile.displayName);
  }));

});
