import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  //hold password for admin
  public adminPassword: any;
  //hold keyName for
  public adminKeyName: any;

  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };

  //access service_requests for admins by id
  public searchById(id: any) {
    return this.http.get(
      `${environment.apiUrl}/admin/${sessionStorage.getItem(this.adminKeyName)}/service_requests/${id}`
    );
  }

  //display all service_requests in observable array
  public display(): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/admin/${sessionStorage.getItem(this.adminKeyName)}/service_requests`
    );
  }

  //reset password
  public resetPassword(old: any, newPass: any) {
    return this.http.patch(
      `${environment.apiUrl}/admin/reset_password/${newPass}`,
      this.reformatAdminDdata(old),
      this.httpOptions
    );
  }

  //reformat Admin password into JSON compatible format
  public reformatAdminDdata(data: any) {
    const reformated = {
      id: 1,
      password: data
    };
    return JSON.stringify(reformated);
  }

  //logout user
  public logOut() {
    sessionStorage.removeItem(this.adminKeyName);
    this.router.navigate(['/admin'])

  }
}
