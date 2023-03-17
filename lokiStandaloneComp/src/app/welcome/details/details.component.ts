import { HighlightDirective } from './../../shared/highlight.directive';
// import { SharedModule } from './../../shared/shared.module';
import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';

@Component({
  standalone: true,
  // imports: [SharedModule],
  imports: [HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) { }

  onClick() {
    this.analyticsService.registerClick();
  }
}
