import {createAction, props} from '@ngrx/store';
import { Employee } from 'src/app/model/employee.model';

export const storeEmployeeData = createAction(
    '[Employee Store] Store Employee Data',
    props<{data: Readonly<any>}>()
);

export const resetEmployeeData = createAction(
    '[Employee Store] Reset Employee Data',
    props<any>()
);