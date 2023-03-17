import { DetailsComponent } from './details/details.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [DetailsComponent],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent { }
