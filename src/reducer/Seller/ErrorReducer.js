import {
    SET_ERROR, CLEAR_ERROR
} from "../../utils";

const initialState = {

    error: false,
    type: '',
    msg: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ERROR:
            return {
                error: true,
                msg: payload.msg,
                type: payload.type
            }
            break;
        case CLEAR_ERROR:
            return {

                error: false,
                type: '',
                msg: ''
            }
            break;
        default:
            return state
    }
}
