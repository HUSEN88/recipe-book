import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { AppRecipeRoutingModule } from './app-recipe-routing.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    NewRecipeComponent],
  imports: [
    CommonModule,
    AppRecipeRoutingModule
  ]
})
export class RecipesModule { }
