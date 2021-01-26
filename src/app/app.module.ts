import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { InformationComponent } from './form/information/information.component';
import { EmployeeInformationComponent } from './form/employee-information/employee-information.component';
import { AccessInformationComponent } from './form/access-information/access-information.component';
import { AdditionalInformationComponent } from './form/additional-information/additional-information.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { SubmitPageComponent } from './form/submit-page/submit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormComponent,
    InformationComponent,
    EmployeeInformationComponent,
    AccessInformationComponent,
    AdditionalInformationComponent,
    RequestStatusComponent,
    SubmitPageComponent,
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
