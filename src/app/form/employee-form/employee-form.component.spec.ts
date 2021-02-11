import { HttpClientModule } from '@angular/common/http';
import { ElementRef, ViewChild } from '@angular/core';
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
  it('should sync data up with form group (personal information)', () => {
    // grab all the components from step 1
    const firstNameIn = fixture.debugElement.query(
      By.css('input#firstNameInput')
    );

    const middleInitialIn = fixture.debugElement.query(
      By.css('input#middleInitialInput')
    );

    const lastNameIn = fixture.debugElement.query(
      By.css('input#lastNameInput')
    );
    const emailAddressIn = fixture.debugElement.query(
      By.css('input#emailAddressInput')
    );

    const phoneNumberIn = fixture.debugElement.query(
      By.css('input#phoneNumberInput')
    );

    // change the values
    firstNameIn.nativeElement.value = 'John';
    middleInitialIn.nativeNode.value = 'A';
    lastNameIn.nativeNode.value = 'Doe';
    emailAddressIn.nativeNode.value = 'email@email.com';
    phoneNumberIn.nativeNode.value = '3234445555';

    // dispatch events (this tells angular to update formgroup, i think)
    firstNameIn.nativeNode.dispatchEvent(new Event('input'));
    middleInitialIn.nativeNode.dispatchEvent(new Event('input'));
    lastNameIn.nativeNode.dispatchEvent(new Event('input'));
    emailAddressIn.nativeNode.dispatchEvent(new Event('input'));
    phoneNumberIn.nativeElement.dispatchEvent(new Event('input'));
    // update view?
    fixture.detectChanges();

    // make sure it reflects on the formgroup
    expect(component.form.value.information.firstName).toEqual('John');
    expect(component.form.value.information.middleInitial).toEqual('A');
    expect(component.form.value.information.lastName).toEqual('Doe');
    expect(component.form.value.information.emailAddress).toEqual(
      'email@email.com'
    );
    expect(component.form.value.information.phoneNumber).toEqual('3234445555');
  });
  it('should sync up input values with formgroup (address)', () => {
    // grab all the components from step 2 (address)
    const addressIn = fixture.debugElement.query(By.css('input#addressInput'));
    const cityIn = fixture.debugElement.query(By.css('input#cityInput'));
    const stateIn = fixture.debugElement.query(By.css('input#stateInput'));
    const zipCodeIn = fixture.debugElement.query(By.css('input#zipCodeInput'));

    // change values
    addressIn.nativeElement.value = '123 street';
    cityIn.nativeElement.value = 'city';
    stateIn.nativeElement.value = 'CA';
    zipCodeIn.nativeElement.value = '12345';

    // dispatch events for angular to update
    addressIn.nativeNode.dispatchEvent(new Event('input'));
    cityIn.nativeNode.dispatchEvent(new Event('input'));
    stateIn.nativeNode.dispatchEvent(new Event('input'));
    zipCodeIn.nativeNode.dispatchEvent(new Event('input'));

    // update view
    fixture.detectChanges();
    console.log(component.form.value.information);
    expect(component.form.value.information.address).toEqual('123 street');
    expect(component.form.value.information.city).toEqual('city');
    expect(component.form.value.information.state).toEqual('CA');
    expect(component.form.value.information.zipCode).toEqual('12345');
  });
  it('should sync data up with formgroup (employee information)', () => {
    // grab all elements
    const employeeNumberIn = fixture.debugElement.query(
      By.css('input#employeeNumberInput')
    );
    const hostedIdIn = fixture.debugElement.query(
      By.css('input#hostedIdInput')
    );

    // change values
    employeeNumberIn.nativeElement.value = '12345';
    hostedIdIn.nativeElement.value = '123';

    // dispatch events
    employeeNumberIn.nativeNode.dispatchEvent(new Event('input'));
    hostedIdIn.nativeNode.dispatchEvent(new Event('input'));

    // update and test
    fixture.detectChanges();
    expect(component.form.value.employeeInformation.employeeNumber).toEqual(
      '12345'
    );
    expect(component.form.value.employeeInformation.hostedId).toEqual('123');
  });
});
