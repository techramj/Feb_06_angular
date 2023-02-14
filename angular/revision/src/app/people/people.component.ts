import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people:{name:string, age:string, nationality:string}[] =[
    {name:'Ritesh', age:'23' ,nationality:'Indian'},
    {name:'Udit', age:'22' ,nationality:''},
    {name:'Sam', age:'29' ,nationality:'US'},
    {name:'Jessica', age:'' ,nationality:'UK'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
