import { Router } from '@angular/router';//※重點
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private lokiRouter: Router) { }//※重點

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
}
