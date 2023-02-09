import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { EmployeeService } from "./employee.service";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<any> {
    constructor(private employee: EmployeeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log('Called Get Employee in resolver ...', route);
        return this.employee.getEmployeeList().pipe(
            catchError(error => {
                return of('No Results')
            })
        )
    }
}