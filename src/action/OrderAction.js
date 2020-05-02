
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