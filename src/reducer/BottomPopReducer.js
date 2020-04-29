import {
    LOAD_BOTTOM_INFO, BOTTOM_INFO_OFF, SET_ERROR, OTP_SUCEESS, UNLOAD_USER
} from "../utils";
const initialState = {
    status: false,
    data: {
        type: 'loading',
        msg: ''
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case LOAD_BOTTOM_INFO:
            return {
                status: true,
                data: payload.data
            }
            break;
        case SET_ERROR:
        case OTP_SUCEESS:
        case BOTTOM_INFO_OFF:
        case UNLOAD_USER:
            return {
                ...state,
                status: false,

            }
            break;

        default:
            return state
    }
}
