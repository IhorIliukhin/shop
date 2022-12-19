import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: ProductModel[] = [];

  getCartItems(): ProductModel[] {
    return this.cartItems;
  }

  addItem(...item: ProductModel[]): void {
    this.cartItems.push(...item);
  }
}
