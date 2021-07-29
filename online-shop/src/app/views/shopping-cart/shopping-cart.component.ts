import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ShoppingCartService } from "src/app/services/shopping-cart.service"
import { ProductService } from "src/app/services/product.service"
import { Product } from "src/app/models/product.model"
import { OrderInput } from "src/app/models/order-input.model"
import { OrderDetail } from "src/app/models/order-detail.model"

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products?: Product[];

  constructor(private shoppingCartService: ShoppingCartService,
              private location: Location) { }

  ngOnInit(): void {
    this.products = this.shoppingCartService.getShoppingCartProducts();
  }

  placeOrder(): void {
    let products: OrderDetail[] = this.shoppingCartService.getProducts();
    let orderInput: OrderInput = {
      customer: 'customer',
      products: products
    }
    this.shoppingCartService.newOrderRequest(orderInput);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
