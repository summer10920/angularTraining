import { WelcomeComponent } from './welcome/welcome.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [WelcomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { }
