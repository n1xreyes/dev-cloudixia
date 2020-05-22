import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWrapperComponent } from './input-wrapper.component';
import { Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

describe('InputWrapperComponent', () => {
  let component: InputWrapperComponent;
  let fixture: ComponentFixture<InputWrapperComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWrapperComponent ],
      imports: [
        TranslateModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWrapperComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.control).toBeTruthy();
    expect(nativeElement.querySelector('input')?.type).toBe('text');
  });

  it('should read `required` property from control', () => {
    expect(component.required).toBeFalsy();
    component.control.setValidators([Validators.required]);
    component.name = 'Test';
    component.isRequired();
    fixture.detectChanges();
    expect(component.required).toBeTruthy();
  });
});
