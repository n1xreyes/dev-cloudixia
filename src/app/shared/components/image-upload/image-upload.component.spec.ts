import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';

import { ImageUploadComponent } from './image-upload.component';
import {AuthService} from '../../../auth/services/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../reducers';

describe('ImageUploadComponent', () => {
  let component: ImageUploadComponent;
  let fixture: ComponentFixture<ImageUploadComponent>;
  let service: AuthService;
  let store: Store<AppState>;
  let spy;

  configureTestSuite( (() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploadComponent ],
      providers: [
        AuthService
      ]
    })
    store = TestBed.get(Store);
    service = TestBed.get(AuthService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadComponent);
    component = fixture.componentInstance;
    spy = spyOn(component['store'], 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call authService on init', () => {
    expect(service.getAuthState).toHaveBeenCalled();
  });
});
