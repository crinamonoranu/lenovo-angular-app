import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interfaces';
import { RecipesService } from '../../services/recipes.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { db } from '../../db/db';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recipes: Recipe[] = [];
  dummyRecipes!: Recipe[];
  filteredRecipes!: Recipe[];
  dbRecipes!: any[];
  errorMessage:any ='';
  searchValue='';
  dbSubscription:any= 'any';
  constructor(private recipesService: RecipesService,private router: Router) {}

  ngOnInit(){
    this.recipes = this.recipesService.recipes;
    try {
      this.recipesService.getAllRecipes().subscribe({
        next: (Response) => {
          console.log(Response);
          //throw new Error('Something happend');
          this.dummyRecipes = Response.recipes;
          this.filteredRecipes = Response.recipes;
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err;
        },
      });
    } catch (error: any) {
      this.errorMessage = error;
    }

    db.subscribeQuery({ recipes: {} }, (resp) => {
      if (resp.error) {
        this.errorMessage = resp.error.message; 
        return;
      }
      if (resp.data) {
        this.dbRecipes = resp.data.recipes;
      }
    });
  
    this.dbSubscription = db.subscribeQuery({recipes: {}}, (res) => {
      if(res.data){
        this.dbRecipes = res.data.recipes;
      }
      if(res.error){
        this.errorMessage = res.error;
      }
    })
  
  }
  
  ngOnDestroy()
  {
    this.dbSubscription();
  }

  filteredValues() {
    this.filteredRecipes = this.dummyRecipes.filter((recipe) =>
      recipe.name.toUpperCase().includes(this.searchValue.toUpperCase()) 
    );
  }

  redirectToAddRecipe(){
    this.router.navigateByUrl('add-recipe');
  }


}
