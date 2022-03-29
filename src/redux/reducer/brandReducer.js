import { ActionTypes } from "../constants/action-types";

const initialState = {
    brands:[],
};

export const brandReducer =(state=initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_BRANDS:
            return {...state, brands:payload};
        default:
            return state;
    }
};