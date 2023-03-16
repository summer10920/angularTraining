import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { LogTestService } from '../log-test.service';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    // CommonModule,
    FormsModule,
    RouterModule.forChild([
      // { path: 'shopping-list', component: ShoppingListComponent },
      { path: '', component: ShoppingListComponent },
    ]),
    SharedModule
  ],
  // providers: [LogTestService]

})
export class ShoppingListModule { }
