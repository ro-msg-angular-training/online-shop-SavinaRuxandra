import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location) {
    }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
        .subscribe(product => this.product = product);
  }

  deleteProductById(): void {
    this.productService.deleteProductById(this.product.id)
        .subscribe(() => this.location.back());
    console.log(this.product);
  }

  addToShoppingCart(): void {
    this.shoppingCartService.addToShoppingCart(this.product);
  }

  goBack(): void {
    this.location.back();
  }

}
