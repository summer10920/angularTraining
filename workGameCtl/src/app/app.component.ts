import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  argsOdd: number[] = [];
  argsEven: number[] = [];
  onGetCount(arg: number) {
    if (arg % 2 === 0) this.argsEven.push(arg);
    else this.argsOdd.push(arg);
  }
}
