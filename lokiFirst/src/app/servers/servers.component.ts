import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template:`
  //   <h1>hello world</h1>
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreatingState = 'No Server Create!!';
  serverName = '';
  serverList = ['test1', 'test2', 'test3']; //一開始有三組

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }
  onCreateServer() {
    this.serverCreatingState = 'Now Server Created!!';
    this.serverList.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    // console.log((<HTMLInputElement>event.target).value); //報錯，因為Event這個型別沒有 event.target 這樣的位置
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}