import {
    ADD_TO_CART
} from "src/utils";
import { fetch, POST } from "src/apis";

export const addToCart = (seller,item,count,type) => {
    const payload ={
        seller,
        item,
        count,
        type
    }
    console.log(payload)
    return dispatch => {
        dispatch({
            type: ADD_TO_CART, payload: payload
        });
    };
};

