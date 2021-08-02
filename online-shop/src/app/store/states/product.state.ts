import { Product } from "src/app/models/product.model";

export interface ProductState {
    products: Product[]
    selectedProduct: Product
    addedProduct: Product
    updatedProduct: Product
    error: any
  };
  
export const initialProductState: ProductState = {
    products: [],
    selectedProduct: <Product>{},
    addedProduct: <Product>{},
    updatedProduct: <Product>{},
    error: ''
  };
