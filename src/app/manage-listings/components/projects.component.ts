import { Component, OnInit } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { AppState } from '../../reducers/index';
import { Store, select, Action } from '@ngrx/store';
import * as fromProjects from '../store/projects.actions';
import { Observable } from 'rxjs';
import { getProjects, getAllLoaded, getPendingListings, getPendingLoaded } from '../store/projects.selectors';
import { take, map } from 'rxjs/operators';
import { ConfirmModalComponent } from '../../shared/components/confirm-modal/confirm-modal.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListringWithCategory } from 'src/app/shared/models/listing.model';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { DEFAULT_MODAL_CONFIG, DELETE_CONFIRMATION } from 'src/app/core/service/util.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<ListringWithCategory[] | null>;
  isLoading$: Observable<boolean>;
  pendingListings$: Observable<ListringWithCategory[] | null>;
  isPendingLoading$: Observable<boolean>;
  modalRef: MDBModalRef;

  private get user() {
    return this.afAuth.auth.currentUser;
  }

  constructor(
    private store: Store<AppState>,
    private modalService: MDBModalService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getAllLoaded);
    this.projects$ = this.store.pipe(
      select(getProjects),
      map((projects: ListringWithCategory[]) => {
        if (this.user && !projects) {
          this.store.dispatch(new fromProjects.ProjectsQuery());
        }
        return projects;
      })
    );

    this.isPendingLoading$ = this.store.select(getPendingLoaded);
    this.pendingListings$ = this.store.pipe(
      select(getPendingListings),
      map((listings: ListringWithCategory[]) => {
        if (this.user && !listings) {
          this.store.dispatch(new fromProjects.MyPendingListingsQuery());
        }
        return listings;
      })
    );
  }

  openModal(entity: ListringWithCategory = new ListringWithCategory()): void {
    const isEdit: boolean = !!entity.uid;

    this.modalService
      .show(ProjectModalComponent, {...DEFAULT_MODAL_CONFIG, data: {
        entity: {...entity}
      }})
      .content.result
      .pipe(take(1))
      .subscribe((projectData: ListringWithCategory) => {
        delete projectData.category;
        const action: Action = isEdit
          ? new fromProjects.ProjectEdited({ project: projectData })
          : new fromProjects.ProjectAdded({ project: projectData });
        this.store.dispatch(action);
      });
  }

  openConfirmModal(project: ListringWithCategory) {
    this.modalService
      .show(ConfirmModalComponent, {...DEFAULT_MODAL_CONFIG, data: { ...DELETE_CONFIRMATION }})
      ?.content.confirmation
      .pipe(take(1))
      .subscribe( (confirmation: boolean) => {
        if (confirmation) {
          this.store.dispatch(new fromProjects.ProjectDeleted({ project }));
        }
      });
  }

  onProjectDelete(project: ListringWithCategory) {
    this.openConfirmModal(project);
  }

}
