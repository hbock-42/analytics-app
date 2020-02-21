import { createStore, combineStore, applyMiddleware } from "redux";

const furnitureReducer = (
  state = {
    counter: 1
  },
  action
) => {
  switch (action.type) {
    case "SELECT_ITEM":
      break;
    case "ADD":
      state = { ...state, counter: state.counter + action.payload };
      break;
    default:
      break;
  }
  return state;
};

export default furnitureReducer;
