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
  on(loadedHeroes, (state, action) => {
    return { ...state, heroes: action.heroes };
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

  on(removeHeroeSuccess, (state, { id }) => {
    const heroes = state.heroes.filter((heroe) => heroe.id !== id);
    return {
      ...state,
      heroes,
      error: undefined,
    };
  })
);

export const powersReducer = createReducer(
  initialState,
  on(loadedPowers, (state, action) => {
    return { ...state, powers: action.powers };
  })
);
