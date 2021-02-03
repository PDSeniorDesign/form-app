import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public searchGetID(id: any) {
    return this.http.get(`${this.apiUrl}/service_requests/${id}`);
  }
}