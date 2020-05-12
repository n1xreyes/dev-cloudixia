import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Listing } from 'src/app/shared/models/listing.model';
import { projectsReducer } from '../store/projects.reducer';

@Component({
  selector: `host-component`,
  template: `<app-projects
    [projects$]=projects$
    [isLoading$]=isLoading$
    [pendingListings$]=pendingListings$
    [isPendingLoading$]=isPendingLoading$
  ></app-projects>`
})
class TestHostComponent {
  projects$: Observable<Listing[] | null>;
  isLoading$: Observable<boolean>;
  pendingListings$: Observable<Listing[] | null>;
  isPendingLoading$: Observable<boolean>;

  bootstrap(
    projects$: Observable<Listing[]>,
    isLoading$: Observable<boolean>,
    pendingListings$: Observable<Listing[]>,
    isPendingLoading$: Observable<boolean>,
  ) {
    this.projects$ = projects$;
    this.isLoading$ = isLoading$;
    this.pendingListings$ = pendingListings$;
    this.isPendingLoading$ = isPendingLoading$;
  }

}

describe('ProjectsComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent, TestHostComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('projects', projectsReducer),
        MDBBootstrapModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
      ],
      providers: [

      ]
    })
    .compileComponents();
  }));

  const mockListings: Listing[] = [{
    title: 'my listing'
  }];

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostComponent.bootstrap(of(mockListings), of(false), of(mockListings), of(false));
    hostFixture.detectChanges();
  });

  it('should create the project component', async(() => {// for non-used fail
    expect(hostFixture.nativeElement.querySelector('app-projects')).toBeTruthy();
  }));

  it('should show the pending listings title', async(() => {
    expect(hostFixture.nativeElement.querySelector('app-projects h2').innerText).toEqual('Pending Listings');
  }));

});
