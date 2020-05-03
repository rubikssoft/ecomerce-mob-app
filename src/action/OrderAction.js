
import {

    LOAD_BOTTOM_INFO,
    BOTTOM_INFO_OFF,
    SET_ERROR,
    CREATE_ORDER
} from "src/utils";

import axiosConfig from '../utils/axioConfig';
const API = axiosConfig()


export const createOrder = (data) => {

    var order_id = null;
    return order_id = async dispatch => {

        dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: 'Creating Order' } } });

        return await API.post('create-order', data).then(res => {
            const data = res.data
            if (data.status) {
                dispatch({ type: BOTTOM_INFO_OFF });
                return data.data.order.order_id

            } else {
                dispatch({
                    type: SET_ERROR, payload: { ...data, type: 'CREATE_ORDER_ERROR', status: true }
                });
                return null;
            }


        }).catch(err => {
            console.log(err);
            const error = {
                msg: 'Network Request Failed',
                error: [],
                type: 'NETWORK_REQUEST_FAILED'
            }
            dispatch({
                type: SET_ERROR, payload: error
            });
        })
    }
}


export const getCustomerOrders = (data) => {
    return orders = async dispatch => {
        return await API.get('/get-orders?offset=' + data.offset + '&' + 'limit=' + data.limit).then(res => {
            const data = res.data
            if (data.status) {

                return data.data.orders
            } else {
                dispatch({
                    type: SET_ERROR, payload: { ...data, type: 'CUSTOMER_ORDER_LOAD_ERROR', status: true }
                });
                return null;
            }


        }).catch(err => {
            console.log(err);
            const error = {
                msg: 'Network Request Failed',
                error: [],
                type: 'NETWORK_REQUEST_FAILED'
            }
            dispatch({
                type: SET_ERROR, payload: error
            });
        })
    }
}


export const orderStatusChange = (data) => {
    return async dispatch => {
        return await API.post('/change-order-status', data).then(res => {
            console.log(res)
            dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: 'Changing status' } } });
            const data = res.data
            if (data.status) {
                dispatch({ type: BOTTOM_INFO_OFF });
                return true
            } else {
                dispatch({
                    type: SET_ERROR, payload: { ...data, type: 'ORDER_STATUS_CHANGE_ERROR', status: true }
                });
                return null;
            }


        }).catch(err => {
            console.log(err);
            const error = {
                msg: 'Network Request Failed',
                error: [],
                type: 'NETWORK_REQUEST_FAILED'
            }
            dispatch({
                type: SET_ERROR, payload: error
            });
        })
    }


}

