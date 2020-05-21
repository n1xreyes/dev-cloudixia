import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CollapseModule, BadgeModule, DropdownModule } from 'angular-bootstrap-md';
import { AdminComponent } from './containers/admin/admin.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import * as fromAdmin from './store/admin.reducer';
import { AdminEffects } from './store/admin.effects';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ListingApprovalComponent } from './components/listing-approval/listing-approval.component';
import { CategoryListingComponent } from './components/category-listing/category-listing.component';
import { CategoryModalComponent } from './components/category-modal/category-modal.component';
import { CategoryEffects } from './store/category.effects';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CategoryChildrenModalComponent } from './components/category-children-modal/category-children-modal.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    UserComponent,
    UserDetailComponent,
    ListingApprovalComponent,
    CategoryListingComponent,
    CategoryModalComponent,
    CategoryPageComponent,
    CategoryChildrenModalComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    CollapseModule,
    DropdownModule,
    BadgeModule,
    StoreModule.forFeature('admin', fromAdmin.adminReducer),
    EffectsModule.forFeature([AdminEffects, CategoryEffects])
  ],
  entryComponents: [
    CategoryChildrenModalComponent,
  ]
})
export class AdminModule { }
