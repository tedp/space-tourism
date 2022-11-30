import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import {
  routerReducer as router,
  RouterReducerState,
} from '@ngrx/router-store';

export interface State {
  readonly router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = { router };

export const metaReducers: MetaReducer<State>[] = [];
