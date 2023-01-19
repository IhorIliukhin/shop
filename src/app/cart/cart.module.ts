import { NgModule } from '@angular/core';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DeleteAllDialogComponent } from './components/delete-all-dialog/delete-all-dialog.component';



@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    DeleteAllDialogComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class CartModule { }
