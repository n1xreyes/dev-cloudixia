import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  confirmation: Subject<boolean> = new Subject();
  heading: string;
  description: string;
  confirmBtnColor: string;
  confirmBtnText: string;

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

  onConfirm() {
    this.confirmation.next(true);
    this.modalRef.hide();
  }

}
