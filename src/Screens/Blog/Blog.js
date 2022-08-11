import React from "react";
import "./Blog.css";
function Blog() {
  return (
    <div className="blog_container">
      <img
        className="imgWaiting"
        src={require("./Waiting-bro.png")}
        alt="me coding illustration"
      ></img>
      <h1 className="SubTitleText"> Coming Soon!</h1>
    </div>
  );
}

export default Blog;
