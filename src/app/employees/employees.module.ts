import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeService } from '../services/employee.service';
import { EmployeeResolverService } from '../services/employee-list-resolver.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    NewEmployeeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ],
  providers: [EmployeeService, EmployeeResolverService],
})
export class EmployeesModule { }
