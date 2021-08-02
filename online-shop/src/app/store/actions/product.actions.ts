import { Action } from '@ngrx/store';
import { Product } from "src/app/models/product.model";

export enum EProductActions {
  GetProducts = '[Product] Get Products',
  GetProductsSuccess = '[Product] Get Products Success',
  GetProductsFailure = '[Product] Get Products Failure',
  GetProductById = '[Product] Get Product By Id',
  GetProductByIdSuccess = '[Product] Get Product By Id Success',
  GetProductByIdFailure = '[Product] Get Product By Id Failure',
  DeleteProductById = '[Product] Delete Product By Id',
  DeleteProductByIdSuccess = '[Product] Delete Product By Id Success',
  DeleteProductByIdFailure = '[Product] Delete Product By Id Failure',
  AddProduct = '[Product] Add Product',
  AddProductSuccess = '[Product] Add Product Success',
  AddProductdFailure = '[Product] Add Product Failure',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  UpdateProductdFailure = '[Product] Update Product Failure',
  AddProductToShoppingCart =  '[Product] Add Product To Shopping Cart',
  AddProductToShoppingCartSuccess =  '[Product] Add Product To Shopping Cart Successs',
  AddProductToShoppingCartFailure =  '[Product] Add Product To Shopping Cart Failure',
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
  constructor(public payload: Error){}
}

export class GetProductById implements Action {
  public readonly type = EProductActions.GetProductById;
  constructor(public payload: number){}
}

export class GetProductByIdSuccess implements Action {
  public readonly type = EProductActions.GetProductByIdSuccess;
  constructor(public payload: Product){}
}

export class GetProductByIdFailure implements Action {
  public readonly type = EProductActions.GetProductByIdFailure;
  constructor(public payload: Error){}
}

export class DeleteProductById implements Action {
  public readonly type = EProductActions.DeleteProductById;
  constructor(public payload: number){}
}

export class DeleteProductByIdSuccess implements Action {
  public readonly type = EProductActions.DeleteProductByIdSuccess;
  constructor(){}
}

export class DeleteProductByIdFailure implements Action {
  public readonly type = EProductActions.DeleteProductByIdFailure;
  constructor(public payload: Error){}
}

export class AddProduct implements Action {
  public readonly type = EProductActions.AddProduct;
  constructor(public payload: Product){}
}

export class AddProductSuccess implements Action {
  public readonly type = EProductActions.AddProductSuccess;
  constructor(public payload: Product){}
}

export class AddProductFailure implements Action {
  public readonly type = EProductActions.AddProductdFailure;
  constructor(public payload: Error){}
}

export class UpdateProduct implements Action {
  public readonly type = EProductActions.UpdateProduct;
  constructor(public payload: Product){}
}

export class UpdateProductSuccess implements Action {
  public readonly type = EProductActions.UpdateProductSuccess;
  constructor(public payload: Product){}
}

export class UpdateProductFailure implements Action {
  public readonly type = EProductActions.UpdateProductdFailure;
  constructor(public payload: Error){}
}

export class AddProductToShoppingCart implements Action {
  public readonly type = EProductActions.AddProductToShoppingCart;
  constructor(public payload: Product){}
}

export class AddProductToShoppingCartSuccess implements Action {
  public readonly type = EProductActions.AddProductToShoppingCartSuccess;
}

export class AddProductToShoppingCartFailure implements Action {
  public readonly type = EProductActions.AddProductToShoppingCartFailure;
  constructor(public payload: Error){}
}

export type ProductActions = GetProducts | GetProductsSuccess | GetProductsFailure 
                            | GetProductById | GetProductByIdSuccess | GetProductByIdFailure
                            | DeleteProductById | DeleteProductByIdSuccess | DeleteProductByIdFailure
                            | AddProduct | AddProductSuccess | AddProductFailure
                            | UpdateProduct | UpdateProductSuccess | UpdateProductFailure
                            | AddProductToShoppingCart | AddProductToShoppingCartSuccess | AddProductToShoppingCartFailure;