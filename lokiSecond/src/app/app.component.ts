import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestName', content: 'TestString!' }
  ];

  onAddServerDone(serverData: { sName: string, sContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.sName,
      content: serverData.sContent
    });
  }

  onAddBlueprintDone(serverData: { sName: string, sContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.sName,
      content: serverData.sContent
    });
  }
  //只對陣列指定處修改值，因為我們要改變值而不是對serverElements陣列重寫。
  onChangeOne() {
    this.serverElements[0].name = 'Test by OnChanges again';
  }
  onKillOne() {
    this.serverElements.splice(0, 1);
  }
}