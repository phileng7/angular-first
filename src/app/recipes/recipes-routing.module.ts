import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '../../../node_modules/@angular/router';

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from '../recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RouterModule } from '@angular/router';

const recipesRoute: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    { path: ':id', component: RecipesDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoute)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RecipesRoutingModule { }
