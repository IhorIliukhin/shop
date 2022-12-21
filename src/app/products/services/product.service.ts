import { Injectable } from '@angular/core';

import { products } from '../models/products';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): ProductModel[] {
    return products;
  }
}
