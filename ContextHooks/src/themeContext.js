import React, { Component } from "react";
const ThemeContext = React.createContext();
const { Provider, Consumer } = ThemeContext;

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: "dark", name: "" };
  }

  handleChange() {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  }

  handleName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <Provider
        value={{
          name: this.state.name,
          onName: (name) => {
            this.handleName(name);
          },
          theme: this.state.theme,
          onChange: () => {
            this.handleChange();
          },
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer, ThemeContext };
