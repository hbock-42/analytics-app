import React from "react";
import { UseFetchComments } from "./useFetchComments";
import Comment from "./comment";
import { StyledComments } from "./styled-comments";

const Comments = ({ postId }) => {
  const [state, loading, error] = UseFetchComments(postId);
  if (error) return <div>an error happened</div>;
  if (loading) return <div> LOADINGIFGNIGNGING</div>;

  return (
    <StyledComments>
      <div className="comments-container">
        {state.comments.map((item, i) => (
          <Comment key={i} comment={item} />
        ))}
      </div>
    </StyledComments>
  );
};

export default Comments;
