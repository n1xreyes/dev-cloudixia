import { Input, Output, EventEmitter, Directive, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { isNil } from 'lodash';

@Directive()
export abstract class InputWrapperBase implements OnInit, OnDestroy, ControlValueAccessor {

  protected abstract formGroup: FormGroupDirective;
  protected abstract ref: ChangeDetectorRef;

  @Input() name: string;
  @Input() required: boolean;
  @Input() validOnPristine: boolean;
  @Input() disabled: boolean;
  @Input() label: string;

  // TODO: think how to remove this in favor of [(ngModel)] as this is duplicated logic
  private _value: any;
  @Input()
  get value(): any {
    return this._value;
  }
  set value(value: any) {
    this.writeValue(value);
  }
  @Output()
  valueChange: EventEmitter<any> = new EventEmitter<any>();

  control: AbstractControl;

  private preventValueChangeEvent: boolean = false;
  private subscriptions: Subscription[] = [];

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  ngOnInit(): void {
    if (this.formGroup) {
      const control: AbstractControl | null = this.formGroup.form.get(this.name);
      if (control) {
        this.control = control;
      } else {
        throw new Error(`Cannot find control for app-ng-select-wrapper of name '${this.name}' in provided form`);
      }
    } else {
        this.control = new FormControl();
    }

    this.subscriptions.push(this.control.statusChanges.subscribe(() => {
      this._onTouched();
      this.ref.markForCheck();
    }));


    this.subscriptions.push(this.control.valueChanges.subscribe((value: any) => {
      this._onChange(value);
      if (this.valueChange.observers.length) {
        this.onValueChanges(value);
      }
    }));

    if (this.value) {
      this.control.setValue(this.value);
    }

    this.isRequired();
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  isRequired(): void {
    if (isNil(this.required) && this.name && this.control.validator) {
      const validators: any = this.control.validator(<any>this.name);
      if (validators) {
        this.required = validators.hasOwnProperty('required');
      }
    }
  }

  onValueChanges(value: any): void {
    if (!this.preventValueChangeEvent) {
      this.valueChange.emit(value);
    }
    this.preventValueChangeEvent = false;
  }

  writeValue(value: any): void {
    this._value = value;
    if (this.control) {
      this.preventValueChangeEvent = true;
      this.control.setValue(this._value);
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

}
