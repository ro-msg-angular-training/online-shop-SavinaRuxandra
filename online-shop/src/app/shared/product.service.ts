import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PRODUCTS } from "./mock-products"
import { Product } from "./model/product.model"


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  shoppingCart: Product[] = [];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS)
  }

  getProductById(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id)!);
  }

  addToShoppingCart(product: Product): void {
    this.shoppingCart.push(product);
    console.log(product);
  }
}
