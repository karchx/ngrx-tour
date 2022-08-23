import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { HeroesService } from '../core/services/heroes.service';
import { PowersService } from '../core/services/powers.service';
import {
  LOADED_HEROES,
  LOADED_POWERS,
  LOAD_HEROES,
  LOAD_POWERS,
} from './heroes.actions';

@Injectable()
export class HeroesEffects {
  loadedHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_HEROES),
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
      ofType(LOAD_POWERS),
      mergeMap(() =>
        this.powerService.getPowers().pipe(
          map((powers) => ({ type: LOADED_POWERS, powers })),
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
