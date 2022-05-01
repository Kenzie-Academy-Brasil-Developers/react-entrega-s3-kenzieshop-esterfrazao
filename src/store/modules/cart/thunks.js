import { addProdut, removeProduct } from "./actions";

export const addProductThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const list = [...cart, product];
  localStorage.setItem("@Kenzieshop:cart", JSON.stringify(list));
  dispatch(addProdut(list));
};

export const removeProductThunk = (id) => (dispatch, getState) => {
  const { cart } = getState();
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("@Kenzieshop:cart", JSON.stringify(list));
  dispatch(removeProduct(list));
};
