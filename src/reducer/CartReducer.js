import {
    REMOVE_FROM_CART,
    ADD_TO_CART,
    LOAD_CART
} from "../utils";



const initialState = {
    cart: [
        {
            "sellerid": 0,
            "count": 0,
            "totalAmount": 0,
            items: [],
        }
    ],
    activeCart: []

}


export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            let seller = action.payload.seller;
            let item = action.payload.item;
            let cart = state.cart;
            let activeCart = state.activeCart;
            cart.map((value, key) => {
                if (value.sellerid === seller.id) {
                    let checkItem = itemobj => itemobj.id === item.id;
                    if (!cart[key].items.some(checkItem)) {

                        cart[key].totalAmount += item.price;
                        cart[key].count++;
                        cart[key].items.push(item)
                    }
                    activeCart = cart[key];
                }
            })
            const checkSeller = obj => obj.sellerid === seller.id;
            if (!cart.some(checkSeller)) {
                activeCart = {
                    count: 1,
                    sellerid: seller.id,
                    items: [item],
                    totalAmount: item.price
                }

                cart.push(activeCart)
            }

            return {
                ...state,
                cart: cart,
                activeCart: activeCart
            };

        case LOAD_CART:
            let ItemIndex = null;
            activeCart = { totalAmount: 0, count: 0 ,items:[]}
            ItemIndex = state.cart.findIndex(
                item => item.sellerid === action.payload.id
            );
            if (ItemIndex != -1) {
                activeCart = state.cart[ItemIndex];
            }
            return {
                ...state,
                activeCart: activeCart
            };

            break;

        case REMOVE_FROM_CART:
            seller = action.payload.seller;
            item = action.payload.item;
            cart = state.cart;
            activeCart = state.activeCart;
            cart.map((value, key) => {
                if (value.sellerid === seller.id) {
                    cart[key].items.map((cartitem, cartitemindex) => {

                        if (cartitem.id == item.id) {
                            cart[key].totalAmount -= item.price;
                            cart[key].count--;
                            cart[key].items.splice(cartitemindex, 1);

                        }

                    })
                    activeCart = cart[key];
                }
            })
            return {
                ...state,
                cart:cart,
                activeCart: activeCart
            };




        default:
            return state
    }
}
