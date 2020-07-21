import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import style from "./styles.css";

function ColorCount(props) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount(count + 1);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  console.log(`color is ${color}`);
  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default ColorCount;
