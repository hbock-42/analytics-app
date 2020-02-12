import React from "react";
import { usePostFetch } from "./usePostFetch";
import { StyledPostComponent } from "./styled-post-component";
import LoadingPostComponent from "./loading-post-component";

const PostComponent = ({ postId }) => {
  const [state, loading, error] = usePostFetch(postId);
  if (error) return <div>an error happened</div>;
  if (loading) return <LoadingPostComponent />;

  //   horrible
  const businessIcons = [
    "google",
    "facebook",
    "uber",
    "paypal",
    "twitter",
    "apple"
  ];
  const iconId = state.iconId % businessIcons.length;

  for (let i = 0; i < businessIcons.length; i++) {
    require("../../assets/images/forum/" + businessIcons[i] + ".png");
  }
  return (
    <StyledPostComponent>
      <div className="container">
        <div className="header">
          <div className="image">
            <img
              src={require("../../assets/images/forum/" +
                businessIcons[iconId] +
                ".png")}
              alt={businessIcons[iconId]}
            />
          </div>
          <div className="title-right">
            <h3 className="title upper-first text-ellipsis">{state.title}</h3>
            <p className="text-ellipsis upper-first">
              {businessIcons[iconId]}, Los Angeles, CA
            </p>
          </div>
        </div>
        <div className="content">
          <p className="limit-2lines upper-first">{state.content}</p>
        </div>
        <h4 className="salary text-ellipsis">
          ${state.salary} - ${state.salary + 10000} a year
        </h4>
      </div>
    </StyledPostComponent>
  );
};

export default PostComponent;
