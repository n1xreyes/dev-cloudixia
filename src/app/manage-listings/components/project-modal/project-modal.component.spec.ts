import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalComponent } from './project-modal.component';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputWrapperComponent } from 'src/app/shared/components/input-wrapper/input-wrapper.component';
import { NgSelectWrapperComponent } from 'src/app/shared/components/ng-select-wrapper/ng-select-wrapper.component';
import { Listing } from 'src/app/shared/models/listing.model';

describe('ProjectModalComponent', () => {
  let component: ProjectModalComponent;
  let fixture: ComponentFixture<ProjectModalComponent>;
  let entity: Listing = {
    title: 'test',
    price: '1',
    categories: [{id: 1, title: 'Cat1'}]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectModalComponent,
        InputWrapperComponent,
        NgSelectWrapperComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: MDBModalRef,
          useValue: {}
        }
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

  it('should assign values to form', () => {
    expect(component.form.value['title']).toBe('test');
    expect(component.form.value['description']).toBeFalsy();
  });

  it('should mark field touched on submit', () => {
    expect(component.form.controls['title'].touched).toBeFalsy();
    component.onSave();
    expect(component.form.controls['title'].touched).toBeTruthy();
  });

  it('should submit form on valid', () => {
    component.form.controls['description'].setValue('Test');
    component.modalRef = {hide: () => {}};

    const next = spyOn(component.projectData, 'next');
    const hide = spyOn(component.modalRef, 'hide');

    fixture.detectChanges();
    component.onSave();

    expect(next).toHaveBeenCalled();
    expect(hide).toHaveBeenCalled();
  });

});
