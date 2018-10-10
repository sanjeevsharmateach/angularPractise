import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowServer:boolean =false;
 serverstatus:string="server wasnt clicked";

  constructor() { }

  ngOnInit() {
  }
onClick()
{
  this.serverstatus="server was created";
}
}
