import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { LoginService } from "src/app/services/login.service"

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  product!: Product;
  isEnabled?: boolean;

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private location: Location) {
    }

  ngOnInit(): void {
    this.getProductById();
    this.checkIfRoleAdmin();
  }

  getProductById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
        .subscribe(product => this.product = product);
  }

  deleteProductById(): void {
    this.productService.deleteProductById(this.product.id)
        .subscribe(() => this.location.back());
  }

  addToShoppingCart(): void {
    this.shoppingCartService.addToShoppingCart(this.product);
  }

  checkIfRoleAdmin(): void {
    const userRoles = this.loginService.currentUser.roles;
    if (userRoles.includes('admin')) {
      this.isEnabled = true;
    }
  }

  goBack(): void {
    this.location.back();
  }

}
