import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log(posts);
  const articleArr = posts.map((post) => (
    <Article
      date={post.date}
      title={post.title}
      preview={post.preview}
      key={post.title}
      minutes={post.minutes}
    />
  ));

  return <main>{articleArr}</main>;
}

export default ArticleList;
