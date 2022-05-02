import { addProdut, removeProduct, clearCart } from "./actions";

export const addProductThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const list = [...cart];

  if (product.quantity >= 1) {
    const cartProduct = list.find(({ id }) => id === product.id);
    cartProduct.quantity += 1;
  } else {
    product.quantity = 1;
    list.push(product);
  }
  localStorage.setItem("@Kenzieshop:cart", JSON.stringify(list));
  dispatch(addProdut(list));
};

export const removeProductThunk = (id) => (dispatch, getState) => {
  const { cart } = getState();
  let list = [...cart];

  const product = list.find((item) => item.id === id);
  product.quantity -= 1;

  if (product.quantity === 0) {
    list = cart.filter((product) => product.id !== id);
  }
  localStorage.setItem("@Kenzieshop:cart", JSON.stringify(list));
  dispatch(removeProduct(list));
};

export const clearCartThunk = () => (dispatch) => {
  localStorage.clear();
  dispatch(clearCart());
};
