import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiHttpService {
    constructor( private http: HttpClient) {    
    }

    public get(url: string, options?: any) {
        return this.http.get(url, options);
    }

    public post(url: string, data: any, options?: any) {
        data = this.reformatDataPost(data);
        return this.http.post(url, data, options);
    }

    public put(url: string, data: any, options: any) {
        return this.http.put(url, data, options);
    }

    public delete(url: string, options?: any) {
        return this.http.delete(url, options);
    }

    //Reformats the data from the submit page to backend JSON compatible
    public reformatDataPost(data: any) {
        var reformated = [
            {
                "lastName": data.information.lastName,
                "firstName":data.information.firstName,
                "middleInitial": data.information.middleInitial,
                "employeeEmailAddress": data.information.employeeEmailAddress,
                "businessPhoneNumber": data.information.businessPhoneNumber,
                "businessStreetAddress": data.information.businessStreetAddress,
                "businessCity": data.information.businessCity,
                "businessState": data.information.businessState,
                "businessZip": data.information.businessZip,
                "employeeNumber": data.EmployeeInformationComponent.employeeNumber,
                "hostedId": data.EmployeeInformationComponent.employeeNumber,
            }
        ]

        return JSON.stringify(reformated);
    }

}

