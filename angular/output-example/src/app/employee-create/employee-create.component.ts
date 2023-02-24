import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() emp = {name:'', email:'', salary:0};

  constructor(public empService:EmployeeService,
    public router:Router
    ) { }

  ngOnInit(): void {

  }

  addEmployee(){
    this.empService.addEmployee(this.emp).subscribe((data:{})=>{
        this.router.navigate(['/emp-list'])
      });
      
  }

}
