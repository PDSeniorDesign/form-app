import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormType } from './models/FormType';
import FormGroups from './models/FormGroups';
import { FormUserType } from './models/FormUserType';

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
  formName: any;

  public get FormType() {
    return FormType;
  }
  public get FormUserType() {
    return FormUserType;
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Reading url param
    this.formName = this.route.snapshot.queryParamMap.get('formName');

    // FormGroup Initialization
    switch (this.formName) {
      case FormUserType.EMPLOYEE:
        this.registrationForm = new FormGroup(FormGroups.EMPLOYEE_FORM);
        break;
      case FormUserType.CONTRACTOR:
        this.registrationForm = new FormGroup(FormGroups.CONTRACTOR_FORM);
        break;
      default:
        this.registrationForm = null;
    }
  }
}
