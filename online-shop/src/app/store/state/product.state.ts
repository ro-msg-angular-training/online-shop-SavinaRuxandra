import { Product } from "src/app/models/product.model";

export interface ProductState {
    products: Product[];
    error: any;
  };
  
const initialProductState: ProductState = {
    products: [],
    error: ''
  };

export { initialProductState }