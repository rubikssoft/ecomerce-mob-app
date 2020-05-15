import {
    LOAD_LOCATION, LOADSELLERS,
    LOAD_SELLERS, SET_ACTIVE_SELLER, SELLER_LOADING, SET_ERROR
} from "src/utils";
import axiosConfig from '../utils/axioConfig';
const API = axiosConfig()

export const setuplocation = (locaton) => {
    return dispatch => {
        dispatch({
            type: LOAD_LOCATION, payload: locaton
        });
    };
};


export const loadSellers = (data) => {

    return async dispatch => {


        dispatch({
            type: SELLER_LOADING, payload: true
        });


        const post_data = {
            limit: data.limit,
            offset: data.offset,
            location_id: data.location ? data.location.id : 0,
            category_id: data.category ? data.category.id : 0
        }


        await API.post('get-vendors', post_data).then(res => {
            const data = res.data
            if (data.status) {
                dispatch({
                    type: LOAD_SELLERS, payload: data.data.vendors
                });
                dispatch({
                    type: SELLER_LOADING, payload: false
                });

            } else {
                dispatch({
                    type: SET_ERROR, payload: { ...data, type: 'SELLER_LOAD_ERROR', status: true }
                });
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


    };
};

export const setActiveSeller = (seller) => {

    //set active seller 

    return dispatch => {
        dispatch({
            type: SET_ACTIVE_SELLER, payload: seller
        });
    };
};

