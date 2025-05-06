import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Recipe } from '../interfaces/recipe.interface';
import { RecipesService } from '../services/recipes.service';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import{ MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule, ReactiveFormsModule,  MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
 binding: any;
 localStorageValue:string | null = '';

 constructor(
  readonly recipeService: RecipesService,
  private router: Router //router in costructor - sa  pot s ama intorc la pagina principala
 ) {} 

 addRecipeForm = new FormGroup({
  name:new FormControl('', [Validators.required, Validators.minLength(3)]),
  difficulty:new FormControl('', [Validators.required, Validators.minLength(1)]),
  image:new FormControl('', [Validators.required, Validators.minLength(3)]),
  prepTimeMinutes:new FormControl(0, [Validators.required, Validators.min(0)]),

 });


onSubmit(){
//  if(this.addRecipeForm.valid) console.log(this.addRecipeForm.value);
//   else console.log('Form is not valid');

// const jsonObj={
//   "a":12,
//   "height":180,
//   "test":{
//     a:'another object',
//   }, 
//   array:['1',2,4],

// };

//   localStorage.setItem('theme', JSON.stringify(jsonObj));
//   sessionStorage.setItem('theme', 'light');
//   this.localStorageValue = localStorage.getItem('theme');
// }

if(this.addRecipeForm.valid) {
  console.log(this.addRecipeForm.value);
  this.recipeService.addDbRecipes(
    this.addRecipeForm.value as Omit<Recipe, 'id'>,
  );
}

this.addRecipeForm.reset();//resetez formularul

}

goToRecipes() {
  this.router.navigate(['/recipes']);
}

}

