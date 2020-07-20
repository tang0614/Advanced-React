import React, { Component } from "react";
import { ThemeContextConsumer } from "./themeContext";
import Header from "./Header";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <Header />

        <ThemeContextConsumer>
          {({ name, onName }) => (
            <button
              onClick={() => {
                onName(this.state.name);
              }}
            >
              {`${name} submit`}
            </button>
          )}
        </ThemeContextConsumer>

        <input
          type="text"
          name="username"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>

        <Button />
      </div>
    );
  }
}

export default App;
