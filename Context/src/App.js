import React, { useContext, useState } from "react";
import { ThemeContext } from "./themeContext";
import Header from "./Header";
import Button from "./Button";

function App(props) {
  const { name, onName } = useContext(ThemeContext);
  const [inputName, setName] = useState("anna");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleName = () => onName(inputName);

  return (
    <div>
      <Header />
      <input
        type="text"
        name="username"
        value={inputName}
        onChange={handleChange}
      ></input>
      <button onClick={handleName}>{`${name}submit`}</button>
      <Button />
    </div>
  );
}

export default App;
