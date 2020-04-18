import {
    LOAD_LOCATION, LOADSELLERS,
    LOAD_SELLERS, SET_ACTIVE_SELLER, SELLER_LOADING
} from "src/utils";
import { fetch, POST } from "src/apis";

export const setuplocation = (locaton) => {
    return dispatch => {
        dispatch({
            type: LOAD_LOCATION, payload: locaton
        });
    };
};


export const loadSellers = (payload) => {

    return dispatch => {
        dispatch({
            type: SELLER_LOADING, payload: true
        });

        //load sellers from api by sending location data

        let sellers = [
            {
                id: 32,
                name: 'Test Shop',
                place: 'Mukkam ',
                category: 'Grocery , Test Cate1 ',
                phone: '98765433455',
                img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
            }, {
                id: 33,
                name: 'Test Shop 1',
                place: 'Mukkam ',
                category: 'Grocery , Test Cate1 ',
                phone: '98765433455',
                img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
            }, {
                id: 34,
                name: 'Test Shop 2',
                place: 'Mukkam ',
                category: 'Grocery , Test Cate1 ',
                phone: '98765433455',
                img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
            }, {
                id: 35,
                name: 'Test Shop 3',
                place: 'Mukkam ',
                category: 'Grocery , Test Cate1 ',
                phone: '98765433455',
                img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
            },
        ]
        dispatch({
            type: LOAD_SELLERS, payload: sellers
        });
        dispatch({
            type: SELLER_LOADING, payload: false
        });
    };
};

export const setActiveSeller = (seller) => {

    //set active seller 

    return dispatch => {
        dispatch({
            type: SET_ACTIVE_SELLER, payload: seller
        });
    };
};

