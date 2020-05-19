import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/auth/models/user.model';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {

  message: Subject<string> = new Subject<string>();

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  });

  userProfile: UserProfile
  heading: string

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit(): void { }

  onSend() {
    if (this.form.valid) {
      this.message.next({
        ...this.form.value
      });
      this.modalRef.hide();
    } else {
      Object.keys(this.form.controls)
        .forEach(controlName => this.form.controls[controlName].markAsTouched());
    }
  }

}
