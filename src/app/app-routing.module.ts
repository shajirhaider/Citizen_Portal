import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreeComponent } from './agree/agree.component';
import { LoginComponent } from './login/login.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';
import { SitePlanApprovalsComponent } from './site-plan-approvals/site-plan-approvals.component';
import { SearchMobileSignLocationComponent } from './search-mobile-sign-location/search-mobile-sign-location.component';

const routes: Routes = [
  { path: '', component: AgreeComponent},
  { path: 'search-properties', component: SearchPropertiesComponent},
  { path: 'site-plan-approvals/:rsn/:house/:street/:city', component: SitePlanApprovalsComponent},
  { path: 'search-mobile-sign-location', component: SearchMobileSignLocationComponent},
  { path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
