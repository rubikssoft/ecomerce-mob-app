import {
    SET_ACTIVE_SELLER
} from "src/utils";
import { fetch, POST } from "src/apis";

export const setActiveSeller = (seller) => {
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_SELLER, payload: seller
        });
    };
};

