import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductCategory } from "../model/productCategory.model";
import { Supplier } from "../model/supplier.model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

    category: ProductCategory = {
      id: 1,
      name: 'productCategory',
      description: 'description'
    }

    supplier: Supplier = {
      id: 1,
      name: 'supplier'
    }

    product: Product = {
      id: 1,
      name: 'Product1',
      description: 'Description1',
      price: 10,
      weight: 10,
      category: this.category,
      supplier: this.supplier,
      imageUrl: 'image.png'
    };

  constructor() {
    }

  ngOnInit(): void {
  }

}
