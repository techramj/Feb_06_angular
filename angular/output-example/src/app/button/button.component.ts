import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() aButton:EventEmitter<void> = new EventEmitter<void>();

  @Input("buttonCount") count:number =0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickButtonB(){
    this.aButton.emit();
  }

}
