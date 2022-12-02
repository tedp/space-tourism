import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';

import { loadTechnologies } from '../actions/space-tourism.actions';
import { selectTechnologies } from '../reducers/space-tourism.reducer';
import { ContentServiceService } from '../services/content-service.service';

@Injectable({
  providedIn: 'root',
})
export class TechnologyGuard implements CanActivate {
  constructor(
    private contentService: ContentServiceService,
    private store: Store
  ) {}

  private isTechnologiesInStore(): Observable<boolean> {
    return this.store.select(selectTechnologies).pipe(
      take(1),
      map((technologies) => technologies.length > 0)
    );
  }

  private loadTechnologiesIntoStore(): void {
    const technologies = this.contentService.getTechbologies();
    this.store.dispatch(loadTechnologies({ technologies }));
  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isTechnologiesInStore().pipe(
      map((inStore) => {
        if (inStore) {
          return true;
        }
        this.loadTechnologiesIntoStore();
        return true;
      })
    );
  }
}
