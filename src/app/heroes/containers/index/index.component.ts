import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Heroe } from 'src/app/core/models/heroe.model';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { loadHeroes } from '../../heroes.actions';
import { selectHeroes } from '../../heroes.selector';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  heroes$: Observable<Heroe[]> = new Observable();

  constructor(
    private heroesService: HeroesService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.heroes$ = this.store.select(selectHeroes);
    this.store.dispatch(loadHeroes());
    //  this.heroesService.getHeroes();
  }
}
