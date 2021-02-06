import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractorFormComponent } from './form/contractor-form/contractor-form.component';
import { AccessInformationComponent } from './form/employee-form/access-information/access-information.component';
import { AdditionalInformationComponent } from './form/employee-form/additional-information/additional-information.component';
import { EmployeeFormComponent } from './form/employee-form/employee-form.component';
import { EmployeeInformationComponent } from './form/employee-form/employee-information/employee-information.component';
import { InformationComponent } from './form/employee-form/information/information.component';
import { SubmitPageComponent } from './form/employee-form/submit-page/submit-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContractorInformationComponent } from './form/contractor-form/contractor-information/contractor-information.component';
import { CountyInformationComponent } from './form/contractor-form/county-information/county-information.component';
import { PolicyRulesComponent } from './form/contractor-form/policy-rules/policy-rules.component';
import { SubmitComponent } from './form/contractor-form/submit/submit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    InformationComponent,
    EmployeeInformationComponent,
    AccessInformationComponent,
    AdditionalInformationComponent,
    RequestStatusComponent,
    SubmitPageComponent,
    EmployeeFormComponent,
    ContractorFormComponent,
    ContractorInformationComponent,
    CountyInformationComponent,
    PolicyRulesComponent,
    SubmitComponent,
    LoginComponent,
    RegisterComponent,
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
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatRadioModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
