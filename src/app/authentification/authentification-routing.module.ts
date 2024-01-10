import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ActivationAccountComponent } from './activation-account/activation-account.component';
import { LayoutHomeComponent } from '../layouts/layout-home/layout-home.component';
import { LayoutAuthComponent } from '../layouts/layout-auth/layout-auth.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forget', component: ForgetPasswordComponent },
      { path: 'reset', component: ResetPasswordComponent },
      { path: 'activate/:token', component: ActivationAccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationRoutingModule {}
