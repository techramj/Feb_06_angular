import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {


  singupform: FormGroup;
  genders:string[] =['female','male'];
  forbiddenUsername:string[] = ['raj','rajesh','mac'];


  constructor() { }

  ngOnInit(): void {
    this.singupform = new FormGroup({
      primaryData: new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
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

  forbiddenNames(control:FormControl) : {[key:string] :boolean} | null{
    if(this.forbiddenUsername.indexOf(control.value) != -1){
      return {'nameIsForbidden':true};
    }
    return null;
  }
}
