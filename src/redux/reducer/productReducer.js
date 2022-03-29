import { ActionTypes } from "../constants/action-types";

const initialState = {
    products:[
        {
            id: 1,
            title: "New",
            category: "program"
        },
    ],
};

export const productReducer =(state=initialState, type) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}