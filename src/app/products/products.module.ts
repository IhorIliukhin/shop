import { NgModule } from '@angular/core';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
