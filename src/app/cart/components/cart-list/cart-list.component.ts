import { Component, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product-model';
import { CartService } from 'src/app/cart/services/cart.service';
import { CartModel } from '../../models/cart-model';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html'
})
export class CartListComponent implements OnInit {

  cartItems!: CartModel[];

  constructor(
    public cartService: CartService,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  trackByItems(index: number, item: ProductModel): number { return item.id; }

  onDeleteItem(item: CartModel): void {
    this.productService.getProducts().find(el => {
      if(el.id === item.id) {
        el.isInCart = false;
      }
    });
    this.cartService.deleteItem(item);
  }
}
