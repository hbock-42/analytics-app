import React from "react";
import PostComponent from "../post-component/post-component";
import { StyledPosts } from "./styled-posts";
const Posts = () => {
  const ids = [];

  for (let i = 0; i < 4; i++) {
    ids.push(Math.floor(Math.random() * 99 + 1));
  }

  return (
    <StyledPosts>
      <div className="posts-container">
        {ids.map((item, i) => (
          <PostComponent key={i} postId={item} />
        ))}
      </div>
    </StyledPosts>
  );
};

export default Posts;
