import { Employee } from "../model/employee.model";

export interface AppState {
    auth: any,
    employees: Array<Employee>
}