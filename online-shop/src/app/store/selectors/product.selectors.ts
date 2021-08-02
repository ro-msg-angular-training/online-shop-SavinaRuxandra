import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../states/app.state";
import { ProductState } from "../states/product.state";

export const selectProductsFeature = (state: AppState) => state.products;

export const selectProductList = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.products
  );

export const selectSelectedProduct = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.selectedProduct
);

export const selectAddedProduct = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.addedProduct
);

export const selectUpdatedProduct = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.updatedProduct
);