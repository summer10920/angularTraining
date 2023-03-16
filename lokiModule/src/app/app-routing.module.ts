import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, //fore es2015
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }, //fore es2015
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }, //fore es2015
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
