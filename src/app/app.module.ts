import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';
import { ReviewEmployeeComponent } from './admin/review-employee/review-employee.component';
import { ReviewRequestComponent } from './admin/review-request/review-request.component';
import { ReviewSubmitComponent } from './admin/review-request/review-submit/review-submit.component';
import { ServiceRequestsDetailComponent } from './admin/service-requests-detail/service-requests-detail.component';
import { ServiceRequestsComponent } from './admin/service-requests/service-requests.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/services/auth.guard';
import { ContractorFormComponent } from './form/contractor-form/contractor-form.component';
import { AdditionalInformationComponent } from './form/employee-form/additional-information/additional-information.component';
import { EmployeeFormComponent } from './form/employee-form/employee-form.component';
import { SubmitPageComponent } from './form/employee-form/submit-page/submit-page.component';
import { FormActionSelectionComponent } from './homepage/form-action-selection/form-action-selection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingPageComponent } from './form/shared/loading-page/loading-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdditionalInformationComponent,
    SubmitPageComponent,
    EmployeeFormComponent,
    ContractorFormComponent,
    FormActionSelectionComponent,
    AdminComponent,
    ServiceRequestsComponent,
    ResetPasswordComponent,
    ServiceRequestsDetailComponent,
    ReviewRequestComponent,
    ReviewSubmitComponent,
    ReviewEmployeeComponent,
    NavbarComponent,
    LoadingPageComponent,
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
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatChipsModule,
    LayoutModule,
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  exports: [],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
