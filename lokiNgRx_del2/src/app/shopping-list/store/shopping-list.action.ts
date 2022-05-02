import { Ingredient } from './../../shared/ingredient.model';
import { Action } from '@ngrx/store';
export const ADD_INGREDIENT = 'ADD_INGREDIENT'; //規劃常數

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  payload: Ingredient;
}