import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { title } = this.props;
    const cardTitle = title || "Untitled";
    return <div className="card">{cardTitle}</div>;
  }
}
