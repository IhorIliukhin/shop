import { Pipe, PipeTransform } from '@angular/core';
import { CartModel } from 'src/app/cart/models/cart-model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(cartItems: CartModel[], key: keyof CartModel, isAsc: boolean) {

    const order = isAsc ? 1 : -1;

    const sorted = [...cartItems].sort((a, b) => {
      return a[key] >= b[key] ? order : -order;
    })

    return sorted;
  }
}
