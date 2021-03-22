import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  adminLoggedIn = new BehaviorSubject<boolean>(this.isAdminLoggedIn());

  // tranferring form data in admin side between components
  public adminFormData: any;
  // hold password for admin
  public adminPassword: any;


  constructor(private http: HttpClient, private router: Router) {
    this.init();
  }

  // This method does some initialization work for the service.
  init(): void {
    // Checking if the admin is already logged in, will also initialize adminLoggedIn
    if (this.isAdminLoggedIn()) {
      this.adminPassword = sessionStorage.getItem('password');
    }
  }

  // Checks if admin is logged in by searching for password in session storage
  isAdminLoggedIn(): boolean {
    const passwordFromStorage = sessionStorage.getItem('password');
    if (passwordFromStorage === null) {
      return false;
    } else {
      return true;
    }
  }

  //This function sets password
  setAdminCredentials(passwordFromAdmin: string): void {
    this.adminPassword = passwordFromAdmin;
    sessionStorage.setItem('password', passwordFromAdmin);
  }

  // This function lets the rest of the app know of a logged in change
  emitAdminLoggedInChange(newLoggedStatus: boolean): void {
    this.adminLoggedIn.next(newLoggedStatus);
  }

  // Logout admin
  logAdminOut(): void {
    sessionStorage.removeItem('password');
    // Notify the rest of the app that the admin logged out
    this.emitAdminLoggedInChange(false);
    this.router.navigate(['/admin']);
  }

  // access service_requests for admins by id
  public searchById(requestNumber: any): Observable<any> {
    // set the password in headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        password: this.adminPassword,
      }),
    };

    return this.http.get(
      `${environment.apiUrl}/admin/service_requests/${requestNumber}`,
      httpOptions
    );
  }

  // display all service_requests in observable array
  public display(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        password: this.adminPassword,
      }),
    };
    return this.http.get(
      `${environment.apiUrl}/admin/service_requests`,
      httpOptions
    );
  }

  // reset password
  public resetPassword(old: string, newPass: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        password: old,
        'new-password': newPass,
      }),
    };
    //sessionStorage.setItem('password', newPass);
    return this.http.patch(
      `${environment.apiUrl}/admin/reset_password`,
      httpOptions,
      httpOptions
    );
  }

  //reformat data for admin-employee
  public reformatDataPostEmployee(data: any, isComplete: boolean): string {
    const reformated = {
      // Form specific data
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

      //signatures-department Head left, since theres no policy in employee-form
      applicationCoordinatorName: data.signatures.applicationCoordinatorName,
      applicationCoordinatorPhone: data.signatures.applicationCoordinatorPhone,
      applicationCoordinatorEmail: data.signatures.applicationCoordinatorEmail,

      divChiefManagerName: data.signatures.divChiefManagerName,
      divChiefManagerPhone: data.signatures.divChiefManagerPhone,
      divChiefManagerEmail: data.signatures.divChiefManagerEmail,

      deptInfoSecurityOfficerName: data.signatures.deptInfoSecurityOfficerName,
      deptInfoSecurityOfficerPhone: data.signatures.deptInfoSecurityOfficerPhone,
      deptInfoSecurityOfficerEmail: data.signatures.deptInfoSecurityOfficerEmail,

    };
    return JSON.stringify(reformated);
  }

  //save form -only works for employee requests
  public saveForm(requestNumber: any,  data: object): Observable<any> {
    // set the password in headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        password: this.adminPassword,
      }),
    };
    return this.http.patch(`${environment.apiUrl}/admin/service_requests/${requestNumber}`,
    this.reformatDataPostEmployee(data, false),
    httpOptions);

  }
}
