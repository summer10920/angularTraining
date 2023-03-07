import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(
    private UserService: UserService
  ) {
    this.activatedSub = this.UserService.activateEmitter.subscribe(res => this.userActivated = res);
  }

  ngOnInit() {
    // this.activatedSub = this.UserService.activateEmitter.subscribe(res => this.userActivated = res);
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
