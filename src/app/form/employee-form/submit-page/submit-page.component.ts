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
      lastName: data.information.lastName,
      firstName: data.information.firstName,
      middleInitial: data.information.middleInitial,
      employeeEmailAddress: data.information.emailAddress,
      businessPhoneNumber: data.information.phoneNumber,
      businessStreetAddress: data.information.address,
      businessCity: data.information.city,
      businessState: data.information.state,
      businessZip: data.information.zipCode,
      employeeNumber: data.employeeInformation.employeeNumber,
      hostedId: data.employeeInformation.hostedId,
    };

    return JSON.stringify(reformated);
  }
}
