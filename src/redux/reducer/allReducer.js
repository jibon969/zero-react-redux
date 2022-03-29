import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const allReducers = combineReducers({
    all_products:productReducer,
});

export default allReducers;