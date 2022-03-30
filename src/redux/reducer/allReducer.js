import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { brandReducer } from "./brandReducer";
import { blogReducer } from "./blogReducer";

const allReducers = combineReducers({
    all_products:productReducer,
    product: selectedProductReducer,
    brands: brandReducer,
    blog: blogReducer,
});

export default allReducers;