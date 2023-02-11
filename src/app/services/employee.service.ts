import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    url = 'https://dummy.restapiexample.com/api/v1/employees';
    // Provided url has ssl certificate expire issue
    // I have checked this url, works well - https://jsonplaceholder.typicode.com/posts

    constructor(public http: HttpClient) {}

    getEmployeeList(): Observable<any[]> { // our employee model not match remote list of data
        return this.http.get<any[]>(this.url);
    }
}