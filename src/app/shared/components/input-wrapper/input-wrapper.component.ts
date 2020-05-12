import { Component, Host, Optional, ChangeDetectorRef, Input, OnInit, forwardRef } from '@angular/core';
import { InputWrapperBase } from '../../common/input-wrapper-base';
import { FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputWrapperComponent),
    }
  ]
})
export class InputWrapperComponent extends InputWrapperBase implements OnInit {

  isTextArea: boolean;

  @Input() type: 'text' | 'number' | 'password' | 'textarea' = 'text';
  @Input() placeholder: string = '';
  @Input() validOnPristine: boolean = true;

  constructor(
    @Optional() @Host() protected formGroup: FormGroupDirective,
    protected ref: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.isTextArea = this.type === 'textarea';
  }

}
