import { isDevMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { authenticationReducer } from './state/auth/auth.reducer';
import { employeeReducer } from './state/employee-list/employee-list.reducer';
import { MaterialModule } from './material.module';
import { employeeFormReducer } from './state/employee-form/employee-form.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      auth: authenticationReducer, 
      employees: employeeReducer, 
      employeeForm: employeeFormReducer
    }, {}),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly:  !isDevMode() // environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
