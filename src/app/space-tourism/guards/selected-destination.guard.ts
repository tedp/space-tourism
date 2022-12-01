import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadCurrenDestinationName } from '../actions/space-tourism.actions';
import { State } from '../reducers/space-tourism.reducer';

@Injectable({
  providedIn: 'root',
})
export class SelectedDestinationGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const destinationName = route.params['planet'];
    this.store.dispatch(loadCurrenDestinationName({ destinationName }));
    return true;
  }
}
