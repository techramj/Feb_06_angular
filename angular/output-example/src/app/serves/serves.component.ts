import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-serves',
  templateUrl: './serves.component.html',
  styleUrls: ['./serves.component.css']
})
export class ServesComponent implements OnInit {

  serverName:string = '';

  servers:{id:number, name:string, status:string}[] = [
    {id:1, name:'DB Server', status:'Online'},
    {id:2, name:'Currency Server', status:'Offline'},
    {id:3, name:'Currency Exchange Server', status:'Offline'},
    {id:4, name:'Audit Server', status:'Offline'},
    {id:5, name:'UI Server', status:'Online'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addServer(){
    let id = this.servers.length + 1;
    let name = this.serverName;
    let status = Math.random()>0.7?'Online':'Offline';
    let server = {id,name,status};
    this.servers.push(server);
  }

}
