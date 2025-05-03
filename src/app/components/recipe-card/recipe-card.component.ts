import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;

  constructor(private router: Router) {}

  goToRecipePage() {
    this.router.navigate(['/404', { recipeId: this.recipe.id }]); //navigam dup aid-ul retetei
  }
}
