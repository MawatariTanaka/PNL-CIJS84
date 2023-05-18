import React, { Component } from "react";
import PostRecap from "./PostRecap";

export default class FrontPageMain extends Component {
  render() {
    return (
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <PostRecap
              title="Man must explore, and this is exploration at its greatest"
              subtitle="Problems look mighty small from 150 miles up"
              author="Start Bootstrap"
              date="September 24, 2022"
            />
            <PostRecap
              title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
              author="Start Bootstrap"
              date="September 18, 2022"
            />
            <PostRecap
              title="Science has not yet mastered prophecy"
              subtitle="We predict too much for the next year and yet far too little for the next ten."
              author="Start Bootstrap"
              date="August 24, 2022"
            />
            <PostRecap
              title="Failure is not an option"
              subtitle="Many say exploration is part of our destiny, but it’s actually our duty to future generations."
              author="Start Bootstrap"
              date="July 8, 2022"
            />
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
