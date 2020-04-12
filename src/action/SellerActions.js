import {
    SET_ACTIVE_SELLER,LOAD_CART
} from "src/utils";
import { fetch, POST } from "src/apis";

export const setActiveSeller = (seller) => {
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_SELLER, payload: seller
        });
        dispatch({
            type: LOAD_CART, payload: seller
        });
        
    };
};

