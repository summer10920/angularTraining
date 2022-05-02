import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListsAction from '../store/shopping-list.action'; //重點
import * as fromShoppingList from '../store/shopping-list.reducer';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private slService: ShoppingListService,
    // private store: Store<{ ShoppingListKey: { ingredients: Ingredient[] } }> // 規劃初始屬性
    private store: Store<fromShoppingList.AppState> // 重點
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('ShoppingListKey').subscribe(startData => { //重點
      if (startData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = startData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
      else this.editMode = false;
    });
    // this.subscription = this.slService.startedEditing
    //   .subscribe(
    //     (index: number) => {
    //       this.editedItemIndex = index;
    //       this.editMode = true;
    //       this.editedItem = this.slService.getIngredient(index);
    //       this.slForm.setValue({
    //         name: this.editedItem.name,
    //         amount: this.editedItem.amount
    //       })
    //     }
    //   );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.slService.updateIngredient(this.editedItemIndex, newIngredient);

      this.store.dispatch(new ShoppingListsAction.UpdateIngredient({
        index: this.editedItemIndex,
        ingredient: newIngredient
      }
      ));
    } else {
      // this.slService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListsAction.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListsAction.StopEdit());  //重點
  }

  onDelete() {
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListsAction.DeleteIngredient(this.editedItemIndex));

    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  //重點
    this.store.dispatch(new ShoppingListsAction.StopEdit()); //重點
  }

}
