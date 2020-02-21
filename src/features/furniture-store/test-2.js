import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Test2 = () => {
  const counter = useSelector(state => state.furniture.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>
        Click to increment
      </button>
    </div>
  );
};

export default Test2;
