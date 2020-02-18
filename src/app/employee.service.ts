import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public myArr: any = [];
  public empData: any[];
  constructor() {
    console.log(this.myArr);
   }

  addEmployee(name: string, email: string, salary: number) {

    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Salary', salary.toString());

    this.empData = [{
      Name: localStorage.getItem('Name'),
      email: localStorage.getItem('Email'),
      salary: localStorage.getItem('Salary')
    }];

    this.myArr.push(this.empData);
    console.log('Array data on service', this.myArr);

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(key, value);
    }
  }
}
