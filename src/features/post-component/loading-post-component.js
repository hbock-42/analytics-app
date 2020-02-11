import React from "react";
import { StyledLoadingPostComponent } from "./styled-loading-post-component";

const LoadingPostComponent = () => (
  <StyledLoadingPostComponent>
    <div className="container">
      <div className="header">
        <div className="image"></div>
        <div className="title-right">
          <div className="title"></div>
          <div className="sub-title"></div>
        </div>
      </div>
      <div className="content"></div>
      <div className="salary"></div>
    </div>
  </StyledLoadingPostComponent>
);

export default LoadingPostComponent;
