import React, { useState, useEffect } from "react";

function EffectHook(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect is triggered ..count is ${count}`);
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default EffectHook;
