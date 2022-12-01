import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { loadSpaceTourisms, loadCrew } from '../actions/space-tourism.actions';
import {
  selectCrew,
  selectDestinations,
} from '../reducers/space-tourism.reducer';
import { ContentServiceService } from '../services/content-service.service';

@Injectable({
  providedIn: 'root',
})
export class CrewsGuard implements CanActivate {
  constructor(
    private contentService: ContentServiceService,
    private store: Store
  ) {}

  private isCrewsInStore(): Observable<boolean> {
    return this.store.select(selectCrew).pipe(
      take(1),
      map((crews) => crews.length > 0)
    );
  }

  private loadCrewsIntoStore(): void {
    const crew = this.contentService.getCrew();
    this.store.dispatch(loadCrew({ crew }));
  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isCrewsInStore().pipe(
      map((inStore) => {
        if (inStore) {
          return true;
        }
        this.loadCrewsIntoStore();
        return true;
      })
    );
  }
}
