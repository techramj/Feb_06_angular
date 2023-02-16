import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-congrat-label',
  templateUrl: './congrat-label.component.html',
  styleUrls: ['./congrat-label.component.css']
})
export class CongratLabelComponent implements OnInit {
  @Input() contrgratCount:number = 0;
  message:string = '';
  constructor() { }

  ngOnInit(): void {
    if(this.contrgratCount==5){
      this.message = 'Congratualtion you clicked 5 times. You will soon get the Silver button tag.';
    }else if(this.contrgratCount==10){
      this.message='Congratualtion you clicked 10 times. You will soon get the Golden button tag.'
    }else if(this.contrgratCount == 20){
      this.message = 'Congratualtion you clicked 20 times. You will soon get the Platinum button tag.'
    }
  }

}
