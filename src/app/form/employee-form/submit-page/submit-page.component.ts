import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})
export class SubmitPageComponent implements OnInit {
  @Input() regForm;
  formValues: object;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.formValues = this.regForm.value;
    console.log(JSON.stringify(this.formValues));
    // console.log(Object.keys(this.formValues))
    // Object.keys(this.formValues).forEach((k) => {
    //   console.log(k);
    // });
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  objectValues(obj) {
    return Object.values(obj)
  }

  getFormValueSpecific(k, j) {
    return (this.formValues[k])[j];
  }

  // For debugging purposes
  onClick(): void {
    // Example of request (Observable)
    this.apiService.getSample().subscribe((res) => console.log(res));
    console.log(this.regForm);
  }
}

/*
{
  "information": {
    "lastName":"Doe",
    "firstName":"John",
    "middleInitial":"A",
    "emailAddress":"test@email.com",
    "phoneNumber":"5555555555",
    "address":"123 Street",
    "city":"City",
    "state":"CA",
    "zipCode":"12345"
  },
  "employeeInformation":{
    "employeeNumber":"test",
    "hostedId":"test"
  }
}

*/
