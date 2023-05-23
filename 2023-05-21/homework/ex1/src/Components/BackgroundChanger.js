import React, { Component } from "react";
import { FaChevronLeft } from "react-icons/fa";

export class BackgroundChanger extends Component {
  componentDidMount() {
    const images = require.context(
      "../../public/background",
      false,
      /\.(jpg)$/
    );
    const imageSrcs = images.keys().map(images);
    this.setState({ imageSrcs });
  }

  render() {
    const {
      backgroundChange,
      changeBackgroundChangerState,
      changeCurrentBackgroundImage,
    } = this.props;
    const className = `background-changer ${
      backgroundChange ? "slide-in" : "slide-out"
    }`;
    const { imageSrcs } = this.state || {};
    return (
      <div className={className}>
        <button
          className="back-button"
          onClick={() => changeBackgroundChangerState(false)}
        >
          <FaChevronLeft size={25} style={{ marginRight: "3px" }} />
          Back
        </button>
        <div className="background-button-container">
          {imageSrcs &&
            imageSrcs.map((src) => (
              <button
                key={src}
                className="background-button"
                style={{ backgroundImage: `url(${src})` }}
                onClick={() => changeCurrentBackgroundImage(src)}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default BackgroundChanger;
