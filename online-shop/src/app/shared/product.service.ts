import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Product } from "./product.model"


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getProducts(): Observable<Product[]> {
    return this.http
          .get<Product[]>(this.url);
  }

  getProductById(id: number): Observable<Product> {
    const urlGetById = `${this.url}/${id}`;
    return this.http
          .get<Product>(urlGetById);
  }

  deleteProductById(id: number): Observable<Product> {
    const urlDeleteById = `${this.url}/${id}`;
    return this.http
          .delete<Product>(urlDeleteById);
  }
}
