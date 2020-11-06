/* Form Groups */
import { FormGroup, FormControl, Validators } from '@angular/forms';

const ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_PERMANENT_EMPLOYEES = {
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
};

const FormGroups = {
  ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_PERMANENT_EMPLOYEES: ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_PERMANENT_EMPLOYEES,
};

export default FormGroups;
