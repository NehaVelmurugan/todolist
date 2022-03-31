import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeInterface } from './employeeFormat';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = '/assets/data/employee.json';

  getEmployee():Observable<EmployeeInterface[]>
  {
    return this.http.get<EmployeeInterface[]>(this.url)

  //  return [
  //     {id : 567, "Name" : "Anni", "Salary" : 100000000},
  //     {id : 587, "Name" : "Bevada", "Salary" :150000000},
  //     {id : 589, "Name" : "Mummy", "Salary" :1200000000},
  //     {id : 596, "Name" : "John", "Salary": 10000000},
  //     {id : "5F0", "Name" : "Acid", "Salary" :1200000}
  //   ];
  }
  constructor(private http : HttpClient) { }
}
