import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Authentication Auth] Login',
    props<{user: Readonly<object>}>()
);

export const logout = createAction(
    '[Authentication Auth] Logout',
    props<any>()
);