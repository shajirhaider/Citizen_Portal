import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreeComponent } from './agree/agree.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SitePlanApprovalsComponent } from './site-plan-approvals/site-plan-approvals.component';

const routes: Routes = [
  { path: '', component: AgreeComponent},
  { path: 'search-properties', component: SearchPropertiesComponent},
  { path: 'search-result', component: SearchResultComponent},
  { path: 'site-plan-approvals', component: SitePlanApprovalsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
