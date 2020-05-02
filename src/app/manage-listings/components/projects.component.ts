import { Component, OnInit } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { AppState } from '../../reducers/index';
import { Store, select } from '@ngrx/store';
import * as fromProjects from '../store/projects.actions';
import { Observable } from 'rxjs';
import { getProjects, getAllLoaded } from '../store/projects.selectors';
import { take, map } from 'rxjs/operators';
import { ConfirmModalComponent } from '../../shared/components/confirm-modal/confirm-modal.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Listing } from 'src/app/shared/models/listing.model';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Listing[] | null>;
  isLoading$: Observable<boolean>;
  modalRef: MDBModalRef;

  modalConfig = {
    class: 'modal-dialog-centered'
  };

  constructor(
    private store: Store<AppState>, 
    private modalService: MDBModalService, 
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getAllLoaded);
    this.projects$ = this.store.pipe(
      select(getProjects),
      map( (projects: Listing[]) => {
        if (this.user && !projects) {
          this.store.dispatch(new fromProjects.ProjectsQuery());
        }
        return projects;
      })
    );
  }

  get user() {
    return this.afAuth.auth.currentUser;
  }

  openAddProjectModal() {
    this.modalRef = this.modalService.show(ProjectModalComponent, this.modalConfig);

    this.modalRef.content.heading = 'Add new project';

    this.modalRef.content.projectData.pipe(take(1)).subscribe( (projectData: Listing) => {
      this.store.dispatch(new fromProjects.ProjectAdded({ project: projectData }));
    });
  }

  openEditProjectModal(project: Listing) {
    this.modalRef = this.modalService.show(ProjectModalComponent, this.modalConfig);

    this.modalRef.content.heading = 'Edit project';
    const projectCopy = {...project };
    this.modalRef.content.project = projectCopy;

    this.modalRef.content.projectData.pipe(take(1)).subscribe( (projectData: Listing) => {
      this.store.dispatch(new fromProjects.ProjectEdited({ project: projectData }));
    });
  }

  openConfirmModal(project: Listing) {
    this.modalRef = this.modalService.show(ConfirmModalComponent, this.modalConfig);

    this.modalRef.content.heading = 'Delete Listing?';
    this.modalRef.content.description = 'Are you sure you want to delete this item?';
    this.modalRef.content.confirmBtnColor = 'red';
    this.modalRef.content.confirmBtnText = 'Delete';
    
    this.modalRef.content.confirmation.pipe(take(1)).subscribe( (confirmation: boolean) => {
      if (confirmation) {
        this.store.dispatch(new fromProjects.ProjectDeleted({ project }));
      }
    });
  }

  onProjectDelete(project: Listing) {
    this.openConfirmModal(project);
  }

  onProjectEdit(project: Listing) {
    this.openEditProjectModal(project);
  }

}
