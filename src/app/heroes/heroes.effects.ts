import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';
import { HeroesService } from '../core/services/heroes.service';
import { PowersService } from '../core/services/powers.service';
import {
  createHero,
  CREATE_HEREO_SUCCESS,
  LOADED_HEROES,
  LOADED_POWERS,
  loadHeroes,
  loadPowers,
  removeHeroe,
  REMOVE_HEREO,
  REMOVE_HEREO_SUCCESS,
} from './heroes.actions';

@Injectable()
export class HeroesEffects {
  loadedHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHeroes),
      mergeMap(() =>
        this.heroesService.getHeroes().pipe(
          map((heroes) => ({ type: LOADED_HEROES, heroes })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadedPowers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPowers),
      mergeMap(() =>
        this.powerService.getPowers().pipe(
          map((powers) => ({ type: LOADED_POWERS, powers })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createHeroe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createHero),
      mergeMap((payload) =>
        this.heroesService.createHeroe(payload.heroe).pipe(
          map((heroe) => ({ type: CREATE_HEREO_SUCCESS, heroe })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteHeroe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeHeroe),
      mergeMap((payload) =>
        this.heroesService.deleteHeroe(payload.heroe).pipe(
          map((heroe) => ({ type: REMOVE_HEREO_SUCCESS, heroe })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private heroesService: HeroesService,
    private powerService: PowersService
  ) {}
}
