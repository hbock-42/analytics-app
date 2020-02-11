import React from "react";
import { usePostFetch } from "./usePostFetch";
import { StyledPostComponent } from "./styled-post-component";

const PostComponent = ({ postId }) => {
  // todo: replace 1 by postId
  const [state, loading, error] = usePostFetch(1);
  if (error) return <div>an error happened</div>;
  if (loading) return <div>Loading ...</div>;
  return (
    <StyledPostComponent>
      <div className="container">
        <div className="header">
          <div className="image">
            <img
              src={require("../../assets/images/forum/facebook.png")}
              alt="mdr"
            />
          </div>
          <div className="title-right">
            <h3 className="title upper-first text-ellipsis">{state.title}</h3>
            <p className="text-ellipsis">Google LLC, Los Angeles, CA</p>
          </div>
        </div>
        <div className="content">
          <p className="limit-2lines upper-first">{state.content}</p>
        </div>
        <h4 className="salary text-ellipsis">$80,000 - $90,000 a year</h4>
      </div>
    </StyledPostComponent>
  );
};

export default PostComponent;