import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

  singupform: FormGroup;
  genders:string[] =['female','male'];

  constructor() { }

  ngOnInit(): void {
    this.singupform = new FormGroup({
      primaryData: new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email' : new FormControl(null,[Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.singupform.get('hobbies')).push(control);
  }

  onSubmit(){
      console.log(this.singupform);
  }

  getHobbiesControl(){
    return (<FormArray>this.singupform.get('hobbies')).controls;
  }

}
