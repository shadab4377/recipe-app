import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe, RecipeResponse } from '../models/recipeResponse';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchQuery!: string;
  featuredRecipes: Recipe[] = [];
  isLoading: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
  }
  onSearch(){
    this.featuredRecipes = [];
    this.populateRecipes();
  }

  populateRecipes(): void {
    this.recipeService.searchRecipes(this.searchQuery).subscribe(
      (response: RecipeResponse) => {
        response.hits.forEach(recipesHits => {
          this.featuredRecipes.push(recipesHits.recipe);
        });
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
  }
  
}
