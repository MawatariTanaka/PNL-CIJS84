import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import BackgroundChanger from "./Components/BackgroundChanger";

class App extends Component {
  state = {
    backgroundChange: false,
    currentBackgroundImage: "/background/forest.jpg",
  };

  changeBackgroundChangerState = (postState) => {
    this.setState({
      backgroundChange: postState,
    });
  };

  changeCurrentBackgroundImage = (src) => {
    this.setState({
      currentBackgroundImage: src,
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: this.state.currentBackgroundImage
            ? `url(${this.state.currentBackgroundImage})`
            : "none",
        }}
      >
        <Header
          backgroundChange={this.state.backgroundChange}
          changeBackgroundChangerState={this.changeBackgroundChangerState}
        />
        <BackgroundChanger
          backgroundChange={this.state.backgroundChange}
          changeBackgroundChangerState={this.changeBackgroundChangerState}
          changeCurrentBackgroundImage={this.changeCurrentBackgroundImage}
        />
      </div>
    );
  }
}

export default App;
