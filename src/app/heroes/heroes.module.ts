import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { IndexComponent } from './containers/index/index.component';
import { CharacterComponent } from './containers/character/character.component';
import { EditComponent } from './containers/edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    IndexComponent,
    CharacterComponent,
    EditComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
    SharedModule
  ],
})
export class HeroesModule {}
