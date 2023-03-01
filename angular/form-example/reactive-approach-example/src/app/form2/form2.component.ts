import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  singupform: FormGroup;
  genders:string[] =['female','male'];

  constructor() { }

  ngOnInit(): void {
    this.singupform = new FormGroup({
      primaryData: new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email' : new FormControl(null,[Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('male')
    });
  }

  onSubmit(){
      console.log(this.singupform);
  }

}
