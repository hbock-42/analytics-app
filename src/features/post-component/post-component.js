import React, { useRef } from "react";
import { usePostFetch } from "./usePostFetch";
import { StyledPostComponent } from "./styled-post-component";
import LoadingPostComponent from "./loading-post-component";
import Comments from "./comments";

const PostComponent = ({ postId }) => {
  const expandable = useRef();

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
      <div
        className="container"
        onMouseEnter={() => expandSection(expandable)}
        onMouseLeave={() => collapseSection(expandable)}
      >
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
        <div className="hidden-comments" ref={expandable}>
          <div className="comments">
            <Comments postId={postId} />
          </div>
        </div>
        <h4 className="salary text-ellipsis">
          ${state.salary} - ${state.salary + 10000} a year
        </h4>
      </div>
    </StyledPostComponent>
  );
};

export default PostComponent;

function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.current.scrollHeight;

  // temporarily disable all css transitions
  var elementTransition = element.current.style.transition;
  element.current.style.transition = "";

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.current.style.height = sectionHeight + "px";
    element.current.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.current.style.height = 0 + "px";
      element.current.style.marginTop = 0 + "px";
      element.current.style.marginBottom = 0 + "px";
    });
  });
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.current.scrollHeight;
  // have the element transition to the height of its inner content
  element.current.style.height = sectionHeight + "px";
  element.current.style.marginTop = 15 + "px";
  element.current.style.marginBottom = 15 + "px";
}
