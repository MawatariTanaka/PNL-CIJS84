import React from "react";

class CreateTask extends React.Component {
  render() {
    return (
      <div className="task-creator">
        <input placeholder="Enter your task here:" />
      </div>
    );
  }
}

export default CreateTask;
