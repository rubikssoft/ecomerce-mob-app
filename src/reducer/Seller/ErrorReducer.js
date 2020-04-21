import {
    SET_ERROR, CLEAR_ERROR
} from "../../utils";

const initialState = {

    error: false,
    msg: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ERROR:
            return {
                error: true,
                msg: payload.msg
            }
            break;
        case CLEAR_ERROR:

            return {

                error: false,
                msg: ''
            }
            break;
        default:
            return state
    }
}
