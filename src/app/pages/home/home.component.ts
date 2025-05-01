import { Component } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { db } from '../../db/db';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  recipes: Recipe[]=[];
  dummyRecipes!: Recipe[];
  filteredRecipes!: Recipe[] ;
  dbRecipes!: any[];
  errorMessage: any = '';
  searchValue = '';
  filteredDbRecipes!: any[];
  

  constructor(recipesService: RecipesService, readonly router: Router) {
    this.recipes = recipesService.recipes;
    try{
    recipesService.getAllRecipes().subscribe({
      next:(response) => {
        console.log(response);
        //throw new Error('Something happened');
        this.dummyRecipes = response.recipes;
        this.filteredRecipes = response.recipes;
      },

      error:(err) => {
        console.log(err);
        this.errorMessage = err.message;
      },
    });
  }catch(err) { 
      this.errorMessage = err;
    }

    db.subscribeQuery({recipes: {}},(resp)=>{
      if (resp.error) {
        this.errorMessage=resp.error; 
        return;
      }
      if (resp.data) {
        this.dbRecipes=resp.data.recipes;
        this.filteredDbRecipes = [...this.dbRecipes]; // copie
      }
    
  });
  }

filterValues(){
  this.filteredDbRecipes = this.dbRecipes.filter((recipe) =>recipe.name.toUpperCase().includes(this.searchValue.toUpperCase())
);
}

redirectToAddRecipe() {
  this.router.navigateByUrl('add-recipe');

}

}



