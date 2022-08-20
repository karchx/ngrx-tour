import { createAction, props } from '@ngrx/store';
import { Heroe } from '../core/models/heroe.model';

export const LOAD_HEROES = '[HEROES] Load heroes';
export const LOADED_HEROES = '[HEROES] loaded success';

export const loadHeroes = createAction(LOAD_HEROES);
export const loadedHeroes = createAction(
  LOADED_HEROES,
  props<{ heroes: Heroe[] }>()
);
