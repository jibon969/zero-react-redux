import { ActionTypes } from "../constants/action-types";

const initialState = {
    blog:[],
};

export const blogReducer =(state=initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_BLOG:
            return {...state, blog:payload};
        default:
            return state;
    }
};
