import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    HighlightDirective
  ]
})
export class SharedModule { }
