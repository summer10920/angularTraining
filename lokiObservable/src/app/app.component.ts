import { UserService } from './user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userActivated = false;

  constructor(
    private UserService: UserService
  ) { }

  ngOnInit() {
    this.UserService.activateEmitter.subscribe(res => this.userActivated = res);
  }
}
