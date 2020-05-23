import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.css']
})
export class ModalWrapperComponent implements OnInit {

  @Input() heading: string;

  @Output() primaryClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() secondaryClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() xClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit(): void {
  }

  onPrimary(): void {
    this.primaryClick.emit();
  }

  onSecondary(): void {
    if (this.secondaryClick.observers.length > 0) {
        this.secondaryClick.emit();
    } else {
        this.modalRef.hide();
    }
  }

  onX(): void {
    if (this.xClick.observers.length > 0) {
        this.xClick.emit();
    } else {
        this.onSecondary();
    }
}

}
