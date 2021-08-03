import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap } from "rxjs/operators";
import { of } from "rxjs";

import { ProductService } from "src/app/services/product.service"
import { AddProduct, AddProductFailure, AddProductSuccess, AddProductToShoppingCart, AddProductToShoppingCartFailure, AddProductToShoppingCartSuccess, DeleteProductById, DeleteProductByIdFailure, DeleteProductByIdSuccess, EProductActions, GetProductById, GetProductByIdSuccess, GetProducts, GetProductsFailure, GetProductsSuccess, UpdateProduct, UpdateProductFailure, UpdateProductSuccess } from '../actions/product.actions';
import { Product } from 'src/app/models/product.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions,
              private productService: ProductService,
              private shoppingCartService: ShoppingCartService) {}

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType<GetProducts>(EProductActions.GetProducts),
    switchMap(() => this.productService.getProducts()),
    switchMap((products: Product[] ) => of(new GetProductsSuccess(products))),
    catchError((error) => of(new GetProductsFailure(error)))
    ))

  getProductById$ = createEffect(() => this.actions$.pipe(
    ofType<GetProductById>(EProductActions.GetProductById),
    switchMap((id) => this.productService.getProductById(id.payload)),
    switchMap((product: Product ) => of(new GetProductByIdSuccess(product))),
    catchError((error) => of(new GetProductsFailure(error)))
    ))

  deleteProductById$ = createEffect(() => this.actions$.pipe(
    ofType<DeleteProductById>(EProductActions.DeleteProductById),
    switchMap((id) => this.productService.deleteProductById(id.payload)),
    switchMap(() => of(new DeleteProductByIdSuccess())),
    catchError((error) => of(new DeleteProductByIdFailure(error)))
    ))

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType<AddProduct>(EProductActions.AddProduct),
    switchMap((product) => this.productService.addProduct(product.payload)),
    switchMap((product) => of(new AddProductSuccess(product))),
    catchError((error) => of(new AddProductFailure(error)))
    ))

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType<UpdateProduct>(EProductActions.UpdateProduct),
    switchMap((product) => this.productService.updateProduct(product.payload.id, product.payload)),
    switchMap((product) => of(new UpdateProductSuccess(product))),
    catchError((error) => of(new UpdateProductFailure(error)))
    ))

  addProductToShoppingCart$ = createEffect(() => this.actions$.pipe(
    ofType<AddProductToShoppingCart>(EProductActions.AddProductToShoppingCart),
    switchMap(async (product) => this.shoppingCartService.addToShoppingCart(product.payload)),
    switchMap(() => of(new AddProductToShoppingCartSuccess())),
    catchError((error) => of(new AddProductToShoppingCartFailure(error)))
    ))
}
