import { combineReducers } from "@reduxjs/toolkit";
import { getProductsReducer, getProductDetail, getProductsById } from "./Reducers/productReducer.js";
import { cartReducer } from "./Reducers/cartReducer.js";
import filterReducer from "./Reducers/FilterReducer.js";



const rootReducers = combineReducers({
   getProd: getProductsReducer,
   getProdDetail: getProductDetail,
   cart: cartReducer,
   filterReducer: filterReducer,
   getProdById: getProductsById,

})


export default rootReducers;

