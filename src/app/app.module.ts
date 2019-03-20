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
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgreeComponent } from './agree/agree.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';
import { SitePlanApprovalsComponent } from './site-plan-approvals/site-plan-approvals.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    AgreeComponent,
    SearchPropertiesComponent,
    SitePlanApprovalsComponent
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
  ],
  providers: [HttpService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
