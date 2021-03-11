import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
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
import { AdditionalInformationComponent } from './form/employee-form/additional-information/additional-information.component';
import { EmployeeFormComponent } from './form/employee-form/employee-form.component';
import { SubmitPageComponent } from './form/employee-form/submit-page/submit-page.component';
import { FormActionSelectionComponent } from './homepage/form-action-selection/form-action-selection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdditionalInformationComponent,
    RequestStatusComponent,
    SubmitPageComponent,
    EmployeeFormComponent,
    ContractorFormComponent,
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
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
