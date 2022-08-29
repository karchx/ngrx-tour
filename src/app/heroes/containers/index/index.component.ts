import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Heroe } from 'src/app/core/models/heroe.model';
import { AddHeroeDialogComponent } from '../../components/add-heroe-dialog/add-heroe-dialog.component';
import { loadHeroes, removeHeroe } from '../../heroes.actions';
import { selectHeroes } from '../../heroes.selector';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  heroes$: Observable<Heroe[]> = new Observable();

  constructor(private store: Store<AppState>, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.heroes$ = this.store.select(selectHeroes);
    this.store.dispatch(loadHeroes());
  }

  add() {
    this.matDialog.open(AddHeroeDialogComponent);
  }

  delete(heroe: Heroe) {
    this.store.dispatch(removeHeroe({ id: heroe.id }));
  }
}
