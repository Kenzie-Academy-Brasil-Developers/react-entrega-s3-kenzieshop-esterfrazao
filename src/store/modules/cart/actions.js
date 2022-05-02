import { ADD_CART, CLEAR_CART, REMOVE_CART } from "./actionTypes";

export const addProdut = (list) => ({
  type: ADD_CART,
  list,
});

export const removeProduct = (list) => ({
  type: REMOVE_CART,
  list,
});

export const clearCart = () => ({
  type: CLEAR_CART,
  list: [],
});
