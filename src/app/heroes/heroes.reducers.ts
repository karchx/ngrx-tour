import { createReducer, on } from '@ngrx/store';
import { Heroe } from '../core/models/heroe.model';
import { Power } from '../core/models/power.model';
import {
  loadedHeroes,
  loadedPowers,
  loadHeroes,
  loadPowers,
} from './heroes.actions';

export interface State {
  error?: Error;
  heroes: Heroe[];
  powers: Power[];
}

const initialState: State = {
  heroes: [],
  powers: [],
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

export const powersReducer = createReducer(
  initialState,
  on(loadPowers, (state) => {
    return { ...state, error: undefined };
  }),
  on(loadedPowers, (state, action) => {
    return { ...state, powers: action.powers };
  })
);
