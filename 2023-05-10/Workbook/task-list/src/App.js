import React from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CreateTask /> <TaskList />
      </div>
    );
  }
}

export default App;
