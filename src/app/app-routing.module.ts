import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreeComponent } from './agree/agree.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';
import { SitePlanApprovalsComponent } from './site-plan-approvals/site-plan-approvals.component';

const routes: Routes = [
  { path: '', component: AgreeComponent},
  { path: 'search-properties', component: SearchPropertiesComponent},
  { path: 'site-plan-approvals/:id', component: SitePlanApprovalsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
