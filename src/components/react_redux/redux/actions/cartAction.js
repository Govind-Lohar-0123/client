import * as actionType from "../constants";
import axios from "axios";
import { url } from "../../../pages/partials/data";
export const addToCart = (prod) => async (disptach) => {

    try {
        const response = await axios({
            method: 'post',
            url: `${url}/cart-api/add-to-cart`,
            data: { prod: prod }
        });

        

    }
    catch (err) { }
    window.location.reload();

}
export const getAllCarts = () => async (disptach) => {
    try {
        const { state, data } = await axios({
            method: 'get',
            url: `${url}/cart-api/get-all-carts`,

        });

        disptach({ type: actionType.ADD_TO_CART, payload: data });
    }
    catch (err) {
        disptach({ type: actionType.ADD_TO_CART, payload: { status: false, prods: [] } });

    }
}
export const removeFromCart = (prod_id) => (disptach) => {
    
       const response = axios({
            method: 'delete',
            url: `${url}cart-api/remove-from-cart/${prod_id}`,

        });

        response.then( ()=>window.location.reload()
                     , ()=>window.location.reload()
                    )
        

}
