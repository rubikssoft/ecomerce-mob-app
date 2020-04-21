import {
    LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS,
    LOAD_SUBCATEGORIES, LOAD_SUB_CATEGORIES_SUCCESS,
    LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS,
} from "../../utils";


const initialState = {

    products: {
        loading: false,
        data: []

    },
    categories: {
        loading: false,
        data: []

    },
    subcategories: {
        loading: false,
        data: []

    }


}

export default (state = initialState, { type, payload }) => {

    switch (type) {



        case LOAD_CATEGORIES:
            return {
                ...state,

                categories: {
                    loading: true,
                    data: payload.categories
                },
            }
            break;
        case LOAD_CATEGORIES_SUCCESS:

            return {
                ...state,
                categories: {
                    loading: false,
                    data: state.categories.data
                },

            }
            break;

        case LOAD_SUBCATEGORIES:
            return {
                ...state,

                subcategories: {
                    loading: true,
                    data: payload.subcategories
                },
            }
            break;
        case LOAD_SUB_CATEGORIES_SUCCESS:

            return {
                ...state,
                subcategories: {
                    loading: false,
                    data: state.subcategories.data
                },

            }
            break;
        case LOAD_PRODUCTS:
            return {
                ...state,

                products: {
                    loading: true,
                    data: payload.products
                },
            }
            break;
        case LOAD_PRODUCTS_SUCCESS:

            return {
                ...state,
                products: {
                    loading: false,
                    data: state.products.data
                },

            }
            break;




        default:
            return state
    }
}
