import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule, InputsModule, CardsModule, WavesModule, IconsModule, ModalModule, InputUtilitiesModule, BadgeModule } from 'angular-bootstrap-md';

import * as fromProjects from './store/projects.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './store/projects.effects';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';


@NgModule({
  imports: [
    InputUtilitiesModule,
    CommonModule,
    ModalModule,
    SharedModule,
    ProjectsRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule,
    BadgeModule,
    InputsModule,
    WavesModule,
    IconsModule,
    CardsModule,
    StoreModule.forFeature('projects', fromProjects.projectsReducer),
    EffectsModule.forFeature([ProjectsEffects])
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
