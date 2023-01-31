import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductListComponent,
        title: 'Products',
        children: [
            {
                path: 'product/:productID',
                component: ProductPageComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }