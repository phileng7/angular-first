import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Egg with curry',
              'A simple egg recipe',
              'https://upload.wikimedia.org/wikipedia/commons/1/19/Egg_curry.jpg',
              [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
              ]),
    new Recipe('Hamburger',
              'Big Mac',
              'https://upload.wikimedia.org/wikipedia/commons/9/9a/Big_Mac_hamburger.jpg',
            [
              new Ingredient('Bread', 2),
              new Ingredient('Meat', 2),
              new Ingredient('Tomato', 1)
            ])
  ];

  constructor(private shoppingListSrv: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipeToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListSrv.addIngredients(ingredients);
  }
}
