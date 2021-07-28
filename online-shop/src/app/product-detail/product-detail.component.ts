import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "../shared/model/product.model";
import { ProductService } from "../shared/product.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService,
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

  goBack(): void {
    this.location.back();
  }

  addToShoppingCart(): void {
    this.productService.addToShoppingCart(this.product);
  }

}
