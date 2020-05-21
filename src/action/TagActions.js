import {
    CHANGE_TAG
} from "src/utils";


export const changeTag = (data) => async (dispatch, getState) => {

    dispatch({
        type: CHANGE_TAG, payload: data
    });
   
}

