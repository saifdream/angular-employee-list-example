import { createSelector } from "@ngrx/store";
import { Employee } from "src/app/model/employee.model";
import { AppState } from "../app.state";

export const selectEmployees = createSelector(
    (state: AppState) => state.employees,
    (employees: Array<Employee>) => employees
);