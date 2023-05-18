import React, { Component } from "react";
import FrontPageHeader from "./FrontPage/FrontPageHeader";
import FrontPageMain from "./FrontPage/FrontPageMain";

export default class FrontPage extends Component {
  render() {
    return (
      <main>
        <FrontPageHeader />
        <FrontPageMain />
      </main>
    );
  }
}
