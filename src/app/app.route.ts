import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: './views/landing-page/landing-page.module#LandingPageModule' },
  { path: ':id/edit', canActivate: [AuthGuard], loadChildren: './views/user-edit/user-edit.module#UserEditModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }