import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    ProductsRoutingModule,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
