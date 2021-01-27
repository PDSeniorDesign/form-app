import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorFormComponent } from './form/contractor-form/contractor-form.component';
import { EmployeeFormComponent } from './form/employee-form/employee-form.component';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestStatusComponent } from './request-status/request-status.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'employee-form',
    component: EmployeeFormComponent,
  },
  {
    path: 'contractor-form',
    component: ContractorFormComponent,
  },
  {
    path: 'request-status',
    component: RequestStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
