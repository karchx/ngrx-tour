import { ActionReducerMap } from '@ngrx/store';
import * as heroes from './heroes/heroes.reducers';

export interface AppState {
  heroes: heroes.State;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  heroes: heroes.heroesReducer,
};
