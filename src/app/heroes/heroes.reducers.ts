import { createReducer, on } from '@ngrx/store';
import { Heroe } from '../core/models/heroe.model';
import { Power } from '../core/models/power.model';
import {
  createHero,
  createHeroSuccess,
  loadedHeroes,
  loadedPowers,
  loadHeroes,
  loadPowers,
  removeHeroe,
  removeHeroeSuccess,
} from './heroes.actions';

export interface State {
  error?: Error;
  heroe?: Heroe;
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
  }),
  on(createHero, (state) => {
    return { ...state, heroe: undefined, error: undefined };
  }),
  on(createHeroSuccess, (state, action) => {
    return {
      ...state,
      heroe: action.heroe,
      heroes:
        state.heroes === undefined
          ? [action.heroe]
          : [...state.heroes, action.heroe],
      error: undefined,
    };
  }),
  on(removeHeroe, (state, action) => {
    return { ...state, heroe: action.heroe };
  }),
  on(removeHeroeSuccess, (state, action) => {
    return {
      ...state,
      heroes: [...state.heroes].filter((heroe) => heroe.id !== action.heroe.id),
    };
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
