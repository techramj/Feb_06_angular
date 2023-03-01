import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {

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

   suggestUsername1(){
    const suggestedUsername = 'superuser111';
    this.loginForm.setValue({
      primaryData:{
        'username':suggestedUsername,
        'email':this.loginForm.value.primaryData.email
      },
      'question':'',
      'answer':'',
      'gender':'male'
    });
   }


   suggestUsername(){
    const suggestedUsername = 'superuser111';
    this.loginForm.form.patchValue({
      primaryData:{
        'username':suggestedUsername,
      }
    });
   }


}
