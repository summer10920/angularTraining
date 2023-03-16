import { LogTestService } from './log-test.service';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   loadedFeature = 'recipe';

//   onNavigate(feature: string) {
//     this.loadedFeature = feature;
//   }
// }
export class AppComponent implements OnInit {
  constructor(
    private AuthService: AuthService,
    private LogTestService: LogTestService
  ) { }

  ngOnInit(): void {
    this.AuthService.autoSignIn();
    this.LogTestService.printLog('AppComponent');
  }
}
