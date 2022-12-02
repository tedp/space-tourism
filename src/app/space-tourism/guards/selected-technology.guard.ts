import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  loadCurrenCrewName,
  loadCurrenTechnologyName,
} from '../actions/space-tourism.actions';

@Injectable({
  providedIn: 'root',
})
export class SelectedTechnologyGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const technologyName = route.params['techName'];
    this.store.dispatch(loadCurrenTechnologyName({ technologyName }));
    return true;
  }
}
