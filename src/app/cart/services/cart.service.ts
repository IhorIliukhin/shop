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
    let newCart = this.cartProducts.filter(el => el.id !== product.id);
    // filter возвращает новый массив, нет необходимости его еще раз копировать.
    this.cartProducts = [...newCart];
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
    let updatedCart = this.cartProducts.map(el => {
      if(el.id === product.id) {
        product.quantity += delta;
        return product;
      }
      return el;
    });

    this.cartProducts = [...updatedCart];
  }
}
