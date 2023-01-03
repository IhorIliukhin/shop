import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartModel } from '../../models/cart-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  @Input() cartItem!: CartModel;
  @Output() deleteItem: EventEmitter<CartModel> = new EventEmitter();

  onQuantityIncrease(): void {
    this.cartItem.quantity+=1;
  }

  onQuantityDecrease(): void {
    this.cartItem.quantity-=1;
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem);
  }
}
