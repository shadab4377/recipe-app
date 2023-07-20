export interface RecipeResponse {
    from: number;
    to: number;
    count: number;
    _links: Links;
    hits: RecipeHit[];
  }
export interface RecipeSingleResponse{
    from: number;
    to: number;
    count: number;
    _links: Links;
    hits: RecipeHit;
}
  
  export interface Links {
    self: Link;
    next: Link;
  }
  
  export interface Link {
    href: string;
    title: string;
  }
  
  export interface RecipeHit {
    recipe: Recipe;
    _links: Links;
  }
  
  export interface Recipe {
    uri: string;
    label: string;
    image: string;
    images: RecipeImages;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: Ingredient[];
    calories: number;
    glycemicIndex: number;
    totalCO2Emissions: number;
    co2Emissionsinterface: string;
    totalWeight: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    instructions: string[];
    tags: string[];
    externalId: string;
    totalNutrients: any; // Update with specific type for totalNutrients if available
    totalDaily: any; // Update with specific type for totalDaily if available
    digest: Digest[];
  }
  
  export interface RecipeImages {
    THUMBNAIL: ImageSize;
    SMALL: ImageSize;
    REGULAR: ImageSize;
    LARGE: ImageSize;
  }
  
  export interface ImageSize {
    url: string;
    width: number;
    height: number;
  }
  
  export interface Ingredient {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodCategory:string;
    foodId: string;
    image:string;
  }
  
  export interface Digest {
    label: string;
    tag: string;
    schemaOrgTag: string;
    total: number;
    hasRDI: boolean;
    daily: number;
    unit: string;
    sub: any; // Update with specific type for sub if available
  }
  