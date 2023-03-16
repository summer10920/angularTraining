import { LogTestService } from './log-test.service';
// import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
// import { RecipesModule } from './recipes/recipes.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
// import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AuthComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // RecipesModule,
    // ShoppingListModule,
    SharedModule,
    CoreModule,
    // AuthModule
  ],
  bootstrap: [AppComponent],
  // providers: [LogTestService]
})
export class AppModule { }
