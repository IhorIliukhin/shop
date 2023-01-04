import { Component, OnInit } from '@angular/core';
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

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.isCartEmpthy = !this.cartService.getCartItems().length;
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addItem(product);
    this.isCartEmpthy = false;
  }
}
