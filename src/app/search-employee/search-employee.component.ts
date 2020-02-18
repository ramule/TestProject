import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  dataOfEmp: any = [];
  filteredDataOfEmployees: any = [];
  public data: any = [];
  constructor(private empService: EmployeeService, private router: Router) {
    this.data.operator_type = '';
    this.data.salary = '';
  }

  ngOnInit() {}

  submit(data) {
    this.dataOfEmp = this.empService.myArr;
    console.log('array data on search page', this.dataOfEmp);
    if (data.salary > 0) {
      console.log(data.salary);
      if (data.operator_type === 'gt') {
        this.dataOfEmp.forEach(element => {
          if (element[0].salary > data.salary) {
            this.filteredDataOfEmployees.push(element);
          }
        });
      }

      if (data.operator_type === 'lt') {
        this.dataOfEmp.forEach(element => {
          if (element[0].salary < data.salary) {
            this.filteredDataOfEmployees.push(element);
          }
        });
      }

      if (data.operator_type === 'eq') {
        this.dataOfEmp.forEach(element => {
          if (element[0].salary == data.salary) {
            this.filteredDataOfEmployees.push(element);
          }
        });
      }
    }
  }
}
