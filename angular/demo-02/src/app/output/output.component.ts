import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Output() buttonA:EventEmitter<void> = new EventEmitter();
  @Output() buttonB:EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickA(){
    console.log("A button click");
    this.buttonA.emit();
  }

  onClickB(){
    console.log("A button click");
    this.buttonB.emit();
  }

}
