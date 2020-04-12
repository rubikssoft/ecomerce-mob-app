import {
    ADD_TO_CART,REMOVE_FROM_CART
} from "src/utils";
import { fetch, POST } from "src/apis";

export const addToCart = (seller,item,count,type) => {
    const payload ={
        seller,
        item,
        count,
        type
    }
    //console.log(payload)
    return dispatch => {
        dispatch({
            type: ADD_TO_CART, payload: payload
        });
    };
};

export const removeCart = (seller , item) =>{
    const payload ={
        seller,
        item,
    }
    return dispatch => {
        dispatch({
            type: REMOVE_FROM_CART, payload: payload
        });
    };
}

