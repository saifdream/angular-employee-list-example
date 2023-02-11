import { Employee } from "../model/employee.model";

export interface AppState {
    auth: any,
    employeeForm: object,
    employees: Array<Employee>
}