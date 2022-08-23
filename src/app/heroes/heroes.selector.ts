import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { State } from './heroes.reducers';

export const selectHeroesFeature = (state: AppState) => state.heroes;
export const selectPowersFeature = (state: AppState) => state.powers;

export const selectHeroes = createSelector(
  selectHeroesFeature,
  (state: State) => state.heroes
);

export const selectPowers = createSelector(
  selectPowersFeature,
  (state: State) => state.powers
);
