import React, { Component } from "react";
import { FaEllipsisH, FaPlus, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Card from "./Card";

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditingTitle: false,
      title: "Untitled",
      isDropdownOpen: false,
      isAddingCard: false,
      newCardTitle: "",
      cards: [],
    };
  }

  handleAddCard = () => {
    const newCard = { title: this.state.newCardTitle };
    const updatedCards = [...this.state.cards, newCard];
    this.setState({
      cards: updatedCards,
      isAddingCard: false,
      newCardTitle: "",
    });
  };

  render() {
    const {
      isEditingTitle,
      title,
      isDropdownOpen,
      isAddingCard,
      newCardTitle,
      cards,
    } = this.state;

    const { index, handleDeleteCardContainer } = this.props;

    return (
      <div className="card-container">
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {isEditingTitle ? (
            <input
              type="text"
              value={title}
              onChange={(event) => {
                this.setState({ title: event.target.value });
              }}
              onBlur={() => {
                this.setState({ isEditingTitle: false });
              }}
              autoFocus
            />
          ) : (
            <h3
              onDoubleClick={() => {
                this.setState({ isEditingTitle: true });
              }}
            >
              {title}
            </h3>
          )}
          <div
            onClick={() => {
              this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
            }}
            className="dropdown-card-container-icon"
          >
            <FaEllipsisH />
            {isDropdownOpen && (
              <div className="dropdown-card-container">
                <button
                  onClick={() => {
                    this.setState({ isAddingCard: true });
                  }}
                >
                  <FaPlus />
                  <p>Add a card</p>
                </button>
                <button onClick={() => this.setState({ isEditingTitle: true })}>
                  <FaPencilAlt />
                  <p>Update title</p>
                </button>
                <button onClick={() => handleDeleteCardContainer(index)}>
                  <FaTrashAlt />
                  <p>Delete</p>
                </button>
              </div>
            )}
          </div>
        </div>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} />
        ))}
        {isAddingCard ? (
          <div>
            <input
              type="text"
              value={newCardTitle}
              onChange={(event) => {
                this.setState({ newCardTitle: event.target.value });
              }}
              onBlur={this.handleAddCard}
              autoFocus
            />
          </div>
        ) : (
          <button
            className="add-card-button"
            onClick={() => {
              this.setState({ isAddingCard: true });
            }}
          >
            + Add a Card
          </button>
        )}
      </div>
    );
  }
}
