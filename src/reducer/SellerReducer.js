import {
    LOAD_SELLERS,
    SET_ACTIVE_SELLER,
    SELLER_LOADING
} from "../utils";
const initialState = {
    sellerLoading: false,
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
            case SELLER_LOADING:
                return{
                    ...state,
                    sellerLoading:payload
                }
        case SET_ACTIVE_SELLER:
            return {
                ...state,
                activeSeller: payload
            }
        default:
            return state
    }
}
