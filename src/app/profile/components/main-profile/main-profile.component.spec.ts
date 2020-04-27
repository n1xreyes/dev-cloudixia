import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfileComponent } from './main-profile.component';
import { Component } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { User } from 'src/app/auth/models/user.model';

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
        StoreModule.forRoot({}),
        MDBBootstrapModule.forRoot()
      ],
      providers: []
    }).compileComponents();
  }));

  let mockUser: User = {
    uid: "12345",
    displayName: "Robotron",
    email: "myadmin@php.com",
    providerId: "email",
    photoUrl: "https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png"
  }

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostComponent.bootstrap(mockUser)
    hostFixture.detectChanges();
  });

  it('should create the header component', async(() => {
    expect(hostFixture.nativeElement.querySelector("mdb-card")).toBeTruthy();
  }));

});

@Component({
  selector: `host-component`,
  template: `<app-main-profile [user]="user"></app-main-profile>`
})
class TestHostComponent {
  user: User

  bootstrap(user: User) {
    this.user = user;
  }

}