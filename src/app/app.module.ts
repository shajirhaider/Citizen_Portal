import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgreeComponent } from './agree/agree.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';
import { from } from 'rxjs';
import { HttpService} from './services/http.service'
import { SearchResultComponent } from './search-result/search-result.component';
import { SitePlanApprovalsComponent } from './site-plan-approvals/site-plan-approvals.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    AgreeComponent,
    SearchPropertiesComponent,
    SearchResultComponent,
    SitePlanApprovalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
