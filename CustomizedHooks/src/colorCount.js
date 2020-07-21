import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import useCounter from "./useCounter";
import style from "./styles.css";

function ColorCount(props) {
  const { count, increment } = useCounter();
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default ColorCount;
