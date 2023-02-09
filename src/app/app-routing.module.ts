import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; 

const routes: Routes = [
  {path: 'auth', component: AuthenticationComponent},
  {path: 'employee-list', component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
