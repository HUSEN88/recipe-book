import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { AppShoppingListRoutingModule } from './app-shopping-list-routing.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [
    CommonModule,
    AppShoppingListRoutingModule
  ]
})
export class ShoppingListModule { }
