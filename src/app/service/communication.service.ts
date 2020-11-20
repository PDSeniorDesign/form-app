import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private _http: HttpClient) { }

  getData() {
    console.log('Requesting data from the server');

  }
}
