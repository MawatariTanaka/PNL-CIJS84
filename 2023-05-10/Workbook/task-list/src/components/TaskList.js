import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    const taskLabels = [
      "Clean up bedroom",
      "Buy some milk",
      "Jogging",
      "Learn React",
      "Doing Exercises",
    ];
    const taskComponents = taskLabels.map((label) => (
      <Task key={label} label={label} />
    ));
    return <div className="task-list">{taskComponents}</div>;
  }
}

export default TaskList;
