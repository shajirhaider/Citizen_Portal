import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreeComponent } from './agree/agree.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { UpdatePersonalInfoComponent } from './auth/update-personal-info/update-personal-info.component';
import { UpdatePasswordComponent } from './auth/update-password/update-password.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';
import { SitePlanApprovalsComponent } from './site-plan-approvals/site-plan-approvals.component';
import { SearchMobileSignLocationComponent } from './search-mobile-sign-location/search-mobile-sign-location.component';
import { HomeComponent } from './home/home.component';  
import { ApplyForPermitComponent } from './my-permit/apply-for-permit/apply-for-permit.component';


const routes: Routes = [ 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search-properties', component: SearchPropertiesComponent},
  { path: 'search-properties/permits/:rsn/:house/:street/:city', component: SitePlanApprovalsComponent},
  { path: 'search-mobile-sign-location', component: SearchMobileSignLocationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'update-password', component: UpdatePasswordComponent},
  { path: 'update-personal-info', component: UpdatePersonalInfoComponent},
  { path: 'login/register', component: RegisterComponent},
  { path: 'login/register/form', component: RegisterFormComponent},
  { path: 'apply-for-permit', component: ApplyForPermitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
