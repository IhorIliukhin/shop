import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/models/product-model';
import { CartModel } from '../models/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: CartModel[] = [];

  get totalCost(): number {
    let total = 0;

    for(const product of this.cartProducts) {
      total += product.price * product.quantity;
    }

    return total;
  }

  get totalQuantity(): number {
    let total = 0;

    for(const product of this.cartProducts) {
      total += product.quantity;
    }

    return total;
  }

  get isEmptyCart(): boolean {
    return !this.cartProducts.length;
  }

  getProducts(): CartModel[] {
    return this.cartProducts;
  }

  addProduct(product: ProductModel, quantity = 1): void {
    this.cartProducts = [...this.cartProducts, {...product, quantity}];
  }

  removeProduct(product: CartModel): void {
    this.cartProducts = this.cartProducts.filter(el => el.id !== product.id);
  }

  removeAllProducts(): void {
    this.cartProducts = [];
  }

  increaseQuantity(product: CartModel): void {
    this.changeQuantity(product, 1);
  }

  decreaseQuantity(product: CartModel): void {
    this.changeQuantity(product, -1);
  }

  private changeQuantity(product: CartModel, delta: number): void {
    let {...updatedProduct} = product;
    updatedProduct.quantity += delta;

    let updatedCart = this.cartProducts.map(el => {
      if(el.id === product.id) {
        el = updatedProduct;
        return el;
      }
      return el;
    });

    this.cartProducts = [...updatedCart];
  }
}
