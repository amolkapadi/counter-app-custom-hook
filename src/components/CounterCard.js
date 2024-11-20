import React from "react";
import useCounter from "./useCounter";
import "../App.css";

const CounterCard = () => {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div className="card">
      <h1 className="counter-value">Counter: {count}</h1>
      <div className="button-group">
        <button onClick={increment} className="btn increment-btn">
          Increment
        </button>
        <button onClick={decrement} className="btn decrement-btn">
          Decrement
        </button>
        <button onClick={reset} className="btn reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterCard;
