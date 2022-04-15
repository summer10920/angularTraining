import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .online{
      color:white
    }
  `]
})
export class ServerComponent {
  serverId: number = 999;
  serverState: string = "offline";

  constructor() {
    this.serverState = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerState() {
    return this.serverState;
  }
  getColor() {
    return this.serverState === 'online' ? 'green' : 'red'
  }
}