import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const store = configureStore({ reducer, preloadedState: initialState });

export default store;
