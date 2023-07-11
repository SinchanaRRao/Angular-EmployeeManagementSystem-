import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';


import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: Employee[] = [];
  filterText = '';
  totalEmployees = 0;

  constructor(public employeeService: EmployeeServiceService,
      private router: Router) 
      {}

  ngOnInit(): void {
    this.employees=this.employeeService.getEmployees();
    this.filterEmployees();
  }


  filterEmployees(): void {
    if (this.filterText) {
      this.filteredEmployees = this.employees.filter((employee) =>
        employee.name.toLowerCase().startsWith(this.filterText.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees;
    }
    this.totalEmployees = this.filteredEmployees.length;
  }

    updateEmployee(id:number){
      this.router.navigate(['update-employee',id]);
    }



    deleteEmployee(id: number):void{
    this.employeeService.deleteEmployee(id);
    this.employeeService.getEmployees();
    }

  /*  eDetailsDisplay(employee:any){
      this.router.navigate(['employee-details']);
    } 
    */

    details(e:any){
      this.employeeService.index=this.employeeService.employees.indexOf(e);
      this.router.navigate(['employees']);
    }

    viewEmployee(e:any) {
      this.employeeService.index=this.employeeService.employees.indexOf(e);
     // console.log('view id =' + id);
      this.router.navigate(['employee-details']);
  
    }
  
}
