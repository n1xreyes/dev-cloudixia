import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Component } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
describe('HeaderComponent', () => {
    let hostComponent: TestHostComponent;
    let hostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                HeaderComponent
            ],
            imports: [
                StoreModule.forRoot({}),
                MDBBootstrapModule.forRoot()
            ],
            providers: [

            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(TestHostComponent);
        hostComponent = hostFixture.componentInstance;
        hostFixture.detectChanges();
    });

    it('should create the header component', async(() => {
        console.log(hostFixture.nativeElement.querySelector("app-header"))
        expect(hostFixture.nativeElement.querySelector("mdb-navbar links")).toBeTruthy();
    }));

    it('should create the navbar logo', async(() => {
        expect(hostFixture.nativeElement.querySelector("mdb-navbar-brand")).toBeTruthy();
    }));

    it('should show all non-authenticated links', async(() => {
        let items = hostFixture.nativeElement.querySelectorAll(".nav-item")

        // Hard coding because easier to test for
        expect(items[0].innerText.includes("Marketplace")).toBeTruthy();

        expect(items[1].classList.contains("fa-globe-africa")).toBeTruthy();

        expect(items[2].innerText).toEqual("Become a Freelancer")

        expect(items[3].innerText).toEqual("Login")

        expect(items[4].innerText).toEqual("Register")
    }));

    describe("with authenticated user", () => {
        let mockUser: User = {
            uid: "12345",
            displayName: "Robotron",
            email: "myadmin@php.com",
            providerId: "email",
            photoUrl: "https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png"
        }

        // Inject a mock authenticated user
        beforeEach( () => {
            hostComponent.bootstrap(mockUser, false, true)
            hostFixture.detectChanges();
        })
        
        it('should show all authenticated links', async(() => {

            let items = hostFixture.nativeElement.querySelectorAll(".nav-item")
    
            // Hard coding because easier to test for
            expect(items[0].innerText.includes("Marketplace")).toBeTruthy();
    
            expect(items[1].innerText).toEqual("Your Listings")

            expect(items[2].classList.contains("fa-globe-africa")).toBeTruthy();    
        }));

        it('should show photoUrl of user', async(() => {
            expect(hostFixture.nativeElement.querySelector(".nav-item.avatar-dropdown a img")).toBeTruthy()
        }))

        it('should show photoUrl of user', async(() => {
            let noPhotoUrlUser = Object.assign({}, mockUser)
            noPhotoUrlUser.photoUrl = '';

            hostComponent.bootstrap(noPhotoUrlUser, false, true)
            hostFixture.detectChanges();

            // no image to show
            expect(hostFixture.nativeElement.querySelector(".nav-item.avatar-dropdown a img")).toEqual(null)
            // shows icon instead
            expect(hostFixture.nativeElement.querySelector(".nav-item.avatar-dropdown a i")).toBeTruthy()

        }))

        it('should show admin url', async(() => {
            hostComponent.makeAdmin()
            hostFixture.detectChanges();

            let items = hostFixture.nativeElement.querySelectorAll(".nav-item")
    
            expect(items[2].innerText.includes("Admin panel")).toBeTruthy();
            expect(items[3].innerText.includes("Admin panel")).toBeFalsy(); // sanity check

        }))

    })


});

@Component({
    selector: `host-component`,
    template: `<app-header [user]="user" [isLoggedIn]="isLoggedIn" [isLoading]="isLoading" [isAdmin]="isAdmin"></app-header>`
  })
  class TestHostComponent {
    user: User;
    isLoading: boolean;
    isLoggedIn: boolean;
    isAdmin: boolean;

    bootstrap(user: User, isLoading: boolean, isLoggedIn: boolean) {
      this.user = user;
      this.isLoading = isLoading;
      this.isLoggedIn = isLoggedIn;
    }

    makeAdmin() {
        this.isAdmin = true;
    }

  }