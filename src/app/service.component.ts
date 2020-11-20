import { HttpEvent, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export class MockXHRBackend implements HttpBackend {
    
    handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        throw new Error('Method not implemented.');
    }





}