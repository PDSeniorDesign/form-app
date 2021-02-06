import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorFormComponent } from './form/contractor-form/contractor-form.component';
import { EmployeeFormComponent } from './form/employee-form/employee-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path:'login',
    component: LoginComponent,
  },
  { path: 'register',
    component: RegisterComponent,
  },
  { path: '',
    component: HomepageComponent,
  },
  {path: 'employee-form',
    component: EmployeeFormComponent,
  },
  { path: 'contractor-form',
    component: ContractorFormComponent,
  },
  { path: 'request-status',
    component: RequestStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
