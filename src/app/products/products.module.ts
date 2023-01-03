import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
