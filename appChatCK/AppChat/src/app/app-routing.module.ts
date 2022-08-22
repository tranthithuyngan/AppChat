import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/authenticated/home/home.component';
import { SignInSignUpComponent } from './component/authenticated/sign-in-sign-up/sign-in-sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignInSignUpComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
