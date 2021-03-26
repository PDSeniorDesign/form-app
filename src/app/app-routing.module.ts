import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContractorFormComponent } from './form/contractor-form/contractor-form.component';
import { EmployeeFormComponent } from './form/employee-form/employee-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceRequestsComponent } from './admin/service-requests/service-requests.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';
import { AuthGuard } from './core/services/auth.guard';
import { ServiceRequestsDetailComponent } from './admin/service-requests-detail/service-requests-detail.component';
import { ReviewRequestComponent } from './admin/review-request/review-request.component';
import { ReviewEmployeeComponent } from './admin/review-employee/review-employee.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ApproversComponent } from './admin/approvers/approvers.component';

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
    path: 'confirmation-page',
    component: ConfirmationPageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'service-requests',
        component: ServiceRequestsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'service-request-detail',
        component: ServiceRequestsDetailComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'review-request/:requestNumber',
        component: ReviewRequestComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'review-employee/:requestNumber',
        component: ReviewEmployeeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'approvers',
        component: ApproversComponent,
        canActivate: [AuthGuard],
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
