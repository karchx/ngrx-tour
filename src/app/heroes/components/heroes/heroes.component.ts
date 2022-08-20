import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from 'src/app/core/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {

  @Output() delete = new EventEmitter<Heroe>();

  @Input() heroes: Heroe[] | null = [];

  constructor() {}
}
