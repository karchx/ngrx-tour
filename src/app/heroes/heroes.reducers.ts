import { createReducer, on } from '@ngrx/store';
import { Heroe } from '../core/models/heroe.model';
import { loadedHeroes, loadHeroes } from './heroes.actions';

export interface State {
  error?: Error;
  heroes: Heroe[];
}

const initialState: State = {
  heroes: [],
};

export const heroesReducer = createReducer(
  initialState,
  on(loadHeroes, (state) => {
    return { ...state, error: undefined };
  }),
  on(loadedHeroes, (state, action) => {
    return { ...state, heroes: action.heroes };
  })
);
