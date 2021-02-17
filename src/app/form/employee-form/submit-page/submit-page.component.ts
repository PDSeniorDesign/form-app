import { Component, Input, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})
export class SubmitPageComponent implements OnInit {
  @Input() regForm;
  @Input() setSubmitResponse; // Function to update parent (employee-form.component)
  constructor(private apiHttpService: ApiHttpService) {}

  ngOnInit(): void {}

  onClick(): void {
    console.log(this.regForm.value); //debugging
    this.apiHttpService
      .createForm(this.reformatDataPost(this.regForm.value))
      .subscribe((res) => {
        console.log(res);
        this.setSubmitResponse(res);
      });
  }

  //Reformats the data from the submit page to backend JSON compatible
  public reformatDataPost(data: any) {
    var reformated = {
      lastName: data.personalInformation.lastName,
      firstName: data.personalInformation.firstName,
      middleInitial: data.personalInformation.middleInitial,
      employeeEmailAddress: data.personalInformation.emailAddress,
      businessPhoneNumber: data.personalInformation.phoneNumber,
      businessStreetAddress: data.addressInformation.address,
      businessCity: data.addressInformation.city,
      businessState: data.addressInformation.state,
      businessZip: data.addressInformation.zipCode,
      employeeNumber: data.employeeInformation.employeeNumber,
      hostedId: data.employeeInformation.hostedId,
    };

    return JSON.stringify(reformated);
  }
}
