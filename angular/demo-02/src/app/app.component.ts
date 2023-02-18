import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-02';



  greetMorning(){
    alert('Good Morning');
  }

  greetEvening(){
    alert('Good Evening');
  }
}
