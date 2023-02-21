import { Component, OnInit ,
  OnDestroy, OnChanges, Input,
  SimpleChanges

} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  @Input() count:number= 0;

  constructor() {
    console.log('Constructor called!!!');
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Called!!!!', changes);
  }

  ngOnInit(): void {
     console.log('ngOnInit called!!!!!!');
  }

  ngDoCheck(){
    console.log('ngDoCheck called!!!!');
  }

  ngOnDestroy(){
    console.log('ngOnDestry called!!!');
  }

}
