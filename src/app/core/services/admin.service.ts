import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  //tranferring form data in admin side between components
  public adminFormData: any;
  //hold password for admin
  public adminPassword: any;
  //hold keyName for
  public adminKeyName: any;

  constructor(private http: HttpClient, private router: Router) {}

  //access service_requests for admins by id
  public searchById(id: any) {
    //set the password in headers
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'password': this.adminPassword,
      }),
    };

    return this.http.get(
      `${environment.apiUrl}/admin/service_requests/${id}`, httpOptions
    );
  }

  //display all service_requests in observable array
  public display(): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'password': this.adminPassword,
      }),
    };
    return this.http.get(
      `${environment.apiUrl}/admin/service_requests`, httpOptions
    );
  }

  //reset password
  public resetPassword(old: string, newPass: string) {

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'password': old,
        'new-password': newPass,
      }),
    };

    return this.http.patch(
      `${environment.apiUrl}/admin/reset_password`, httpOptions, httpOptions
    );
  }

  //logout user
  public logOut() {
    sessionStorage.removeItem(this.adminKeyName);
    this.router.navigate(['/admin'])

  }
}
