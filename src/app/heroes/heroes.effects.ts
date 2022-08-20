import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { HeroesService } from '../core/services/heroes.service';
import { LOADED_HEROES, LOAD_HEROES } from './heroes.actions';

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

  constructor(
    private actions$: Actions,
    private heroesService: HeroesService
  ) {}
}
