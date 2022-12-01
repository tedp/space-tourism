import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { loadSpaceTourisms } from '../actions/space-tourism.actions';
import { selectDestinations } from '../reducers/space-tourism.reducer';
import { ContentServiceService } from '../services/content-service.service';

@Injectable({
  providedIn: 'root',
})
export class DestinationsGuard implements CanActivate {
  constructor(
    private contentService: ContentServiceService,
    private store: Store
  ) {}

  private isDestinationsInStore(): Observable<boolean> {
    return this.store
      .select(selectDestinations)
      .pipe(map((destinations) => destinations.length > 0));
  }

  private loadDestinationsIntoStore(): void {
    const destinations = this.contentService.getDestinations();
    this.store.dispatch(loadSpaceTourisms({ destinations }));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isDestinationsInStore().pipe(
      map((inStore) => {
        if (inStore) {
          return true;
        }
        this.loadDestinationsIntoStore();
        return true;
      })
    );
  }
}
