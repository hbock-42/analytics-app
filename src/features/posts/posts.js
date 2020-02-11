import React from "react";
import PostComponent from "../post-component/post-component";
import { StyledPosts } from "./styled-posts";
const Posts = () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
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
