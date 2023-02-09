import {createAction, props} from '@ngrx/store';
import { Employee } from 'src/app/model/employee.model';

export const addEmployee = createAction(
    '[Employee List] Add Employee',
    props<{employee: Employee}>()
);

export const retrivedEmployeeList = createAction(
    '[Employee List/API] Retrive Employee Success',
    props<{employeeList: ReadonlyArray<Employee>}>()
);