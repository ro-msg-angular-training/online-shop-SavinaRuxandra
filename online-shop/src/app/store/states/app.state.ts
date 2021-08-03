import { initialProductState, ProductState } from "./product.state";

export interface AppState {
    products: ProductState;
  };
  
  export const initialAppState: AppState = {
    products: initialProductState
  };

  export function getInitialState(): AppState {
      return initialAppState;
  }