import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationModalComponent } from './localization-modal.component';
import { MDBBootstrapModule, MDBModalRef } from 'angular-bootstrap-md';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

describe('LocalizationModalComponent', () => {
  let component: LocalizationModalComponent;
  let fixture: ComponentFixture<LocalizationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizationModalComponent ],
      imports: [
        StoreModule.forRoot({}),
        MDBBootstrapModule.forRoot(),
        FormsModule
      ],
      providers: [
        {provide: MDBModalRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
