import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})



export class CreateEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  formdata : any;
  locations : string[]=['Bangalore','Chennai','Pune','Hyderabad'];
  selectedLocation: string;

  ngOnInit(): void {
   XPathExpression
    this.formdata=new FormGroup(
      {
       name:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]{3,}")])), 
       location:new FormControl(""),
       email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
       mobile:new FormControl("",Validators.compose([Validators.required,Validators.pattern('^[0-9]{10}$')])),
      });
  }

  constructor(
    private router: Router,
    private employeeService: EmployeeServiceService
  ) {}

  onSubmit(employee:Employee) {
    employee.location = this.selectedLocation;
    this.employeeService.addEmployee(employee); 
    this.router.navigate(['/employees']);
  }
}
