import { LOAD_USER, UNLOAD_USER, LOAD_USER_DETAILS, UPDATE_USER_DATA } from "src/utils";
import axios from "axios";
const initialState = {
    isAuthenticated: false,
    user: {},
    userDetails: {},
    token: '',
    type: ''


}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case LOAD_USER:
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token;
            return {
                user: payload,
                token: payload.token,
                type: payload.type,
                userDetails: payload.user_details,
                isAuthenticated: true
            }
            break;
        case UNLOAD_USER:
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + '';
            return {
                user: {},
                token: '',
                type: '',
                userDetails: {},
                isAuthenticated: false
            }
            break;

        case LOAD_USER_DETAILS:
            return {
                ...state,
                userDetails: payload.user_profile

            }
        case UPDATE_USER_DATA:

            return {
                ...state,
                userDetails: payload.user_profile,
                user: payload.user,

            }

        default:
            return state
    }
}
