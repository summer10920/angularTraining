import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core'; //宣告 Output 來源

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // newServerName = '';
  // newServerContent = '';  //也用不到了
  @Output('sLoki') serverCreated = new EventEmitter<{ sName: string, sContent: string }>();
  @Output('bLoki') blueprintCreated = new EventEmitter<{ sName: string, sContent: string }>();

  @ViewChild('inputServerContent') inputServerContent: ElementRef;

  onAddServer(inputEl: HTMLInputElement) {
    // console.log(this.inputServerContent);
    // 是ElementRef物件

    //因此我們可以利用this.inputServerContent.nativeElement.value作為我們來源值
    this.serverCreated.emit({
      sName: inputEl.value,
      // sContent: this.newServerContent
      sContent: this.inputServerContent.nativeElement.value
    });
  }

  onAddBlueprint(inputEl: HTMLInputElement) {

    this.blueprintCreated.emit({
      sName: inputEl.value,
      // sContent: this.newServerContent
      sContent: this.inputServerContent.nativeElement.value
    });
  }
}