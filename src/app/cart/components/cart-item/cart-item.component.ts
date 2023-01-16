import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartModel } from '../../models/cart-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  @Input() cartItem!: CartModel;

  @Output() deleteItem = new EventEmitter<CartModel>();
  @Output() quantityIncrease = new EventEmitter<CartModel>();
  @Output() quantityDecrease = new EventEmitter<CartModel>();

  onQuantityIncrease(): void {
    this.quantityIncrease.emit(this.cartItem);
  }

  onQuantityDecrease(): void {
    this.quantityDecrease.emit(this.cartItem);
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem);
  }
}
