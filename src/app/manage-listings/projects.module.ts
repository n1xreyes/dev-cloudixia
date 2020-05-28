import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ModalModule, BadgeModule } from 'angular-bootstrap-md';
import { ProjectsComponent } from './components/projects.component';
import * as fromProjects from './store/projects.reducer';
import { ProjectsEffects } from './store/projects.effects';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

@NgModule({
  imports: [
    ModalModule,
    ProjectsRoutingModule,
    HttpClientModule,
    BadgeModule,
    StoreModule.forFeature('projects', fromProjects.projectsReducer),
    EffectsModule.forFeature([ProjectsEffects]),
    // custom
    SharedModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectModalComponent,
    ProjectsListComponent,
    ProjectComponent,
  ],
  exports: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectComponent
  ],
  entryComponents: [
    ProjectModalComponent
  ]
})
export class ProjectsModule { }
