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

  public createForm(data: any) {
    return this.http.post(
      `${environment.apiUrl}/service_requests`,
      data,
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
    return this.http.put(`${environment.apiUrl}/service_requests/${requestNumber}`, data, this.httpOptions);
  }
}
