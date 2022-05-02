import { Ingredient } from './../../shared/ingredient.model';
import { Action } from '@ngrx/store';
export const ADD_INGREDIENT = 'ADD_INGREDIENT'; //規劃單筆常數
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'; //規劃多筆修改常數
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT'; //規劃修改
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'; //規劃刪除
export const START_EDIT = 'START_EDIT'; //編輯開始
export const STOP_EDIT = 'STOP_EDIT'; //編輯停止

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: Ingredient) {
  }
}

export class AddIngredients implements Action { //多筆修改用
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[]) {
  } //改成初始屬性
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: { index: number, ingredient: Ingredient }) {
  }
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
  constructor(public payload: number) {
  }
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload: number) {
  }
}
export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type ShoppingListsActions =
  AddIngredient |
  AddIngredients |
  UpdateIngredient |
  DeleteIngredient |
  StartEdit |
  StopEdit;