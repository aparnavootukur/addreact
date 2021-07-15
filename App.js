import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);
  function addnumber() {
    setTotal(number1 + number2);
  }

  return (
    <div className="App">
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      ></input>
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      ></input>
      <button onClick={addnumber}>add</button>
      <div>
        {total > 0 ? (
          <h1 style={{ color: "blue" }}>{total}</h1>
        ) : (
          <h1 style={{ color: "red" }}>{total}</h1>
        )}
      </div>
    </div>
  );
}
