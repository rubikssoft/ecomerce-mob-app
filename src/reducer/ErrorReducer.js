import {
    SET_ERROR, CLEAR_ERROR, LOAD_BOTTOM_INFO, OTP_SUCEESS, SELLER_LOADING
} from "../utils";

const initialState = {
    status: false,
    msg: '',
    errors: [],
    type: ''

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_ERROR:

            return {
                status: true,
                msg: payload.message,
                errors: payload.error,
                type: payload.type

            }
        case LOAD_BOTTOM_INFO:
        case SELLER_LOADING:
        case OTP_SUCEESS:
        case CLEAR_ERROR:
            return {
                status: false,
                msg: '',
                errors: [],
                type: ''

            }
        default:
            return state
    }
}
