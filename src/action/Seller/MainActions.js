import {
    LOAD_SELLER_DATA, LOAD_SELLER_DATA_SUCCESS
} from "src/utils";
import { fetch, POST } from "src/apis";

import { seller } from "../../data/seller/seller"
import { products } from "../../data/seller/products"
import { orders } from "../../data/seller/orders"
export const loadData = () => {

    const payload = {
        seller,
        products,
        orders
    }

    return async dispatch => {
        await dispatch({
            type: LOAD_SELLER_DATA, payload: payload
        });

        await dispatch({
            type: LOAD_SELLER_DATA_SUCCESS
        });

    };

};

