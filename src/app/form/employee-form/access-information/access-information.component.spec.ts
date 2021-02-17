import { CdkStepper } from '@angular/cdk/stepper';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { EmployeeFormComponent } from '../employee-form.component';
import { AccessInformationComponent } from './access-information.component';

describe('AccessInformationComponent', () => {
  let component: AccessInformationComponent;
  let fixture: ComponentFixture<AccessInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessInformationComponent, EmployeeFormComponent],
      imports: [FormsModule, ReactiveFormsModule, AppModule],
      providers: [CdkStepper],
    }).compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(AccessInformationComponent);
    component = fixture.componentInstance;
    component.form = fb.group({
      accessInformation: fb.group({
        ibmLogonId: [null],
        majorGroupCode: [null],
        lsoGroupCode: [null],
        securityAuthorization: [null],
        unixLogonId: [null],
        application: [null],
        accessGroup: [null],
        accountNumber: [null],
        billingAccountNumber: [null],
        accessType: [null],
      }),
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match input values to formgroup (IBM data center)', () => {
    // Create formgroup

    fixture.detectChanges();

    // Have to click elements to render forms
    component.renderIBMForm = true;
    component.renderUnixEnvAccess = true;
    component.renderSecurIdAccess = true;
    fixture.detectChanges();

    // Grab input elements
    const logonIn = fixture.debugElement.query(By.css('input#ibmLogonIdInput'));
    console.log(logonIn);
    const majorGroupCodeInput = fixture.debugElement.query(
      By.css('input#ibmMajorGroupCodeInput')
    );
    const lsoGroupCodeInput = fixture.debugElement.query(
      By.css('input#ibmLsoGroupCodeInput')
    );
    const securityAuthIn = fixture.debugElement.query(
      By.css('input#ibmSecurityAuthInput')
    );

    // Change input values
    logonIn.nativeElement.value = 'samplelogon';
    majorGroupCodeInput.nativeElement.value = 'majorcode';
    lsoGroupCodeInput.nativeElement.value = 'groupcode';
    securityAuthIn.nativeElement.value = 'security';
    fixture.detectChanges();

    // Dispatch events
    logonIn.nativeNode.dispatchEvent(new Event('input'));
    majorGroupCodeInput.nativeElement.dispatchEvent(new Event('input'));
    lsoGroupCodeInput.nativeElement.dispatchEvent(new Event('input'));
    securityAuthIn.nativeNode.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    console.log(component.form);
    // check that the form groups are updated
    expect(component.form.value.accessInformation.ibmLogonId).toEqual(
      'samplelogon'
    );
    expect(component.form.value.accessInformation.majorGroupCode).toEqual(
      'majorcode'
    );
    expect(component.form.value.accessInformation.lsoGroupCode).toEqual(
      'groupcode'
    );
    expect(
      component.form.value.accessInformation.securityAuthorization
    ).toEqual('security');
  });
  it('should match input values to formgroup (Unix Environment Access)', () => {
    // Have to click elements to render forms
    component.renderIBMForm = true;
    component.renderUnixEnvAccess = true;
    component.renderSecurIdAccess = true;
    fixture.detectChanges();

    // grab elements
    const logonIdIn = fixture.debugElement.query(
      By.css('input#unixLogonIdInput')
    );
    const applicationIn = fixture.debugElement.query(
      By.css('input#applicationInput')
    );
    const accessGroupIn = fixture.debugElement.query(
      By.css('input#accessGroupInput')
    );
    const accountNumIn = fixture.debugElement.query(
      By.css('input#accountNumberInput')
    );

    // update values
    logonIdIn.nativeElement.value = 'logon';
    applicationIn.nativeElement.value = 'applicationInput';
    accessGroupIn.nativeElement.value = 'accessgroup';
    accountNumIn.nativeElement.value = 'accountnum';
    fixture.detectChanges();

    // dispatch events
    logonIdIn.nativeElement.dispatchEvent(new Event('input'));
    applicationIn.nativeElement.dispatchEvent(new Event('input'));
    accessGroupIn.nativeElement.dispatchEvent(new Event('input'));
    accountNumIn.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // check if they match
    expect(component.form.value.accessInformation.unixLogonId).toEqual('logon');
    expect(component.form.value.accessInformation.application).toEqual(
      'applicationInput'
    );
    expect(component.form.value.accessInformation.accessGroup).toEqual(
      'accessgroup'
    );
    expect(component.form.value.accessInformation.accountNumber).toEqual(
      'accountnum'
    );
  });
  it('should match input values to formgroup (SecurID Access)', () => {
    // Have to click elements to render forms
    component.renderIBMForm = true;
    component.renderUnixEnvAccess = true;
    component.renderSecurIdAccess = true;
    fixture.detectChanges();

    // grab elements
    const billingAccIn = fixture.debugElement.query(
      By.css('input#billingAccountInput')
    );
    const accessTypeSelect = fixture.debugElement.query(
      By.css('select#accessTypeSelect')
    );

    // update values
    billingAccIn.nativeElement.value = '1234';
    accessTypeSelect.nativeElement.value =
      accessTypeSelect.nativeElement.options[0].value;
    fixture.detectChanges();

    // dispatch events
    billingAccIn.nativeElement.dispatchEvent(new Event('input'));
    accessTypeSelect.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    // check if they match
    expect(component.form.value.accessInformation.billingAccountNumber).toEqual(
      '1234'
    );
    expect(component.form.value.accessInformation.accessType).toEqual(
      'SecurID VPN'
    );
  });

  // TODO: Test other checkboxes
});
