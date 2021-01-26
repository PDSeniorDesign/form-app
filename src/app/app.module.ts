import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { Step1Component } from './form/step1/step1.component';
import { Step2Component } from './form/step2/step2.component';
import { Step3Component } from './form/step3/step3.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormComponent } from './form/form.component';
import { Step4Component } from './form/step4/step4.component';
import { InformationComponent } from './form/information/information.component';
import { EmployeeInformationComponent } from './form/employee-information/employee-information.component';
import { AccessInformationComponent } from './form/access-information/access-information.component';
import { AdditionalInformationComponent } from './form/additional-information/additional-information.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    HomepageComponent,
    FormComponent,
    Step4Component,
    InformationComponent,
    EmployeeInformationComponent,
    AccessInformationComponent,
    AdditionalInformationComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
