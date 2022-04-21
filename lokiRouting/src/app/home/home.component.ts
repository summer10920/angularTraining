import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';//※重點

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private lokiRouter: Router,
    private authService: AuthService //※重點
  ) { }

  ngOnInit() {
  }

  loadServers(id: number) {  //※重點
    // this.lokiRouter.navigate(['/servers']);
    this.lokiRouter.navigate(
      ['/servers', id, 'edit'],
      {
        queryParams: {
          allowEdit: 1
        },
        fragment: "loading"
      }
    );
  }

  onLogin() { //※重點
    this.authService.login();
  }
  onLogout() { //※重點
    this.authService.logout();
  }
}
