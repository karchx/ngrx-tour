import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { debounceTime, filter, map, Observable, of, switchMap } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Character } from 'src/app/core/models/character.model';
import { Power } from 'src/app/core/models/power.model';
import { CharactersService } from 'src/app/core/services/characters.service';
import { loadPowers } from '../../heroes.actions';
import { selectPowers } from '../../heroes.selector';

@Component({
  selector: 'app-add-heroe-dialog',
  templateUrl: './add-heroe-dialog.component.html',
  styleUrls: ['./add-heroe-dialog.component.scss'],
})
export class AddHeroeDialogComponent implements OnInit {
  filteredCharacters$!: Observable<Character[]>;
  form!: FormGroup;
  powers$: Observable<Power[]> = new Observable();
  selectedPowers: Power[] = [];

  constructor(
    private characterService: CharactersService,
    private matDialogRef: MatDialogRef<AddHeroeDialogComponent>,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.powers$ = this.store.select(selectPowers);
    this.store.dispatch(loadPowers());

    this.filteredCharacters$ = this.form.get('name')!.valueChanges.pipe(
      debounceTime(500),
      switchMap((value) => this.filter(value))
    );
  }

  close() {
    this.matDialogRef.close();
  }

  displayFn(character: Character): string {
    if (character) {
      return character.name;
    }
    return '';
  }

  filter(name: string): Observable<Character[]> {
    if (name.length === 0) {
      return of([]);
    }
    return this.characterService.getCharacters(name).pipe(
      filter((marvelResponse) => marvelResponse.code === 200),
      map((marvelResponse) => marvelResponse.data.results)
    );
  }

  togglePower(power: Power) {
    if (this.selectedPowers.indexOf(power) > -1) {
      this.selectedPowers.splice(this.selectedPowers.indexOf(power), 1);
    } else {
      this.selectedPowers.push(power);
    }
  }
}
