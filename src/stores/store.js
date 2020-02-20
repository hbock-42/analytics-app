import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import routing from "../router";
import furnitureReducer from "./reducers/furniture-reducer";

const store = createStore(
  combineReducers({ furnitureReducer }),
  {},
  applyMiddleware(logger)
);

const StoreProvider = () => (
  <Provider store={store}>
    <routing />
  </Provider>
);

export default StoreProvider;
