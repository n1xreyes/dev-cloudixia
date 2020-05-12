import { Component, Input, Optional, Host, ChangeDetectorRef, forwardRef } from '@angular/core';
import { FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEqual } from 'lodash';
import { AddTagFn } from '@ng-select/ng-select/lib/ng-select.component';
import { InputWrapperBase } from '../../common/input-wrapper-base';

@Component({
  selector: 'app-ng-select-wrapper',
  templateUrl: './ng-select-wrapper.component.html',
  styleUrls: ['./ng-select-wrapper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => NgSelectWrapperComponent),
    }
  ]
})
export class NgSelectWrapperComponent extends InputWrapperBase {

  // TODO: add setter in order to track external changes
  @Input() clearable: boolean;
  @Input() label: string;
  @Input() items: any[];
  @Input() bindLabel: string;
  @Input() bindValue: string;
  @Input() multiple: boolean;
  @Input() addTag?: boolean | AddTagFn;

  // Error modal
  @Input() validOnPristine: boolean = true;

  constructor(
    @Optional() @Host() protected formGroup: FormGroupDirective,
    protected ref: ChangeDetectorRef
  ) {
    super();
  }

  compareWith = (option: any, selected: any) => isEqual(option, selected);

}
