import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from "src/app/services/shopping-cart.service"
import { Product } from "src/app/models/product.model"
import { OrderInput } from "src/app/models/order-input.model"
import { OrderDetail } from "src/app/models/order-detail.model"
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products?: Product[];

  constructor(private shoppingCartService: ShoppingCartService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.products = this.shoppingCartService.getShoppingCartProducts();
  }

  placeOrder(): void {
    let products: OrderDetail[] = this.shoppingCartService.mapProductsToOrderDetail();
    let user = this.loginService.currentUser;
    let orderInput: OrderInput = {
      customer: user,
      products: products
    }
    this.shoppingCartService.newOrderRequest(orderInput);
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
