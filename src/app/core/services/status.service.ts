import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {

  //block url
  static isNextStep: boolean;
  apiUrl: string = environment.apiUrl;
  //hold password for admin
  public adminPassword: any;
  constructor(private http: HttpClient) {}

  public searchById(id: any) {
    return this.http.get(`${this.apiUrl}/admin/${this.adminPassword}/service_requests/${id}`);
  }

  //display request into observable array
  public display(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/${this.adminPassword}/service_requests`);
  }

  //reset password
  public resetPass(old: any, newPass: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.patch(
      `${this.apiUrl}/admin/reset_password/${JSON.stringify(newPass)}`,
      old,
      httpOptions
    );
  }

  public login(password: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'text'
      }),
    };

    return this.http.get(`${this.apiUrl}/admin/` + password);
  }
  //display request into observable array
  public display(): Observable<any> {
    return this.http.get(`${this.apiUrl}/service_requests`);
  }
}
