import { EProductActions, ProductActions } from "../actions/product.actions";
import { initialProductState, ProductState }  from "../states/product.state";

export const productReducers = (
    state = initialProductState,
    action: ProductActions
): ProductState => {
    switch(action.type) {
        case EProductActions.GetProductsSuccess: {
            return {
                ...state,
                products: action.payload
            };
        }

        case EProductActions.GetProductsFailure: {
            return {
                ...state,
                error: action.payload
            }
        }

        case EProductActions.GetProductByIdSuccess: {
            return {
                ...state,
                selectedProduct: action.payload
            }
        }

        case EProductActions.GetProductByIdFailure: {
            return {
                ...state,
                error: action.payload
            }
        }

        case EProductActions.DeleteProductByIdSuccess: {
            return {
                ...state
            }
        }

        case EProductActions.DeleteProductByIdFailure: {
            return {
                ...state,
                error: action.payload
            }
        }

        case EProductActions.AddProductSuccess: {
            return {
                ...state,
                addedProduct: action.payload
            }
        }

        case EProductActions.AddProductdFailure: {
            return {
                ...state,
                error: action.payload
            }
        }

        case EProductActions.UpdateProductSuccess: {
            return {
                ...state,
                updatedProduct: action.payload
            }
        }

        case EProductActions.UpdateProductdFailure: {
            return {
                ...state,
                error: action.payload
            }
        }
        case EProductActions.AddProductToShoppingCartSuccess: {
            return {
                ...state
            }
        }

        case EProductActions.AddProductToShoppingCartFailure: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
}
