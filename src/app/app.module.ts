import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminRequestComponent } from './admin/admin-request/admin-request.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContractorFormComponent } from './form/contractor-form/contractor-form.component';
import { ContractorInformationComponent } from './form/contractor-form/contractor-information/contractor-information.component';
import { CountyInformationComponent } from './form/contractor-form/county-information/county-information.component';
import { PolicyRulesComponent } from './form/contractor-form/policy-rules/policy-rules.component';
import { SubmitComponent } from './form/contractor-form/submit/submit.component';
import { AdditionalInformationComponent } from './form/employee-form/additional-information/additional-information.component';
import { EmployeeFormComponent } from './form/employee-form/employee-form.component';
import { SubmitPageComponent } from './form/employee-form/submit-page/submit-page.component';
import { FormActionSelectionComponent } from './homepage/form-action-selection/form-action-selection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { SharedModule } from './shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdditionalInformationComponent,
    RequestStatusComponent,
    SubmitPageComponent,
    EmployeeFormComponent,
    ContractorFormComponent,
    ContractorInformationComponent,
    CountyInformationComponent,
    PolicyRulesComponent,
    SubmitComponent,
    FormActionSelectionComponent,
    AdminComponent,
    AdminHeaderComponent,
    ProfileComponent,
    AdminRequestComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
