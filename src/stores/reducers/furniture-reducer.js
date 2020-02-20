import { createStore, combineStore, applyMiddleware } from "redux";

const furnitureReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_ITEM":
      break;
    default:
      break;
  }
  return state;
};

export default furnitureReducer;
