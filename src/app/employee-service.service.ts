import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  index:number=0;
  employees: any[] = [
    {
      id: '1',
      name: 'Ram',
      location: 'Bangalore',
      email: 'ram@mail.com',
      mobile: '9867512345',
    },
    {
    id: '2',
      name: 'Raj',
      location: 'Chennai',
      email: 'raj@mail.com',
      mobile: '7867534521',
    },
    {
    id: '3',
      name: 'Vinay',
      location: 'Pune',
      email: 'vinay@mail.com',
      mobile: '9975287450',
    },
  ];

  getEmployees(): any[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    const newId = this.generateNewId();
    employee.id = newId;
    this.employees.push(employee);
  }

  private generateNewId(): number {
   const maxId = this.employees.reduce((max,employee)=>Math.max(max,employee.id),0);
   return maxId+1;
  }

  deleteEmployee(id: number): void {
    const index = this.employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  updateEmployee(employee: Employee) {
   const index = this.employees.findIndex(
      (employee) => employee.id === employee.id
    ); 
  /*  const index = this.employees.indexOf(employee);
    this.employees[index]=employee; */
        
   if (index !== -1) {
      this.employees[index] = {...employee};
    }  
    console.log("employeeService update empId:"+employee.id);

    return employee;
    
  
  }

  getEmployeeById(id: number): Employee {
    const employees = this.getEmployees();
    return employees.find((employee) => employee.id === id);
  }

  
  
  getEmployeeByIndex(id:number){
    return this.employees.indexOf(this.employees[id]);
  } 

  constructor() {}
}
