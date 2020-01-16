import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './modules/recipes/recipes.module#RecipesModule' },
  { path: 'shopping-list', loadChildren: './modules/shopping-list/shopping-list.module#ShoppingListModule' },
  { path: 'auth', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
