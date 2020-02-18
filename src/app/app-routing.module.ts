import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';


const routes: Routes = [
  {path: '', component: AddEmployeeComponent},
  {path: 'add', component: AddEmployeeComponent},
  {path: 'display', component: DisplayEmployeeComponent},
  {path: 'search', component: SearchEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
