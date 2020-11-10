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

const EMPLOYEE_FORM = {
  information: new FormGroup({
    lastName: new FormControl(null),
    firstName: new FormControl(null),
    middleInitial: new FormControl(null),
    laCountyEmployeeNumber: new FormControl(null),
    departmentName: new FormControl(null),
    departmentNumber: new FormControl(null),
    testingData: new FormControl(null),
  }),
};
const FormGroups = {
  ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_PERMANENT_EMPLOYEES: ISD_ACTIVE_DIRECTORY_HOSTED_REGISTRATION_FORMS_PERMANENT_EMPLOYEES,
};

export default FormGroups;
