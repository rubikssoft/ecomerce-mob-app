import {
    SELLER_LOADING_ORDERS, SELLER_LOAD_ORDERS,
    SELLER_LOADING_PRODUCTS, SELLER_LOAD_PRODUCTS,
    SET_ERROR, CLEAR_ERROR

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
            type: SELLER_LOADING_PRODUCTS
        });
        await dispatch({
            type: SELLER_LOAD_PRODUCTS, payload: payload
        });



    };

};



export const deleteProducts = (selected) => {


    if (!selected.length) {
        return async dispatch => {

            dispatch({
                type: SET_ERROR, payload: {
                    msg: 'You must select a product to delete'
                }
            });
        };

    }


    const payload = {
        products
    }
    //delete-product-fetch-call-return-new-products
    //seletcted - is an array with product id



    return async dispatch => {


        await dispatch({
            type: CLEAR_ERROR
        });
        await dispatch({
            type: SELLER_LOADING_ORDERS
        });
        await dispatch({
            type: SELLER_LOAD_ORDERS, payload: payload
        });



    };

};
