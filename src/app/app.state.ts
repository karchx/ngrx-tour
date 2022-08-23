import { ActionReducerMap } from '@ngrx/store';
import * as heroes from './heroes/heroes.reducers';

export interface AppState {
  heroes: heroes.State;
  powers: heroes.State;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  heroes: heroes.heroesReducer,
  powers: heroes.powersReducer,
};
