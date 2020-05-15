import { LOAD_LOCATION, LOAD_USER } from "../utils";
import { PURGE, REHYDRATE } from 'redux-persist';
import { purgeStoredState } from 'redux-persist'


const initialState = {
    location: {}
}


export default (state = initialState, action) => {

    switch (action.type) {

        case LOAD_LOCATION:
            return {
                location: action.payload
            };
        case LOAD_USER:
            return {
                location: action.payload.location
            };
        default:
            return state
    }
}
