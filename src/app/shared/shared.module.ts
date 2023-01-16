import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';


@NgModule({
  declarations: [
    HighlightDirective,
    ClickDirective
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    HighlightDirective,
    ClickDirective
  ]
})
export class SharedModule { }
