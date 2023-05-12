import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default Task;
