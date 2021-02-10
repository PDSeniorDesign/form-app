import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contractor-form',
  templateUrl: './contractor-form.component.html',
  styleUrls: ['./contractor-form.component.css'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '400ms',
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '400ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
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
