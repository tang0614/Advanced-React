import React, { Component } from "react";

class Validation extends Component {
  render() {
    return (
      <div>
        {parseInt(this.props.len) > 5
          ? "text is too long"
          : "text is too short"}
      </div>
    );
  }
}

export default Validation;
