
import {
    SET_ERROR, NETWORK_REQUEST_FAILED, CLEAR_ERROR
} from "src/utils";


import {
    URL
} from "src/utils/config";


import axios from "axios";





export const getSellerOrders = (post_data) => async (dispatch, getState) => {
    try {

        dispatch({ type: CLEAR_ERROR });
        const accessToken = getState().auth.token;

        let response = await axios.get(URL + 'get-orders?offset=' + post_data.offset + '&' + 'limit=' + post_data.limit, {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        })

        const data = response.data
        if (data.status) {
            return data.data.orders
        } else {
            dispatch({
                type: SET_ERROR, payload: { ...data, type: 'SELLER_ORDER_LOAD_ERROR', status: true }
            });
            return null;
        }

    } catch (err) {
        console.log(err);

        dispatch({
            type: SET_ERROR, payload: {
                msg: 'Network Request Failed',
                error: [],
                type: 'NETWORK_REQUEST_FAILED'
            }
        });
        return null
    }
}


export const getSellerProducts = (post_data) => async (dispatch, getState) => {
    try {
        dispatch({ type: CLEAR_ERROR });
        const accessToken = getState().auth.token;

        let response = await axios.post(URL + 'get-products', post_data, {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        })

        const data = response.data
        if (data.status) {
            return data.data.products
        } else {
            dispatch({
                type: SET_ERROR, payload: { ...data, type: 'SELLER_PRODUCTS_LOAD_ERROR', status: true }
            });
            return null;
        }

    } catch (err) {
        console.log(err);

        dispatch({
            type: SET_ERROR, payload: {
                msg: 'Network Request Failed',
                error: [],
                type: 'NETWORK_REQUEST_FAILED'
            }
        });
        return null
    }
}


export const deleteProducts = (post_data) => async (dispatch, getState) => {

    if (!post_data.selected.length) {
        return dispatch({
            type: SET_ERROR, payload: {
                msg: 'You must select a product to delete',
                type: "SELLER_DELETE_ERROR"
            }
        });
    } else {
        dispatch({
            type: CLEAR_ERROR, payload: {
                msg: 'You must select a product to delete',
                type: "SELLER_DELETE_ERROR"
            }
        });
    }

    try {
        const accessToken = getState().auth.token;

        let response = await axios.post(URL + 'delete-products', post_data, {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        })

        const data = response.data
        if (data.status) {
            return true
        } else {
            dispatch({
                type: SET_ERROR, payload: { ...data, type: 'SELLER_PRODUCTS_DELETE_ERROR', status: true }
            });
            return null;
        }

    } catch (err) {
        console.log(err);

        dispatch({
            type: SET_ERROR, payload: {
                msg: 'Network Request Failed',
                error: [],
                type: 'NETWORK_REQUEST_FAILED'
            }
        });
        return null
    }
}








