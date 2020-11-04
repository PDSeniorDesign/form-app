import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormType } from '../form/models/FormType';
import { FormUserType } from '../form/models/FormUserType';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // EMPLOYEE or CONTRACTOR
  formName: FormGroup;
  formUserType: FormUserType;

  // Used by template
  public get FormUserType() {
    return FormUserType;
  }

  //forms that pertains to either EMPLOYEE or CONTRACTOR and represented as values
  employeeApplicationList: string[] = [
    'ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_PERMANENT_EMPLOYEES',
    'ISD_Downey_Data_Center_Registration_LA_County_Employees',
    'ISD_Internet_Registration_Form_Permanent_Employees',
  ];

  vendorApplicationList: string[] = [
    'ISD Active Directory Hosted Registration Forms',
    'ISD Downey Data Center Registration LA County',
    'ISD Internet Registration Form',
  ];

  constructor(private router: Router) {}

  //to link button to form page
  goToForm(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
    this.formName = new FormGroup({
      formName: new FormControl(null),
    });
  }

  onClickEmployee(): void {
    this.formUserType = FormUserType.EMPLOYEE;
    console.log(this.formName);
  }
  onClickContractor(): void {
    this.formUserType = FormUserType.CONTRACTOR;
    console.log(this.formName);
  }

  printValues(): void {
    console.log(this.formName.value);
  }
}
