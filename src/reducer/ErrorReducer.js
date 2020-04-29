import {
    SET_ERROR, CLEAR_ERROR
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
                msg: payload.msg,
                errors: payload.errors,
                type: payload.type

            }
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
