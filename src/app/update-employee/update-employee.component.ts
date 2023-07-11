
import { Component, OnInit } from '@angular/core';

import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit{

  updateForm: any;
  employee: Employee;
  locations : string[]=['Bangalore','Chennai','Pune','Hyderabad'];
  selectedLocation: string;
 
  errorMsg: string ='Employee update failed';
  successMsg: string ='Employee updated!';
  id: number;


  constructor(
    private employeeService:EmployeeServiceService,
    private router: Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder

  )
  {}

  
  ngOnInit(): void {
   
    this.updateForm=new FormGroup(
      {
       name:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]{3,}")])), 
       location:new FormControl(""),
       email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
       mobile:new FormControl("",Validators.compose([Validators.required,Validators.pattern('^[0-9]{10}$')])),
      
      });
    

 
    const id = +this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployeeById(id);
    console.log('employee id' + id);
   // console.log('employee location' + this.employee.location);
    //console.log('employee email' + this.employee.email);
   // console.log('employee mobile' + this.employee.mobile);
    this.selectedLocation = this.employee.location; // Set the selected location for the employee

  }

  onSubmit(employee:Employee) {
    console.log("inside OnSubmit empId"+employee.id);
    
    employee.location = this.selectedLocation;
    this.employeeService.updateEmployee(employee); 
    this.router.navigate(['/employees']);
  }
  

}











