import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ProductModel } from 'src/app/products/models/product-model';
import { CartService } from 'src/app/cart/services/cart.service';
import { CartModel } from '../../models/cart-model';
import { ProductService } from 'src/app/products/services/product.service';
import { DeleteAllDialogComponent } from '../delete-all-dialog/delete-all-dialog.component';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html'
})
export class CartListComponent implements OnInit {

  cartItems!: CartModel[];
  pluralMapping = {'=1': '1 item', 'other': '# items'};
  sortOptions = {price: 'Price', quantity: 'Quantity', brand: 'Name'};
  
  selectedSorting!: keyof CartModel;
  isAscending = false;

  constructor(
    public cartService: CartService,
    private productService: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initCartProducts();
  }
  
  initCartProducts(): void {
    this.cartItems = this.cartService.getProducts();
  }

  onQuantityIncrease(product: CartModel): void {
    this.cartService.increaseQuantity(product);
    this.initCartProducts();
  }

  onQuantityDecrease(product: CartModel): void {
    this.cartService.decreaseQuantity(product);
    this.initCartProducts();
  }

  onDeleteItem(product: CartModel): void {
    this.productService.removeFromCart(product);

    this.cartService.removeProduct(product);

    this.initCartProducts();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteAllDialogComponent, {
      width: '30%'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.removeAll();
      }
    })
  }

  removeAll(): void {
    this.productService.removeAllFromCart();

    this.cartService.removeAllProducts();

    this.initCartProducts();
  }

  trackByItems(index: number, item: ProductModel): number { return item.id; }
}
