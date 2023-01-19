import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { products } from '../models/products';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = products;

  getProducts(): Observable<ProductModel[]> {
    return of(this.products);
  }

  removeFromCart(product: ProductModel): void {
    this.products.find(el => {
      if(el.id === product.id) {
        el.isInCart = false;
      }
    });
  }

  removeAllFromCart(): void {
    this.products.forEach(el => el.isInCart = false);
  }
}
