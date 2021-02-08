import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from 'src/app/app.module';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { AccessInformationComponent } from './access-information/access-information.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { EmployeeFormComponent } from './employee-form.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { InformationComponent } from './information/information.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmployeeFormComponent,
        AccessInformationComponent,
        AdditionalInformationComponent,
        EmployeeInformationComponent,
        InformationComponent,
        SubmitPageComponent,
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        MatStepperModule,
        BrowserAnimationsModule,
        AppModule,
      ],
      providers: [ApiHttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have submitResponse variable', () => {
    expect(component.submitResponse).toBeFalsy();
  });
  it('should render submission page(ng-template) if submitResponse and hasSubmitted is set', () => {
    component.submitResponse = {
      // This is a sample response
      sampleUUID: 1234,
      anotherObject: 'other object',
    };
    component.hasSubmitted = true;
    fixture.detectChanges();
    // search that title is available
    const pageTitleElement = fixture.debugElement.query(
      By.css('h4.alert-heading')
    ).nativeElement;

    // Has h1 tag with class page-title with Submit Page as innerText
    expect(pageTitleElement.innerText).toContain('Thanks! Submission Received');
  });
  it('should not render hasSubmitted is false', () => {
    // hasSubmitted is false by default
    fixture.detectChanges();
    // search that the form exists
    const formElement = fixture.debugElement.query(By.css('form#regForm'))
      .nativeElement;

    expect(formElement).toBeDefined();
  });
  it('should have an alert card.', () => {
    component.hasSubmitted = true;
    component.submitResponse = {
      requestNumber: 412341,
    };
    fixture.detectChanges();
    const requestNum = fixture.debugElement.query(By.css('span#request-number'))
      .nativeElement;
    const alertBox = fixture.debugElement.query(By.css('h4.alert-heading'))
      .nativeElement;
    expect(alertBox.innerText).toContain('Thanks! Submission Received');
    expect(requestNum.innerText).toContain(412341); // make sure requestNumber get rendered
  });
});
