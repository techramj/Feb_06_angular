import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent implements OnInit {
  count:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  updateButtonCount(){
    this.count = this.count + 1;
  }

}
