import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
// variabila routes de tip Routes
{path: '', redirectTo: 'recipes', pathMatch: 'full'},
{path: 'recipes', component: HomeComponent},
{path:'recipes/:id', component: RecipePageComponent},
{path:'add-recipe', component: AddRecipeComponent},
{path:'**', component: Page404Component} ,
];
