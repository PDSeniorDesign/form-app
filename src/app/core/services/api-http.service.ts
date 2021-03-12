import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /**
   * @description This method transforms the form group into the format that the server will accept.
   * @param data This is the value field of the FormGroup. eg. FormGroup.value
   * @returns A string representation of the json object that is accepted by the backend server.
   */
  public reformatDataPostEmployee(data: any): string {
    const reformated = {
      // Personal Information
      lastName: data.personalInformation.lastName,
      firstName: data.personalInformation.firstName,
      middleInitial: data.personalInformation.middleInitial,
      employeeEmailAddress: data.personalInformation.emailAddress,
      businessPhoneNumber: data.personalInformation.phoneNumber,
      // Address Information
      businessStreetAddress: data.addressInformation.address,
      businessCity: data.addressInformation.city,
      businessState: data.addressInformation.state,
      businessZip: data.addressInformation.zipCode,
      // Employee Information
      employeeNumber: data.employeeInformation.employeeNumber,
      hostedId: data.employeeInformation.hostedId,
      // Access Information
      ibmLogOnId: data.accessInformation.ibmLogonId,
      majorGroupCode: data.accessInformation.majorGroupCode,
      lsoGroupCode: data.accessInformation.lsoGroupCode,
      securityAuthorization: data.accessInformation.securityAuthorization,
      unixLogOnId: data.accessInformation.unixLogonId,
      unixApplication: data.accessInformation.application,
      unixAccessGroup: data.accessInformation.accessGroup,
      unixAccountNumber: data.accessInformation.accountNumber,
      billingAccountNumber: data.accessInformation.billingAccountNumber,
      // FIXME: On server side accessType(securid) might be misssing
    };
    return JSON.stringify(reformated);
  }

  public createForm(data: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/service_requests`,
      this.reformatDataPostEmployee(data),
      this.httpOptions
    );
  }

  public getFormByRequestNumber(data: any): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/service_requests/` + data,
      this.httpOptions
    );
  }

  public saveForm(requestNumber: any, data: any): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}/service_requests/${requestNumber}`,
      this.reformatDataPostEmployee(data),
      this.httpOptions
    );
  }
}
