import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Component } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { Language } from 'src/app/shared/models/language.enum';

@Component({
    selector: `app-host-component`,
    template: `
        <app-header [user]="user" [isLoggedIn]="isLoggedIn" [isLoading]="isLoading" [isAdmin]="isAdmin" [language]=language></app-header>
    `
})
class TestHostComponent {
  user: User;
  isLoading: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  language: Language;

  bootstrap(user: User, isLoading: boolean, isLoggedIn: boolean) {
    this.user = user;
    this.isLoading = isLoading;
    this.isLoggedIn = isLoggedIn;
  }

  makeLanguage(lang: Language) {
    this.language = lang;
  }

  makeAdmin() {
    this.isAdmin = true;
  }

}

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
        expect(hostFixture.nativeElement.querySelector('mdb-navbar links')).toBeTruthy();
    }));

    it('should create the navbar logo', async(() => {
        expect(hostFixture.nativeElement.querySelector('mdb-navbar-brand')).toBeTruthy();
    }));

    it('should show all non-authenticated links', async(() => {
        const items = hostFixture.nativeElement.querySelectorAll('.nav-item');

        // Hard coding because easier to test for
        expect(items[0].innerText.includes('header.links.marketplace')).toBeTruthy();

        expect(items[1].innerText).toEqual('Become a Freelancer');

        expect(items[2].innerText).toEqual('Login');

        expect(items[3].innerText).toEqual('Register');

        expect(items[4].firstElementChild.firstElementChild.classList.contains('fa-globe-africa')).toBeTruthy();
    }));

    describe('with authenticated user', () => {
        const mockUser: User = {
            uid: '12345',
            email: 'myadmin@php.com',
            providerId: 'email',
            userProfile: {
                displayName: 'Robotron',
                photoUrl: 'https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png'
            }
        };

        // Inject a mock authenticated user
        beforeEach( () => {
            hostComponent.bootstrap(mockUser, false, true);
            hostFixture.detectChanges();
        });

        it('should show all authenticated links', async(() => {

            const items = hostFixture.nativeElement.querySelectorAll('.nav-item');

            // Hard coding because easier to test for
            expect(items[0].innerText.includes('header.links.marketplace')).toBeTruthy();

            expect(items[1].innerText).toEqual('header.links.yourListings');

            expect(items[2].firstElementChild.firstElementChild.classList.contains('fa-globe-africa')).toBeTruthy();

            expect(items[3].classList.contains('avatar-dropdown')).toBeTruthy();
        }));

        it('should show user favicon', async(() => {
            expect(hostFixture.nativeElement.querySelector('.nav-item.avatar-dropdown a i.fa-user')).toBeTruthy();
        }));

        it('should show admin urls', async(() => {
            hostComponent.makeAdmin();
            hostFixture.detectChanges();

            const items = hostFixture.nativeElement.querySelectorAll('.nav-item');

            expect(items[2].innerText).toEqual('header.links.adminPanel');
        }));

        it('should apply the right css based on language', () => {
            expect(hostFixture.nativeElement.querySelector('.navbar-nav.nav-flex-icons.ml-auto')).toBeTruthy();
            hostComponent.makeLanguage(Language.ARABIC);
            hostFixture.detectChanges();
            expect(hostFixture.nativeElement.querySelector('.navbar-nav.nav-flex-icons.mr-auto')).toBeTruthy();
        });

    });


});
