import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChildrenModalComponent } from './category-children-modal.component';
import { MDBModalRef } from 'angular-bootstrap-md';
import { StoreModule } from '@ngrx/store';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';

describe('CategoryChildrenModalComponent', () => {
  let component: CategoryChildrenModalComponent;
  let fixture: ComponentFixture<CategoryChildrenModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryChildrenModalComponent ],
      imports: [
        StoreModule.forRoot({}),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireFunctionsModule,
        TranslateModule.forRoot(),
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
    fixture = TestBed.createComponent(CategoryChildrenModalComponent);
    component = fixture.componentInstance;
    component.inputParent = {
      uid: 'test',
      title: 'Test'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
