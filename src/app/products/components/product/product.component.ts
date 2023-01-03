import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductModel } from '../../models/product-model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() product!: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter();

  onAddToCart(): void {
    this.product.isInCart = true;
    this.addToCart.emit(this.product);
  }

  getTooltip(): string {
    return !this.product.isAvailable ? 
    'Product is unavailable' : this.product.isInCart ? 
    'Product is already in cart' : 'Add to cart';
  }
}
