import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() id:number = 0;
  @Input() name:string = 'Server';
  @Input() status:string = 'Offline';

  constructor() {
    this.status = Math.random() >0.5?'Online':'Offline';
  }

  ngOnInit(): void {
  }

  getColor(){
    return this.status == 'Online'?'green':'red';
  }

}
