import React, { Component } from "react";

class Card extends Component {
  render() {
    const {
      badge,
      imgSrc,
      altText,
      productName,
      rating,
      oldPrice,
      newPrice,
      buttonText,
    } = this.props;
    return (
      <div className="col mb-5">
        <div className="card h-100">
          {badge && (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              {badge}
            </div>
          )}
          <img className="card-img-top" src={imgSrc} alt={altText} />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{productName}</h5>
              {rating && (
                <div className="d-flex justify-content-center small text-warning mb-2">
                  {Array.from({ length: rating }, (_, i) => (
                    <div key={i} className="bi-star-fill" />
                  ))}
                </div>
              )}
              {oldPrice && (
                <span className="text-muted text-decoration-line-through">
                  {oldPrice}
                </span>
              )}
              {newPrice}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
