import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Product } from "../models/product.model"
import { OrderDetail } from "../models/order-detail.model"
import { OrderInput } from "../models/order-input.model"

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
            .post<OrderInput>(this.url, orderInput)
            .pipe(catchError(this.handleError));
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

    handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
  }
}
