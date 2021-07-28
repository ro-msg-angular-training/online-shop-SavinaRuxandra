import { Component, OnInit } from '@angular/core';

import { Product } from "../shared/model/product.model"
import { PRODUCTS } from "../shared/mock-products"
import { ProductService } from "../shared/product.service"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products?: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

}
