import React, { Component } from "react";
import CardContainer from "./CardContainer";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContainers: [],
    };
  }

  handleAddCardContainer = () => {
    this.setState((prevState) => ({
      cardContainers: [...prevState.cardContainers, {}],
    }));
  };

  handleDeleteCardContainer = (key) => {
    this.setState((prevState) => ({
      cardContainers: prevState.cardContainers.filter(
        (container, index) => index !== key
      ),
    }));
  };

  render() {
    return (
      <main>
        {this.state.cardContainers.map((container, index) => (
          <CardContainer
            key={index}
            index={index}
            handleDeleteCardContainer={this.handleDeleteCardContainer}
          />
        ))}
        <button
          className="add-card-container-button"
          onClick={this.handleAddCardContainer}
        >
          + Add Card Container
        </button>
      </main>
    );
  }
}

export default Main;
