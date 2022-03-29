import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { brandReducer } from "./brandReducer";

const allReducers = combineReducers({
    all_products:productReducer,
    product: selectedProductReducer,
    brands: brandReducer,
});

export default allReducers;