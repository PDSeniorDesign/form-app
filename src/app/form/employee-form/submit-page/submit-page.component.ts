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

  ngOnInit(): void {

    //Example of getting data from backend to frontend by ID. Show in console.
    console.log("submit init running");
    this.apiHttpService
    .get(
      this.apiEndPointsService.getServiceRequestEndPointByID("39806e1c-5cfb-48e5-9f04-894165e02466"))
    .subscribe((data: any) => {
      console.log(data);
      console.log('data retrived');
    });
  }
  
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
