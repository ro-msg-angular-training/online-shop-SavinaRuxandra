import { Action } from '@ngrx/store';
import { Product } from "src/app/models/product.model";

export enum EProductActions {
  GetProducts = '[Product] Get Products',
  GetProductsSuccess = '[Product] Get Products Success',
  GetProductsFailure = '[Product] Get Products Failure',
}

export class GetProducts implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = EProductActions.GetProductsSuccess;
  constructor(public payload: Product[]){}
}

export class GetProductsFailure implements Action {
  public readonly type = EProductActions.GetProductsFailure;
  constructor(public payload: Product[]){}
}

export type ProductActions = GetProducts | GetProductsSuccess | GetProductsFailure;