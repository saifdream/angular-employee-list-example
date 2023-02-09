import { createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/model/employee.model";
import { retrivedEmployeeList } from "./employee-list.actions";

export const initialState: ReadonlyArray<Employee> = [];

export const employeeListReducer = createReducer(
    initialState,
    on(retrivedEmployeeList, (state, {employeeList}) => employeeList)
);