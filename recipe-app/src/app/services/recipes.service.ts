import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
    recipes: Recipe[] = [
      {
        id: '1',
        name: 'Classic Margehrita Pizza',
        image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
        tags: ["pizza"],
        prepTimeMinutes: 20
    }]
  constructor() { }
    }

