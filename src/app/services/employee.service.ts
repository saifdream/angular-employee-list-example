import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    url = 'https://dummy.restapiexample.com/api/v1/employees';

    constructor(public http: HttpClient) {}

    getEmployeeList(): Observable<any[]> { // our employee model not match remote list of data
        return this.http.get<any[]>(this.url);
    }
}