import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './app-material.module';
import { from } from 'rxjs';
import { HttpService} from './services/http.service'
import { LoaderService } from './services/loader.service';
import { AuthService } from './services/auth.service';
import { DateUtilService } from './services/date.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgreeComponent } from './agree/agree.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';
import { SitePlanApprovalsComponent } from './site-plan-approvals/site-plan-approvals.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { SearchMobileSignLocationComponent } from './search-mobile-sign-location/search-mobile-sign-location.component';
import { LoginComponent } from './auth/login/login.component';
import { UpdatePasswordComponent } from './auth/update-password/update-password.component';
import { UpdatePersonalInfoComponent } from './auth/update-personal-info/update-personal-info.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ApplyForPermitComponent } from './my-permit/apply-for-permit/apply-for-permit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    AgreeComponent,
    SearchPropertiesComponent,
    SitePlanApprovalsComponent,
    SearchMobileSignLocationComponent,
    LoginComponent,
    UpdatePasswordComponent,
    UpdatePersonalInfoComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent,
    RegisterFormComponent,
    ApplyForPermitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    NgSelectModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [HttpService, LoaderService, DateUtilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
