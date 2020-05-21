import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ListringWithCategory } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {

  @Input() project: ListringWithCategory;
  @Input() editable = true;
  @Output() deleted = new EventEmitter<ListringWithCategory>();
  @Output() edited = new EventEmitter<ListringWithCategory>();

  getCategoryName = ListringWithCategory.getCategoryName;

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
