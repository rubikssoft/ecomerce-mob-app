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
    activeCart: { "sellerid": 0, totalAmount: 0, count: 0, items: [] }

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
                    var totalAmount = 0;
                    var CartItems = cart[key].items;
                    var existing = false

                    CartItems.map((cv, ci) => {
                        if (cv.id == item.id) {

                            CartItems[ci] = item
                            existing = true
                        }
                    })
                    if (!existing) {
                        CartItems.push(item)
                    }

                    CartItems.map((i, k) => {
                        totalAmount = totalAmount + (i.price * i.unitvalue * i.count)
                    });
                    cart[key].items = CartItems
                    cart[key].totalAmount = totalAmount
                    cart[key].count = CartItems.length
                    activeCart = cart[key];
                }
            })
            const checkSeller = obj => obj.sellerid === seller.id;
            if (!cart.some(checkSeller)) {

                activeCart = {
                    count: 1,
                    sellerid: seller.id,
                    items: [item],
                    totalAmount: item.price * item.unitvalue * item.count
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
            activeCart = { totalAmount: 0, count: 0, items: [] }
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
                    var totalAmount = 0;
                    var CartItems = value.items;
                    CartItems = CartItems.filter(function (obj) {
                        return obj.id !== item.id;
                    });
                    CartItems.map((i, k) => (
                        totalAmount = totalAmount + (i.price * i.unitvalue * i.count)
                    ));
                    cart[key].items = CartItems
                    cart[key].totalAmount = totalAmount
                    cart[key].count = CartItems.length
                    activeCart = cart[key];
                }
            })
            return {
                ...state,
                cart: cart,
                activeCart: activeCart
            };




        default:
            return state
    }
}
