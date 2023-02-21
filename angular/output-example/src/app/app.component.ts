import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output-example';
  count:number = 0;
  showComponent:boolean = true;

  updateCount(){
    this.count ++;
  }

  onHideUnhide(){
    this.showComponent = !this.showComponent;
  }
}
