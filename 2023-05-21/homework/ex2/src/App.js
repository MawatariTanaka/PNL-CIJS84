import React, { Component } from "react";
import "./App.css";

class Led extends Component {
  render() {
    return (
      <div className="led" style={{ backgroundColor: this.props.color }}></div>
    );
  }
}

export class App extends Component {
  state = {
    color: ["red", "yellow", "green"],
    currentColorIndex: 0,
  };
  render() {
    const leds = this.state.color.map((color, index) => {
      const isCurrentColor = index === this.state.currentColorIndex;
      const ledColor = isCurrentColor ? color : "white";
      return <Led key={index} color={ledColor} />;
    });

    return (
      <div className="App">
        <button
          className="next-btn"
          onClick={() => {
            this.setState({
              currentColorIndex:
                (this.state.currentColorIndex + 1) % this.state.color.length,
            });
          }}
        >
          Next
        </button>
        <div className="led-container">{leds}</div>
      </div>
    );
  }
}

export default App;
