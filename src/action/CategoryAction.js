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


