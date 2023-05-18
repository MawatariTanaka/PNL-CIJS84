import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostRecap extends Component {
  render() {
    const { title, subtitle, author, date } = this.props;
    return (
      <>
        <div className="post-preview">
          <Link to="/post">
            <h2 className="post-title">{title}</h2>
            {subtitle && <h3 className="post-subtitle">{subtitle}</h3>}
          </Link>
          <p className="post-meta">
            Posted by <a href="#!">{author}</a> on {date}
          </p>
        </div>
        <hr className="my-4" />
      </>
    );
  }
}

export default PostRecap;
