import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ListringWithCategory } from 'src/app/shared/models/listing.model';
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
import {Subject} from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit, OnChanges, OnDestroy {

  @Input() project: ListringWithCategory;
  @Input() editable = true;
  @Output() deleted = new EventEmitter<ListringWithCategory>();
  @Output() edited = new EventEmitter<ListringWithCategory>();

  getCategoryName = ListringWithCategory.getCategoryName;
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
