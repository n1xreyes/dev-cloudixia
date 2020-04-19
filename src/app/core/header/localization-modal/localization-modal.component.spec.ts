import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationModalComponent } from './localization-modal.component';

describe('LocalizationModalComponent', () => {
  let component: LocalizationModalComponent;
  let fixture: ComponentFixture<LocalizationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizationModalComponent ]
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
