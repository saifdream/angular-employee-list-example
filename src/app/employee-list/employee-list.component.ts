import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title="Employee List";
  
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(
      "Activated route data in Component ::: ",
      this.activeRoute.data
    );

    this.activeRoute.data.subscribe((response: any) => {
      console.log('Employee Pre-fetching', response);
      console.log('Employee FETCHED')
    })
  }

}
