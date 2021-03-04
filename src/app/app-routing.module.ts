import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContractorFormComponent } from './form/contractor-form/contractor-form.component';
import { EmployeeFormComponent } from './form/employee-form/employee-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceRequestsComponent } from './admin/service-requests/service-requests.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component'

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
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'service-requests',
        component: ServiceRequestsComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
