import { createStore } from "redux";
import allReducers from "./reducer/allReducer";
const store = createStore(
    allReducers, {},
    // For REDUX_DEVTOOLS
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
export default store;