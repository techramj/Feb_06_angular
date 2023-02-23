import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee-service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() emp = {name:'', email:'', salary:0};

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {

  }

  addEmployee(emp:any){
    this.empService.addEmployee(this.emp).subscribe((data:{})=>{
      //navigate to employee detail
    });
  }

}
