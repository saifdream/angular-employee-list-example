import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Employee } from '../model/employee.model';
import { AppState } from '../state/app.state';
import { addEmployee } from '../state/employee-list/employee-list.actions';
import { selectEmployees } from '../state/employee-list/employee-list.selectors';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title="Employee List";
  
  employees$ = this.store.pipe(select(selectEmployees));
   
  constructor(private activeRoute: ActivatedRoute, private store: Store<AppState>) {
    // this.state = store.select('employees')
    this.employees$.subscribe(employees => console.log(employees))
    // store.select<Array<Employee>>(selectEmployees).subscribe((employees: Employee[]) => {
    //   this.employees$=employees; 
    //   console.log(employees)
    // })
  }

  ngOnInit(): void {
    this.store.dispatch(addEmployee({
      employee: {
        firstName: 'Abc',
        lastName: '',
        dob: new Date(),
        gender: 'M',
        phone: 556,
        skill: '',
        skillLevel: ''
      }
    }));
    console.log(
      "Activated route data in Component ::: ",
      this.activeRoute.data
    );

    this.activeRoute.data.subscribe((response: any) => {
      console.log('Employee Pre-fetching', response);
      console.log('Employee FETCHED')
    })
  }

  addEmployee = (employee: Employee) => {
    this.store.dispatch(addEmployee({
      employee
    }));
  }
}
