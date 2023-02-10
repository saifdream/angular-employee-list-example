import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeResolverService } from '../services/employee-list-resolver.service';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeeListComponent,
    resolve: { employeeList: EmployeeResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
