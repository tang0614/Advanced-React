import React, { Component } from "react";
import "./letter.css";

class CharComponent extends Component {
  render() {
    return (
      <div
        className="letter"
        onClick={() => this.props.deleteChar(this.props.letter)}
      >
        {this.props.letter}
      </div>
    );
  }
}

export default CharComponent;
