import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; 
import { EmployeeResolverService } from './services/employee-list-resolver.service';

const routes: Routes = [
  { path: 'auth', component: AuthenticationComponent },
  { 
    path: 'employee-list', 
    component: EmployeeListComponent,
    resolve: { employeeList: EmployeeResolverService }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
