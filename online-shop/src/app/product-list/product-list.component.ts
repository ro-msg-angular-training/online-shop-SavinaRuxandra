import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product.model"
import { ProductCategory } from "../model/productCategory.model"
import { Supplier } from "../model/supplier.model"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    category: ProductCategory = {
      id: 1,
      name: 'ProductCategory',
      description: 'Description'
    }

    supplier: Supplier = {
      id: 1,
      name: 'Supplier'
    }

    product1: Product = {
      id: 1,
      name: 'Product1',
      description: 'Description1',
      price: 10,
      weight: 10,
      category: this.category,
      supplier: this.supplier,
      imageUrl: 'image.png'
    };

    product2: Product = {
      id: 2,
      name: 'Product2',
      description: 'Description2',
      price: 20,
      weight: 20,
      category: this.category,
      supplier: this.supplier,
      imageUrl: 'image.png'
    };

    products: Product[] = [this.product1, this.product2];

  constructor() { }

  ngOnInit(): void {
  }

}
