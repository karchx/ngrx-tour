import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { LayoutComponent } from './components/layout/layout.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const components = [LayoutComponent, ErrorPageComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule],
})
export class SharedModule {}
