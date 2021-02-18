import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //Reformats the data from the submit page to backend JSON compatible
  public reformatDataPost(data: any) {
    const reformated = {
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

  public createForm(data: any) {
    return this.http.post(
      `${environment.apiUrl}/service_requests`,
      this.reformatDataPost(data),
      this.httpOptions
    );
  }

  public getFormByRequestNumber(data: any) {
    return this.http.get(
      `${environment.apiUrl}/service_requests/` + data,
      this.httpOptions
    );
  }

  public saveForm(requestNumber: any, data: any) {
    return this.http.put(
      `${environment.apiUrl}/service_requests/${requestNumber}`,
      this.reformatDataPost(data),
      this.httpOptions
    );
  }
}
