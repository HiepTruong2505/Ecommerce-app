import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  createProductStart,
  createProductSuccess,
  createProductFailure,
} from "./productRedux";
import { publicRequest, userRequest } from "../requestMethod";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
//DELETE
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
//UPDATE
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};
//CREATE
export const createProduct = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    const res = await userRequest.post("/products", product);
    dispatch(createProductSuccess(res.data));
  } catch (error) {
    dispatch(createProductFailure());
  }
};
