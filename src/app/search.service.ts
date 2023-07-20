// search.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject = new Subject<string>();

  searchQuery$ = this.searchQuerySubject.asObservable();

  setSearchQuery(query: string): void {
    console.log("searchQuery",query);
    this.searchQuerySubject.next(query);
    console.log("last searchQuery",this.searchQuerySubject);
  }
}
