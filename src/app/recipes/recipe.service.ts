import { Injectable } from '@angular/core';
import { Recipe} from './recipe';
import { Ingredients } from '../shared/ingredients'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[
        new Ingredients( 'FrenchFries',2),
        new Ingredients( 'Pork Meat',1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];


  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id){
    return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1)
  }

}
