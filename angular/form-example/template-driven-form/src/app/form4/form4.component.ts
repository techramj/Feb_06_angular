import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

  @ViewChild('f') loginForm:NgForm;
 defualtQuestion:string = 'superhero';
 answer:string = '';
 genders:string[] = ['female','male'];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm);
    let name = this.loginForm.value.primaryData.username;
    let email = this.loginForm.value.primaryData.email;
    console.log(name,email);
  }

}
