import { CHANGE_TAG } from "../utils";



const initialState = {
    activeTag:''
}


export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAG:
            return {
                activeTag: action.payload,
               
            };

        default:
            return state
    }
}
