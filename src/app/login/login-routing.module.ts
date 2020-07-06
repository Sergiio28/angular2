import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterPage} from '../register/register.page';
import { LoginPage } from './login.page';
import {AuthGuard} from '../guards/auth.guard';
import { NuevoPartePage } from '../nuevo-parte/nuevo-parte.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: '../../register',
    component: RegisterPage
  },
  {
    path: '../../login',
    component: NuevoPartePage,canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
