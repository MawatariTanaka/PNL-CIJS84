import React, { Component } from "react";

export class Header extends Component {
  render() {
    const { changeBackgroundChangerState, backgroundChange } = this.props;
    const className = `background-change-button ${
      backgroundChange ? "fade-out" : "fade-in"
    }`;
    return (
      <header>
        <h1>Daily Trello</h1>
        <button
          className={className}
          onClick={() => changeBackgroundChangerState(true)}
        >
          Change Background
        </button>
      </header>
    );
  }
}

export default Header;
