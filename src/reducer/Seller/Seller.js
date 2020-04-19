import {
    LOAD_SELLER_DATA, LOAD_SELLER_DATA_SUCCESS,
    SELLER_LOADING_ORDERS, SELLER_LOAD_ORDERS,
    SELLER_LOADING_PRODUCTS, SELLER_LOAD_PRODUCTS,
} from "../../utils";

const initialState = {
    loading: false,
    seller: {},
    orders: {
        loading: false,
        data: []
    },
    products: {
        loading: false,
        data: []

    }


}

export default (state = initialState, { type, payload }) => {
    switch (type) {



        case LOAD_SELLER_DATA:
            return {
                ...state,
                seller: payload.seller,
                orders: {
                    loading: true,
                    data: payload.orders
                },
                products: {
                    loading: true,
                    data: payload.products
                }
            }
            break;
        case LOAD_SELLER_DATA_SUCCESS:

            return {
                ...state,
                loading: false,
                orders: {
                    loading: false,
                    data: state.orders.data
                },
                products: {
                    loading: false,
                    data: state.products.data
                },
            }
            break;
        //orders -- component
        case SELLER_LOADING_ORDERS:

            return {
                ...state,
                orders: {
                    loading: true,
                    data: state.orders.data
                },
            }
            break;
        case SELLER_LOAD_ORDERS:

            return {
                ...state,
                orders: {
                    loading: false,
                    data: payload.orders
                },
            }
            break;



        //products -- component
        case SELLER_LOADING_PRODUCTS:

            return {
                ...state,
                products: {
                    loading: true,
                    data: state.products.data
                },
            }
            break;
        case SELLER_LOAD_PRODUCTS:

            return {
                ...state,
                products: {
                    loading: false,
                    data: payload.products
                },
            }
            break;

        default:
            return state
    }
}
