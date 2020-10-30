import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
/* TODO: Flash error message when required field
 *  is not filled in
 */

//TODO: Missing phoneNumber field not sure where to put
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  title = 'form-app';
  registrationForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      applicationName: new FormGroup({
        name: new FormControl(null),
      }),
      name: new FormGroup({
        firstName: new FormControl(null, [Validators.required]),
        middleInitial: new FormControl(null),
        lastName: new FormControl(null, [Validators.required]),
        countyEmployeeNumber: new FormControl(null, [Validators.required]),
        hostedId: new FormControl(null, [Validators.required]),
      }),
      department: new FormGroup({
        departmentEmailAddress: new FormControl(null, [Validators.required]),
        departmentName: new FormControl(null, [Validators.required]),
      }),
      address: new FormGroup({
        businessStreetAddress: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        zip: new FormControl(null, [Validators.required]),
        phoneNumber: new FormControl(null, [Validators.required]),
      }),
      contactDetails: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null),
      }),
    });
  }
}
