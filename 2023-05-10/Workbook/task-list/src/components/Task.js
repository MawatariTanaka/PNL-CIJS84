import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <input id={`task-checkbox-${this.props.label}`} type="checkbox" />
        <label htmlFor={`task-checkbox-${this.props.label}`}>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Task;
