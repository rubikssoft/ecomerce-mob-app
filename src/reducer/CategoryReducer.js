import { LOAD_CATEGORY, LOAD_USER } from "../utils";
import { PURGE, REHYDRATE } from 'redux-persist';
import { purgeStoredState } from 'redux-persist'


const initialState = {
    category: {
        "id": "1",
        "name": "Grocerry",
    }
}


export default (state = initialState, action) => {

    switch (action.type) {

        case LOAD_CATEGORY:
            return {
                category: action.payload
            };
        case LOAD_USER:
            return {
                category: {
                    "id": "1",
                    "name": "Grocerry",
                }
            }
        default:
            return state
    }
}
