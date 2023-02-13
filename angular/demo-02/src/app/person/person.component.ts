import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name:string = '';
  @Input() age:string = '';
  @Input("origin") nationality = '';

  constructor() { }

  ngOnInit(): void {
  }

}
