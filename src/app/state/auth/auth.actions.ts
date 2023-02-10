import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Authentication Auth] Login',
    props<{user: Readonly<object>}>()
);