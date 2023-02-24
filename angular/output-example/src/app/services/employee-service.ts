import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string ="http://localhost:3000";

  constructor(private http:HttpClient) { }

  httpOptions ={
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  };

  //fetch all employees
  getEmployees():Observable<Employee>{
    return this.http.get<Employee>(this.url+"/employees");
  }

  //fetch by id
  getEmployee(id:any):Observable<Employee>{
    return this.http.get<Employee>(this.url+"/employees/"+id);
  }

  //add employees
  addEmployee(employee:any):Observable<Employee>{
    return this.http.post<Employee>(this.url+'/employees',
    JSON.stringify(employee),
    this.httpOptions
    );
  }

  //update employees
  updateEmployee(id:any, employee:any):Observable<Employee>{
    return this.http.put<Employee>(this.url+"/employees/"+id,
    JSON.stringify(employee),
    this.httpOptions
    )
  }

  //delete employee
  deleteEmployee(id:any):Observable<Employee>{
    return this.http.delete<Employee>(this.url+"/employees/"+id);
  }


}
