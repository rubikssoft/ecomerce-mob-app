import { LOAD_USER, UNLOAD_USER, LOAD_USER_DETAILS } from "src/utils";
const initialState = {
    isAuthenticated: false,
    user: {},
    userDetails: {
        "id": 21,
        "user_id": 22,
        "address": null,
        "city": null,
        "state": null,
        "zip": null,
        "image": "shop.png",
        "created_at": "2020-04-30T10:04:44.000000Z",
        "updated_at": "2020-04-30T10:04:44.000000Z"
    },
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
                userDetails: payload.user_details,
                isAuthenticated: true
            }
            break;
        case UNLOAD_USER:
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
                ...data,
                userDetails: payload.user_details

            }

        default:
            return state
    }
}
