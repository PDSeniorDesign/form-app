import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  public searchGet(url: string, options?: any) {
    var headers={
        headers: new HttpHeaders({
            'Content-Type': 'application/json',  
        })
    }
    return this.http.get(url, options);
}
}