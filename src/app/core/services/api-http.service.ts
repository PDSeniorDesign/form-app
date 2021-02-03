import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiHttpService {

    constructor( private http: HttpClient,) {   }

    public createForm(data: any) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'my-auth-token'
            })
          };
        return this.http.post(`${environment.apiUrl}/service_requests`, data, httpOptions);
    }

    //Reformats the data from the submit page to backend JSON compatible
    public reformatDataPost(data: any) {
        var reformated = 
            {
                "lastName": data.information.lastName,
                "firstName":data.information.firstName,
                "middleInitial": data.information.middleInitial,
                "employeeEmailAddress": data.information.emailAddress,
                "businessPhoneNumber": data.information.phoneNumber,
                "businessStreetAddress": data.information.address,
                "businessCity": data.information.city,
                "businessState": data.information.state,
                "businessZip": data.information.zipCode,
                "employeeNumber": data.employeeInformation.employeeNumber,
                "hostedId": data.employeeInformation.hostedId
            }

        console.log(JSON.stringify(reformated)); //for debugging
        return JSON.stringify(reformated);
    }

}

