import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/cart/models/cart-model';
import { CartService } from 'src/app/cart/services/cart.service';

import { ProductModel } from 'src/app/products/models/product-model';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  isCartEmpthy!: boolean;
  products!: ProductModel[];

  get cartTooltip(): string {
    return this.isCartEmpthy ? 'Cart is empthy' : '';
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.isCartEmpthy = this.cartService.isEmptyCart;
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
    this.isCartEmpthy = false;
  }

  onDeleteFromCart(product: ProductModel): void {
    this.cartService.removeProduct(product as CartModel);
    this.isCartEmpthy = this.cartService.isEmptyCart;
  }
}
