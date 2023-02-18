import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-message',
  templateUrl: './button-message.component.html',
  styleUrls: ['./button-message.component.css']
})
export class ButtonMessageComponent implements OnInit {
  count:number = 0;
  message:string = '';
  constructor() { }

  ngOnInit(): void {
  }


  updateCount(){
    this.count = this.count +1;
  }

  updateMessage(){
    if(this.count==5){
      this.message = 'Congratualtion you clicked 5 times. You will soon get the Silver button tag.';
    }else if(this.count==10){
      this.message='Congratualtion you clicked 10 times. You will soon get the Golden button tag.'
    }else if(this.count == 20){
      this.message = 'Congratualtion you clicked 20 times. You will soon get the Platinum button tag.'
    }
  }

}
