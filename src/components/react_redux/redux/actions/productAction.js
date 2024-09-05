import { useEffect } from "react";

import * as actionType from "../constants";
import axios from "axios";


export const getProducts = () => async (dispatch) => {

   try {
      const { status, data } = await axios.get("https://clone-backend-f9y5.onrender.com/product-api/get-products");

      dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: { ...data, loading: false } });
   }
   catch (err) {
      dispatch({ type: actionType.GET_PRODUCTS_FAILED, payload: { error: err.message, loading: false } });
   }
}

export const getProductDetails = (cat_id, prod_id) => async (dispatch) => {
   try {
      dispatch({ type: actionType.GET_PRODUCT_DETAIL_REQUEST })
      const { status, data } = await axios.get(`https://clone-backend-f9y5.onrender.com/product-api/get-product-detail/${cat_id}/${prod_id}`);

      dispatch({ type: actionType.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
   }

   catch (err) { dispatch({ type: actionType.GET_PRODUCT_DETAIL_FAILED, payload: err.message }); }
}
export const getProductsById = (cat_id) => async (dispatch) => {
   try {
      dispatch({ type: actionType.GET_PRODUCT_DETAIL_REQUEST })
      const { status, data } = await axios.get(`https://clone-backend-f9y5.onrender.com/product-api/get-product/${cat_id}`)
      console.log(status);
      dispatch({ type: actionType.GET_PRODUCTS_BY_ID_SUCCESS, payload: data });
   }

   catch (err) { dispatch({ type: actionType.GET_PRODUCT_DETAIL_FAILED, payload: err.message }); }
}







