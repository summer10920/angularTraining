import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListsAction from './store/shopping-list.action';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(
    private slService: ShoppingListService,
    private loggingService: LoggingService,
    // private store: Store<{ ShoppingListKey: { ingredients: Ingredient[] } }> // 規劃初始屬性
    private store: Store<fromShoppingList.AppState> // 重點
  ) { }

  ngOnInit() {
    this.ingredients = this.store.select('ShoppingListKey'); //指定哪個store底下的key存回到本地屬性

    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );

    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListsAction.StartEdit(index));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}