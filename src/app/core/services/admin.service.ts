import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  //hold password for admin
  public adminPassword: any;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //access service_requests for admins by id
  public searchById(id: any) {
    return this.http.get(
      `${environment.apiUrl}/admin/${this.adminPassword}/service_requests/${id}`
    );
  }

  //display all service_requests in observable array
  public display(): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/admin/${this.adminPassword}/service_requests`
    );
  }

  //reset password
  public resetPassword(old: any, newPass: any) {
    return this.http.patch(
      `${environment.apiUrl}/admin/reset_password/${JSON.stringify(newPass)}`,
      old,
      this.httpOptions
    );
  }
}
