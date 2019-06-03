import { UsernameComponent } from './username/username.component';
import { LoadImageComponent } from './load-image/load-image.component';
import { UserPresenceComponent } from './user-presence/user-presence.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { AlertsComponent } from './alerts/alerts.component';
import { UsernameUniqueComponent } from './username-unique/username-unique.component';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserMediaComponent } from './user-media/user-media.component';
import { UserInfoComponent } from './user-info/user-info.component';
// MAIN
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
// ROUTES
import { RouterModule } from '@angular/router';
// FORMS
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// BOOTSTRAP
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// NGRX Scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// PIPES
import { NgPipesModule } from 'ngx-pipes';
// MOMENTJS
import { MomentModule } from 'angular2-moment';
// COMPONENTS
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import {CountComponent} from "./count/count.component";

// EXPORT&IMPORT COMPONENTS
const components = [
  // Comment out component which you don't use
  MainNavbarComponent,
  UserInfoComponent,
  UserMediaComponent,
  UserLoginFormComponent,
  UserRegisterFormComponent,
  UsernameUniqueComponent,
  UserAvatarComponent,
  UserProfileEditComponent,
  UserPresenceComponent,
  LoadImageComponent,
  UsernameComponent,
  AlertsComponent,
  CountComponent
]

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    InfiniteScrollModule,
    NgbModule,
    MomentModule,
    NgPipesModule,
  ],
  exports: [
    NgPipesModule,
    NgbModule,
    FormsModule,
    InfiniteScrollModule,
    ...components
  ],
  declarations: components,
    entryComponents: [CountComponent]

})
export class UIModule { }
