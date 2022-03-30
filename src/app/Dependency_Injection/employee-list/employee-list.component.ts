import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    public employees : any;
  // public employees = [
  //   {id : 567, "Name" : "Anni", "Salary" : 100000000},
  //   {id : 587, "Name" : "Bevada", "Salary" :150000000},
  //   {id : 589, "Name" : "Mummy", "Salary" :1200000000},
  //   {id : 596, "Name" : "John", "Salary": 10000000},
  //   {id : "5F0", "Name" : "Acid", "Salary" :1200000}
  // ];

  constructor(private empService:EmployeeServiceService ) { }

  ngOnInit(): void {
    // this.employees = this.empService.getEmployee();
    this.empService.getEmployee()
    .subscribe((data) => this.employees = data);
  }

}
