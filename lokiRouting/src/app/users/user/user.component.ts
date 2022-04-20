import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number, name: string };

  subscriptionKey!: Subscription;

  constructor(private lokiRoute: ActivatedRoute) { }

  ngOnInit() {

    this.user = {
      id: this.lokiRoute.snapshot.params['id'],
      name: this.lokiRoute.snapshot.params['name']
    }

    this.subscriptionKey = this.lokiRoute.params.subscribe((obsParams: Params) => {
      this.user = {
        id: obsParams.id,
        name: obsParams.name
      }
    });
  }
  ngOnDestroy(): void {
    this.subscriptionKey.unsubscribe();
  }
}
