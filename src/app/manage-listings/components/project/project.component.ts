import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges, OnDestroy
} from '@angular/core';
import { ListingWithCategory } from 'src/app/shared/models/listing.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit, OnChanges, OnDestroy {

  @Input() project: ListingWithCategory;
  @Input() editable = true;
  @Output() deleted = new EventEmitter<ListingWithCategory>();
  @Output() edited = new EventEmitter<ListingWithCategory>();

  getCategoryName = ListingWithCategory.getCategoryName;
  destroyed: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['project']) {
      this.ngOnInit();
    }
  }

  onDelete() {
    this.deleted.emit(this.project);
  }

  onEdit() {
    this.edited.emit(this.project);
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
  }

}
