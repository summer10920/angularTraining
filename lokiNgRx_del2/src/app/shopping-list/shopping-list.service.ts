import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  //獲取食材清單
  getIngredients() {
    return this.ingredients.slice();
  }

  //獲取指定索引單一食材
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  //增加單一食材
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  //增加多筆食材
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  //增加更新指定食材
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  //刪除更新指定食材
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
