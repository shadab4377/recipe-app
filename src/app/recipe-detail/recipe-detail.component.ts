import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe, RecipeResponse, RecipeSingleResponse } from '../models/recipeResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
   recipe!: Recipe;
   isLoaded: boolean = true;
  constructor(private route: ActivatedRoute,private router:Router, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const uri = params['uri'];
      this.recipeService.getRecipeDetails(uri).subscribe((response:RecipeResponse) => {
        this.recipe = response.hits[0].recipe;
      });
      this.isLoaded = false;
    });

    
  }
  searchMore(){
    this.router.navigate(['/']);
  }
}
