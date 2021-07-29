import { Component, OnInit } from '@angular/core';

import { Product } from "src/app/models/product.model"
import { ProductService } from "src/app/services/product.service"
import { LoginService } from "src/app/services/login.service"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products?: Product[];
  isEnabled?: boolean;

  constructor(private productService: ProductService,
              private loginService: LoginService) {}

  ngOnInit() {
    this.getProducts();
    this.setIsEnabled();
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  setIsEnabled(): void {
    const userRoles = this.loginService.currentUser.roles;
    if (userRoles.find(role => role === 'admin') != undefined) {
      this.isEnabled = true;
    }
  }
}
