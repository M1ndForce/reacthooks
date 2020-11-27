import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num + 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = complexCompute(number);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  return (
    <>
      <h1 style={styles}>Finding prop: {computed}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Remove
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
    </>
  );
}

export default App;
