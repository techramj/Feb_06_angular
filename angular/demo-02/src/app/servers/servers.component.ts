import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  componentName:string = 'Servers';
  allowAddServer:boolean = false;
  serverName:string = 'Default'

  constructor() {
    setTimeout(()=>{
      this.allowAddServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverName = 'default servername';
  }

  onUpdateServerName(event:Event){
     this.serverName = (<HTMLInputElement>(event.target)).value;
  }

  

}
