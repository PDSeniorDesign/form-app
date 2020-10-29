import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
//TODO: Link them to registrationForm app.component.ts
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
  // (@Input) Allows us to recieve the form from
  // parent component
  @Input() regForm: FormGroup;

  // EMPLOYEE or CONTRACTOR
  formType: string;

  employeeApplicationList: string[] = [
    'ISD Active Directory Hosted Registration Forms Permanent Employees',
    'ISD Downey Data Center Registration LA County Employees',
    'ISD Internet Registration Form Permanent Employees',
  ];

  vendorApplicationList: string[] = [
    'ISD Active Directory Hosted Registration Forms',
    'ISD Downey Data Center Registration LA County',
    'ISD Internet Registration Form',
  ];

  constructor() {}

  ngOnInit(): void {}

  onClickEmployee(): void {
    this.formType = 'EMPLOYEE';
    console.log(this.formType);
  }
}
