import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileUserComponent } from './user-profile-user.component';
import { ModalModule } from 'angular-bootstrap-md';
import { StoreModule } from '@ngrx/store';

describe('UserProfileUserComponent', () => {
  let component: UserProfileUserComponent;
  let fixture: ComponentFixture<UserProfileUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileUserComponent ],
      imports: [
        ModalModule.forRoot(),
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
