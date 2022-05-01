import { ADD_CART, REMOVE_CART } from "./actionTypes";

const cartReducer = (
  state = localStorage.getItem("@Kenzieshop:cart") || [],
  action
) => {
  switch (action.type) {
    case ADD_CART:
      return action.list;
    case REMOVE_CART:
      return action.list;

    default:
      return state;
  }
};

export default cartReducer;
