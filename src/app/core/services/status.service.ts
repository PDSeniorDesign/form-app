import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public searchById(id: any) {
    return this.http.get(`${this.apiUrl}/request_statuses/${id}`);
  }
  //display request into observable array
  public display() :Observable<any> {
    return this.http.get(`${this.apiUrl}/service_requests`);
  }  
}
