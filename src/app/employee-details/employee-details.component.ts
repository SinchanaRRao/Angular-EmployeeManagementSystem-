import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})

export class EmployeeDetailsComponent implements OnInit {

  index: number=this.employeeService.index;
  // = this.employeeService.index;
  employees: any[] = this.employeeService.getEmployees();

  constructor(public employeeService: EmployeeServiceService,
     private router: Router,
     private route:ActivatedRoute,) {
  }

  
  ngOnInit(): void {
   // const id = +this.route.snapshot.paramMap.get('id');
   // this.index = this.employeeService.getEmployeeByIndex(id);
  //  this.index = this.employeeService.index;
   // this.employees = this.employeeService.getEmployees();
  }

  goToEmployeeList() {
    this.router.navigate(['employees']);
  }
  
}

  /*
  employee;
  id:number;


  constructor(
    private employeeService: EmployeeServiceService,
   // private router: Router,
   private route: ActivatedRoute,
  //  private location:Location,
    private ActRoute: ActivatedRoute,
    private formBuilder: FormBuilder
    ){}


  ngOnInit(): void {
      this.employee=this.formBuilder.group(
        {
          id:new FormControl(),
          name:new FormControl(), 
          location:new FormControl(),
          email:new FormControl(),
          mobile:new FormControl(),
        }
      );

   //   this.id = this.ActRoute.snapshot.params['id'];
        
   this.employee=this.employeeService.getEmployeeById(this.id);
    // const id = +this.route.snapshot.paramMap.get('id');
     //   console.log(id);
    //    this.employee= this.employeeService.getEmployeeById(id);
      };

        getEmployee(){
        const id = +this.route.snapshot.paramMap.get('id');
        console.log("inside getemployee emp-details"+id);
        this.employee= this.employeeService.getEmployeeById(id);
         return this.employee;
      }  

    }

  
  /*

      ngOnInit(): void {

        this.employee = this.formBuilder.group({
    
          id: new FormControl(),  
          name: new FormControl(),   
         location: new FormControl(),
          email: new FormControl(),
          mobile:new FormControl()
    
        }); 
    
    
     this.id = this.ActRoute.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe((data) => {
    
          this.employee = data;
    
        });
    }
    
  */
     
  