import { LOAD_USER, UNLOAD_USER } from "src/utils";
const initialState = {
    isAuthenticated: false,
    user: {},
    token: '',
    type: ''


}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case LOAD_USER:
            return {
                user: payload,
                token: payload.token,
                type: payload.type,
                isAuthenticated: true
            }
            break;
        case UNLOAD_USER:
            return {
                user: {},
                token: '',
                type: '',
                isAuthenticated: false
            }
            break;

        default:
            return state
    }
}
