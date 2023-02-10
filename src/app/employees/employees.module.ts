import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeService } from '../services/employee.service';
import { EmployeeResolverService } from '../services/employee-list-resolver.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';


@NgModule({
  declarations: [
    // EmployeesComponent
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  providers: [EmployeeService, EmployeeResolverService],
})
export class EmployeesModule { }
