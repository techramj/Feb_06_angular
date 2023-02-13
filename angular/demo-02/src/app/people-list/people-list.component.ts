import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:{name:string, age:string,nationality:string}[] =[
    {name:'Jack', age:'22', nationality:'UK'},
    {name:'Sam', age:'27', nationality:'US'},
    {name:'Sameer', age:'22', nationality:'Indian'},
  ];

  showPeople:boolean = this.people.length==0?false:true;
  constructor() { }

  ngOnInit(): void {
  }

}
