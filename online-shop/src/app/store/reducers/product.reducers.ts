import { EProductActions, ProductActions } from "../product.actions";
import { initialProductState, ProductState }  from "../state/product.state";

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
        //this probably isn't good
        case EProductActions.GetProductsFailure: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
}
