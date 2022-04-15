import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  .addWhite{
    color:white;
  }
  `]
})
export class AppComponent {
  logs = [];
  showOn = false;

  onToggleButton() {
    this.showOn = !this.showOn;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
