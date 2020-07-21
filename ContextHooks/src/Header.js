import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

import "./styles.css";

function Header(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`${theme}-theme`}>
      <h2>{theme === "light" ? `Light Theme` : "Dark Theme"}</h2>
    </header>
  );
}

export default Header;
