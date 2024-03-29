import { applyMiddleware } from "redux";
import { legacy_createStore as createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
