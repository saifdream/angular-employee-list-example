import { createReducer, on } from "@ngrx/store";
import { resetEmployeeData, storeEmployeeData } from "./employee-form.actions";

export const initialState: Readonly<any> = {
    firstName: null,
    lastName: null,
    dob: null,
    phone: null,
    gender: null,
    skillName: null,
    skillLevel: null,
    experience: null
};

export const employeeFormReducer = createReducer(
    initialState,
    on(storeEmployeeData, (state, {data}) => {
        return {...state, ...data}
    }),
    on(resetEmployeeData, (state, action) => {
        return {...state, ...initialState}
    }),
);