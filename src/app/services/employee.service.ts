import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    url = 'https://dummy.restapiexample.com/api/v1/employees';

    headers = new HttpHeaders({
        // 'Accept': '*/*',
        'Access-Control-Allow-Origin': 'https://dummy.restapiexample.com',
        'Access-Control-Allow-Credentials': 'true',
        // 'Content-Type':'application/json; charset=utf-8',
        // 'mode': 'no-corse'
    });

    constructor(public http: HttpClient) {}

    getEmployeeList(): Observable<any[]> { // our employee model not match remote list of data
        return this.http.get<any[]>(this.url, {headers: this.headers});
    }
}