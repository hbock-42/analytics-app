import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import Routing from "../router";
import furnitureReducer from "../features/furniture-store/reducer/furniture-reducer";

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
