import * as actionType from "../constants";





export const cartReducer = (state = { status: false, prods: [] }, actions) => {
    switch (actions.type) {


        case actionType.ADD_TO_CART:
            const { prods, status } = actions.payload;
            return { status, prods };
        default:
            return state;
    }
}