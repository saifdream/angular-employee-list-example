import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Employee } from '../model/employee.model';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { AppState } from '../state/app.state';
import { selectEmployees } from '../state/employee-list/employee-list.selectors';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title="Employee List";

  displayedColumns: string[] = ['sl', 'firstName', 'lastName', 'phone', 'gender', 'dob', 'skillName', 'skillLevel', 'experience'];
  dataSource: Employee[] = [];
  
  employees$ = this.store.pipe(select(selectEmployees));
   
  constructor(
    private activeRoute: ActivatedRoute, 
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {
    // this.state = store.select('employees')
    this.employees$.subscribe(employees => this.dataSource = employees);
    // store.select<Array<Employee>>(selectEmployees).subscribe((employees: Employee[]) => {
    //   this.employees$=employees; 
    //   console.log(employees)
    // })

    // const currentYear = new Date().getFullYear();
    // this.maxDate = new Date();
  }

  ngOnInit(): void {
    console.log(
      "Activated route data in Component ::: ",
      this.activeRoute.data
    );

    this.activeRoute.data.subscribe((response: any) => {
      console.log('Employee Pre-fetching', response);
      console.log('Employee FETCHED')
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewEmployeeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
