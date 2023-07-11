import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { EmployeeServiceService } from './employee-service.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { OrderByPipe } from './order-by.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeListComponent,
    OrderByPipe,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent
 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule  
  ],
  
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
