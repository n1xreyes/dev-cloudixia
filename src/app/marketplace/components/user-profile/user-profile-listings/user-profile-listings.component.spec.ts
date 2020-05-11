import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileListingsComponent } from './user-profile-listings.component';

describe('UserProfileListingsComponent', () => {
  let component: UserProfileListingsComponent;
  let fixture: ComponentFixture<UserProfileListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
