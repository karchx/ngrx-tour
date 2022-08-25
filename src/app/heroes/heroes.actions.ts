import { createAction, props } from '@ngrx/store';
import { Heroe } from '../core/models/heroe.model';
import { Power } from '../core/models/power.model';

export const CREATE_HERO = '[HEROES] Create heroe';
export const CREATE_HERO_SUCCESS = '[HEROES] Create heroe success';
export const LOAD_HEROES = '[HEROES] Load heroes';
export const LOADED_HEROES = '[HEROES] Loaded heroes success';
export const LOAD_POWERS = '[POWERS] Load powers';
export const LOADED_POWERS = '[POWERS] Loaded powers success';

export const createHero = createAction(CREATE_HERO, props<{ heroe: Heroe }>());
export const createHeroSuccess = createAction(
  CREATE_HERO_SUCCESS,
  props<{ heroe: Heroe }>()
);

export const loadHeroes = createAction(LOAD_HEROES);
export const loadedHeroes = createAction(
  LOADED_HEROES,
  props<{ heroes: Heroe[] }>()
);

export const loadPowers = createAction(LOAD_POWERS);
export const loadedPowers = createAction(
  LOADED_POWERS,
  props<{ powers: Power[] }>()
);
