import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiHttpService {

    constructor(private http: HttpClient,) { }

    public createForm(data: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(`${environment.apiUrl}/service_requests`, data, httpOptions);
    }

    public getFormByRequestNumber(data: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get(`${environment.apiUrl}/service_requests/` + data, httpOptions);
    }

}

