
import {
    SET_ERROR, NETWORK_REQUEST_FAILED
} from "src/utils";

import { URL } from 'src/utils/config'

import axios from "axios";

export const loadCategories = (data) => async (dispatch, getState) => {
    try {
        const accessToken = getState().auth.token;
        let response = await axios.get(URL + 'get-categories', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        })
        const data = response.data
        if (data.status) {
            return data.data.categories
        } else {
            dispatch({
                type: SET_ERROR, payload: { ...data, type: 'LOAD_CATEGORIES_ERROR', status: true }
            });
            return null;
        }

    } catch (err) {
        console.log(err);

        dispatch({
            type: SET_ERROR, payload: {
                msg: 'Network Request Failed', type: 'NETWORK_REQUEST_FAILED'
            }
        });
        return null
    }
}





export const addNewProduct = (post_data) => async (dispatch, getState) => {
    try {
        const accessToken = getState().auth.token;
        let response = await axios.post(URL + 'add-product', post_data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + accessToken,
            }

        })
        const data = response.data
        if (data.status) {
            return data.data.product
        } else {
            console.log(data)
            dispatch({
                type: SET_ERROR, payload: { ...data, type: 'ADD_PRODUCT_ERROR', status: true }
            });
            return null;
        }

        // response.json().then(data => {

        // })

        // var res = response.data;
        // console.log(res)
        // if (response.status) {
        //     return data.data.categories
        // } else {
        //     console.log(data)
        //     dispatch({
        //         type: SET_ERROR, payload: { ...response, type: 'ADD_PRODUCTS_ERROR', status: true }
        //     });
        //     return null;
        // }

    } catch (err) {
        console.log(err);

        dispatch({
            type: SET_ERROR, payload: {
                msg: 'Network Request Failed', type: 'NETWORK_REQUEST_FAILED'
            }
        });
        return null
    }
}


// export const addNewProduct = async (data) => {


//     delete axios.defaults.headers.common["Content-Type"]
//     return res = axios({
//         url: URL + 'add-product',
//         method: 'POST',
//         data: data.post_data,
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             'Authorization': 'Bearer ' + data.auth.token,
//             "Accept": 'application/json',
//         }
//     })
//         .then(resp => {
//             console.log('success but error')

//             console.log(resp.data)
//             return [{
//                 status: true
//             }]
//         }

//         )
//         .catch(error => {
//             console.log('error');
//             console.error(error)
//             return [{
//                 status: false
//             }]

//         }



//         );

//     // }



//     // console.log(data.post_data)
//     // return status = await fetch(URL + 'add-product', {
//     //     method: 'post',
//     //     headers: {

//     //         "Content-Type": "multipart/form-data;boundary=222dfasdF",
//     //         "Accept": 'application/json',
//     //         'Authorization': 'Bearer ' + data.auth.token
//     //     },
//     //     body: data.post_data
//     // }).then(response => {

//     //     console.log(response)
//     //     console.log("image uploaded")
//     //     return true;
//     // }).catch(err => {

//     //     console.log(err)
//     //     return false;
//     // })
// }

export const editProduct = (post_data) => async (dispatch, getState) => {
    try {
        console.log(post_data)
        const accessToken = getState().auth.token;
        let response = await axios.post(URL + 'edit-product', post_data, {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'multipart/form-data'
            }

        })
        const data = response.data
        console.log(data)
        if (data.status) {
            return data.data.product
        } else {
            console.log(data)
            dispatch({
                type: SET_ERROR, payload: { ...data, type: 'ADD_PRODUCT_ERROR', status: true }
            });
            return null;
        }
    } catch (err) {
        console.log(err);

        dispatch({
            type: SET_ERROR, payload: {
                msg: 'Network Request Failed', type: 'NETWORK_REQUEST_FAILED'
            }
        });
        return null
    }
}

