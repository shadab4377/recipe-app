import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RecipeResponse, RecipeSingleResponse } from './models/recipeResponse';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2'; // Replace with your API base URL
  private appId = '2ebb1534'; // Replace with your application ID
  private appKey = '421a813b3a8cdce2976b5ddfc5605075'; // Replace with your application key
 
  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<RecipeResponse> {
    const url = `${this.baseUrl}?type=public&q=${query}&app_id=${this.appId}&app_key=${this.appKey}`;
    return this.http.get<RecipeResponse>(url);
  }

  getRecipeDetails(uri: string): Observable<RecipeResponse> {
    const encodedUri = encodeURIComponent(uri);
    const url = `${this.baseUrl}/by-uri?type=public&uri=${encodedUri}&app_id=${this.appId}&app_key=${this.appKey}`;
    return this.http.get<RecipeResponse>(url);
  }

  private handleError(error: any): Observable<never> {
    // Log the error or do any additional handling

    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    // Throw an observable error with a user-friendly error message
    return throwError(errorMessage);
  }
}
