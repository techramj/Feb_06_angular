import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name:string = 'Jack';
  @Input() age:string = '20';
  @Input("origin") nationality = 'Indian';

  constructor() { }

  ngOnInit(): void {
  }

}
