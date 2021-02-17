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

fdescribe('AccessInformationComponent', () => {
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
      }),
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should match input values to formgroup (IBM data center)', () => {
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
  });

  // TODO: Test other checkboxes
});
