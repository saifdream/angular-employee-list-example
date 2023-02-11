import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { login, logout } from './state/auth/auth.actions';
import { selectAuth } from './state/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee App';
  isLoading = false;
  isLoggedin = false;

  auth$ = this.store.pipe(select(selectAuth));

  constructor(private store: Store<AppState>, public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isLoading = false;
      }
    });

    this.auth$.subscribe(auth => {
      // console.log(auth); 
      if(auth.isLoggedin) this.isLoggedin = auth.isLoggedin;
    });
  }

  ngOnInit(): void {
    const auth = localStorage.getItem('auth');
    // console.log(auth)
    if(auth) {
      this.store.dispatch(login({user: JSON.parse(auth)}));
      this.router.navigate(["/employees"]);
    } else {
      this.router.navigate(["/"]);
    }
  }

  logout() {
    // console.log("logout")
    localStorage.removeItem("auth");
    this.store.dispatch(logout({}));
    this.isLoggedin = false;
    this.router.navigate(["auth"]);
  }
}
