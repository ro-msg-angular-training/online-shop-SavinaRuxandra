import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { ProductState } from "../state/product.state";

// export const productStateFeatureKey = "productState";

// export const selectProductsFeature = createFeatureSelector<ProductState>(
//     productStateFeatureKey
//   );

export const selectProductsFeature = (state: AppState) => state.products;

export const selectProductList = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.products
  );