import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    HighlightDirective,
    ClickDirective,
    OrderByPipe,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    HighlightDirective,
    ClickDirective,
    OrderByPipe,
  ]
})
export class SharedModule { }
