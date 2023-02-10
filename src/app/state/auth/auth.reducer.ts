import { createReducer, on } from "@ngrx/store";
import { login } from "./auth.actions";

export const initialState: Readonly<any> = {
    isLoggedin: false,
    username: null,
    password: null
};

export const authenticationReducer = createReducer(
    initialState,
    on(login, (state, {user}) => ({isLoggedin: true, ...user}))
);