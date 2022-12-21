import { Component, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product-model';
import { CartService } from 'src/app/cart/services/cart.service';
import { products } from '../../../products/models/products';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems!: ProductModel[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.addItem(...products);
    this.cartItems = this.cartService.getCartItems();
  }

  trackByItems(index: number, item: ProductModel): number { return item.id; }

}
