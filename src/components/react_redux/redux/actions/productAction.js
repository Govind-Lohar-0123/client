

import * as actionType from "../constants";
import axios from "axios";
import { url } from "../../../pages/partials/data";

export const getProducts = () => async (dispatch) => {

   try {
      const { status, data } = await axios.get(`${url}/product-api/get-products`);

      dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: { ...data, loading: false } });
   }
   catch (err) {
      dispatch({ type: actionType.GET_PRODUCTS_FAILED, payload: { error: err.message, loading: false } });
   }
}
export const getProductsByLimit = (page, limit) => async (dispatch) => {

   try {
      const { status, data } = await axios.get(`${url}/product-api/get-products/${page}/${limit}`);

      dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: { ...data, loading: false } });
   }
   catch (err) {
      dispatch({ type: actionType.GET_PRODUCTS_FAILED, payload: { error: err.message, loading: false } });
   }
}

export const getProductDetails = (prod_id) => async (dispatch) => {
   try {
      dispatch({ type: actionType.GET_PRODUCT_DETAIL_REQUEST })
      const { status, data } = await axios.get(`${url}/product-api/get-product-detail/${prod_id}`);

      dispatch({ type: actionType.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
   }

   catch (err) { dispatch({ type: actionType.GET_PRODUCT_DETAIL_FAILED, payload: err.message }); }
}
export const getProductsById = (prod_id) => async (dispatch) => {
   try {
      dispatch({ type: actionType.GET_PRODUCT_DETAIL_REQUEST })
      const { status, data } = await axios.get(`${url}/product-api/get-product/${prod_id}`)

      dispatch({ type: actionType.GET_PRODUCTS_BY_ID_SUCCESS, payload: data });
   }

   catch (err) { dispatch({ type: actionType.GET_PRODUCT_DETAIL_FAILED, payload: err.message }); }
}







