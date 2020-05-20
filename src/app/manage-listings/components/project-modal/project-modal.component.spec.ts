import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalComponent } from './project-modal.component';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputWrapperComponent } from 'src/app/shared/components/input-wrapper/input-wrapper.component';
import { NgSelectWrapperComponent } from 'src/app/shared/components/ng-select-wrapper/ng-select-wrapper.component';
import { Listing } from 'src/app/shared/models/listing.model';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { CategorySelectionComponent } from 'src/app/shared/components/category-selection/category-selection.component';

describe('ProjectModalComponent', () => {
  let component: ProjectModalComponent;
  let fixture: ComponentFixture<ProjectModalComponent>;
  const entity: Listing = {
    uid: 'test',
    title: 'test',
    price: '1',
    categories: ['Cat1']
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectModalComponent,
        InputWrapperComponent,
        NgSelectWrapperComponent,
        CategorySelectionComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: MDBModalRef,
          useValue: {},
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalComponent);
    component = fixture.componentInstance;
    component.entity = entity;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
