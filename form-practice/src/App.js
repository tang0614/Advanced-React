import React, { Component } from "react";
import Validation from "./validation";
import CharComponent from "./charComponent";

export default class App extends Component {
  state = {
    name: "",
  };
  giveName = (event) => {
    const name = event.target.value;

    this.setState({ name });
  };

  deleteChar = (letter) => {
    let name = this.state.name.split("");
    console.log(letter);
    let letterIndex = name.indexOf(letter);
    console.log(letterIndex);
    if (name[letterIndex]) {
      name = name.filter((char) => char !== letter).join("");
      this.setState({ name });
    }
  };

  render() {
    let len = this.state.name.length;
    const name = this.state.name;
    const nameArray = name.split("");

    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.giveName} />
        <p> {`length is ${len}`}</p>
        <Validation len={len} />
        {nameArray.map((char) => (
          <CharComponent letter={char} deleteChar={this.deleteChar} />
        ))}
      </div>
    );
  }
}
