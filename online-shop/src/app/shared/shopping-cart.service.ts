import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Product } from "./product.model"
import { OrderDetail } from "./order-detail.model"
import { OrderInput } from "./order-input.model"

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: Product[] = [];
  private url = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addToShoppingCart(product: Product): void {
    this.shoppingCart.push(product);
  }

  getShoppingCartProducts(): Product[] {
    return this.shoppingCart;
  }

  newOrderRequest(orderInput: OrderInput): void {
      this.http
            .post<OrderInput>(this.url, orderInput);
      this.shoppingCart = [];
  }

  getProducts(): OrderDetail[] {
    let products: OrderDetail[] = [];

    for(let product of this.shoppingCart) {
      let orderDetail: OrderDetail | undefined = this.checkIfExists(products, product.id);
      if(orderDetail != undefined) {
        orderDetail.quantity = orderDetail.quantity + 1;
      }
      else {
        let orderDetail: OrderDetail = {
          productId: product.id,
          quantity: 1
        }
        products.push(orderDetail);
      }
    }
      console.log(products);
      return products;
  }

   checkIfExists(products: OrderDetail[], productId: number): OrderDetail | undefined {
      for (let orderDetail of products) {
          if (orderDetail.productId === productId) {
              return orderDetail;
          }
      }
      return undefined;
  }
}
