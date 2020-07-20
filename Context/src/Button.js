import React from "react";
import { ThemeContextConsumer } from "./themeContext";
import "./styles.css";

function button(props) {
  return (
    <ThemeContextConsumer>
      {({ theme, onChange }) => (
        <button className={`${theme}-theme`} onClick={onChange}>
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

// button.defaultProps = {
//   theme : 'light'
// }

export default button;
