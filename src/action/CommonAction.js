import {
    LOAD_COMMON_DATA
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
