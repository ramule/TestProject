import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService, private router: Router) {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('', Validators.required)
  });

  ngOnInit() {}

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get salary() {
    return this.form.get('salary');
  }

  onSubmit() {
    console.log('form submitted');
    this.empService.addEmployee(
      this.name.value,
      this.email.value,
      this.salary.value
    );
    window.alert('Employee added successfully');
    this.router.navigate(['/display']);
  }

}
