import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-banner',
  templateUrl: './button-banner.component.html',
  styleUrls: ['./button-banner.component.css']
})
export class ButtonBannerComponent implements OnInit {
  batch:string = '';
  count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateValue(){
    this.count++;
    console.log(this.count);
    if(this.count == 5){
      this.batch = 'Silver';
    }else if(this.count == 10){
      this.batch = 'Gold';
    }else if(this.count == 20){
      this.batch = 'Platinum';
    }
  }

}
