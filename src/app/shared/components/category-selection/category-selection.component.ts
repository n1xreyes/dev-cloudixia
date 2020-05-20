import { Component, OnInit, forwardRef, Input, Optional, Host, Attribute } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroupDirective, AbstractControl } from '@angular/forms';
import { Category } from '../../models/category.model';
import { isArray } from 'lodash';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CategorySelectionComponent),
    }
  ]
})
export class CategorySelectionComponent implements OnInit, ControlValueAccessor {

  @Input() items: Category[];
  @Input() returnUid: boolean;
  @Input() validOnPristine: boolean;

  value: Category | undefined;
  isDisabled: boolean;
  control: AbstractControl;

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  constructor(
    @Optional() @Host() formGroup: FormGroupDirective,
    @Optional() @Attribute('formControlName') formControlName: string
  ) {
    if (formGroup && formControlName) {
      this.control = formGroup.form.controls[formControlName];
    }
  }

  ngOnInit(): void {
  }

  writeValue(value: Category | string[] | undefined): void {
    if (value) {
      if (this.returnUid) {
        if (isArray(value)) {
          this.value = Category.getSuperParentFromList(this.items, value);
        }
      } else {
        this.value = value as Category;
      }
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  trackByFunction(_index: number, element: Category): string {
    return element.uid;
  }

  setValue(value: Category): void {
    if (!this.isDisabled) {
      this.value = value;
      if (this.returnUid) {
        this._onChange([
          ...(value.parents || []),
          value.uid
        ]);
      } else {
        this._onChange(value);
      }
      this._onTouched();
    }
  }

  getSubcategories(item: Category): Category[] | undefined {
    return item.subCategories && Object.values(item.subCategories);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
