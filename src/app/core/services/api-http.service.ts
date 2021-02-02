import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiHttpService {
    constructor( private http: HttpClient) {   

    }

    public get(url: string, options?: any) {
        var headers={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                
            })
        }
        return this.http.get(url, options);
    }

    public post(url: string, data: any, options?: any) {
        var reformatedData = this.reformatDataPost(data);
        var headers={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                
            })
        }
        options = headers; //{ headers:headers };
        console.log(reformatedData); //debugging
        return this.http.post(url, reformatedData, options);
    }

    public put(url: string, data: any, options: any) {
        return this.http.put(url, data, options);
    }

    public delete(url: string, options?: any) {
        return this.http.delete(url, options);
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

