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

  // Input
  userProfile: UserProfile;
  // Output
  message: Subject<string> = new Subject<string>();

  form: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required)
  });

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit(): void { }

  onSend() {
    this.message.next({
      ...this.form.value
    });
  }

}
