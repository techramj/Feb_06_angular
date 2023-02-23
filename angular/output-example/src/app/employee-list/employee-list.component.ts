import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any =[];

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(){
    return this.empService.getEmployees().subscribe((data:{})=>{
      this.employees = data;
    });
  }

  deleteEmp(id:any){
    if(window.confirm('Do you want to delele ?')){
      this.empService.deleteEmployee(id).subscribe((data:{})=>{
         this.loadEmployees();
      });
    }
  }

}
