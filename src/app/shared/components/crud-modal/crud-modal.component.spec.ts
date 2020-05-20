import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModalComponent } from './crud-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { noop } from 'lodash';

describe('CrudModalComponent', () => {
  let component: CrudModalComponent<any>;
  let fixture: ComponentFixture<CrudModalComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModalComponent ],
      imports: [
        TranslateModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModalComponent);
    component = fixture.componentInstance;
    component.entity = {
      title: 'test',
      fake: 'test'
    };
    component.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl('', Validators.required),
    });
    component.modalRef = {
      hide: noop
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign values to form', () => {
    expect(component.form.value['title']).toBe('test');
    expect(component.form.value['description']).toBeFalsy();
    expect(component.form.value['fake']).toBeFalsy();
  });

  it('should mark field touched on submit with invalid form', () => {
    expect(component.form.controls['title'].touched).toBeFalsy();
    const emit = spyOn(component.error, 'emit');
    component.onSave();
    expect(component.form.controls['title'].touched).toBeTruthy();
    expect(emit).toHaveBeenCalled();
  });

  it('should emit success and close modal with valid form', () => {
    component.form.controls['description'].setValue('Test');
    const emit = spyOn(component.saved, 'emit');
    const hide = spyOn(component.modalRef, 'hide');

    component.onSave();
    expect(emit).toHaveBeenCalled();
    expect(hide).toHaveBeenCalled();
  });

  it('should submit form on valid', () => {
    component.form.controls['description'].setValue('Test');
    component.modalRef = {hide: () => {}};

    // const next = spyOn(component.projectData, 'next');
    const hide = spyOn(component.modalRef, 'hide');

    fixture.detectChanges();
    component.onSave();

    // expect(next).toHaveBeenCalled();
    expect(hide).toHaveBeenCalled();
  });

  it('should properly determine heading', () => {
    expect(component.getHeadingPrefix()).toBe('common.addNew');
    component.entity.uid = 'Test';
    expect(component.getHeadingPrefix()).toBe('common.edit');
  });
});
