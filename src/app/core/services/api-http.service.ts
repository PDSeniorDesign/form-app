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

  /**
   * @description Use this function to create the form in the server. In other words, this function is called
   * when the form is completed.
   * @param data This is the value field of the FormGroup object. eg. FormGroup.value
   * @returns An observable that will return the created form back from the server.
   */
  public createForm(data: any): Observable<any> {
    // TODO: This should set the completed field to complete
    return this.http.post(
      `${environment.apiUrl}/service_requests`,
      this.reformatDataPostEmployee(data),
      this.httpOptions
    );
  }
  /**
   * @description This function is used to get the form in the homescreen. Will basically just retrieve
   * a specific form by it's request number.
   * @param requestNumber The requestNumber is the number by which the forms are identified by. eg. the form's id.
   * @returns An Observable the will contain the form object.
   */
  public getFormByRequestNumber(requestNumber: number): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/service_requests/` + requestNumber,
      this.httpOptions
    );
  }
  /**
   * @description This function save's the form on the server.
   * @param requestNumber The form's request number. This is used by the server to retrieve the form.
   * @param data This is the data that we want to save.
   * @returns An Observable with the update data. This is returned by the server.
   */
  public saveForm(requestNumber: string, data: object): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}/service_requests/${requestNumber}`,
      this.reformatDataPostEmployee(data),
      this.httpOptions
    );
  }
}
