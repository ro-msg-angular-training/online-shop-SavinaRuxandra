import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

import { ProductService } from "src/app/services/product.service"
import { EProductActions, GetProducts, GetProductsSuccess } from './product.actions';
import { Product } from '../models/product.model';


@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions,
              private productService: ProductService) {}

  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<GetProducts>(EProductActions.GetProducts),
    switchMap(() => this.productService.getProducts()),
    switchMap((products: Product[]) => of(new GetProductsSuccess(products)) )
  );
}
