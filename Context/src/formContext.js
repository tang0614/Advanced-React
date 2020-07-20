import React, { Component } from "react";
const FormContext = React.createContext();
const { Provider, Consumer } = FormContext;

class FormContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange() {
    this.setState({});
  }

  render() {
    return (
      <Provider
        value={{
          name: this.state.name,
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

export { FormContextProvider, Consumer as FormContextConsumer };
