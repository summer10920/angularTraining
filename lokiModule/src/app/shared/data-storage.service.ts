import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private AuthService: AuthService,
  ) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    // this.AuthService.userSbj.pipe(
    //   take(1),
    //   exhaustMap(user => {
    //     return this.http
    //       .put(
    //         'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
    //         recipes,
    //         { params: new HttpParams().set('auth', user.token) }
    //       )
    //   })
    // ).subscribe(response => console.log(response));

    this.http
      .put(
        'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes,
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    // return this.AuthService.userSbj.pipe(
    //   take(1),
    //   exhaustMap(user => {
    //     return this.http
    //       .get<Recipe[]>(
    //         'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
    //         { params: new HttpParams().set('auth', user.token) }
    //       )
    //   }),
    //   map(recipes => {
    //     return recipes.map(recipe => {
    //       return {
    //         ...recipe,
    //         ingredients: recipe.ingredients ? recipe.ingredients : []
    //       };
    //     });
    //   }),
    //   tap(recipes => this.recipeService.setRecipes(recipes))
    // );
    return this.http
      .get<Recipe[]>(
        'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}
