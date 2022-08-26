import { createAction, props } from '@ngrx/store';
import { Character } from '../core/models/character.model';
import { Heroe } from '../core/models/heroe.model';
import { Power } from '../core/models/power.model';

export const CREATE_HEREO = '[HEROES] Create heroe';
export const CREATE_HEREO_SUCCESS = '[HEROES] Create heroe success';
export const LOAD_HEROES = '[HEROES] Load heroes';
export const LOADED_HEROES = '[HEROES] Loaded heroes success';
export const LOAD_POWERS = '[POWERS] Load powers';
export const LOADED_POWERS = '[POWERS] Loaded powers success';
export const LOAD_CHARACTER = '[CHARACTERS] Load characters';
export const LOADED_CHARACTER = '[CHARACTERS] Load characters';
export const REMOVE_HEREO = '[HEREO] Remove heroe';
export const REMOVE_HEREO_SUCCESS = '[HEREO] Remove heroe success';

export const createHero = createAction(CREATE_HEREO, props<{ heroe: Heroe }>());
export const createHeroSuccess = createAction(
  CREATE_HEREO_SUCCESS,
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

export const loadCharacter = createAction(LOAD_CHARACTER);
export const loadedCharacer = createAction(
  LOADED_CHARACTER,
  props<{ characters: Character[] }>()
);

export const removeHeroe = createAction(
  REMOVE_HEREO,
  props<{ heroe: Heroe }>()
);
export const removeHeroeSuccess = createAction(
  REMOVE_HEREO_SUCCESS,
  props<{ heroe: Heroe }>()
);
