import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectEmployeeForm = createSelector(
    (state: AppState) => state.employeeForm,
    (employeeForm: object) => employeeForm
);