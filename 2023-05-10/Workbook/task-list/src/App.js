import React from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CreateTask /> <TaskList /> <Footer />
      </div>
    );
  }
}

export default App;
