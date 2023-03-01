import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form);
    let name = form.value.username;
    let email = form.value.email;
    console.log(name,email);
  }

}
