import { ActionTypes } from "../constants/action-types";

export const setBrands = (brand) =>{
    return{
        type:ActionTypes.SET_BRANDS,
        payload:brand
    }
};
