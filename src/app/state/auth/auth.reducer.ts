import { createReducer, on } from "@ngrx/store";
import { login, logout } from "./auth.actions";

export const initialState: Readonly<any> = {
    isLoggedin: false,
    username: null,
    password: null
};

export const authenticationReducer = createReducer(
    initialState,
    on(login, (state, {user}) => ({isLoggedin: true, ...user})),
    on(logout, (state, action) => ({isLoggedin: false, username: null, password: null})),
);