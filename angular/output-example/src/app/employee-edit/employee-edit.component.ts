import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  emp:any = {};
  constructor(
    public route:ActivatedRoute,
    public router:Router,
    public empService:EmployeeService
  ) { }

  ngOnInit(): void {
    console.log('ng init called, id:', this.id);
    this.empService.getEmployee(this.id)
    .subscribe((data)=>{
      this.emp = data;
    })
  }

  updateEmployee(){
    if(window.confirm('Do you want to update?')){
      this.empService.updateEmployee(this.id, this.emp)
      .subscribe(data =>{
        this.router.navigate(['/emp-list'])
      });
    }
  }

}
