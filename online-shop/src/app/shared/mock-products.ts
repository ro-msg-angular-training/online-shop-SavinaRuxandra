import { Product } from "./model/product.model"
import { ProductCategory } from "./model/productCategory.model"
import { Supplier } from "./model/supplier.model"

    let category: ProductCategory = {
      id: 1,
      name: 'productCategory',
      description: 'description'
    }

    let supplier: Supplier = {
      id: 1,
      name: 'supplier'
    }

    let product1: Product = {
      id: 1,
      name: 'Product1',
      description: 'Description1',
      price: 10,
      weight: 10,
      category: category,
      supplier: supplier,
      imageUrl: 'image.png'
    };

    let product2: Product = {
      id: 2,
      name: 'Product2',
      description: 'Description2',
      price: 20,
      weight: 20,
      category: category,
      supplier: supplier,
      imageUrl: 'image.png'
    };

    export const PRODUCTS: Product[] = [product1, product2];
