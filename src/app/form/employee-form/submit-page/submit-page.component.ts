import { Component, Input, OnInit } from '@angular/core';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
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
    private apiEndPointsService: ApiEndpointsService
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
    this.apiHttpService
      .post(
        this.apiEndPointsService.getServiceRequestEndPoint(),
        this.regForm.value
      )
      .subscribe(() => {
        console.log('data sent');
      });
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
