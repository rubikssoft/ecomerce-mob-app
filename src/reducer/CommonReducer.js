import { LOAD_COMMON_DATA } from "../utils";



const initialState = {
    locations: [],
    categories: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMON_DATA:
            return {
                locations: action.payload.locations,
                categories: action.payload.categories
            };

        default:
            return state
    }
}
