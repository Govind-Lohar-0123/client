import * as actionType from "../constants";
export const getProductsReducer = (state = { loading: true }, actions) => {


    switch (actions.type) {
        case actionType.GET_PRODUCTS_SUCCESS: return actions.payload;
        case actionType.GET_PRODUCTS_FAILED: return actions.payload;
       
        default: return state;
    }
}

export const getProductDetail = (state = { loading: true, prod: [] }, actions) => {
    switch (actions.type) {
        case actionType.GET_PRODUCT_DETAIL_REQUEST:
            return { loading: true }
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return { loading: false, prod: actions.payload };
        case actionType.GET_PRODUCT_DETAIL_FAILED:
            return { loading: true, error: actions.payload }
        case actionType.GET_PRODUCT_DETAIL_RESET:
            return { loading: false, prod: {} }
        default: return state;
    }
}
export const getProductsById = (state = {}, actions) => {
    switch (actions.type) {
        case actionType.GET_PRODUCT_DETAIL_REQUEST:
            return { loading: true,status:false,prods:{} }
        case actionType.GET_PRODUCTS_BY_ID_SUCCESS:
            return { loading: false, status:true,prods: actions.payload };
        case actionType.GET_PRODUCTS_BY_ID_FAILED:
            return { loading: true, status:false,prods:{} }
        case actionType.GET_PRODUCT_DETAIL_RESET:
            return { loading: false,status:false, prods: {} }
        default: return state;
    }
}