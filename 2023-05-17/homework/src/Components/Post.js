import React, { Component } from "react";
import PostHeader from "./Post/PostHeader";
import PostContent from "./Post/PostContent";

export default class Post extends Component {
  render() {
    return (
      <>
        <PostHeader />
        <PostContent />
      </>
    );
  }
}
