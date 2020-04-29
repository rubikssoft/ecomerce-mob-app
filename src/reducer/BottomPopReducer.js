import {
    LOAD_BOTTOM_INFO, BOTTOM_INFO_OFF
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

        case BOTTOM_INFO_OFF:
            return {
                ...state,
                status: false,

            }
            break;

        default:
            return state
    }
}
