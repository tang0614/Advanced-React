import React, { useState } from "react";
const ThemeContext = React.createContext();
const { Provider, Consumer } = ThemeContext;

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  const [name, setName] = useState("");

  const handleChange = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  const handleName = (inputname) => {
    setName(inputname);
  };
  return (
    <Provider
      value={{
        name,
        onName: handleName,
        theme,
        onChange: handleChange,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer, ThemeContext };
