import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: { id: number, name: string };

  constructor(private lokiRoute: ActivatedRoute) { }

  ngOnInit() {

    this.user = {
      id: this.lokiRoute.snapshot.params['id'],
      name: this.lokiRoute.snapshot.params['name']
    }

    this.lokiRoute.params.subscribe((obsParams: Params) => {
      this.user = {
        id: obsParams.id,
        name: obsParams.name
      }
    });
    //console.log(this.user); //try http://localhost:4200/users/3/loki
  }

}
