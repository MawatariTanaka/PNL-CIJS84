import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import FrontPage from "./Components/FrontPage";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <FrontPage />
        <Footer />
      </div>
    );
  }
}

export default App;
