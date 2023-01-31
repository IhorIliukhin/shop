import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel } from '../../models/product-model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  showDeleteButton!: boolean;

  @Input() product!: ProductModel;

  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter();
  @Output() deleteFromCart: EventEmitter<ProductModel> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.product.isInCart ?
      this.showDeleteButton = true :
      this.showDeleteButton = false;
  }

  onAddToCart(): void {
    this.product.isInCart = true;
    this.addToCart.emit(this.product);
    this.showDeleteButton = true;
  }

  onDeleteFromCart(): void {
    this.product.isInCart = false;
    this.showDeleteButton = false;
    this.deleteFromCart.emit(this.product);
  }

  onClick() {
    this.router.navigate(['./product', this.product.id], { relativeTo: this.route });
  }

  getTooltip(): string {
    return !this.product.isAvailable ?
      'Product is unavailable' : this.product.isInCart ?
        'Product is already in cart' : 'Add to cart';
  }
}
