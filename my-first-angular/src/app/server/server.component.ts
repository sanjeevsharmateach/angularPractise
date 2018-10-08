import { Component } from "@angular/core";


@Component({selector:'app-server',
templateUrl:'./server.component.html'

})
export class ServerComponent{
serverId :string ="10";
status:string="on";


getServerStatus(){
    return this.status;
}
}