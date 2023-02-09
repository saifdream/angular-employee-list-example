import { isDevMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { EmployeeResolverService } from './services/employee-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly:  !isDevMode() // environment.production
    }),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, EmployeeResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
