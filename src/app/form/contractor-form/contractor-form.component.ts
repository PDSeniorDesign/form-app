import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
        lastName: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        firstName: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        middleInitial: new FormControl(null,
          Validators.pattern("[a-z A-Z]*")
          ),
        companyName: new FormControl(null,
          Validators.required
          ),
        companyEmailAddress: new FormControl(null,
          [Validators.required, Validators.email]
          ),
        companyStreetAddress: new FormControl(null,
          Validators.required
          ),
        phoneNumber: new FormControl(null,
          [Validators.required, Validators.pattern("[0-9]{10}")]
          ),
        city: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        state: new FormControl(null,
          [Validators.required, Validators.pattern("[a-z A-Z]*")]
          ),
        zipCode: new FormControl(null,
          [Validators.required, Validators.minLength(5), Validators.maxLength(7), Validators.pattern("[0-9]*")]
          ),
      }),
      countyInformation: new FormGroup({
        contactWorkOrderNumber: new FormControl(null,
          Validators.required
          ),
        contactExpirationDate: new FormControl(null,
          [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]
          ),
        countyEmailAddress: new FormControl(null,
          [Validators.required, Validators.email]
          ),
        phoneNumber: new FormControl(null,
          [Validators.required, Validators.pattern("[0-9]{10}")]
          ),
        departmentName: new FormControl(null,
          Validators.pattern("[a-z A-Z]*")
          ),
        departmentNumber: new FormControl(null,
          Validators.pattern("[0-9]*")
          ),
        businessStreetAddress: new FormControl(null),
        city: new FormControl(null,
          Validators.pattern("[a-z A-Z]*")
          ),
        zipCode: new FormControl(null,
          [Validators.minLength(5), Validators.maxLength(7), Validators.pattern("[0-9]*")]
          ),
      }),
    });
  }
}
