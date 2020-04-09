import {
    LOAD_SELLERS,
    SET_ACTIVE_SELLER
} from "../utils";
const initialState = {
    sellerLoading: true,
    sellers: [],
    activeSeller: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case LOAD_SELLERS:
            return {
                ...state,
                sellers: payload
            }
            break;
        case SET_ACTIVE_SELLER:
            return {
                ...state,
                activeSeller: payload
            }
        default:
            return state
    }
}
