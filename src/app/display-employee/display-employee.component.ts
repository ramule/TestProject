import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  isPresent: boolean = false;
  dataOfEmployees: any = [];
  myArray: any = [];
  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.dataOfEmployees = this.empService.myArr;
    if (this.dataOfEmployees.length > 0) {
      this.isPresent = true;
    }
  }

}
