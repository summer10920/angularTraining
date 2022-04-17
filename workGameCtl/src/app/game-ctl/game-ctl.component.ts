import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-ctl',
  templateUrl: './game-ctl.component.html',
  styleUrls: ['./game-ctl.component.css']
})
export class GameCtlComponent {
  @Output() count = new EventEmitter<number>();
  lastNum = 0;
  intervalKey: any;

  bool: boolean = false;

  onGameStart() {
    this.bool = !this.bool;
    this.intervalKey = setInterval(() => {
      this.count.emit(this.lastNum + 1);
      this.lastNum++;
    }, 1000);

  }
  onGamePause() {
    this.bool = !this.bool;
    clearInterval(this.intervalKey);
  }
}
