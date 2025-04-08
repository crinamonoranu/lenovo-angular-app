import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeCardComponent } from "./components/recipe-card/recipe-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-app';

  showMessage(){
    console.log('Hello world');
  }
}


