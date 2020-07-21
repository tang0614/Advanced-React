import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log(`componentDidMount..count is. ${this.state.count}`);
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate..count is. ${this.state.count}`);
  }

  onChange = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  render() {
    return <button onClick={this.onChange}>Click me</button>;
  }
}

export default App;
