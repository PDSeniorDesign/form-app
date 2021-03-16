import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// TODO: Refactor createForm into one method and ask whether it is employee or contractor then
// simple if statement
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
   * @param isComplete If the form is complete we have to let the server know that it is complete.
   * @returns A string representation of the json object that is accepted by the backend server.
   */
  public reformatDataPostEmployee(data: any, isComplete: boolean): string {
    const reformated = {
      // Form data
      complete: isComplete,
      employee: true, // Since it is the employee form
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
      // Additional Information
      internetApplication: data.additionalInformation.internetApplication,
      exchangeEmail: data.additionalInformation.exchangeEmail,
      emailEncryption: data.additionalInformation.emailEncryption,
      laCountyGovAccess: data.additionalInformation.laCountyGovAccess,
      tokenlessAuthentication:
        data.additionalInformation.tokenlessAuthentication,
      lacMobileWifiAccess: data.additionalInformation.lacMobileWifiAccess,
      cherwellSms: data.additionalInformation.cherwellSms,
      windowsRightsMgmt: data.additionalInformation.windowsRightsMgmt,
    };
    return JSON.stringify(reformated);
  }

  public reformatContractData(data: any): string {
    const reformated = {
      // contractor info
      lastName: data.contractorInformation.lastName,
      firstName: data.contractorInformation.firstName,
      middleInitial: data.contractorInformation.middleInitial,
      companyName: data.contractorInformation.companyName,
      companyEmailAddress: data.contractorInformation.companyEmailAddress,
      companyStreetAddress: data.contractorInformation.companyStreetAddress,
      companyCity: data.contractorInformation.city,
      companyState: data.contractorInformation.state,
      companyZip: data.contractorInformation.zipCode,
      companyPhoneNumber: data.contractorInformation.phoneNumber,
      // county info
      contractWorkOrderNumber: data.countyInformation.contractWorkOrderNumber,
      contractExpirationDate: data.countyInformation.contractExpirationDate,
      countyEmailAddress: data.countyInformation.countyEmailAddress,
      businessPhoneNumber: data.countyInformation.phoneNumber,
      departmentName: data.countyInformation.departmentName,
      departmentNumber: data.countyInformation.departmentNumber,
      businessStreetAddress: data.countyInformation.businessStreetAddress,
      businessCity: data.countyInformation.businessCity,
      businessZip: data.countyInformation.businessZipCode,
    };
    return JSON.stringify(reformated);
  }

  /**
   * @description This method will create the form serverside.
   * @param data This is the value field of the FormGroup object. eg. FormGroup.value
   * @returns An observable that will return the created form back from the server.
   */
  public createForm(data: any): Observable<any> {
    // TODO: This should set the completed field to complete
    return this.http.post(
      `${environment.apiUrl}/service_requests`,
      this.reformatDataPostEmployee(data, false), // Initially creating the form
      this.httpOptions
    );
  }

  /**
   * @description ONLY use this method when the form is completed (in the submit page)
   * @param data This is the value field of the FormGroup object. eg. FormGroup.value
   * @returns An observable that will return the created form back from the server.
   */
  public submitForm(data: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/service_requests`,
      this.reformatDataPostEmployee(data, true), // Form is complete
      this.httpOptions
    );
  }

  public createContractForm(data: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/service_requests`,
      this.reformatContractData(data),
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
      this.reformatDataPostEmployee(data, false),
      this.httpOptions
    );
  }
}
