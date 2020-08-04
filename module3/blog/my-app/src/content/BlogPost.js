import React from "react";
import OverAllBlog from "./OverAllBlog";
function BlogPost(props) {
  return (
    <div className="post">
      <div className="hovers">
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </div>
      <p className="ital">
        posted by <span className="hovered">{props.author}</span> on{" "}
        {props.date}
        <hr></hr>
      </p>
    </div>
  );
}

export default BlogPost;