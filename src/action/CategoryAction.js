import {
    LOAD_CATEGORY, SET_ERROR
} from "src/utils";
import axiosConfig from '../utils/axioConfig';
const API = axiosConfig()

export const setupcategory = (categories) => {
    return dispatch => {
        dispatch({
            type: LOAD_CATEGORY, payload: categories
        });
    };
};


export const loadCategories = (seller_id,tag) => {
    var categories = []
    return categories = async dispatch => {

        const post_data = {
            seller_id: seller_id,
            tags:tag

        }
        categories = await API.post('get-seller-categories', post_data).then(res => {
            const data = res.data
            if (data.status) {

                return data.data.categories
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



        return categories


    };

};



export const loadProducts = (data) => {
    var products = []

    return products = async dispatch => {
        data = {
            ...data,
            offset: 0,
            limit: 100
        }
        products = await API.post('get-products', data).then(res => {
            const data = res.data

            if (data.status) {

                return data.data.products
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
        return products


    };

}


