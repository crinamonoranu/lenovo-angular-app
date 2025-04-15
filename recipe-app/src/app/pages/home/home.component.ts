import { Component } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interfaces';
import { RecipesService } from '../../services/recipes.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recipes: Recipe[] = [];
  dummyRecipes!: Recipe[];
  errorMessage = '';

  constructor(recipesService: RecipesService) {
    this.recipes = recipesService.recipes;
    try {
      recipesService.getAllRecipes().subscribe({
        next: (Response) => {
          console.log(Response);
          //throw new Error('Something happend');
          this.dummyRecipes = Response.recipes;
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err;
        },
      });
    } catch (error: any) {
      this.errorMessage = error;
    }
  }
}
