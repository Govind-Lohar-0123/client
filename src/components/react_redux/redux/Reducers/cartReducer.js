import * as actionType from "../constants";
import { useDispatch } from "react-redux";

import axios from "axios";




export const cartReducer = (state = { status: true, prods: [] }, actions) => {
    switch (actions.type) {


        case actionType.ADD_TO_CART:
            const { prods, status } = actions.payload;
            return { status, prods };
        default:
            return state;
    }
}