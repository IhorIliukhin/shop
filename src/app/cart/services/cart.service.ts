import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/models/product-model';
import { CartModel } from '../models/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartModel[] = [];

  getCartItems(): CartModel[] {
    return this.cartItems;
  }

  addItem(item: ProductModel, quantity = 1): void {

    for(const cartItem of this.cartItems) {
      if(cartItem.id === item.id) {
        cartItem.quantity += quantity;
        return;
      }
    }

    this.cartItems.push({...item, quantity});
  }

  deleteItem(item: CartModel): void {
    item.isInCart = false;
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
  }

  totalCost(): number {
    let total = 0;

    for(const product of this.cartItems) {
      total += product.price * product.quantity;
    }

    return total;
  }

  totalQuantity(): number {
    let total = 0;

    for(const product of this.cartItems) {
      total += product.quantity;
    }

    return total;
  }
}
