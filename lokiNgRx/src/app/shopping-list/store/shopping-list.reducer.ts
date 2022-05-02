// import { Action } from '@ngrx/store';
import * as ShoppingListsAction from './shopping-list.action';
import { Ingredient } from '../../shared/ingredient.model';

export interface State {  //State本身的型別
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number
}

export interface AppState {
  ShoppingListKey: State;
}

const initialState: State = {  //State本身的初始資料，且可提供State為該強型別
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function ShoppingListReducer(
  state: State = initialState, //可提供State為該強型別
  action: ShoppingListsAction.ShoppingListsActions
) {
  switch (action.type) {
    case ShoppingListsAction.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListsAction.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListsAction.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index]; //從state找到原本修改前的食材
      const updatedIngredient = { //欲更新的食材資料細節，透過解構讓舊新覆蓋。
        ...ingredient,
        ...action.payload.ingredient
      };
      const updatedIngredients = [...state.ingredients]; //欲更新的食材陣列
      updatedIngredients[action.payload.index] = updatedIngredient; //欲更新的食材陣列找到該index覆蓋該食材細節

      return { //從舊state去覆蓋該食材陣列
        ...state,
        ingredients: updatedIngredients
      };
    case ShoppingListsAction.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((item, idx) => idx != action.payload)
        //直接使用filter產生少了此index的新陣列
      };
    case ShoppingListsAction.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] }
      };
    case ShoppingListsAction.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };


    default: //沒有找到任何action則直接回傳原state
      return state;
  }
}