import React from "react";
import { StyledComment } from "./styled-comment";

const Comment = ({ comment }) => {
  return (
    <StyledComment>
      <div className="comment-container">
        <div className="comment-header">
          <div className="from">{comment.from}</div>
          <div className="mail">{comment.mail}</div>
        </div>
        <div className="comment-content upper-first">{comment.content}</div>
      </div>
    </StyledComment>
  );
};

export default Comment;
