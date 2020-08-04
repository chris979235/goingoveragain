import React from "react";
import BlogPost from "./content/BlogPost";
import OverAllBlog from "./content/OverAllBlog";
function BlogList() {
  const listed = OverAllBlog.map(function(newarr) {
    return (
      <BlogPost
        title={newarr.title}
        subTitle={newarr.subTitle}
        author={newarr.author}
        date={newarr.date}
      />
    );
  });
  return <div>{listed}</div>;
}
export default BlogList;
