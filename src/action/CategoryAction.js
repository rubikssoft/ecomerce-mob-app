import {
    LOAD_CATEGORY,
} from "src/utils";
import { fetch, POST } from "src/apis";

export const setupcategory = (categories) => {
    return dispatch => {
        dispatch({
            type: LOAD_CATEGORY, payload: categories
        });
    };
};


export const loadDetails = (data) => {

    return async dispatch => {

        const post_data = {
            limit: data.limit,

        }

        var categories = []
        categories = await API.post('get-vendors', post_data).then(res => {
            const data = res.data
            if (data.status) {
                return data.data
            } else {
                dispatch({
                    type: SET_ERROR, payload: { ...data, type: 'SELLER_LOAD_ERROR', status: true }
                });
            }


        }).catch(err => {
            console.log(err);
            const error = {
                msg: 'Network Request Failed',
                errors: [],
                type: 'NETWORK_REQUEST_FAILED'
            }
            dispatch({
                type: SET_ERROR, payload: error
            });
        })


    };

};


