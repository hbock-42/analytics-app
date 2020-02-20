import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import Routing from "../router";
import furnitureReducer from "./reducers/furniture-reducer";

const store = createStore(
  combineReducers({ furniture: furnitureReducer }),
  {},
  applyMiddleware(logger)
);

const StoreProvider = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);

export default StoreProvider;
