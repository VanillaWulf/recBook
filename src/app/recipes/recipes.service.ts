import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Burger',
      'Tasty burger.',
      'http://primebeef.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/img_3911_500_306_5_100.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Tomato', 1),
        new Ingredient('Meat', 1),
        new Ingredient('Cucumber', 1),
        new Ingredient('Cheese', 1),
      ]),
    new Recipe('Tomato Soup',
      'Fresh soup.',
      'https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2016/08/17/Food/Images/food_0291471459279.jpg',
      [
        new Ingredient('Tomato', 3),
        new Ingredient('Onion', 1),
        new Ingredient('Water', 3),
      ])
  ];

  constructor(public shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
