import {
    SELLER_LOADING_ORDERS, SELLER_LOAD_ORDERS,
    SELLER_LOADING_PRODUCTS, SELLER_LOAD_PRODUCTS

} from "src/utils";

import { products } from "src/data/seller/products"
import { orders } from "src/data/seller/orders"

export const loadOrders = () => {

    const payload = {
        orders
    }

    return async dispatch => {
        await dispatch({
            type: SELLER_LOADING_ORDERS
        });
        await dispatch({
            type: SELLER_LOAD_ORDERS, payload: payload
        });



    };

};


export const loadProducts = () => {

    const payload = {
        products
    }

    return async dispatch => {
        await dispatch({
            type: SELLER_LOAD_PRODUCTS
        });
        await dispatch({
            type: SELLER_LOAD_PRODUCTS, payload: payload
        });



    };

};

