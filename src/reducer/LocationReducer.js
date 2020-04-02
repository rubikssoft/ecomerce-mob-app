import { LOAD_LOCATION } from "../utils";
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
            REHYDRATE:    // This added just to show that this action type also exists, can be omitted. 
            console.log("REHYDRATING!!!!");
            return state;
            PURGE:
            console.log("PURGING!!!!");
            return {};
        default:
            return state
    }
}
