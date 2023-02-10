import { createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/model/employee.model";
import { addEmployee, retrivedEmployeeList } from "./employee-list.actions";

export const initialState: ReadonlyArray<Employee> = [];

export const employeeReducer = createReducer(
    initialState,
    on(addEmployee, (state, {employee}) => {
        if(state.findIndex(emp => emp.phone === employee.phone) > -1) return state;
        return [...state, employee]
    }),
    on(retrivedEmployeeList, (state, {employees}) => employees),
);