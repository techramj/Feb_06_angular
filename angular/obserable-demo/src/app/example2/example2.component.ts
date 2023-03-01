import { Component, OnInit , OnDestroy} from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit, OnDestroy {
  subscription:Subscription;

  constructor() { }

  ngOnInit(): void {
    let obserable = new Observable((subscribe)=>{
      console.log("obserable called");
      setTimeout(() => {
        subscribe.next('Task1 completed');
        subscribe.next('Task2 completed');
        subscribe.next('Task3 completed');
      }, 5000);
    });

    /*obserable.subscribe(data=>{
      console.log(data);
    })
    */


    let obserable1 = new Observable((subscribe)=>{

      let num = Math.random();
      console.log('num =',num);
      if(num<0.9){
        subscribe.next('next task completed');
      }else if(num<=0.8){
        subscribe.error('Task not completed, due to some error!');
      }else{
        subscribe.complete();
      }
    });

    /*obserable1.subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log('error');
    },
    ()=>{
      console.log('task completed');
    });
    */



  }

  ngOnDestroy(): void {
    //unsubscribe the observer
  }

}
