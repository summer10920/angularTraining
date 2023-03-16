import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { RecipeService } from './recipes/recipe.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    // DropdownDirective,
    // LoadingSpinnerComponent,
    // AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],
  // providers: [
  //   ShoppingListService,
  //   RecipeService, {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorService,
  //     multi: true
  //   }
  // ],
  bootstrap: [AppComponent],
  // entryComponents: [
  //   AlertComponent,
  // ]
})
export class AppModule { }
