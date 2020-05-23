import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { IDomain } from 'src/app/core/model/i-domain.model';
import { MDBModalRef } from 'angular-bootstrap-md';

// TODO: add "delete" button
// TODO: add "confirmation" before close and dirty form
@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.css']
})
export class CrudModalComponent<T extends IDomain> implements OnInit {

  @Input() form: FormGroup;

  @Input() entity: T;

  @Input() entityTitle: string;

  @Input() customTitle: string;

  @Output() saved: EventEmitter<T> = new EventEmitter<T>();

  @Output() error: EventEmitter<any> = new EventEmitter<any>();

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
    if (this.entity) {
      Object.entries(this.entity).forEach(([key, value]) => {
        const control: AbstractControl = this.form.controls[key];
        if (control) {
          control.setValue(value);
        }
      });
    }
  }

  onSave() {
    if (this.form.valid) {
      this.saved.emit({
        ...this.entity,
        ...this.form.value
      });
      this.modalRef.hide();
    } else {
      this.error.emit();
      Object.keys(this.form.controls)
        .forEach(controlName => this.form.controls[controlName].markAsTouched());
    }
  }

  getHeadingPrefix(): string {
    return this.entity?.uid ? 'common.edit' : 'common.addNew';
  }

}
