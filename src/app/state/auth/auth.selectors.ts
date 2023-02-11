import { createSelector } from "@ngrx/store";
import { User } from "src/app/model/user.model";
import { AppState } from "../app.state";

export const selectAuth = createSelector(
    (state: AppState) => state.auth,
    (auth: User) => auth
);