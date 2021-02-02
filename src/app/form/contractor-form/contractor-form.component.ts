import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contractor-form',
  templateUrl: './contractor-form.component.html',
  styleUrls: ['./contractor-form.component.css'],
})
export class ContractorFormComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      contractorInformation: new FormGroup({
        lastName: new FormControl(null),
        firstName: new FormControl(null),
        middleInitial: new FormControl(null),
        companyName: new FormControl(null),
        companyEmailAddress: new FormControl(null),
        companyStreetAddress: new FormControl(null),
        phoneNumber: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null),
        zipCode: new FormControl(null),
      }),
      countyInformation: new FormGroup({
        contactWorkOrderNumber: new FormControl(null),
        contactExpirationDate: new FormControl(null),
        countyEmailAddress: new FormControl(null),
        phoneNumber: new FormControl(null),
        departmentName: new FormControl(null),
        departmentNumber: new FormControl(null),
        businessStreetAddress: new FormControl(null),
        city: new FormControl(null),
        zipCode: new FormControl(null),
      }),
    });
  }
}
