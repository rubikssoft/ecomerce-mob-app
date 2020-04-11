import { ADD_TO_CART } from "../utils";



const initialState = {
    cart: [
        {
            "sellerid": 0,
            "count": 0,
            "totalAmount": 0,
            items: [],
        }
    ],
    
}


export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            let seller = action.payload.seller;
            let item = action.payload.item;
            let cart = state.cart;
            cart.map((value, key) => {
                if (value.sellerid === seller.id) {
                    cart[key].totalAmount += item.price;
                    cart[key].count++;
                    cart[key].items.filter((d) => d.id !== item.id).map(() => {
                        cart[key].items.push(item)
                    })
                }
            })
            const checkSeller = obj => obj.sellerid === seller.id;
            if (!cart.some(checkSeller)) {
                const cartiem = {
                    count: 1,
                    sellerid: seller.id,
                    items: [item],
                    totalAmount: item.price
                }
                cart.push(cartiem)
            }
            return {
                ...state,
                cart: cart
            };

        default:
            return state
    }
}
