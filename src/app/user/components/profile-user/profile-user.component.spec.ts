import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Component } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { ProfileUserComponent } from './profile-user.component';

describe('ProfileUserComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

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

  let mockUser: User = {
    uid: "12345",
    email: "myadmin@php.com",
    providerId: "email",
    userProfile: {
      displayName: "Robotron",
      photoUrl: "https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png"
    }
  }

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostComponent.bootstrap(mockUser)
    hostFixture.detectChanges();
  });


  it('should create the profile user component', async(() => {
    expect(hostFixture.nativeElement.querySelector("mdb-card")).toBeTruthy();
  }));

  it('should show the user profile', async(() => {
    expect(hostFixture.nativeElement.querySelector("mdb-card .avatar img").src).toEqual(mockUser.userProfile.photoUrl)
  }));

  it('should show the user name', async(() => {
    expect(hostFixture.nativeElement.querySelector("mdb-card h3").innerText).toEqual(mockUser.userProfile.displayName)
  }));

});


@Component({
  selector: `host-component`,
  template: `<app-profile-user [user]="user"></app-profile-user>`
})
class TestHostComponent {
  user: User

  bootstrap(user: User) {
    this.user = user;
  }

}