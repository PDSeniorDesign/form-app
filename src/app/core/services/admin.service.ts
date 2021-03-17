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
  // hold keyName for
  public adminKeyName: any;

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

  // This function lets the rest of the app know of a logged in change
  emitAdminLoggedInChange(newLoggedStatus: boolean): void {
    this.adminLoggedIn.next(newLoggedStatus);
  }

  // access service_requests for admins by id
  public searchById(id: any): Observable<any> {
    // set the password in headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        password: this.adminPassword,
      }),
    };

    return this.http.get(
      `${environment.apiUrl}/admin/service_requests/${id}`,
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

    return this.http.patch(
      `${environment.apiUrl}/admin/reset_password`,
      httpOptions,
      httpOptions
    );
  }

  // logout user
  public logOut(): void {
    sessionStorage.removeItem(this.adminKeyName);
    // Notify the rest of the app that the admin logged out
    this.emitAdminLoggedInChange(false);
    this.router.navigate(['/admin']);
  }
}
