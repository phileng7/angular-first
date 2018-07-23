import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '../../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) { }

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://fm-ng-http.firebaseio.com/appName/recipes.json',
                              this.recipeService.getRecipes(),
                              {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://fm-ng-http.firebaseio.com/appName/recipes.json')
      .pipe(map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
