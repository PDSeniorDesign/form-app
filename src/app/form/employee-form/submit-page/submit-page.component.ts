import { Component, Input, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})
export class SubmitPageComponent implements OnInit {
  @Input() regForm;
  constructor(
    //Application Services
    private apiHttpService: ApiHttpService,
    //private apiEndPointsService: ApiEndpointsService
  ) {}

  ngOnInit(): void {}

  // For debugging purposes
  /*
  onClick(): void {
    // Example of request (Observable)
    this.apiService.getSample().subscribe((res) => console.log(res));
    console.log(this.regForm);
  }
  */

  onClick(): void {
    console.log(this.regForm.value); //debugging
    this.apiHttpService.createForm(this.reformatDataPost(this.regForm.value))
      .subscribe(() => {
        console.log('data sent');
      });
  }

  //Reformats the data from the submit page to backend JSON compatible
  public reformatDataPost(data: any) {
    var reformated = 
        {
            "lastName": data.information.lastName,
            "firstName":data.information.firstName,
            "middleInitial": data.information.middleInitial,
            "employeeEmailAddress": data.information.emailAddress,
            "businessPhoneNumber": data.information.phoneNumber,
            "businessStreetAddress": data.information.address,
            "businessCity": data.information.city,
            "businessState": data.information.state,
            "businessZip": data.information.zipCode,
            "employeeNumber": data.employeeInformation.employeeNumber,
            "hostedId": data.employeeInformation.hostedId
        }

    console.log(JSON.stringify(reformated)); //for debugging
    return JSON.stringify(reformated);
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
