import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromAdmin from '../../store/admin.reducer';
import { AdminComponent } from './admin.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule, CardsModule, DropdownModule, BadgeModule, ButtonsModule, IconsModule, MDBModalService, MDBBootstrapModule } from 'angular-bootstrap-md';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from '../../store/admin.effects';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
        BrowserAnimationsModule,
        CollapseModule,
        CardsModule,
        DropdownModule,
        BadgeModule,
        ButtonsModule,
        IconsModule,
        StoreModule.forFeature('admin', fromAdmin.adminReducer),
        StoreModule.forRoot({}),
        EffectsModule.forFeature([AdminEffects]),
        EffectsModule.forRoot([AdminEffects]),
        RouterTestingModule, 
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MDBBootstrapModule.forRoot()
      ],
      providers: [
        MDBModalService
      ],
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
