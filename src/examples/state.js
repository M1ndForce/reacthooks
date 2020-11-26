import React, { useState } from "react";

function computeInitialCounter() {
  console.log("some calculation");
  return Math.trunc(Math.random() * 20);
}
const [counterState, setCounter] = useState(() => {
  return computeInitialCounter();
});
const [state, setState] = useState({
  date: 22222,
  title: "Counter",
});
function increment() {
  setCounter((prevCounter) => {
    return prevCounter + 1;
  });
  setCounter((prev) => prev + 1);
}
function decrement() {
  setCounter(counterState - 1);
}
function newTitle() {
  setState((prevState) => {
    return {
      ...prevState,
      title: "OLOLOLOLOL",
    };
  });
}
return (
  <div className="App">
    <h1>Counter : {counterState}</h1>
    <button onClick={increment} className="btn btn-success">
      Add
    </button>
    <button onClick={decrement} className="btn btn-danger">
      Remove
    </button>
    <button onClick={newTitle} className="btn btn-warning">
      New Title
    </button>
    <pre>{JSON.stringify(state)}</pre>
  </div>
);
