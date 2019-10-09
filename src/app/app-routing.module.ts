import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreeComponent } from './agree/agree.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { UpdatePersonalInfoComponent } from './auth/update-personal-info/update-personal-info.component';
import { UpdatePasswordComponent } from './auth/update-password/update-password.component';
import { SearchNewComponent } from './search-properties/search-new/search-new.component';
import { SitePlanApprovalsComponent } from './site-plan-approvals/site-plan-approvals.component';
import { SearchMobileSignLocationComponent } from './search-mobile-sign-location/search-mobile-sign-location.component';
import { HomeComponent } from './home/home.component';  
import { ApplyForPermitComponent } from './my-permit/apply-for-permit/apply-for-permit.component';
import { ApplyForLicenceComponent } from './my-licence/apply-for-licence/apply-for-licence.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { TrackMyApplicationComponent } from './my-licence/track-my-application/track-my-application.component';
import { RenewLicenseComponent } from './my-licence/renew-license/renew-license.component';
import { TrackMyPermitComponent } from './my-permit/track-my-permit/track-my-permit.component';
import { ShoppingCartComponent } from './my-licence/shopping-cart/shopping-cart.component';
import { ShoppingCartPermitComponent } from './my-permit/shopping-cart/shopping-cart.component';
import { ComplaintLandingComponent } from './complaint/complaint-landing/complaint-landing.component';
import { CreditsLandingComponent } from './credits/credits-landing/credits-landing.component';
import { ReqInspectionComponent } from './my-permit/req-inspection/req-inspection.component';
import { ReportAnIssueComponent } from './report-an-issue/report-an-issue.component';

const routes: Routes = [ 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search-properties', component: SearchNewComponent},
  { path: 'search-properties/permits/:rsn/:house/:street/:city', component: SitePlanApprovalsComponent},
  { path: 'search-mobile-sign-location', component: SearchMobileSignLocationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'update-password', component: UpdatePasswordComponent},
  { path: 'update-personal-info', component: UpdatePersonalInfoComponent},
  { path: 'login/register', component: RegisterComponent},
  { path: 'login/register/form', component: RegisterFormComponent},
  { path: 'apply-for-permit', component: ApplyForPermitComponent},
  { path: 'apply-for-licence', component: ApplyForLicenceComponent},
  { path: 'form-generator', component: FormGeneratorComponent},
  { path: 'track-my-licence', component: TrackMyApplicationComponent},
  { path: 'renew-licence', component: RenewLicenseComponent},
  { path: 'track-my-permit', component: TrackMyPermitComponent},
  { path: 'license-shopping-cart', component: ShoppingCartComponent},
  { path: 'permit-shopping-cart', component: ShoppingCartPermitComponent},
  { path: 'complaint', component: ComplaintLandingComponent},
  { path: 'credits', component: CreditsLandingComponent},
  { path: 'request-inspection', component: ReqInspectionComponent},
  { path: 'report-issue', component: ReportAnIssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
