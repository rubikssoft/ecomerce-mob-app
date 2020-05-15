import {
    SET_ERROR
} from "src/utils";
import axiosConfig from 'src/utils/axioConfig';
const API = axiosConfig()

export const getVendors = (data) => {


    const post_data = {
        limit: data.limit,
        offset: data.offset,
        location_id: data.location ? data.location.location.id : 0,
        category_id: data.category ? data.category.category.id : 0
    }

    var vendors = null

    return vendors = async dispatch => {
        return await API.post('/get-vendors', post_data).then(res => {
            const data = res.data

            if (data.status) {

                return data.data.vendors
            } else {
                dispatch({
                    type: SET_ERROR, payload: { ...data, type: 'CUSTOMER_SELLER_LOAD_ERROR', status: true }
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