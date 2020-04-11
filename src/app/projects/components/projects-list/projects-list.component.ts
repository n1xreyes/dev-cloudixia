import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Listing } from 'src/app/shared/models/listing.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Listing[];
  @Input() editable = true;
  @Output() projectDeleted = new EventEmitter<Listing>();
  @Output() projectEdited = new EventEmitter<Listing>();

  constructor() { }

  ngOnInit() {
  }

  onProjectDelete(project: Listing) {
    this.projectDeleted.emit(project);
  }

  onProjectEdit(project: Listing) {
    this.projectEdited.emit(project);
  }

  trackByFunction(index: any) {
    return index;
  }

}
