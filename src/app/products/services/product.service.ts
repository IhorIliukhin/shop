import { Injectable } from '@angular/core';

import { products } from '../models/products';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = products;

  getProducts(): ProductModel[] {
    return this.products;
  }

  removeFromCart(product: ProductModel): void {
    this.products.find(el => {
      if(el.id === product.id) {
        el.isInCart = false;
      }
    });
  }

  removeAllFromCart(): void {
    this.getProducts().forEach(el => el.isInCart = false);
  }
}
