import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

 @ViewChild('f') loginForm:NgForm;
 defualtQuestion:string = 'superhero';
 answer:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm);
    let name = this.loginForm.value.username;
    let email = this.loginForm.value.email;
    console.log(name,email);
  }

}
