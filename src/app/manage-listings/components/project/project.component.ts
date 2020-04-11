import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {
  @Input() project: Listing;
  @Input() editable = true;
  @Output() deleted = new EventEmitter<Listing>();
  @Output() edited = new EventEmitter<Listing>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.deleted.emit(this.project);
  }

  onEdit() {
    this.edited.emit(this.project);
  }

}
