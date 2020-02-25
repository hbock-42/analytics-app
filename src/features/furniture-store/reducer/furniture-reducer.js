import { createStore, combineStore, applyMiddleware } from "redux";

const furnitureReducer = (
  state = {
    counter: 1,
    modelId: 0,
    modelPose: 0
  },
  action
) => {
  switch (action.type) {
    case "SELECT_ITEM":
      state = { ...state, modelId: action.payload, modelPose: 0 };
      break;
    case "SELECT_POSE":
      state = { ...state, modelPose: action.payload };
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
