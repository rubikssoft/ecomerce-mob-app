import {
    LOAD_LOCATION, LOADSELLERS,
    LOAD_SELLERS, SET_ACTIVE_SELLER, SELLER_LOADING, SET_ERROR
} from "src/utils";
import axiosConfig from '../utils/axioConfig';
const API = axiosConfig()
console.log(API)
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
                errors: [],
                type: 'NETWORK_REQUEST_FAILED'
            }
            dispatch({
                type: SET_ERROR, payload: error
            });
        })
        //load sellers from api by sending location data

        // let sellers = [
        //     {
        //         id: 32,
        //         name: 'Test Shop',
        //         place: 'Mukkam ',
        //         category: 'Grocery , Test Cate1 ',
        //         phone: '98765433455',
        //         img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
        //     }, {
        //         id: 33,
        //         name: 'Test Shop 1',
        //         place: 'Mukkam ',
        //         category: 'Grocery , Test Cate1 ',
        //         phone: '98765433455',
        //         img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
        //     }, {
        //         id: 34,
        //         name: 'Test Shop 2',
        //         place: 'Mukkam ',
        //         category: 'Grocery , Test Cate1 ',
        //         phone: '98765433455',
        //         img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
        //     }, {
        //         id: 35,
        //         name: 'Test Shop 3',
        //         place: 'Mukkam ',
        //         category: 'Grocery , Test Cate1 ',
        //         phone: '98765433455',
        //         img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
        //     },
        // ]
        // dispatch({
        //     type: LOAD_SELLERS, payload: sellers
        // });

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

