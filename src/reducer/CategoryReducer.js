import { LOAD_CATEGORY } from "../utils";
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
