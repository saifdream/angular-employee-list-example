import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Employee } from '../model/employee.model';
import { AppState } from '../state/app.state';
import { resetEmployeeData, storeEmployeeData } from '../state/employee-form/employee-form.actions';
import { selectEmployeeForm } from '../state/employee-form/employee-form.selectors';
import { addEmployee } from '../state/employee-list/employee-list.actions';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class NewEmployeeComponent implements OnInit {
  employee: any = {
    firstName: "", 
    lastName: "", 
    phone: '', 
    gender: "", 
    dob: '', 
    skillName: "", 
    skillLevel: "", 
    experiemce: ""
  };
  employeeForm$ = this.store.pipe(select(selectEmployeeForm));
  maxDate: Date = new Date();
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(
    private store: Store<AppState>, 
    private _formBuilder: FormBuilder,
  ) { 
    this.employeeForm$.subscribe(employee => this.employee = employee);
  }

  init(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      dob: [null, Validators.required],
      phone: [null, [Validators.required, Validators.pattern(/^(?=.*\d).{11,11}$/)]],
      gender: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      skillName: ['', Validators.required],
      experience: ['', Validators.required],
      skillLevel: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.init();
    // this.store.dispatch(addEmployee({
    //   employee: {
    //     firstName: 'Abc',
    //     lastName: '',
    //     dob: new Date(),
    //     gender: 'M',
    //     phone: 556,
    //     skillName: '',
    //     skillLevel: '',
    //     experiemce: ''
    //   }
    // }));
  }

  submitPersonalInfo(): void {
    if (this.firstFormGroup.valid) {
      // console.log(this.firstFormGroup.value);
      this.store.dispatch(storeEmployeeData({data: this.firstFormGroup.value}));
    }
  }

  submitSkillInfo(): void {
    if (this.secondFormGroup.valid) {
      // console.log(this.secondFormGroup.value);
      this.store.dispatch(storeEmployeeData({data: this.secondFormGroup.value}));
    }
  }

  done(): void {
    console.log("Done")
    console.log({...this.firstFormGroup.value, ...this.secondFormGroup.value})
    this.addEmployee({...this.firstFormGroup.value, ...this.secondFormGroup.value})
  }

  addEmployee(employee: Employee): void {
    this.store.dispatch(addEmployee({employee}));
  }

  ngOnDestroy() {
    this.store.dispatch(resetEmployeeData({}));
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
  }
}
