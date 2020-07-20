import React, { Component } from "react";
import { ThemeContext } from "./themeContext";

import "./styles.css";

class Header extends Component {
  render() {
    const theme = this.context;
    return (
      <header className={`${theme}-theme`}>
        <h2>{theme === "light" ? `Light Theme` : "Dark Theme"}</h2>
      </header>
    );
  }
}
Header.contextType = ThemeContext;
export default Header;
