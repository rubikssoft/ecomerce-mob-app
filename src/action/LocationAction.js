import { LOAD_LOCATION } from "src/utils";
import { fetch, POST } from "src/apis";

export const setuplocation = (locaton) => {
    console.log(locaton)
    return dispatch => {
        dispatch({
            type: LOAD_LOCATION, payload: locaton
        });
    };
};
