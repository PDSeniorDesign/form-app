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
import { AccessInformationComponent } from './form/access-information/access-information.component';
import { AdditionalInformationComponent } from './form/additional-information/additional-information.component';
import { EmployeeInformationComponent } from './form/employee-information/employee-information.component';
import { FormComponent } from './form/form.component';
import { InformationComponent } from './form/information/information.component';
import { SubmitPageComponent } from './form/submit-page/submit-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestStatusComponent } from './request-status/request-status.component';

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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
