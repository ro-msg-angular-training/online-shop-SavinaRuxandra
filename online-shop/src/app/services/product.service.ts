import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from "../models/product.model"
import { urlProducts } from './url-config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http
          .get<Product[]>(urlProducts);
  }

  getProductById(id: number): Observable<Product> {
    const urlGetById = `${urlProducts}/${id}`;
    return this.http
          .get<Product>(urlGetById);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http
          .post<Product>(urlProducts, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    const urlUpdate = `${urlProducts}/${id}`;
    return this.http
          .put<Product>(urlUpdate, product);
  }

  deleteProductById(id: number): Observable<Product> {
    const urlDeleteById = `${urlProducts}/${id}`;
    return this.http
          .delete<Product>(urlDeleteById);
  }
}
