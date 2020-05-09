import {
    LOAD_COMMON_DATA, UPDATE_USER_DATA, BOTTOM_INFO_OFF, SET_ERROR, LOAD_BOTTOM_INFO
} from "src/utils";

import { URL } from 'src/utils/config'

import axios from "axios";

export const loadDetails = () => async (dispatch, getState) => {
    try {
        const accessToken = getState().auth.token;
        let response = await axios.get(URL + 'get-details', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        })
        const data = response.data
        if (data.status) {
            dispatch({
                type: LOAD_COMMON_DATA, payload: data.data
            });
        } else {
            dispatch({
                type: SET_ERROR, payload: { ...data, type: 'LOAD_CATEGORIES_ERROR', status: true }
            });
            return null;
        }

    } catch (err) {

        dispatch({
            type: SET_ERROR, payload: {
                msg: 'Network Request Failed', type: 'NETWORK_REQUEST_FAILED'
            }
        });
        return null
    }
}



export const updateProfile = (post_data) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOAD_BOTTOM_INFO, payload: { data: { type: 'loading', msg: 'Updating' } } });
        const accessToken = getState().auth.token;
        let response = await axios.post(URL + 'update-user-details', post_data, {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'multipart/form-data',
            }
        })

        const data = response.data
        if (data.status) {


            dispatch({
                type: UPDATE_USER_DATA, payload: data.data
            });

            dispatch({ type: BOTTOM_INFO_OFF });


            return data;
        } else {
            dispatch({ type: BOTTOM_INFO_OFF });
            return data;
        }

    } catch (err) {
        console.log(err)
        dispatch({
            type: SET_ERROR, payload: {
                msg: 'Network Request Failed', type: 'NETWORK_REQUEST_FAILED'
            }
        });
        return null
    }
}
