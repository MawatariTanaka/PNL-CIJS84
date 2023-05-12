import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    const taskLabels = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];
    const taskComponents = taskLabels.map((label) => (
      <Task key={label} label={label} />
    ));
    return <div id="task-list">{taskComponents}</div>;
  }
}

export default TaskList;
