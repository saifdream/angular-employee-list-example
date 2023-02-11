import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { login } from '../state/auth/auth.actions';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  hide = true;

  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/), 
      // Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/), 
      // Validators.minLength(8)
    ])
  });

  constructor(private store: Store<AppState>, private _snackBar: MatSnackBar, private _route: Router) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  submit() {
    console.log(this.form.valid)
    if (this.form.valid) {
      console.log(this.form.value);
      this.store.dispatch(login({user: this.form.value}));
      localStorage.setItem("auth", JSON.stringify(this.form.value));
      this.openSnackBar("Login successfully", "Close");
      this._route.navigate(["/employees"]);
    }
  }
}
