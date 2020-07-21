import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import "./styles.css";

function Button(props) {
  const { theme, onChange } = useContext(ThemeContext);

  return (
    <button className={`${theme}-theme`} onClick={onChange}>
      Switch Theme
    </button>
  );
}

// button.defaultProps = {
//   theme : 'light'
// }

export default Button;
