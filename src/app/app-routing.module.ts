import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {Details1Component} from './pages/details-1/details-1.component';
import {Details2Component} from './pages/details-2/details-2.component';
import {Details3Component} from './pages/details-3/details-3.component';
import {Details4Component} from './pages/details-4/details-4.component';
import {Details5Component} from './pages/details-5/details-5.component';



import {AddComponent} from './pages/add/add.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:city', component: DetailsComponent},
  {path: 'details-1/:city', component: Details1Component},
  {path: 'details-2/:city', component: Details2Component},
  {path: 'details-3/:city', component: Details3Component},
  {path: 'details-4/:city', component: Details4Component},
  {path: 'details-5/:city', component: Details5Component},
  {path: 'add', component: AddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
