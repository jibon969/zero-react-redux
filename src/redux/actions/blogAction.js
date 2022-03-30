import { ActionTypes } from "../constants/action-types";

export const setBlog = (blog) =>{
    return{
        type:ActionTypes.SET_BLOG,
        payload:blog
    }
};
