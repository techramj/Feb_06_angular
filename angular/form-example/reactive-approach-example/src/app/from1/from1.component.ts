import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-from1',
  templateUrl: './from1.component.html',
  styleUrls: ['./from1.component.css']
})
export class From1Component implements OnInit {

  singupform: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.singupform = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email' : new FormControl(null,[Validators.required, Validators.email])
    });
  }

  onSubmit(){
      console.log(this.singupform);
  }

}
