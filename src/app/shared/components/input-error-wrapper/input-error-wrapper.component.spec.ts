import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorWrapperComponent } from './input-error-wrapper.component';
import { FormControl } from '@angular/forms';
import { FieldErrorsPipe } from '../../pipe/field-errors.pipe';

describe('InputErrorWrapperComponent', () => {
  let component: InputErrorWrapperComponent;
  let fixture: ComponentFixture<InputErrorWrapperComponent>;
  let control: FormControl;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputErrorWrapperComponent, FieldErrorsPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorWrapperComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    control = new FormControl();
    component.control = control;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(nativeElement.querySelector('.app-input-error-wrapper')).toBeTruthy();
    expect(nativeElement.querySelector('mdb-error')).toBeFalsy();
  });

  it('should not render, when `validOnPristine` and not dirty', () => {
    component.validOnPristine = true;
    fixture.detectChanges();

    expect(nativeElement.querySelector('.app-input-error-wrapper')).toBeFalsy();
  });

  it('should not render, when `validOnPristine` and dirty', () => {
    component.validOnPristine = true;
    control.markAsDirty();
    fixture.detectChanges();

    expect(nativeElement.querySelector('.app-input-error-wrapper')).toBeTruthy();
  });

  it('should not render, when `validOnPristine` and dirty', () => {
    control.setErrors([{'test': true}]);
    fixture.detectChanges();

    expect(nativeElement.querySelector('mdb-error')).toBeTruthy();
  });

});
