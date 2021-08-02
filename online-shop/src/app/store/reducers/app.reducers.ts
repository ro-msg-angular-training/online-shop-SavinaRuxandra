import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { productReducers } from "./product.reducers";

export const appReducers: ActionReducerMap<AppState, any> = {
    products: productReducers
}