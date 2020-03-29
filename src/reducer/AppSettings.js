import {
    LOAD_SETTINGS
} from "../utils";

const initialState = {
    theme: [
        {
            headerbg: '#fff',
            commonFont: '#000',
            background: '#fff'

        }
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SETTINGS:
            return {
                ...state
            }
            break
        default:
            return state

    }
};

