import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestStatusComponent } from './request-status/request-status.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'form',
    component: FormComponent,
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
