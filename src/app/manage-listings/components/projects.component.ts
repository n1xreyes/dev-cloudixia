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
import { ListingWithCategory, ListingWithPhoto } from 'src/app/shared/models/listing.model';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<ListingWithCategory[] | null>;
  isLoading$: Observable<boolean>;
  pendingListings$: Observable<ListingWithCategory[] | null>;
  isPendingLoading$: Observable<boolean>;
  modalRef: MDBModalRef;

  private modalConfig = {
    class: 'modal-dialog-scrollable'
  };

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
      map((projects: ListingWithCategory[]) => {
        if (this.user && !projects) {
          this.store.dispatch(new fromProjects.ProjectsQuery());
        }
        return projects;
      })
    );

    this.isPendingLoading$ = this.store.select(getPendingLoaded);
    this.pendingListings$ = this.store.pipe(
      select(getPendingListings),
      map((listings: ListingWithCategory[]) => {
        if (this.user && !listings) {
          this.store.dispatch(new fromProjects.MyPendingListingsQuery());
        }
        return listings;
      })
    );
  }

  openModal(entity: ListingWithPhoto = new ListingWithPhoto()): void {
    const isEdit: boolean = !!entity.uid;

    this.modalService
      .show(ProjectModalComponent, {...this.modalConfig, data: {
        heading: isEdit ? 'Edit project' : 'Add new project',
        entity: {...entity}
      }})
      .content.result
      .pipe(take(1))
      .subscribe((projectData: ListingWithPhoto) => {
        delete projectData.category;
        const action: Action = isEdit
          ? new fromProjects.ProjectEdited({ project: projectData, file: projectData.file })
          : new fromProjects.ProjectAdded({ project: projectData, file: projectData.file });
        this.store.dispatch(action);
      });
  }

  openConfirmModal(project: ListingWithCategory) {
    const modalRef = this.modalService.show(ConfirmModalComponent, this.modalConfig);

    modalRef.content.heading = 'Delete Listing?';
    modalRef.content.description = 'Are you sure you want to delete this item?';
    modalRef.content.confirmBtnColor = 'red';
    modalRef.content.confirmBtnText = 'Delete';

    modalRef.content.confirmation
      .pipe(take(1))
      .subscribe( (confirmation: boolean) => {
        if (confirmation) {
          this.store.dispatch(new fromProjects.ProjectDeleted({ project }));
        }
      });
  }

  onProjectDelete(project: ListingWithCategory) {
    this.openConfirmModal(project);
  }

}
