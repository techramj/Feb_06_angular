import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let promise = new Promise((resolve,error)=>{
      console.log("promise created");
      setTimeout(() => {
        resolve('Task1 completed!!');
        resolve('Task2 completed!!');
        resolve('Task3 completed!!');
      }, 5000);

    });

    promise.then(data=>{
      console.log("Data: "+data);
    }).catch(error=>{
      console.log("error!!!!: "+error);
    });


    let promise1 = new Promise((resolve,error)=>{

      let num = Math.random();
      console.log('num =',num);
      if(num<0.5){
        resolve('Task completed');
      }else{
        error('Task not completed, due to some error!');
      }
    });

    promise1.then(data=>{
      console.log(data);
    }).catch(error=>{
      console.log(error);
    })

  }



}
