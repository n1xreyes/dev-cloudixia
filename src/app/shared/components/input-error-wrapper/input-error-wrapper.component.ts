import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-error-wrapper',
  templateUrl: './input-error-wrapper.component.html',
  styleUrls: ['./input-error-wrapper.component.css']
})
export class InputErrorWrapperComponent implements OnInit {

  @Input() validOnPristine: boolean;
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }

}
